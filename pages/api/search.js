import axios from "axios";

const search = async (req, res) => {
  const query = req.query.q;
  const API_KEY = process.env.NEXT_PUBLIC_DISCOGS_API_KEY;
  const API_SECRET = process.env.NEXT_PUBLIC_DISCOGS_API_SECRET;
  const API_URL = `https://api.discogs.com/database/search?q=${query}&type=artist,release&key=${API_KEY}&secret=${API_SECRET}`;

  try {
    const response = await axios.get(API_URL, {
      headers: {
        "User-Agent":
          "MyVinylCollectionApp/1.0 +http://myvinylcollectionapp.example.com",
      },
    });

    if (response.status === 200) {
      console.log(response.data);
      res.status(200).json(response.data);
    } else {
      console.error("Error fetching search results:", response);
      res
        .status(response.status)
        .json({ error: "Error fetching search results" });
    }
  } catch (error) {
    console.error("Error fetching search results:", error);
    console.error("Error response data:", error.response.data);
    res.status(500).json({ error: error.response.data });
  }
};

export default search;
