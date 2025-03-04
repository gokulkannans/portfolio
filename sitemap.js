
export const revalidate = 3600 // one hour
export default async function sitemap() {


  return [
    {
      url: "https://gokulkannan-s.netlify.app",
      lastModified: new Date(),
      changefreq: "daily",
      priority: 1,
    },
    {
      url: "https://gokulkannan-s.netlify.app/#top",
      lastModified: new Date(),
      changefreq: "monthly",
    },
    {
      url: "https://gokulkannan-s.netlify.app/#about",
      lastModified: new Date(),
      changefreq: "daily",
      priority: 1,
    },
    {
      url: "https://gokulkannan-s.netlify.app/#services",
      lastModified: new Date(),
      changefreq: "monthly",
    },
    {
      url: "https://gokulkannan-s.netlify.app/#work",
      lastModified: new Date(),
      changefreq: "daily",
      priority: 1,
    },
    {
      url: "https://gokulkannan-s.netlify.app/#contact",
      lastModified: new Date(),
      changefreq: "monthly",
    },
  ];
}