import { Meta, Story } from "@storybook/html";
import style from "../../maplat.scss";

export default {
  title: "Drawer",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const BottomDrawer: Story = () => {
  const div = document.createElement("div");
  div.classList.add(style["drawer"]);
  return div;
};
BottomDrawer.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
};

export const LeftDrawer: Story = () => {
  const div = document.createElement("div");
  div.classList.add(style["drawer"]);
  return div;
};
