import { Meta, Story } from "@storybook/html";
import style from "../../maplat.scss";

export default {
  title: "Nav",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Nav: Story = () => {
  const div = document.createElement("div");
  div.classList.add(style["nav"]);
  div.innerHTML = `
    <div class="${style["nav-title"]}">
      和州奈良之図 (1844年)
    </div>
    <div class="${style["nav-icons"]}">
      <i class="${style["i-share"]}"></i>
      <i class="${style["i-download"]}"></i>
      <i class="${style["i-info"]}"></i>
    </div>
  `;
  return div;
};
