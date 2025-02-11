// @ts-check

import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const withNextIntl = createNextIntlPlugin();

export default (phase: string) => {
  const nextConfig: NextConfigonfig = {
    output: "export",
    pageExtensions: (() => {
      const baseExtensions = ["ts", "tsx", "js", "jsx"];
      const isDevServer = phase === PHASE_DEVELOPMENT_SERVER;

      if (isDevServer) {
        return [
          ...baseExtensions.map((ext) => `dev.${ext}`),
          ...baseExtensions,
        ];
      }

      return baseExtensions.filter((ext) => !ext.startsWith("dev."));
    })(),
  };
  return withNextIntl(nextConfig);
};

// export default nextConfig;
