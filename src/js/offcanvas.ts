import style from "../maplat.scss";

export const offcanvas = (selector: string) => {
  const el = document.querySelector(selector);
  el?.classList.toggle(style["offcanvas-bottom-hidden"]);
};
