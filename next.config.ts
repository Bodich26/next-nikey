import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  images: {
    domains: ["ik.imagekit.io"],
  },
};

export default withFlowbiteReact(nextConfig);
