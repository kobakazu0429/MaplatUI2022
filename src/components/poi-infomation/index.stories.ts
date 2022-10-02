import { Meta, Story } from "@storybook/html";
import { useScript } from "../../js/useScript";
import style from "../../maplat.scss";

export default {
  title: "Component/POI Infomation",
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

const SHARE_ID = "share";
const SHARE_BUTTON_ID = "goto-share";

export const POIInfomation: Story = () => {
  const div = document.createElement("div");
  div.classList.add(style["poi-infomation"]);
  div.innerHTML = `
    <div class="${style["poi-infomation-header"]}">
      <div class="${style["poi-infomation-header-title"]}">興福寺</div>
      <div class="${style["poi-infomation-header-close"]}">
        <button class="${style["clear-button"]}"><i class="${style["i-close-24"]}"></i></button>
      </div>
    </div>

    <div class="${style["poi-infomation-main"]}">
      <div class="${style["poi-infomation-contents"]}">
        <img class="${style["poi-infomation-contents-img"]}" src="https://placehold.jp/600x300.png?text=%20" />
        <p class="${style["poi-infomation-contents-description"]}">
          興福寺（こうふくじ）は、奈良県奈良市登大路町（のぼりおおじちょう）にある、南都六宗の一つ、法相宗大本山である日本の仏教寺院。南都七大寺の一つに数えられる。寺院本尊は中金堂の釈迦如来であり、南円堂（本尊・不空羂索観世音菩薩〈不空羂索観音〉）は西国三十三所第9番札所となっている。
        </p>

        <img class="${style["poi-infomation-contents-img"]}" src="https://placehold.jp/600x300.png?text=%20" />
        <p class="${style["poi-infomation-contents-description"]}">
          興福寺（こうふくじ）は、奈良県奈良市登大路町（のぼりおおじちょう）にある、南都六宗の一つ、法相宗大本山である日本の仏教寺院。南都七大寺の一つに数えられる。寺院本尊は中金堂の釈迦如来であり、南円堂（本尊・不空羂索観世音菩薩〈不空羂索観音〉）は西国三十三所第9番札所となっている。
        </p>

        <img class="${style["poi-infomation-contents-img"]}" src="https://placehold.jp/600x300.png?text=%20" />
        <p class="${style["poi-infomation-contents-description"]}">
          興福寺（こうふくじ）は、奈良県奈良市登大路町（のぼりおおじちょう）にある、南都六宗の一つ、法相宗大本山である日本の仏教寺院。南都七大寺の一つに数えられる。寺院本尊は中金堂の釈迦如来であり、南円堂（本尊・不空羂索観世音菩薩〈不空羂索観音〉）は西国三十三所第9番札所となっている。
        </p>

        <img class="${style["poi-infomation-contents-img"]}" src="https://placehold.jp/600x300.png?text=%20" />
        <p class="${style["poi-infomation-contents-description"]}">
          興福寺（こうふくじ）は、奈良県奈良市登大路町（のぼりおおじちょう）にある、南都六宗の一つ、法相宗大本山である日本の仏教寺院。南都七大寺の一つに数えられる。寺院本尊は中金堂の釈迦如来であり、南円堂（本尊・不空羂索観世音菩薩〈不空羂索観音〉）は西国三十三所第9番札所となっている。
        </p>
      </div>

      <hr />

      <div class="${style["poi-infomation-share"]}" id="${SHARE_ID}">
        <p>このPOIを共有する</p>
        <button class="${style["button"]}"><i class="${style["i-copy-24"]}"></i>URLをコピー</button>
        <a class="${style["button"]}" href="#"><i class="${style["i-twitter-24"]}"></i>Twitter</a>
        <a class="${style["button"]}" href="#"><i class="${style["i-facebook-24"]}"></i>Facebook</a>

        <hr />

        <img src="/qr-code.png" />
      </div>
    </div>

    <div class="${style["poi-infomation-footer"]}">
      <button class="${style["circle-button-gray"]}" id="${SHARE_BUTTON_ID}">
        <i class="${style["i-share-24"]}"></i>
      </button>
      <button class="${style["circle-button"]}"><i class="${style["i-back-24"]}"></i></button>
      <button class="${style["circle-button"]}"><i class="${style["i-next-24"]}"></i></button>
    </div>
  `;

  useScript(() => {
    document.getElementById(SHARE_BUTTON_ID)?.addEventListener("click", () => {
      document.getElementById(SHARE_ID)?.scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  return div;
};

export const POIInfomationMobile: Story = (...params) => {
  return POIInfomation(...params);
};
POIInfomationMobile.parameters = {
  viewport: {
    defaultViewport: "iphone12mini",
  },
};
