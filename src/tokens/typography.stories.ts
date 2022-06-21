import {Meta, Story } from "@storybook/html";
import typography, { type ClassNames } from "./typography.scss";

export default {
  title: "Typography"
} as Meta;

export interface TextProps {
  fontSize: string;
  isBold: boolean;
}

const createText = ({ fontSize, isBold }: TextProps) => {
  const p = document.createElement("p");
  p.innerText = `${fontSize} / ${isBold ? "bold" : "normal"} / abcあいう012`;
  p.style.fontFamily = typography["font-family-base"];
  p.style.fontSize = fontSize;
  if(isBold) {
    p.style.fontWeight = "bold";
  }
  return p;
};

export const Typography: Story = () => {
  const div = document.createElement("div");

  const fontSizes = Object.keys(typography).filter(key=>key.startsWith("font-size-")) as ClassNames[];
  fontSizes.forEach(key => {
    div.appendChild(createText({ fontSize: typography[key], isBold:false }));
  });
  fontSizes.forEach(key => {
    div.appendChild(createText({ fontSize: typography[key], isBold:true }));
  });

  return div;
};
