import App from "./App.svelte";
import listUsersWithStories from "./services/listUsersWithStories";

listUsersWithStories().then((users) => {
  // Replaces Stories view on instagram home page
  const target = document
    .querySelector("main section ul")
    .closest("[role=presentation]");
  if (!target) {
    return;
  }

  target.innerHTML = "";

  new App({
    target,
    props: { users }
  });
});

export default null;
