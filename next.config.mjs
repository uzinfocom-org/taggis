/** @type {import('next').NextConfig} */
import socials from './socials.json' with { type: 'json' }

const nextConfig = {
  output: "standalone",
  swcMinify: true,
  async redirects() {
    return socials.data.map((social) => ({
      source: `/${social.title.toLowerCase()}`,
      destination: social.url,
      permanent: true,
    }))
  },
}

export default nextConfig
