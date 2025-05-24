/** @type {import('next').NextConfig} */
import socials from './socials.json' with { type: 'json' }

const BASE_PATH = process.env.BASE_PATH;

const nextConfig = {
  output: "standalone",
  swcMinify: true,
  basePath: BASE_PATH || "",
  async redirects() {
    return socials.data.map((social) => ({
      source: `/${social.title.toLowerCase()}`,
      destination: social.url,
      permanent: true,
    }))
  },
}

export default nextConfig
