import throttle from "just-throttle";

// ref: https://zenn.dev/tak_dcxi/articles/690caf6e9c4e26

export const switchViewport = (viewport: Element) => {
  const value =
    window.outerWidth > 360
      ? "width=device-width, initial-scale=1.0"
      : "width=360";
  if (viewport?.getAttribute("content") !== value) {
    viewport?.setAttribute("content", value);
  }
};

export const registerFixedViewport = () => {
  const viewport = document.querySelector(`meta[name="viewport"]`);
  if (!viewport) return;

  const throttledSwitchViewport = throttle(() => switchViewport(viewport), 100);
  addEventListener("resize", throttledSwitchViewport, false);
  switchViewport(viewport);
};
