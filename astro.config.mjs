// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://widal001.github.io",
  // Base needs trailing slash to make relative links work when hosting locally
  base: "starlight-custom-domain/",
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/widal001/starlight-custom-domain",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
