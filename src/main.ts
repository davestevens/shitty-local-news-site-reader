import App from "./App.svelte";
import cookie from "./services/parseCookie";
import { COOKIE_NAME } from "./consts";

if (cookie[COOKIE_NAME]) {
  new App({
    target: document.body,
    props: {}
  });
}

export default null;
