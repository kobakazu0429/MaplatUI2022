import type { Meta, Story } from "@storybook/html";
import style from "../../maplat.scss";

export default {
  title: "Component/Search",
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

export const BeforeSearch: Story = () => {
  const div = document.createElement("div");
  div.classList.add(style["search"]);
  div.innerHTML = `
    <div class="${style["search-header"]}">
      <div class="${style["search-header-title"]}">
      <i class="${style["i-search-24"]}"></i>
        <input type="search" placeholder="こちらに入力してください。" />
      </div>
      <div class="${style["search-header-close"]}">
        <i class="${style["i-close-24"]}"></i>
      </div>
    </div>

    <div class="${style["search-main"]}">こちらに検索結果が表示されます。</div>
  `;
  return div;
};
export const BeforeSearchMobile: Story = (...params) => {
  return BeforeSearch(...params);
};
BeforeSearchMobile.parameters = {
  viewport: {
    defaultViewport: "iphone12mini",
  },
};

export const SearchResult: Story = () => {
  const searchResult = `
    <button class="${style["search-result"]}">
      <div class="${style["search-result-body"]}">
        <div class="${style["search-result-body-title"]}">興福寺</div>
        <div class="${style["search-result-body-description"]}">
          興福寺（こうふくじ）は、奈良県奈良市登大路町（のぼりおおじちょう）にある法相宗の大本山の寺院。山号はなし。本尊は中金堂の釈迦如来。南都七大寺の一つ。藤原氏の祖・藤原鎌足とその子息・藤原不比等ゆかりの寺院で藤原氏の氏寺であり、古代から中世にかけて強大な勢力を誇った。「古都奈良の文化財」の一部として世界遺産に登録されている。
        </div>
      </div>
      <div class="${style["search-result-img"]}">
        <img src="https://placehold.jp/200x200.png" />
      </div>
    </button>
  `;

  const div = document.createElement("div");
  div.classList.add(style["search"]);
  div.innerHTML = `
    <div class="${style["search-header"]}">
      <div class="${style["search-header-title"]}">
      <i class="${style["i-search-24"]}"></i>
        <input type="search" placeholder="こちらに入力してください。" />
      </div>
      <div class="${style["search-header-close"]}">
        <i class="${style["i-close-24"]}"></i>
      </div>
    </div>

    <div class="${style["search-main"]}">
     ${searchResult}
     ${searchResult}
     ${searchResult}
     ${searchResult}
     ${searchResult}
    </div>
  `;
  return div;
};
SearchResult.argTypes = {
  search: { control: "text" },
};

export const SearchMobileResult: Story = (...params) => {
  return SearchResult(...params);
};
SearchMobileResult.parameters = {
  viewport: {
    defaultViewport: "iphone12mini",
  },
};
