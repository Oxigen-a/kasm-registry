/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'CSSE Technologies',
    description: 'The Concordia University CSSE custom store for Kasm-supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://Oxigen-a.github.io/kasm-registry/',
    contactUrl: 'https://github.com/Oxigen-a/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
