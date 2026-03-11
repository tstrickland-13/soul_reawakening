const PLAYLIST_ID = "PLnuFcIyG2-BY2Hir1qtpzBLr0q-f7-_ja";
const MAX_RESULTS = 50;

export default async (req) => {
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "YouTube API key not configured" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
    url.searchParams.set("part", "snippet");
    url.searchParams.set("playlistId", PLAYLIST_ID);
    url.searchParams.set("maxResults", MAX_RESULTS);
    url.searchParams.set("key", apiKey);

    const response = await fetch(url.toString());
    const data = await response.json();

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: data.error?.message || "YouTube API error" }),
        { status: response.status, headers: { "Content-Type": "application/json" } }
      );
    }

    const videos = data.items
      .filter((item) => item.snippet.resourceId.kind === "youtube#video")
      .map((item) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail:
          item.snippet.thumbnails.high?.url ||
          item.snippet.thumbnails.medium?.url ||
          item.snippet.thumbnails.default?.url,
        publishedAt: item.snippet.publishedAt,
      }));

    return new Response(JSON.stringify({ videos }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch videos" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
