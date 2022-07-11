import { Meta, Story } from "@storybook/html";
import { useScript } from "./../../js/useScript";
import Swiper, { Navigation, Keyboard, Mousewheel } from "swiper";
import style from "../../maplat.scss";
import { tabs } from "../../js/tabs";
import { offcanvas } from "../../js/offcanvas";

export default {
  title: "LayerSwitcher",
} as Meta;

const createSlide = () => {
  return `
  <div class="${style["swiper-slide"]} ${style["layer-slide"]}">
    <div class="${style["layer-infomation"]}">
      <i class="${style["i-time-24"]}"></i>
      明治期 / 1868年以降
    </div>
    <div class="${style["layer-slide-img-wrapper"]}">
      <img src="/Nara,_Japan_(709-784).jpeg"></img>
    </div>
    <div class="${style["layer-name"]}">
      奈良市鳥瞰図
    </div>
  </div>
  `;
};

export const LayerSwitcher: Story = () => {
  const div = document.createElement("div");
  div.classList.add(style["tab-container"]);
  div.innerHTML = `
  <div class="${style["offcanvas"]} ${style["offcanvas-bottom"]}">
    <div class="${style["tabs"]}">
      <button class="${style["tab"]}">古地図・絵地図
        <i class="${style["i-transparency-36"]}"></i>
        <div id="wrap" class="${
          style["wrap"]
        }" style="--maplat-min: 0;--maplat-max: 100;--maplat-val: 100">
          <input id="r" type="range" min="0" max="100" step="1" value="100">
        </div>
      </button>
      <button class="${style["tab"]}">現代地図</button>
      <button class="${style["tab2"]}" id="layer-switcher-toggle">
        <i class="${style["i-down-36"]}"></i>
      </button>
    </div>

    <div class="${style["tab-panes"]}" id="footerSlideContent">
      <div class="${style["tab-pane"]}">
        <div class="${style["layer-switcher"]}">
          <div class="${style["swiper"]} ${style["layer-switcher-swiper"]}">
            <div class="${style["swiper-wrapper"]}">
              ${createSlide()}
              ${createSlide()}
              ${createSlide()}
              ${createSlide()}
              ${createSlide()}
              ${createSlide()}
              ${createSlide()}
              ${createSlide()}
              ${createSlide()}
              ${createSlide()}
              ${createSlide()}
              ${createSlide()}
              ${createSlide()}
            </div>
          </div>
          <div class="${style["layer-switcher-prev-button"]}">
            <i class="${style["i-arrow-02-prev-36"]}"></i>
          </div>
          <div class="${style["layer-switcher-next-button"]}">
            <i class="${style["i-arrow-02-next-36"]}"></i>
          </div>
        </div>
      </div>
      <div class="${style["tab-pane"]}">DEF</div>
    </div>
  </div>`;

  useScript(() => {
    tabs(
      div,
      style["tab"],
      style["tab-pane"],
      style["tab-active"],
      style["tab-pane-active"]
    );

    const _R = document.getElementById("r") as HTMLInputElement;
    const _W = document.getElementById("wrap") as HTMLDivElement;

    const layerSwitcherToggle = document.getElementById(
      "layer-switcher-toggle"
    );
    layerSwitcherToggle?.addEventListener("click", () => {
      offcanvas("." + style["offcanvas"]);
      const icon = layerSwitcherToggle.querySelector("i");
      icon?.classList.toggle(style["i-down-36"]);
      icon?.classList.toggle(style["i-up-36"]);
    });

    _R.addEventListener(
      "input",
      (_e) => {
        _W.style.setProperty("--maplat-val", +_R.value as any);
      },
      false
    );

    const swiper = new Swiper("." + style["swiper"], {
      modules: [Navigation, Keyboard, Mousewheel],
      keyboard: {
        enabled: true,
      },
      mousewheel: true,
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 10,
      navigation: {
        nextEl: "." + style["layer-switcher-next-button"],
        prevEl: "." + style["layer-switcher-prev-button"],
        // disabledClass: style["layer-switcher-navigation-disabled"],
        // hiddenClass: style["layer-switcher-navigation-hidden"],
        // lockClass: style["layer-switcher-navigation-lock"],
        // navigationDisabledClass: style[""],
      },
      wrapperClass: style["swiper-wrapper"],
      slideActiveClass: style["swiper-slide-active"],
      slideBlankClass: style["swiper-slide-invisible-blank"],
      slideClass: style["swiper-slide"],
      slideNextClass: style["swiper-slide-next"],
      slidePrevClass: style["swiper-slide-prev"],
      slideVisibleClass: style["swiper-slide-visible"],
    });
  });

  return div;
};
