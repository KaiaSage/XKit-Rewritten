import { keyToCss } from '../../util/css_map.js';
import { buildStyle } from '../../util/interface.js';

const styleElement = buildStyle(`${keyToCss('stickyContainer')} { height: auto !important; }`);

export const main = async () => document.documentElement.append(styleElement);
export const clean = async () => styleElement.remove();
