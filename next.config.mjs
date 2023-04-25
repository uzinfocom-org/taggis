/** @type {import('next').NextConfig} */
import socials from "./socials.json" assert { type: "json" }

const nextConfig = {
  swcMinify: true,
  async redirects() {
    return socials.data.map((social) => ({
      source: `/${social.title.toLowerCase()}`,
      destination: social.url,
      permanent: true,
    }))
  },
  output: 'standalone',
}

export default nextConfig
