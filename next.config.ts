import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  assetPrefix: isProd ? '/aeroklub-nova-raca-website/' : '',
  basePath: isProd ? '/aeroklub-nova-raca-website' : '',
};

export default nextConfig;
