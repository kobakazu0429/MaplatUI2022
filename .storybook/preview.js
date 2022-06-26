import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import style from "../src/maplat.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

document.body.onload = () => {
  document.getElementById("root").classList.add(style["maplat"]);
};
