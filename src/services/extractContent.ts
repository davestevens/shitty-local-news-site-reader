import {
  HEADLINE_PROP,
  SUBTITLE_PROP,
  METADATA_PROP,
  ARTICLE_PROP,
  DISALLOWED_ARTICLE_ELEMENTS
} from "../consts";

let article: HTMLElement;

const getElement = (selector: string): HTMLElement => {
  const element = article.querySelector(selector);
  if (!element) {
    return document.createElement("div");
  }
  return element.cloneNode(true) as HTMLElement;
};

const getHeadline = (): HTMLElement => {
  return getElement(`[itemprop="${HEADLINE_PROP}"]`);
};
const getSubtitle = (): HTMLElement => {
  return getElement(`[itemprop="${SUBTITLE_PROP}"]`);
};
const getMetaData = (): HTMLElement => {
  return getElement(`[itemprop="${METADATA_PROP}"]`);
};

const getContent = (): HTMLElement => {
  const content = document.createElement("div");
  const elements = Array.from(
    article.querySelectorAll(`[itemprop="${ARTICLE_PROP}"] > *`)
  );
  elements.forEach((element) => {
    if (
      DISALLOWED_ARTICLE_ELEMENTS.indexOf(element.nodeName.toLowerCase()) === -1
    ) {
      content.appendChild(element.cloneNode(true));
    }
  });
  return content;
};

export default (): HTMLElement => {
  const container = document.createElement("div");
  article = document.getElementsByTagName("article")[0];
  if (!article) {
    throw new Error("Can't find article");
  }

  container.appendChild(getHeadline());
  container.appendChild(getSubtitle());
  container.appendChild(getMetaData());
  container.appendChild(getContent());

  return container;
};
