import { Meta, Story } from "@storybook/html";
import style from "../../maplat.scss";

export default {
  title: "Component/Direction",
} as Meta;

export const Direction: Story = () => {
  const div = document.createElement("div");
  div.classList.add(style["direction"]);
  return div;
};

export const EastDirection: Story = () => {
  const div = document.createElement("div");
  div.classList.add(style["direction"]);
  div.style.setProperty("--maplat-direction-rotate-as-degree-number", 90);
  return div;
};

export const MobileDirection: Story = (...params) => {
  return Direction(...params);
};
MobileDirection.parameters = {
  viewport: {
    defaultViewport: "iphone12mini",
  },
};
