export const tabs = (
  container: Element,
  tabClass: string,
  tabPaneClass: string,
  activeTabClass: string,
  activeTabPaneClass: string
) => {
  const tabs = Array.from(container.querySelectorAll("." + tabClass));
  const panes = Array.from(container.querySelectorAll("." + tabPaneClass));

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", (_e) => {
      activate(tabs, i, activeTabClass);
      activate(panes, i, activeTabPaneClass);
    });
  });

  // default open
  activate(tabs, 0, activeTabClass);
  activate(panes, 0, activeTabPaneClass);
};

const activate = (els: Element[], index: number, className: string) => {
  els.forEach((el, i) => {
    if (index === i) {
      el.classList.add(className);
    } else {
      el.classList.remove(className);
    }
  });
};
