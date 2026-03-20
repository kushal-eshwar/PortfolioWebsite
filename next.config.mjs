/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for GitHub Pages - generates static HTML
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/PortfolioWebsite',
  assetPrefix: '/PortfolioWebsite/',
}

export default nextConfig
