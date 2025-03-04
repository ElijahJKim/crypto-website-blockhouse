/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: "/docs/:path*",
          destination: "http://localhost:3001/docs/:path*", 
        },
      ];
    },
  };
  
  export default nextConfig;
  