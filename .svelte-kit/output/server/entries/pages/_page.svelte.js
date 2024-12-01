import { S as pop, X as stringify, Q as push } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
import { e as escape_html } from "../../chunks/escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function _page($$payload, $$props) {
  push();
  let panOffsetX = 0;
  let panOffsetY = 0;
  let searchTerm = "";
  let searchResults = [];
  let selectedNodes = [];
  let highlightKeystones = false;
  let highlightNotables = false;
  let highlightSmalls = false;
  let hideUnidentified = false;
  let hideUnselected = false;
  let hideSmall = false;
  function handleSearch(text) {
    {
      searchResults = [];
      return;
    }
  }
  handleSearch();
  $$payload.out += `<div class="top-bar svelte-5o8820"><div class="github-text svelte-5o8820"><p class="svelte-5o8820">本项目来自GitHub开源<br class="svelte-5o8820">汉化文本来源于chat-gpt4.0（施工者：超昂蓝莓）<br class="svelte-5o8820">如果愿意提供更好的汉化文本或建议可以随时联系我</p></div> <div class="github-link svelte-5o8820"><a href="https://github.com/marcoaaguiar/poe2-tree" target="_blank" rel="noopener noreferrer" class="svelte-5o8820"><svg height="32" viewBox="0 0 16 16" width="32" aria-hidden="true" class="svelte-5o8820"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38
					  0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
					  0-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
					  0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.65 7.65 0 012 0c1.53-1.04
					  2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15
					  0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48
					  0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0016 8c0-4.42-3.58-8-8-8z" class="svelte-5o8820"></path></svg></a></div> <div class="wechat-link svelte-5o8820"><svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 50 50" width="32" aria-hidden="true" class="svelte-5o8820"><path d="M 19 6 C 9.625 6 2 12.503906 2 20.5 C 2 24.769531 4.058594 28.609375 7.816406 31.390625 L 5.179688 39.304688 L 13.425781 34.199219 C 15.714844 34.917969 18.507813 35.171875 21.203125 34.875 C 23.390625 39.109375 28.332031 42 34 42 C 35.722656 42 37.316406 41.675781 38.796875 41.234375 L 45.644531 45.066406 L 43.734375 38.515625 C 46.3125 36.375 48 33.394531 48 30 C 48 23.789063 42.597656 18.835938 35.75 18.105469 C 34.40625 11.152344 27.367188 6 19 6 Z M 13 14 C 14.101563 14 15 14.898438 15 16 C 15 17.101563 14.101563 18 13 18 C 11.898438 18 11 17.101563 11 16 C 11 14.898438 11.898438 14 13 14 Z M 25 14 C 26.101563 14 27 14.898438 27 16 C 27 17.101563 26.101563 18 25 18 C 23.898438 18 23 17.101563 23 16 C 23 14.898438 23.898438 14 25 14 Z M 34 20 C 40.746094 20 46 24.535156 46 30 C 46 32.957031 44.492188 35.550781 42.003906 37.394531 L 41.445313 37.8125 L 42.355469 40.933594 L 39.105469 39.109375 L 38.683594 39.25 C 37.285156 39.71875 35.6875 40 34 40 C 27.253906 40 22 35.464844 22 30 C 22 24.535156 27.253906 20 34 20 Z M 29.5 26 C 28.699219 26 28 26.699219 28 27.5 C 28 28.300781 28.699219 29 29.5 29 C 30.300781 29 31 28.300781 31 27.5 C 31 26.699219 30.300781 26 29.5 26 Z M 38.5 26 C 37.699219 26 37 26.699219 37 27.5 C 37 28.300781 37.699219 29 38.5 29 C 39.300781 29 40 28.300781 40 27.5 C 40 26.699219 39.300781 26 38.5 26 Z" class="svelte-5o8820"></path></svg> <img class="wechat-hover-image svelte-5o8820" src="wechat121.png" alt="WeChat QR Code"></div> <h1 class="svelte-5o8820">流放之路2 技能树预览</h1> <div class="filters svelte-5o8820"><p class="svelte-5o8820"><b class="svelte-5o8820">高亮筛选:</b></p> <label class="svelte-5o8820"><input type="checkbox"${attr("checked", highlightKeystones, true)} class="svelte-5o8820">基石天赋</label> <label class="svelte-5o8820"><input type="checkbox"${attr("checked", highlightNotables, true)} class="svelte-5o8820">大天赋</label> <label class="svelte-5o8820"><input type="checkbox"${attr("checked", highlightSmalls, true)} class="svelte-5o8820">小天赋</label></div> <div class="filters svelte-5o8820"><p class="svelte-5o8820"><b class="svelte-5o8820">勾选隐藏:</b></p> <label class="svelte-5o8820"><input type="checkbox"${attr("checked", hideUnidentified, true)} class="svelte-5o8820">未收录</label> <label class="svelte-5o8820"><input type="checkbox"${attr("checked", hideUnselected, true)} class="svelte-5o8820">未选中</label> <label class="svelte-5o8820"><input type="checkbox"${attr("checked", hideSmall, true)} class="svelte-5o8820">小天赋</label></div></div> <div class="search-bar svelte-5o8820"><input type="text" placeholder="搜索..."${attr("value", searchTerm)} class="svelte-5o8820"> <span style="cursor: pointer; margin-right: 10px;" class="svelte-5o8820">搜索结果: ${escape_html(searchResults.length)}</span> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <span style="cursor: pointer;" class="svelte-5o8820">已选节点: ${escape_html(selectedNodes.length)}/122</span> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>  <div class="image-container svelte-5o8820" role="application" tabindex="-1"><div class="image-wrapper svelte-5o8820"${attr("style", ` width: ${stringify("auto")}; height: ${stringify("auto")}; transform: translate(${stringify(panOffsetX)}px, ${stringify(panOffsetY)}px); user-select: none; cursor: ${stringify("grab")}; `)}><img${attr("src", `${stringify(base)}/skill-tree.png`)} alt="Interactive" draggable="false"${attr("style", ` pointer-events: none; max-width: none; width: ${stringify("auto")}; height: ${stringify("auto")}; `)} class="svelte-5o8820" onload="this.__e=event"> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _page as default
};
