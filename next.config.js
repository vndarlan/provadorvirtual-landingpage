/** @type {import('next').NextConfig} */
const nextConfig = {
  // Railway runs the Node server, no static export needed
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
