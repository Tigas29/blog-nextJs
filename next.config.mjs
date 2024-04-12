// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     serverActions: true,
//   }
// };


// export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['prod-files-secure.s3.us-west-2.amazonaws.com'],
  },
};


export default nextConfig;
