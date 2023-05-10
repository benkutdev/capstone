export default async function handler(request, response) {
  const { id } = request.query;

  const headers = {
    Authorization: `Discogs token=${process.env.DISCOGS_TOKEN}`,
  };

  try {
    const fetchResponse = await fetch(
      `https://api.discogs.com/releases/${id}`,
      {
        headers,
      }
    );
    const data = await fetchResponse.json();
    response.status(200).json(data);
  } catch (error) {
    response
      .status(error.response.status)
      .json({ message: error.response.statusText });
  }
}
