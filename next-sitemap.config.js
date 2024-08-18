// Here's an example next-sitemap.config.js configuration with all options taken from https://www.npmjs.com/package/next-sitemap

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://landrieux.design",
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  //   exclude: ["/protected-page", "/awesome/secret-page"],

  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  //   additionalPaths: async (config) => [
  //     await config.transform(config, "/additional-page"),
  //   ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "test-bot",
        allow: ["/work", "/about", "/ballerina"],
      },
      //   {
      //     userAgent: "black-listed-bot",
      //     disallow: ["/sub-path-1", "/path-2"],
      //   },
    ],
    additionalSitemaps: [
      "https://landrieux.design/my-custom-sitemap-1.xml",
      "https://landrieux.design/my-custom-sitemap-2.xml",
      "https://landrieux.design/my-custom-sitemap-3.xml",
    ],
  },
};
