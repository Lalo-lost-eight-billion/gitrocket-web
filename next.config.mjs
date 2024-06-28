/** @type {import('next').NextConfig} */
import withImages from "next-images";

const nextConfig = withImages({
  compiler: {
    styledComponents: true,
  },
});

export default nextConfig;
