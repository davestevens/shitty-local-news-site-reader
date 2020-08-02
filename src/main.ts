import App from "./App.svelte";
import listUsersWithStories from "./services/listUsersWithStories";

listUsersWithStories().then((users) => {
  new App({
    target: document.body,
    props: { users }
  });
});

export default null;
