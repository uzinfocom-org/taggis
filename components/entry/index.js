import cn from 'classnames'
import { useInView } from 'react-intersection-observer'
import 'intersection-observer'
import Link from "next/link";

import styles from './entry.module.css'

const Entry = ({ title, description, image, href, position, internal }) => {
  const [ref, inView] = useInView({ triggerOnce: true })

  return (
    <Link
      href={href}
      {...(internal ? {} : {
        target: '_blank',
        rel: 'noopener noreferrer',
      })}
      ref={ref}
      className={cn(styles.link, { [styles.active]: !image })}
      title={`${title} - ${description}`}
    >
      <section
        style={{
          backgroundImage: image
            ? !inView
              ? 'none'
              : `url('${image.startsWith('/') ? '/' + encodeURIComponent(image.slice(1)) : image}')`
            : 'none',
          backgroundPosition: position ? position : 'center',
        }}
      >
        <div>
          <p className={cn(styles.title, 'clamp')}>{title}</p>
          <p className={cn(styles.description, 'clamp')}>{description}</p>
        </div>
      </section>
    </Link>
  )
}

export default Entry
