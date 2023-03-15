import React, { useEffect, useRef, useMemo, useState, memo } from 'react'
import cn from 'classnames'
import { useRouter } from 'next/router'
import useDelayedRender from 'use-delayed-render'
import { DialogContent, DialogOverlay } from '@reach/dialog'

import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
  useCommand,
  usePages,
  CommandGroup,
} from 'cmdk'

import {
  Command as CommandIcon,
  Sparkles,
  Document,
  ArrowRight,
} from '@components/icons'
import styles from './command.module.css'
import headerStyles from '@components/header/header.module.css'
import { useTheme } from 'next-themes'
import tinykeys from '@lib/tinykeys'
import Bookmark from '@components/icons/bookmark'

const CommandData = React.createContext({})
const useCommandData = () => React.useContext(CommandData)

const CommandMenu = memo(() => {
  const listRef = useRef()
  const commandRef = useRef()
  const router = useRouter()
  const commandProps = useCommand({
    label: 'Site Navigation',
  })
  const [pages, setPages] = usePages(commandProps, ThemeItems)
  const [open, setOpen] = useState(false)
  const { search, list } = commandProps

  const { mounted, rendered } = useDelayedRender(open, {
    enterDelay: -1,
    exitDelay: 200,
  })

  // Can't do this inside useCommand because it relies on useDelayedRender
  useEffect(() => {
    if (!mounted) {
      setPages([DefaultItems])
    }
  }, [mounted, setPages])

  const Items = pages[pages.length - 1]

  const keymap = useMemo(() => {
    return {
      t: () => {
        setPages([ThemeItems])
        setOpen(true)
      },
      // Navigation
      'g h': () => router.push('/'),
      'g c': () => router.push('/contact'),
      // Collections
      'g p': () => router.push('/projects'),
    }
  }, [router, setPages])

  // Register the keybinds globally
  useEffect(() => {
    const unsubs = [
      tinykeys(window, keymap, { ignoreFocus: true }),
      tinykeys(window, { '$mod+k': () => setOpen((o) => !o) }),
      tinykeys(window, { 'Alt+k': () => setOpen((o) => !o) }),
    ]
    return () => {
      unsubs.forEach((unsub) => unsub())
    }
  }, [keymap])

  useEffect(() => {
    // When items change, bounce the UI
    if (commandRef.current) {
      // Bounce the UI slightly
      commandRef.current.style.transform = 'scale(0.99)'
      commandRef.current.style.transition = 'transform 0.1s ease'
      // Not exactly safe, but should be OK
      setTimeout(() => {
        commandRef.current.style.transform = ''
      }, 100)
    }
  }, [pages])

  const heightRef = useRef()

  useEffect(() => {
    if (!listRef.current || !heightRef.current) return

    const height = Math.min(listRef.current.offsetHeight + 1, 300)
    heightRef.current.style.height = height + 'px'
  })

  return (
    <>
      <button
        className={headerStyles.command}
        title="⌘K"
        onClick={() => setOpen(true)}
      >
        <CommandIcon />
      </button>

      <DialogOverlay
        isOpen={mounted}
        className={cn(styles.screen, {
          [styles.show]: rendered,
        })}
        onDismiss={() => setOpen(false)}
      >
        <DialogContent
          className={styles['dialog-content']}
          aria-label="Dialog Content"
        >
          <Command
            {...commandProps}
            ref={commandRef}
            className={cn(styles.command, {
              [styles.show]: rendered,
            })}
          >
            <div className={styles.top}>
              <CommandInput
                placeholder={
                  Items === ThemeItems
                    ? 'Theme...'
                    : 'Enter command name...'
                }
              />
            </div>

            <div
              ref={heightRef}
              className={cn(styles.container, {
                [styles.empty]: list.current.length === 0,
              })}
            >
              <CommandList ref={listRef}>
                <CommandData.Provider
                  value={{ pages, search, open, setPages, keymap, setOpen }}
                >
                  <Items />
                </CommandData.Provider>
              </CommandList>
            </div>
          </Command>
        </DialogContent>
      </DialogOverlay>
    </>
  )
})

CommandMenu.displayName = 'CommandMenu'
export default CommandMenu

const themeTranslator = (theme) => {
  console.log(theme)
  switch (theme) {
    case 'light':
      return 'light'
    case 'dark':
      return 'dark'
    case 'system':
      return 'system'
    default:
      return theme
  }
}

const ThemeItems = () => {
  const { theme: activeTheme, themes, setTheme } = useTheme()
  const { setOpen } = useCommandData()

  return themes.map((theme) => {
    if (theme === activeTheme) return null
    return (
      <Item
        value={theme}
        key={`theme-${theme}`}
        callback={() => {
          setTheme(theme)
          setOpen(false)
        }}
      >
        {themeTranslator(theme)}
      </Item>
    )
  })
}

const Label = ({ title, values, search }) => {
  return (
    <div className={styles.label} aria-hidden>
      {title}
    </div>
  )
}

const Group = ({ children, title }) => {
  return (
    <CommandGroup heading={<Label title={title} />} className={styles.group}>
      {children}
    </CommandGroup>
  )
}

const DefaultItems = () => {
  const router = useRouter()
  const { setPages, pages } = useCommandData()

  return (
    <>
      <Group title="Look & Feel">
        <Item
          value="Theme"
          icon={<Sparkles />}
          keybind="t"
          closeOnCallback={false}
        />
      </Group>

      <Group title="Collection">
        <Item value="Projects" icon={<Document />} keybind="g p" />
      </Group>

      <Group title="Pages">
        <Item value="Main" icon={<ArrowRight />} keybind="g h" />
        <Item value="Contact" icon={<Bookmark />} keybind="g c" />
      </Group>
    </>
  )
}

const Item = ({
  icon,
  children,
  callback,
  closeOnCallback = true,
  keybind,
  ...props
}) => {
  const { keymap, setOpen } = useCommandData()

  const cb = () => {
    if (callback) {
      callback()
    } else {
      keymap[keybind]?.()
    }

    if (closeOnCallback) {
      setOpen(false)
    }
  }

  return (
    <CommandItem {...props} callback={cb}>
      <div>
        <div className={styles.icon}>{icon}</div>
        {children || props.value}
      </div>

      {keybind && (
        <span className={styles.keybind}>
          {keybind.includes(' ') ? (
            keybind.split(' ').map((key, i) => {
              return <kbd key={`keybind-${key}-${i}`}>{key}</kbd>
            })
          ) : (
            <kbd>{keybind}</kbd>
          )}
        </span>
      )}
    </CommandItem>
  )
}
