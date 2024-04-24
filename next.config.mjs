/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a.storyblok.com",
        port: "",
      },
    ],
  },
  redirects: () => {
    return [
      {
        source: "/ua",
        destination: "/uk",
        permanent: true,
      },
      {
        source: "/en/ua",
        destination: "/en",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
