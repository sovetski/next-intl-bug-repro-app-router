import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "en",
  pathnames: {
    // If all locales use the same pathname, a single
    // external path can be used for all locales
    "/": "/",
    "/about": {
      en: "/about",
      fr: "/a-propos",
    },
  },
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
