// Pocket Wikipedia Foundation - Tools Aggregator
// Combines all tool subcategories

import { pickaxes } from './pickaxes.js';
import { axes } from './axes.js';
import { shovels } from './shovels.js';
import { hoes } from './hoes.js';
import { utilityTools } from './utility.js';

export const tools = {
    ...pickaxes,
    ...axes,
    ...shovels,
    ...hoes,
    ...utilityTools
};
