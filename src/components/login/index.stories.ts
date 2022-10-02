import { Meta, Story } from "@storybook/html";
import { match } from "ts-pattern";
import style from "../../maplat.scss";
import type { ClassNames as IconNames } from "../../icons/maplat-icons.scss";

export default {
  title: "Component/Login",
} as Meta;

type LoginServices = "google" | "facebook" | "twitter";
type ServicesIconNames = Extract<
  IconNames,
  | "i-facebook-24"
  // | "i-facebook-36"
  | "i-login-twitter-24"
  // | "i-login-twitter-36"
  | "i-login-google-24"
  // | "i-login-google-36"
>;

const loginServices: Record<
  LoginServices,
  { icon: ServicesIconNames; label: string }
> = {
  google: {
    icon: "i-login-google-24",
    label: "Googleでログイン",
  },
  twitter: {
    icon: "i-login-twitter-24",
    label: "Twitterでログイン",
  },
  facebook: {
    icon: "i-facebook-24",
    label: "Facebookでログイン",
  },
};

const loginButton = (service: LoginServices) => {
  const button = document.createElement("button");
  button.classList.add(style["login-button"]);

  const data = match(service)
    .with("google", () => loginServices["google"])
    .with("twitter", () => loginServices["twitter"])
    .with("facebook", () => loginServices["facebook"])
    .exhaustive();

  button.innerHTML = `
    <i class="${style[data.icon]}"></i>
    <span>${data.label}</span>
  `;
  return button;
};

const logoutButton = () => {
  const button = document.createElement("button");
  button.classList.add(style["login-button"]);
  button.innerHTML = `<span>ログアウト</span>`;
  return button;
};

const button = (type: LoginServices | "logout") => {
  if (type === "logout") return logoutButton();
  return loginButton(type);
};

export const Login: Story = () => {
  const div = document.createElement("div");
  div.classList.add(style["login"]);
  div.innerHTML = `
    <div class="${style["login-close"]}">
      <i class="${style["i-close-24"]}"></i>
    </div>

    <div class="${style["login-buttons"]}">
      ${button("twitter").outerHTML}
      ${button("google").outerHTML}
      ${button("facebook").outerHTML}
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
      ${button("logout").outerHTML}
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
