/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/JkXFQpScFj',
        permanent: true,
      },
      {
        source: '/telegram',
        destination: 'https://t.me/uzinfocom_oss',
        permanent: true,
      },
    ]
  },
  output: 'standalone',
}

export default nextConfig
