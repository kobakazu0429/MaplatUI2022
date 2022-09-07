import { Meta, Story } from "@storybook/html";
import style from "../../maplat.scss";
import { useScript } from "../../js/useScript";
import { drawer } from "./index";
import { Drawer } from "./utils";

export default {
  title: "Component/Drawer",
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

export const BottomDrawer: Story = () => {
  const header = "タイトル";
  const main = "コンテンツ";

  const div = Drawer({ header, main });

  useScript(() => {
    drawer({ drawerElement: div });
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
