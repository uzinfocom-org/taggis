import NextHead from 'next/head'
import { useTheme } from 'next-themes'

const defaultOgImage = 'https://oss.uzinfocom.uz/og.png'

const Head = ({
  title = 'Uzinfocom Links',
  description = 'Social Networks & Links of Uzinfocom',
  image = defaultOgImage,
  children,
}) => {
  const { systemTheme } = useTheme()

  return (
    <NextHead>
      {/* Preload font */}
      <link
        rel="preload"
        href="https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* Title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* Image */}
      <meta name="twitter:image" content={image} />
      <meta name="og:image" content={image} />

      {/* URL */}
      <meta name="og:url" content="https://link.uzinfocom.uz" />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@uzinfocom" />
      <meta
        name="apple-mobile-web-app-title"
        content="Uzinfocom Social Pages"
      />
      <meta name="author" content="Uzinfocom" />

      {/* Favicons */}
      <link rel="manifest" href="/favicons/manifest.json" />
      <meta name="theme-color" content="#000000" />
      <link rel="mask-icon" href="/favicons/pinned.svg" color="#000000" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />

      {/* Dynamic favicon */}
      {!systemTheme || systemTheme === 'dark' ? (
        <>
          <link
            rel="alternate icon"
            type="image/png"
            href="/favicons/dark.png"
            key="dynamic-favicon-alternate"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/favicons/dark.svg"
            key="dynamic-favicon"
          />
        </>
      ) : (
        <>
          <link
            rel="alternate icon"
            type="image/png"
            href="/favicons/light.png"
            key="dynamic-favicon-alternate"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/favicons/light.svg"
            key="dynamic-favicon"
          />
        </>
      )}
      {children}
    </NextHead>
  )
}

export default Head
