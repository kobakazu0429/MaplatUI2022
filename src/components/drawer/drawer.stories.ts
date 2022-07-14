import { Meta, Story } from "@storybook/html";
import style from "../../maplat.scss";

import Hammer from "hammerjs";
import { useScript } from "../../js/useScript";

export default {
  title: "Drawer",
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
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
      和州奈良之図 (1844年)
    </div>
    <div class="${style["drawer-contents"]}">
      <div class="${style["drawer-content"]}">
        <div class="${style["drawer-content-header"]}">製作者</div>
        <div class="${style["drawer-content-body"]}">絵図屋庄八</div>
      </div>
      <div class="${style["drawer-content"]}">
        <div class="${style["drawer-content-header"]}">作成時期</div>
        <div class="${style["drawer-content-body"]}">1844年</div>
      </div>
      <div class="${style["drawer-content"]}">
        <div class="${style["drawer-content-header"]}">地図キャッシュサイズ</div>
        <div class="${style["drawer-content-body"]}">11.3 MBytes</div>
      </div>

      <div class="${style["drawer-content"]}">
        <div class="${style["drawer-content-header"]}">製作者</div>
        <div class="${style["drawer-content-body"]}">絵図屋庄八</div>
      </div>
      <div class="${style["drawer-content"]}">
        <div class="${style["drawer-content-header"]}">作成時期</div>
        <div class="${style["drawer-content-body"]}">1844年</div>
      </div>
      <div class="${style["drawer-content"]}">
        <div class="${style["drawer-content-header"]}">地図キャッシュサイズ</div>
        <div class="${style["drawer-content-body"]}">11.3 MBytes</div>
      </div>

      <div class="${style["drawer-content"]}">
        <div class="${style["drawer-content-header"]}">製作者</div>
        <div class="${style["drawer-content-body"]}">絵図屋庄八</div>
      </div>
      <div class="${style["drawer-content"]}">
        <div class="${style["drawer-content-header"]}">作成時期</div>
        <div class="${style["drawer-content-body"]}">1844年</div>
      </div>
      <div class="${style["drawer-content"]}">
        <div class="${style["drawer-content-header"]}">地図キャッシュサイズ</div>
        <div class="${style["drawer-content-body"]}">11.3 MBytes</div>
      </div>
    </div>
  `;

  useScript(() => {
    const bar = document.querySelector<HTMLElement>("." + style["drawer-bar"]);
    if (!bar) throw new Error(".drawer-bar is not exist");

    const mc = new Hammer(bar);
    mc.get("swipe").set({ direction: Hammer.DIRECTION_VERTICAL });
    mc.get("pan").set({ direction: Hammer.DIRECTION_VERTICAL });

    const MAX_Y = 275;
    const MIN_Y = 0;
    let currentDeltaY = MAX_Y;

    const isSwipeRelease = (velocity: number) => {
      const threshold = 0.2;
      return Math.abs(velocity) > threshold;
    };

    mc.on("swipe", (e) => {
      if (!isSwipeRelease(e.velocity)) return;

      if (e.direction === Hammer.DIRECTION_UP) {
        // from bottom to top
        currentDeltaY = MIN_Y;
        div.style.transition = `transform 0.3s ease-in-out`;
        div.style.transform = `translate3d(0, ${MIN_Y}px, 0)`;
      } else if (e.direction === Hammer.DIRECTION_DOWN) {
        // from top to bottom
        currentDeltaY = MAX_Y;
        div.style.transition = `transform 0.3s ease-in-out`;
        div.style.transform = `translate3d(0, ${MAX_Y}px, 0)`;
      }
    });

    mc.on("pan", (e) => {
      const toY = currentDeltaY + e.deltaY;

      if (!(MIN_Y <= toY && toY <= MAX_Y)) return;
      div.style.transition = `none`;
      div.style.transform = `translate3d(0, ${toY}px, 0)`;
      if (e.isFinal) {
        currentDeltaY += e.deltaY;
      }
    });
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
