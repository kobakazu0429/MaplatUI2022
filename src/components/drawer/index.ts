import Hammer from "hammerjs";
import style from "../../maplat.scss";

export const drawer = (drawerElement: Element) => {
  const bar = drawerElement.querySelector<HTMLElement>(
    "." + style["drawer-bar"]
  );
  if (!bar) throw new Error(".drawer-bar is not exist");

  const closeButton = drawerElement.querySelector<HTMLButtonElement>(
    "." + style["drawer-close-button"]
  );
  if (!closeButton) throw new Error(".drawer-close-button is not exist");
  closeButton.addEventListener("click", () => {
    drawerElement.classList.add(style["drawer-close"]);
  });
  const drawerHeader = drawerElement.querySelector<HTMLElement>(
    "." + style["drawer-header"]
  );
  if (!drawerHeader) throw new Error(".drawer-header is not exist");
  drawerHeader.addEventListener("click", () => {
    drawerElement.classList.remove(style["drawer-close"]);
  });

  const mc = new Hammer(bar);
  mc.get("swipe").set({ direction: Hammer.DIRECTION_VERTICAL });
  mc.get("pan").set({ direction: Hammer.DIRECTION_VERTICAL });

  const MAX_Y = 275;
  const MIN_Y = 0;
  let currentDeltaY = MAX_Y;

  const isSwipeRelease = (velocity: number) => {
    const threshold = 0.2;
    return Math.abs(velocity) > threshold;
  };

  mc.on("swipe", (e) => {
    if (!isSwipeRelease(e.velocity)) return;

    if (e.direction === Hammer.DIRECTION_UP) {
      // from bottom to top
      currentDeltaY = MIN_Y;
      drawerElement.style.transition = `transform 0.3s ease-in-out`;
      drawerElement.style.transform = `translate3d(0, ${MIN_Y}px, 0)`;
    } else if (e.direction === Hammer.DIRECTION_DOWN) {
      // from top to bottom
      currentDeltaY = MAX_Y;
      drawerElement.style.transition = `transform 0.3s ease-in-out`;
      drawerElement.style.transform = `translate3d(0, ${MAX_Y}px, 0)`;
    }
  });

  mc.on("pan", (e) => {
    const toY = currentDeltaY + e.deltaY;

    if (!(MIN_Y <= toY && toY <= MAX_Y)) return;
    drawerElement.style.transition = `none`;
    drawerElement.style.transform = `translate3d(0, ${toY}px, 0)`;
    if (e.isFinal) {
      currentDeltaY += e.deltaY;
    }
  });
};
