const QUERY_HASH = "90709b530ea0969f002c86a89b4f2b8d";

interface IResource {
  src: string;
}

export interface IStory {
  display_resources: IResource[];
  display_url: string;
  is_video: boolean;
  video_resources: IResource[];
}

export default (id: string): Promise<IStory[]> => {
  const variables = encodeURIComponent(
    JSON.stringify({
      reel_ids: [id],
      tag_names: [],
      location_ids: [],
      highlight_reel_ids: [],
      precomposed_overlay: false,
      show_story_viewer_list: true,
      story_viewer_fetch_count: 50,
      story_viewer_cursor: "",
      stories_video_dash_manifest: false
    })
  );
  const url = `/graphql/query/?query_hash=${QUERY_HASH}&variables=${variables}`;
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something broke");
      }
    })
    .then((json) => {
      return json?.data?.reels_media[0]?.items;
    });
};
