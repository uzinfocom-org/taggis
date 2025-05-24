/** @type {import('next').NextConfig} */
import fs from 'node:fs'

const BASE_PATH = process.env.BASE_PATH
const SOCIALS = JSON.parse(fs.readFileSync('./socials.json', 'utf-8'))

const nextConfig = {
  output: 'standalone',
  swcMinify: true,
  basePath: BASE_PATH || '',
  async redirects() {
    return SOCIALS.data.map((social) => ({
      source: `/${social.title.toLowerCase()}`,
      destination: social.url,
      permanent: true,
    }))
  },
}

export default nextConfig
