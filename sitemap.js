
export const revalidate = 3600 // one hour
import { connectToDatabase } from "@/utils/connectMongo";

export default async function sitemap() {
  
  const client = await connectToDatabase();
  const db = client.db("database");
  let data = await db.collection("lens").find({}).toArray();

  const lens = data.map((item) => ({
    url: `${process.env.NEXT_WEBSITE_URL}/lens/${item.slug}`,
    lastModified: item.updated_at || item.created_at,
    changefreq: "monthly",
    priority: 0.6,
  })); 

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