import { Meta, Story } from "@storybook/html";
import style from "../../maplat.scss";
import exampleStyle from "./example.scss";
import { useScript } from "../../js/useScript";
import { drawer } from "./index";
import { Drawer } from "./utils";

export default {
  title: "Examples/Drawer",
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

export const BottomDrawer: Story = () => {
  const header = `
    <button class="${style["nav-title"]}">
      和州奈良之図 (1844年)
    </button>
    <div class="${style["nav-icons"]} ${style["over-md"]}">
      <button class="${style["clear-button"]}"><i class="${style["i-share-24"]}"></i></button>
      <button class="${style["clear-button"]}"><i class="${style["i-download-24"]}"></i></button>
      <button class="${style["clear-button"]}"><i class="${style["i-info-24"]}"></i></button>
    </div>
  `;

  const content = `
    <div class="${exampleStyle["drawer-example-content"]}">
      <dt>製作者</dt>
      <dd>絵図屋庄八</dd>
    </div>
    <div class="${exampleStyle["drawer-example-content"]}">
      <dt>作成時期</dt>
      <dd>1844年</dd>
    </div>
    <div class="${exampleStyle["drawer-example-content"]}">
      <dt>地図キャッシュサイズ</dt>
      <dd>11.3 MBytes</dd>
    </div>
  `;

  const main = `
    <dl class="${exampleStyle["drawer-example-contents"]}">
      ${content}
      ${content}
      ${content}
      ${content}
      ${content}

      <div class="${exampleStyle["drawer-example-content-buttons"]}">
        <button class="${style["button"]}">キャッシュダウンロード</button>
        <button class="${style["button"]}">キャッシュ削除</button>
      </div>
    </dl>
  `;

  const div = Drawer({ header, main });

  useScript(() => {
    const { open } = drawer({ drawerElement: div });
    open();
  });

  return div;
};
BottomDrawer.parameters = {
  viewport: {
    defaultViewport: "iphone12mini",
  },
};

export const LeftDrawer: Story = (...params) => {
  return BottomDrawer(...params);
};
