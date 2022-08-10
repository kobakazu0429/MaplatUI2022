import { Meta, Story } from "@storybook/html";
import style from "../../maplat.scss";
import { useScript } from "../../js/useScript";
import { drawer } from "./index";

export default {
  title: "Component/Drawer",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const BottomDrawer: Story = () => {
  const div = document.createElement("div");
  div.classList.add(style["drawer"]);

  div.innerHTML = `
    <div class="${style["drawer-bar"]}">
      <i></i>
    </div>
    <div class="${style["drawer-header"]}">
      <div class="${style["drawer-header-title"]}">
        和州奈良之図 (1844年)
      </div>
      <div class="${style["drawer-header-icons"]}">
        <i class="${style["i-share-24"]}"></i>
        <i class="${style["i-download-24"]}"></i>
        <i class="${style["i-info-24"]}"></i>
      </div>
    </div>
    <dl class="${style["drawer-contents"]}">
      <div class="${style["drawer-content"]}">
        <dt>製作者</dt>
        <dd>絵図屋庄八</dd>
      </div>
      <div class="${style["drawer-content"]}">
        <dt>作成時期</dt>
        <dd>1844年</dd>
      </div>
      <div class="${style["drawer-content"]}">
        <dt>地図キャッシュサイズ</dt>
        <dd>11.3 MBytes</dd>
      </div>

      <div class="${style["drawer-content"]}">
        <dt>製作者</dt>
        <dd>絵図屋庄八</dd>
      </div>
      <div class="${style["drawer-content"]}">
        <dt>作成時期</dt>
        <dd>1844年</dd>
      </div>
      <div class="${style["drawer-content"]}">
        <dt>地図キャッシュサイズ</dt>
        <dd>11.3 MBytes</dd>
      </div>

      <div class="${style["drawer-content"]}">
        <dt>製作者</dt>
        <dd>絵図屋庄八</dd>
      </div>
      <div class="${style["drawer-content"]}">
        <dt>作成時期</dt>
        <dd>1844年</dd>
      </div>
      <div class="${style["drawer-content"]}">
        <dt>地図キャッシュサイズ</dt>
        <dd>11.3 MBytes</dd>
      </div>

      <div class="${style["drawer-content"]} ${style["drawer-content-buttons"]}">
        <button class="${style["button"]}">キャッシュダウンロード</button>
        <button class="${style["button"]}">キャッシュ削除</button>
      </div>
    </dl>

    <button class="${style["drawer-close-button"]}">
      <i class="${style["i-close-24"]}"></i>閉じる
    </button>
  `;

  useScript(() => {
    drawer(div);
  });

  return div;
};
BottomDrawer.parameters = {
  viewport: {
    defaultViewport: "iphone12mini",
  },
  backgrounds: {
    default: "dark",
  },
};

export const LeftDrawer: Story = (...params) => {
  return BottomDrawer(...params);
};
