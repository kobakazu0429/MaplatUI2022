import { Meta, Story } from "@storybook/html";
import button from "./index.scss";
import icons, { type Styles, type ClassNames } from "../../icons.scss";

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

const createIcon = (icon: Styles[ClassNames]) => {
  const i = document.createElement("i");
  i.classList.add(icon);
  return i;
};

const Template: Story<ButtonProps> = (args) => {
  return createButton(args);
};

export const Button = Template.bind({});
Button.args = {
  label: "キャッシュダウンロード",
  classNames: [button["button"]],
};

export const RoundedButtonBlack = Template.bind({});
RoundedButtonBlack.args = {
  label: "Maplatヘルプ",
  classNames: [button["rounded-full-button-black"]],
};

export const RoundedButtonWhite = Template.bind({});
RoundedButtonWhite.args = {
  label: "Maplatヘルプ",
  classNames: [button["rounded-full-button"]],
};

export const SquareButton: Story = () => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = button["square-button"];
  btn.appendChild(createIcon(icons["i-gps_on-24"]));
  return btn;
};

export const SquareButtonGroup: Story = () => {
  const top = document.createElement("button");
  const bottom = document.createElement("button");
  top.type = "button";
  bottom.type = "button";

  top.appendChild(createIcon(icons["i-zoom_in"]));
  bottom.appendChild(createIcon(icons["i-zoom_out"]));

  const wrapper = document.createElement("div");
  wrapper.appendChild(top);
  wrapper.appendChild(bottom);
  wrapper.classList.add(button["square-button-group"]);

  return wrapper;
};
