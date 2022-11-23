import { Meta, Story } from "@storybook/html";
import style from "../maplat.scss";
import layouts from "./layouts.scss";
import { drawer } from "../components/drawer";
import { Drawer as DrawerBase } from "../components/drawer/utils";
import drawerExampleStyle from "../components/drawer/example.scss";
import { layerSwitcher } from "../components/layer-switcher";
import { useScript } from "../js/useScript";

const bg = `/Nara,_Japan_\(709-784\).jpeg`;

export default {
  title: "Examples/Examples",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const MAP_INFOMATION_DRAWER_ID = "MAP_INFOMATION_DRAWER_ID";
const MapInfomation = () => {
  const header = `
    <div class="${style["nav-title"]}">
      和州奈良之図 (1844年)
    </div>
    <div class="${style["nav-icons"]}">
      <button class="${style["clear-black-button"]}"><i class="${style["i-share-24"]}"></i></button>
      <button class="${style["clear-black-button"]}"><i class="${style["i-download-24"]}"></i></button>
      <button class="${style["clear-black-button"]}"><i class="${style["i-info-24"]}"></i></button>
    </div>
  `;

  const content = `
    <div class="${drawerExampleStyle["drawer-example-content"]}">
      <dt>製作者</dt>
      <dd>絵図屋庄八</dd>
    </div>
    <div class="${drawerExampleStyle["drawer-example-content"]}">
      <dt>作成時期</dt>
      <dd>1844年</dd>
    </div>
    <div class="${drawerExampleStyle["drawer-example-content"]}">
      <dt>地図キャッシュサイズ</dt>
      <dd>11.3 MBytes</dd>
    </div>
  `;

  const main = `
    <dl class="${drawerExampleStyle["drawer-example-contents"]}">
      ${content}
      ${content}
      ${content}
      ${content}
      ${content}

      <div class="${drawerExampleStyle["drawer-example-content-buttons"]}">
        <button class="${style["button"]}">キャッシュダウンロード</button>
        <button class="${style["button"]}">キャッシュ削除</button>
      </div>
    </dl>
  `;

  const div = DrawerBase({ id: MAP_INFOMATION_DRAWER_ID, header, main });
  return div.outerHTML;
};

const SEARCH_DRAWER_ID = "SEARCH_DRAWER_ID";
const Search = () => {
  const header = `
    <i class="${style["i-search-24"]} ${style["search-drawer-input-icon"]}"></i>
    <input type="search" placeholder="こちらに入力してください。" value="お寺" class="${style["search-drawer-input"]}" />
  `;

  const searchResult = `
    <button class="${style["search-result"]}">
      <div class="${style["search-result-body"]}">
        <div class="${style["search-result-title"]}">興福寺</div>
        <div class="${style["search-result-description"]}">
          興福寺（こうふくじ）は、奈良県奈良市登大路町（のぼりおおじちょう）にある法相宗の大本山の寺院。山号はなし。本尊は中金堂の釈迦如来。南都七大寺の一つ。藤原氏の祖・藤原鎌足とその子息・藤原不比等ゆかりの寺院で藤原氏の氏寺であり、古代から中世にかけて強大な勢力を誇った。「古都奈良の文化財」の一部として世界遺産に登録されている。
        </div>
      </div>
      <div class="${style["search-result-img"]}">
        <img src="https://placehold.jp/200x200.png" />
      </div>
    </button>
  `;

  const main = `
    <div class="${style["search-main"]}">
      ${searchResult}
      ${searchResult}
      ${searchResult}
      ${searchResult}
      ${searchResult}
    </div>
  `;

  const div = DrawerBase({ id: SEARCH_DRAWER_ID, header, main });
  return div.outerHTML;
};

const createSlide = (id: number) => {
  return `
  <div class="${style["swiper-slide"]} ${style["layer-slide"]}" data-layer-id="${id}">
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

const LayerSwitcher = `
<div class="${style["tab-container"]}">
  <div class="${style["offcanvas"]} ${style["offcanvas-bottom"]}">
    <div class="${style["tabs"]}">
      <div>
        <button class="${style["tab"]}">古地図・絵地図</button>
        <button class="${style["tab"]}">現代地図</button>
        <button class="${style["tab2"]}" id="layer-switcher-toggle">
          <i class="${style["i-down-24"]}"></i>
        </button>
      </div>
      <div>
        <i class="${style["i-map-fade-switch-24"]}"></i>
        <div
          id="wrap"
          class="${style["wrap"]}"
          style="--maplat-min: 0;--maplat-max: 100;--maplat-val: 100"
        >
          <input id="r" type="range" min="0" max="100" step="1" value="100">
        </div>
      </div>
    </div>

    <div class="${style["tab-panes"]}" id="footerSlideContent">
      <div class="${style["tab-pane"]}">
        <div class="${style["layer-switcher"]}">
          <button class="${style["layer-switcher-prev-button"]}">
            <i class="${style["i-slide-left-24"]}"></i>
          </button>
          <div class="${style["swiper"]} ${style["layer-switcher-swiper"]}">
            <div class="${style["swiper-wrapper"]}">
              ${createSlide(1)}
              ${createSlide(2)}
              ${createSlide(3)}
              ${createSlide(4)}
              ${createSlide(5)}
              ${createSlide(6)}
              ${createSlide(7)}
              ${createSlide(8)}
              ${createSlide(9)}
              ${createSlide(10)}
              ${createSlide(11)}
              ${createSlide(12)}
              ${createSlide(13)}
            </div>
          </div>
          <button class="${style["layer-switcher-next-button"]}">
            <i class="${style["i-slide-right-24"]}"></i>
          </button>
        </div>
      </div>
      <div class="${style["tab-pane"]}">DEF</div>
    </div>
  </div>
</div>
`;

const Login = `
  <div class="${style["login"]} ${style["invisible"]}">
    <button class="${style["login-close"]} ${style["clear-white-button"]}">
      <i class="${style["i-close-24"]}"></i>
    </button>
    <div class="${style["login-buttons"]}">
      <button class="${style["login-button"]}"><i class="${style["i-login-twitter-24"]}"></i><span>Twitterでログイン</span></button>
      <button class="${style["login-button"]}"><i class="${style["i-login-google-24"]}"></i><span>Googleでログイン</span></button>
      <button class="${style["login-button"]}"><i class="${style["i-facebook-24"]}"></i><span>Facebookでログイン</span></button>
    </div>
  </div>
`;

const SEARCH_BUTTON_ID = "SEARCH_BUTTON_ID";
const SearchButton = `<button class="${style["circle-button-md"]}" id="${SEARCH_BUTTON_ID}"><i class="${style["i-search-24"]}"></i></button>`;

const NAV_ID = "NAV_ID";
const Nav = `
  <div class="${style["nav"]}" id="${NAV_ID}">
    <button class="${style["nav-title"]}">和州奈良之図 (1844年)</button>
    <div class="${style["nav-icons"]}">
      <button class="${style["clear-black-button"]}"><i class="${style["i-share-24"]}"></i></button>
      <button class="${style["clear-black-button"]}"><i class="${style["i-download-24"]}"></i></button>
      <button class="${style["clear-black-button"]}"><i class="${style["i-info-24"]}"></i></button>
    </div>
  </div>
`;

const TopLeft = `
  <div class="${layouts["maplat-layout-top-left"]}">
    <div class="${layouts["maplat-layout-row-left"]}">
      ${Nav}
      ${SearchButton}
    </div>
    <div class="${layouts["maplat-layout-row-left"]}">
      <button class="${style["rounded-full-button"]} ${style["over-md"]}"><i class="${style["i-share-24"]}"></i>地図を共有</button>
    </div>
  </div>
`;

const SNS_LOGIN_BUTTON_ID = "sns-login-button-id";
const TopRight = `
  <div class="${layouts["maplat-layout-top-right"]}">
    <div class="${layouts["maplat-layout-col-to-row"]}">
      <div class="${layouts["maplat-layout-row-right"]}">
        <button class="${style["rounded-full-button-black"]}"><i class="${style["i-help-24"]}"></i><span>Maplatヘルプ</span></button>
      </div>
      <div class="${layouts["maplat-layout-row-right"]}">
        <button class="${style["rounded-full-button-black"]}" id="${SNS_LOGIN_BUTTON_ID}"><i class="${style["i-sns-login-24"]}"></i><span>SNSログイン</span></button>
      </div>
      <div class="${layouts["maplat-layout-row-right"]}">
        <button class="${style["rounded-full-button-black"]}"><i class="${style["i-other-24"]}"></i><span>その他</span></button>
      </div>
    </div>

    <div class="${style["direction"]}"></div>
  </div>
`;

const BottomRight = `
  <div class="${layouts["maplat-layout-bottom-right"]}">
    <div class="${layouts["maplat-layout-col"]}">
      <div class="${layouts["maplat-layout-row-right"]}">
        <button class="${style["square-button"]}"><i class="${style["i-pin-24"]}"></i></button>
      </div>
      <div class="${layouts["maplat-layout-row-right"]}">
        <button class="${style["square-button"]}"><i class="${style["i-gps-on-24"]}"></i></button>
      </div>
      <div class="${layouts["maplat-layout-row-right"]} ${style["visible-mouse-device-only"]}">
        <div class="${style["square-button-group"]}">
          <button class="${style["square-button"]}">
            <i class="${style["i-plus-24"]}"></i>
          </button>
          <button class="${style["square-button"]}">
            <i class="${style["i-minus-24"]}"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="${layouts["maplat-layout-row-right"]}">
      <div style="display:grid;grid-template-columns: repeat(2, 1fr);grid-template-rows: repeat(2, 1fr);grid-gap:10px">
      <button class="${style["rounded-full-button"]}"><i class="${style["i-poi-24"]}"></i>POI一覧を見る</button>
      <button class="${style["rounded-full-button"]}"><i class="${style["i-crop-24"]}"></i>地図領域の表示</button>
      <button class="${style["rounded-full-button"]}"><i class="${style["i-map-switch-24"]}"></i>地図を切り替え</button>
      <button class="${style["rounded-full-button"]}"><i class="${style["i-map-reset-24"]}"></i>地図をリセット</button>
      </div>
    </div>
  </div>
`;

export const Examples: Story = () => {
  const wrapper = document.createElement("div");
  wrapper.classList.add(layouts["parent"]);
  wrapper.style.backgroundImage = `url("${bg}")`;
  wrapper.style.backgroundRepeat = "no-reppeat";
  wrapper.style.backgroundSize = "cover";
  wrapper.style.width = "100vw";
  wrapper.style.height = "100vh";

  wrapper.innerHTML = `
    ${MapInfomation()}
    ${Search()}
    ${Login}
    ${TopLeft}
    ${TopRight}
    ${BottomRight}
    ${LayerSwitcher}
    `;

  useScript(() => {
    const toggle = (selector: string) => {
      document.querySelector(selector)?.classList.toggle(style["invisible"]);
    };

    // Login
    document
      .getElementById(SNS_LOGIN_BUTTON_ID)
      ?.addEventListener("click", () => {
        toggle("." + style["login"]);
      });
    document
      .querySelector(`.${style["login"]} .${style["login-close"]}`)
      ?.addEventListener("click", () => {
        toggle("." + style["login"]);
      });

    const mapInfomationDrawerElement = document.getElementById(
      MAP_INFOMATION_DRAWER_ID
    );
    const searchDrawerElement = document.getElementById(SEARCH_DRAWER_ID);
    const layerSwitcherContainerElement = wrapper.querySelector<HTMLDivElement>(
      "." + style["tab-container"]
    );
    const maplatLayoutBottomRight = wrapper.querySelector<HTMLDivElement>(
      "." + layouts["maplat-layout-bottom-right"]
    );

    if (
      !searchDrawerElement ||
      !mapInfomationDrawerElement ||
      !layerSwitcherContainerElement ||
      !maplatLayoutBottomRight
    ) {
      throw new Error("elements is not exist");
    }

    const setMaplatLayoutBottomRightBottom = (value: number) => {
      document
        .querySelector<HTMLDivElement>(".maplat")
        ?.style.setProperty(
          "--maplat-layout-bottom-right-bottom",
          `${value}px`
        );
    };

    const setDefaultMaplatLayoutBottomRightBottom = () => {
      setMaplatLayoutBottomRightBottom(10);
    };

    let cacheLayerSwitcherHeight = 0;

    const setAboveLayerSwictherMaplatLayoutBottomRightBottom = () => {
      const offcanvasElement = layerSwitcherContainerElement.querySelector(
        "." + style["offcanvas"]
      );
      const layerSwitcherHeight =
        offcanvasElement?.clientHeight ?? cacheLayerSwitcherHeight;

      const isHidden = offcanvasElement?.classList.contains(
        style["offcanvas-bottom-hidden"]
      );

      if (isHidden) {
        const v = document
          .querySelector<HTMLDivElement>(".maplat")
          ?.style.getPropertyValue("--maplat-layer-switcher-tab-height");

        setMaplatLayoutBottomRightBottom(parseInt(v ?? "0", 10) + 10);
      } else {
        setMaplatLayoutBottomRightBottom(layerSwitcherHeight + 10);
      }
    };

    const showLayerSwitcherContainerElement = () => {
      layerSwitcherContainerElement.classList.remove(style["invisible"]);
    };
    const hideLayerSwitcherContainerElement = () => {
      const height = layerSwitcherContainerElement.querySelector(
        "." + style["offcanvas"]
      )?.clientHeight;
      if (height) cacheLayerSwitcherHeight = height;
      layerSwitcherContainerElement.classList.add(style["invisible"]);
    };

    let closeSearchDrawerFunc: () => void | undefined;
    const { open: openMapInfomationDrawer, close: closeMapInfomationDrawer } =
      drawer({
        drawerElement: mapInfomationDrawerElement,
        onOpen: () => {
          closeSearchDrawerFunc?.();
          hideLayerSwitcherContainerElement();
          setDefaultMaplatLayoutBottomRightBottom();
        },
        onClose: () => {
          showLayerSwitcherContainerElement();
          setAboveLayerSwictherMaplatLayoutBottomRightBottom();
        },
      });

    const { open: openSearchDrawer, close: closeSearchDrawer } = drawer({
      drawerElement: searchDrawerElement,
      onOpen: () => {
        closeMapInfomationDrawer();
        hideLayerSwitcherContainerElement();
        setDefaultMaplatLayoutBottomRightBottom();
      },
      onClose: () => {
        showLayerSwitcherContainerElement();
        setAboveLayerSwictherMaplatLayoutBottomRightBottom();
      },
    });
    closeSearchDrawerFunc = closeSearchDrawer;

    document
      .querySelector(`#${NAV_ID} .${style["nav-title"]}`)
      ?.addEventListener("click", () => {
        openMapInfomationDrawer();
      });
    document.getElementById(SEARCH_BUTTON_ID)?.addEventListener("click", () => {
      openSearchDrawer();
    });

    layerSwitcher(layerSwitcherContainerElement, (el) => {
      alert(el.dataset.layerId);
    });
  });

  return wrapper;
};

export const MobileExamples: Story = (...params) => {
  return Examples(...params);
};
MobileExamples.parameters = {
  viewport: {
    defaultViewport: "iphone12mini",
  },
};
