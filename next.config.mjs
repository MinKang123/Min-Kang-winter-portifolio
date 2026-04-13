/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 이 줄을 추가하세요!
  images: {
    unoptimized: true, // GitHub Pages에서 이미지가 잘 나오게 하기 위해 추가
  },
};

export default nextConfig;
