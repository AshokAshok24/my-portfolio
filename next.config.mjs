/** @type {import('next').NextConfig} */


const nextConfig = {

  reactStrictMode: false,

  env:{

    env:"test"
  },

  serverRuntimeConfig: {
    secret: process.env.SECRET
  },
  publicRuntimeConfig: {
    apiUrl: process.env.NODE_ENV === 'development'
      ? 'http://43.204.239.177:3005' // development api
      : 'http://43.204.239.177:3005', // production api 
  }
};

export default nextConfig;
