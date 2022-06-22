import "../src/maplat.scss"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

document.body.onload = () => {
  document.getElementById("root").classList.add("maplat");
};
