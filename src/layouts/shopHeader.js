import { h } from "../utils/dom.js";
import userRoundIcon from "lucide-static/icons/user-round.svg";
import shoppingCartIcon from "lucide-static/icons/shopping-cart.svg";

export const ShopHeader = () => {
  return h(
    "header",
    { class: "sticky top-0 z-50 w-full border-b border-gray-200 bg-white" },

    // ================= TẦNG 1: LOGO & CỤM AUTH / GIỎ HÀNG =================
    h(
      "div",
      { class: "border-b border-gray-100" },
      h(
        "div",
        {
          class:
            "mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 max-sm:flex-wrap",
        },

        h(
          "a",
          {
            href: "#/shop",
            class: "flex items-center gap-2 font-black text-xl tracking-tight",
          },
          h(
            "span",
            {
              class:
                "border-2 border-current px-2 py-0.5 text-xs font-bold uppercase tracking-wider",
            },
            "Shop @",
          ),
          h("span", { class: "italic font-serif text-2xl" }, "QuickShip"),
        ),

        h(
          "div",
          {
            class:
              "flex items-center gap-3 max-sm:w-full max-sm:justify-between max-sm:gap-2",
          },

          h(
            "a",
            {
              href: "#/auth",
              class:
                "flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-xs font-bold transition hover:border-brand-blue",
            },
            h("img", {
              src: userRoundIcon,
              alt: "",
              class: "h-4 w-4 shrink-0 object-contain",
            }),
            h("span", {}, "Đăng nhập / Đăng ký"),
          ),

          h(
            "a",
            {
              href: "#/cart",
              class:
                "flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-xs font-bold transition hover:border-brand-blue",
            },
            h("img", {
              src: shoppingCartIcon,
              alt: "",
              class: "h-4 w-4 shrink-0 object-contain",
            }),
            h("span", {}, "Giỏ hàng (0)"),
          ),
        ),
      ),
    ),

    // ================= TẦNG 2: DANH MỤC SẢN PHẨM =================
    h(
      "div",
      { class: "border-b border-gray-100 py-3" },
      h(
        "nav",
        {
          class:
            "mx-auto flex w-full max-w-7xl flex-wrap items-center justify-start gap-x-8 gap-y-3 px-4 text-xs font-bold uppercase tracking-wider",
        },
        h("a", { href: "#/shop", class: "hover:underline" }, "Tem bưu chính ▾"),
        h(
          "a",
          { href: "#/shop", class: "hover:underline" },
          "Quà tặng & Phụ kiện ▾",
        ),
        h(
          "a",
          { href: "#/shop", class: "hover:underline" },
          "Vật tư đóng gói ▾",
        ),
        h(
          "a",
          { href: "#/shop", class: "hover:underline" },
          "Chương trình ưu đãi ▾",
        ),
        h(
          "a",
          {
            href: "#/",
            class:
              "ml-auto lowercase font-normal text-xs text-gray-500 hover:underline",
          },
          "← Về QuickShip",
        ),
      ),
    ),
  );
};
