import { Meta, Story } from "@storybook/html";
import { useScript } from "./../../js/useScript";
import Swiper, { Navigation, Keyboard } from "swiper";
import style from "../../maplat.scss";

export default {
  title: "LayerSwitcher",
} as Meta;

export const LayerSwitcher: Story = () => {
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="${style["swiper"]} ${style["maplat-swiper"]}">
    <div class="${style["swiper-wrapper"]} style="height:100%;">
      <div class="${style["swiper-slide"]} ${style["maplat-slide"]}">Slide 1</div>
      <div class="${style["swiper-slide"]} ${style["maplat-slide"]}">Slide 2</div>
      <div class="${style["swiper-slide"]} ${style["maplat-slide"]}">Slide 3</div>
      <div class="${style["swiper-slide"]} ${style["maplat-slide"]}">Slide 4</div>
      <div class="${style["swiper-slide"]} ${style["maplat-slide"]}">Slide 5</div>
      <div class="${style["swiper-slide"]} ${style["maplat-slide"]}">Slide 6</div>
      <div class="${style["swiper-slide"]} ${style["maplat-slide"]}">Slide 7</div>
      <div class="${style["swiper-slide"]} ${style["maplat-slide"]}">Slide 8</div>
      <div class="${style["swiper-slide"]} ${style["maplat-slide"]}">Slide 9</div>
      <div class="${style["swiper-slide"]} ${style["maplat-slide"]}">Slide 10</div>
    </div>

    <!-- Add Arrows -->
    <div class="${style["swiper-button-next"]}"></div>
    <div class="${style["swiper-button-prev"]}"></div>
  </div>
`;

  useScript(() => {
    const swiper = new Swiper("." + style["swiper"], {
      modules: [Navigation, Keyboard],
      keyboard: {
        enabled: true,
      },
      navigation: {
        nextEl: "." + style["swiper-button-next"],
        prevEl: "." + style["swiper-button-prev"],
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
