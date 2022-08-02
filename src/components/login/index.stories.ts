import { Meta, Story } from "@storybook/html";
import style from "../../maplat.scss";

export default {
  title: "Login",
} as Meta;

export const Login: Story = () => {
  const div = document.createElement("div");
  div.classList.add(style["login"]);
  div.innerHTML = `
    <div class="${style["login-close"]}">
      <i class="${style["i-close-24"]}"></i>
    </div>

    <div class="${style["login-buttons"]}">
      <button class="${style["login-button"]}">
        <i class="${style["i-login-twitter-24"]}"></i>
        <span>Twitterでログイン</span>
      </button>
      <button class="${style["login-button"]}">
        <i class="${style["i-login-facebook-24"]}"></i>
        <span>Facebookでログイン</span>
      </button>
      <button class="${style["login-button"]}">
        <i class="${style["i-login-google-24"]}"></i>
        <span>Googleでログイン</span>
      </button>
    </div>
  `;
  return div;
};

export const Logout: Story = () => {
  const div = document.createElement("div");
  div.classList.add(style["login"]);
  div.innerHTML = `
    <div class="${style["login-close"]}">
      <i class="${style["i-close-24"]}"></i>
    </div>

    <div class="${style["login-buttons"]}">
      <button class="${style["login-button"]}">
        <span>ログアウト</span>
      </button>
    </div>
  `;
  return div;
};

export const MobileLogin: Story = (...pramas) => {
  return Login(...pramas);
};
MobileLogin.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "iphone12mini",
  },
};
export const MobileLogout: Story = (...pramas) => {
  return Logout(...pramas);
};
MobileLogout.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "iphone12mini",
  },
};
