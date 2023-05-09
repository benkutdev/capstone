export default async function handler(req, res) {
  const query = req.query.query;
  const API_KEY = process.env.NEXT_PUBLIC_DISCOGS_API_KEY;
  const API_SECRET = process.env.NEXT_PUBLIC_DISCOGS_API_SECRET;
  const API_URL = `https://api.discogs.com/database/search?q=${query}&type=release&key=${API_KEY}&secret=${API_SECRET}`;
  const headers = {
    "User-Agent":
      "MyVinylCollectionApp/1.0 +http://myvinylcollectionapp.example.com",
  };

  try {
    const response = await fetch(API_URL, { headers });
    const data = await response.json();

    if (response.ok) {
      const searchResults = data.results;
      res.status(200).json({ results: searchResults });
    } else {
      res.status(response.status).json({ error: data.message });
    }
  } catch (error) {
    console.error("Error fetching search results:", error);
    res.status(500).json({ error: error.message });
  }
}
