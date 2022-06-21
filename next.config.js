/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_API_URL: 'https://us-central1-embat-puppy-fb.cloudfunctions.net/api',
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
