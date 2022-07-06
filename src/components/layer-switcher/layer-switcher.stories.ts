import { Meta, Story } from "@storybook/html";
import { useScript } from "./../../js/useScript";
import Swiper, { Navigation, Keyboard, Mousewheel } from "swiper";
import style from "../../maplat.scss";

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
  div.classList.add(style["layer-switcher"]);
  div.style.height = "200px";

  div.innerHTML = `
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
`;

  useScript(() => {
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
    console.log(swiper);
  });

  return div;
};
