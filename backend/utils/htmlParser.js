import { htmlToText } from "html-to-text";

export function convertHtmlToText(html) {
  return htmlToText(html, {
    wordwrap: 130,
    selectors: [{ selector: "a", options: { ignoreHref: true } }],
  });
}
