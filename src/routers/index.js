import Navigo from "navigo";
import { HomePage } from "../pages/home/homePage.js";
import { ShopPage } from "../pages/shop/shopPage.js";
import { AuthPage } from "../pages/auth/authPage.js";
import { Header } from "../layouts/header.js";
import { ShopHeader } from "../layouts/shopHeader.js";

export const router = new Navigo("/", { hash: true });

const renderView = (pageComponent, isShop = false) => {
  const headerContainer = document.querySelector("#app-header");
  if (headerContainer) {
    headerContainer.replaceChildren(isShop ? ShopHeader() : Header());
  }

  const content = document.querySelector("#app-content");
  if (content) {
    content.replaceChildren(pageComponent);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

export const initRouter = () => {
  router
    .on("/", () => {
      renderView(HomePage(), false);
    })
    .on("/shop", () => {
      renderView(ShopPage(), true);
    })
    .on("/auth", () => {
      renderView(AuthPage(), true);
    })
    .on("/login", () => {
      renderView(AuthPage(), true);
    })

    .on("/track", () => {
      renderView(
        createPlaceholderPage(
          "Tra cứu mã vận đơn",
          "Chi tiết lộ trình kiện hàng.",
        ),
        false,
      );
    })
    .on("/calculate-rates", () => {
      renderView(
        createPlaceholderPage("Tính cước vận chuyển", "Công cụ tính cước."),
        false,
      );
    })
    .on("/locate-us", () => {
      renderView(
        createPlaceholderPage("Tìm bưu cục gần nhất", "Bản đồ bưu cục."),
        false,
      );
    })
    .on("/find-postal-code", () => {
      renderView(
        createPlaceholderPage("Tra cứu mã bưu chính", "Mã bưu chính."),
        false,
      );
    })
    .on("/support", () => {
      renderView(
        createPlaceholderPage("Trung tâm hỗ trợ", "Câu hỏi thường gặp."),
        false,
      );
    })
    .notFound(() => {
      renderView(createPlaceholderPage("404", "Không tìm thấy trang."), false);
    })
    .resolve();
};

import { h } from "../utils/dom.js";
const createPlaceholderPage = (title, desc) => {
  return h(
    "div",
    { class: "mx-auto w-full max-w-7xl space-y-4 px-4 py-20 text-center" },
    h("h1", { class: "text-3xl font-bold" }, title),
    h("p", { class: "text-gray-500" }, desc),
    h(
      "a",
      {
        href: "#/",
        class:
          "inline-block mt-4 px-6 py-2 border border-gray-300 rounded-lg text-sm font-semibold",
      },
      "← Quay lại",
    ),
  );
};
