/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "img1a.coupangcdn.com",
      "thumbnail6.coupangcdn.com",
      "thumbnail7.coupangcdn.com",
      "thumbnail8.coupangcdn.com",
      "thumbnail9.coupangcdn.com",
      "thumbnail10.coupangcdn.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/cart",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
