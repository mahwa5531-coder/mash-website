/** @type {import('next').NextConfig} */
const isGithubActions =
  process.env.GITHUB_ACTIONS === 'true' && process.env.NEXT_PUBLIC_CUSTOM_DOMAIN !== 'true';
const basePath = isGithubActions ? '/mash-website' : '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
