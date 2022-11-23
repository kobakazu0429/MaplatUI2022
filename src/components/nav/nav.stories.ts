import { Meta, Story } from "@storybook/html";
import style from "../../maplat.scss";

export default {
  title: "Component/Nav",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Nav: Story = () => {
  const div = document.createElement("div");
  div.classList.add(style["nav"]);
  div.innerHTML = `
    <button class="${style["nav-title"]}">
      和州奈良之図 (1844年)
    </button>
    <div class="${style["nav-icons"]}">
      <button class="${style["clear-black-button"]}"><i class="${style["i-share-24"]}"></i></button>
      <button class="${style["clear-black-button"]}"><i class="${style["i-download-24"]}"></i></button>
      <button class="${style["clear-black-button"]}"><i class="${style["i-info-24"]}"></i></button>
    </div>
  `;
  return div;
};
