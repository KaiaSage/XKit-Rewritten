
import { timelineObject } from '../util/react_props.js';
import { keyToCss } from '../util/css_map.js';
import { onNewPosts } from '../util/mutations.js';
import { dom } from '../util/dom.js';


const fixPost = async function (postElement) {
  const tlObj = await timelineObject(postElement);
  const reblogAttribution = postElement.querySelector(keyToCss("reblogAttribution"));
  const rebloggedFromName = reblogAttribution.querySelector(keyToCss("rebloggedFromName"));
  const blogLink = rebloggedFromName.querySelector(keyToCss("blogLink"));
  console.log(tlObj);

  if (blogLink) {
    let prev = dom("a", {href: `/${tlObj.rebloggedFromName}/${tlObj.rebloggedFromId}`}, null, [" (prev) "]);
    rebloggedFromName.append(prev);
  }
}

const printDbg = async function (postElements) {
  Promise.all(postElements.map(fixPost));
};

export const main = async function () {
  onNewPosts.addListener(printDbg);
};

export const clean = async function () {
  onNewPosts.removeListener(printDbg);
};

export const stylesheet = false;
