/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Min-Kang-winter-portifolio';
const repoBasePath = `/${repoName}`;

const nextConfig = {
  output: 'export', // 이 줄을 추가하세요!
  basePath: process.env.NODE_ENV === 'production' ? repoBasePath : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? repoBasePath : '',
  images: {
    unoptimized: true, // GitHub Pages에서 이미지가 잘 나오게 하기 위해 추가
  },
};

export default nextConfig;
