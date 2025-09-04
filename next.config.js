const { NEXT_PUBLIC_BASE_PATH, NEXT_PUBLIC_ASSET_URL } = process.env

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: NEXT_PUBLIC_BASE_PATH,
  assetPrefix: NEXT_PUBLIC_ASSET_URL,
}

module.exports = nextConfig
