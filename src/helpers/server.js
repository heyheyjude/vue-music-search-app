import { SONG_API_REQUEST_HEADER, SONG_SERVER } from "../settings";

async function getFromGeniusServer(request) {
  const rawResponse = await fetch(`${SONG_SERVER}/${request}`, {
    method: "GET",
    headers: SONG_API_REQUEST_HEADER,
  });
  if (rawResponse.ok) {
    const { response } = await rawResponse.json();
    return response;
  } else {
    console.log(rawResponse);
    return [];
  }
}

export async function getSearchRequest(request) {
  return await getFromGeniusServer(`search?q=${request}`);
}

export async function getArtistSongs(artistId) {
  return await getFromGeniusServer(`/artists/${artistId}/songs`);
}
