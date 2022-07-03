import { Story, Meta } from "@storybook/html";
import style from "./_elevations.scss";
import type { ClassNames } from "./_elevations.scss";

export default {
  title: "Tokens/Elevations",
} as Meta;

type BorderBoxProps = {
  name: string;
  value: string;
};

const createBox = ({ name, value }: BorderBoxProps) => {
  const box = document.createElement("div");
  box.style.borderRadius = "8px";
  box.style.height = "100px";
  box.style.width = "100px";
  box.style.padding = "10px";
  box.style.boxShadow = value;
  box.style.backgroundColor = "white";
  box.innerText = name;
  return box;
};

export const Elevations: Story = () => {
  const wrapper = document.createElement("div");
  wrapper.style.display = "flex";
  wrapper.style.gap = "20px";

  (Object.keys(style) as unknown as Array<ClassNames>)
    .filter((key) => key.startsWith("elevation"))
    .forEach((name) => {
      wrapper.appendChild(createBox({ name, value: style[name] }));
    });

  return wrapper;
};
