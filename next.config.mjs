import mdx from "@next/mdx";
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default withMDX(nextConfig);
