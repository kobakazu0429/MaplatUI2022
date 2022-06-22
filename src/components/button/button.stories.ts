import { Meta, Story } from "@storybook/html";
import button from "./index.scss";

export default {
  title: "Button",
  argTypes: {
    label: { control: "text" },
  },
} as Meta;

interface ButtonProps {
  label: string;
  classNames?: string[];
}

const createButton = ({ label, classNames = [] }: ButtonProps) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = label;
  btn.className = classNames.join(" ");
  return btn;
};

const Template: Story<ButtonProps> = (args) => {
  return createButton(args);
};

export const RoundedButtonBlack = Template.bind({});
RoundedButtonBlack.args = {
  label: "Maplatヘルプ",
  classNames: [button["rounded-button-black"]],
};

export const RoundedButtonWhite = Template.bind({});
RoundedButtonWhite.args = {
  label: "Maplatヘルプ",
  classNames: [button["rounded-button"]],
};

export const RectButton = Template.bind({});
RectButton.args = {
  label: "キャッシュダウンロード",
  classNames: [button["rect-button"]],
};

export const SquareButton = Template.bind({});
SquareButton.args = {
  label: "+",
  classNames: [button["square-button"]],
};

export const SquareButtonGroup: Story = () => {
  const top = createButton({ label: "+" });
  const bottom = createButton({ label: "-" });

  const wrapper = document.createElement("div");
  wrapper.appendChild(top);
  wrapper.appendChild(bottom);
  wrapper.classList.add(button["square-button-group"]);

  return wrapper;
};
