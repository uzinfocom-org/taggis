/** @type {import('next').NextConfig} */
import * as social from "./social.config.mjs"

const nextConfig = {
  swcMinify: true,
  async redirects() {
    return social.links
  },
  output: 'standalone',
}

export default nextConfig
