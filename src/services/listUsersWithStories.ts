const QUERY_HASH = "7223fb3539e10cad7900c019401669e7";

export interface IUser {
  id: string;
  profile_pic_url: string;
  username: string;
}

export default (): Promise<IUser[]> => {
  const variables = encodeURIComponent(
    JSON.stringify({
      only_stories: true
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
      return json?.data?.user?.feed_reels_tray?.edge_reels_tray_to_reel?.edges.map(
        (edge) => edge.node.user
      );
    });
};
