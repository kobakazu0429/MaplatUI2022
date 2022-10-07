import style from "../maplat.scss";

export const offcanvasRegister = (selector: string) => {
  const el = document.querySelector<HTMLDivElement>(selector);

  const f = () => {
    const offcanvasHeight = el?.clientHeight ?? 0;
    const tabsHeight = el?.querySelector(".tabs")?.clientHeight ?? 0;
    document
      .querySelector<HTMLDivElement>(".maplat")
      ?.style.setProperty(
        "--maplat-layer-switcher-tab-height",
        `${tabsHeight}px`
      );

    const isHidden = el?.classList.contains(style["offcanvas-bottom-hidden"]);

    const v = isHidden ? tabsHeight : offcanvasHeight;

    document
      .querySelector<HTMLDivElement>(".maplat")
      ?.style.setProperty("--maplat-layout-bottom-right-bottom", `${v + 10}px`);
  };

  const observer = new MutationObserver(f);
  observer.observe(el!, {
    attributes: true,
    childList: true,
    subtree: true,
  });
};

export const offcanvas = (selector: string) => {
  const el = document.querySelector<HTMLDivElement>(selector);

  const offcanvasHeight = el?.clientHeight ?? 0;
  const tabsHeight = el?.querySelector(".tabs")?.clientHeight ?? 0;
  document
    .querySelector<HTMLDivElement>(".maplat")
    ?.style.setProperty(
      "--maplat-layer-switcher-tab-height",
      `${tabsHeight}px`
    );

  el?.classList.toggle(style["offcanvas-bottom-hidden"]);

  const isHidden = el?.classList.contains(style["offcanvas-bottom-hidden"]);

  const v = isHidden ? tabsHeight : offcanvasHeight;

  document
    .querySelector<HTMLDivElement>(".maplat")
    ?.style.setProperty("--maplat-layout-bottom-right-bottom", `${v + 10}px`);
};
