import { Meta, Story } from "@storybook/html";
import style from "../../maplat.scss";

export default {
  title: "Alert",
} as Meta;

export const Alert: Story = () => {
  const div = document.createElement("div");
  div.classList.add(style["alert"]);
  div.innerHTML = `
    <div class="${style["alert-icon"]}">
      <i class="${style["i-info"]}"></i>
    </div>
    <div class="${style["alert-content"]}">
      <p>表示位置が地図範囲外です。</p>
      <p>地図標準位置に戻ります。</p>
    </div>
  `;
  return div;
};
