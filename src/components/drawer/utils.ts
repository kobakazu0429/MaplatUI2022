import style from "../../maplat.scss";

interface Props {
  id?: string;
  header: string;
  main: string;
}

export const Drawer = (props: Props): HTMLElement => {
  const div = document.createElement("div");
  if (props.id) div.id = props.id;
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
