import style from "../../maplat.scss";

interface Props {
  header: string;
  main: string;
}

export const Drawer = (props: Props): HTMLElement => {
  const div = document.createElement("div");
  div.classList.add(style["drawer"]);
  div.innerHTML = `
    <div class="${style["drawer-bar"]}"><i></i></div>

    <div class="${style["drawer-header"]}">${props.header}</div>

    <div class="${style["drawer-main"]}">${props.main}</div>

    <button class="${style["drawer-close"]}">
      <i class="${style["i-close-24"]}"></i>閉じる
    </button>
  `;

  return div;
};
