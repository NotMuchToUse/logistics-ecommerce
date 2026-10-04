import { h } from "../utils/dom.js";

export const Footer = () => {
  return h(
    "footer",
    {
      class:
        "mt-auto w-full border-t border-gray-200 bg-[#0c1728] text-slate-200/95 [&_a]:text-slate-200/90 [&_a:hover]:text-white",
    },

    // =========================================================================
    h(
      "div",
      { class: "mx-auto w-full max-w-7xl px-4 py-12 lg:py-16" },
      h(
        "div",
        { class: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8" },

        h(
          "div",
          { class: "space-y-4" },
          h(
            "h4",
            { class: "font-bold text-sm tracking-wide" },
            "Khách hàng cá nhân",
          ),
          h(
            "ul",
            { class: "flex flex-col gap-2.5 text-sm text-gray-600" },
            h(
              "li",
              {},
              h(
                "a",
                { href: "#/shop", class: "hover:underline" },
                "Gửi trong nước",
              ),
            ),
            h(
              "li",
              {},
              h(
                "a",
                { href: "#/shop", class: "hover:underline" },
                "Gửi quốc tế",
              ),
            ),
            h(
              "li",
              {},
              h(
                "a",
                { href: "#/calculate-rates", class: "hover:underline" },
                "Bảng giá cước",
              ),
            ),
            h(
              "li",
              {},
              h(
                "a",
                { href: "#/calculate-rates", class: "hover:underline" },
                "Tính phí bưu phẩm",
              ),
            ),
          ),
        ),

        h(
          "div",
          { class: "space-y-4" },
          h(
            "h4",
            { class: "font-bold text-sm tracking-wide" },
            "Khách hàng doanh nghiệp",
          ),
          h(
            "ul",
            { class: "flex flex-col gap-2.5 text-sm text-gray-600" },
            h(
              "li",
              {},
              h(
                "a",
                { href: "#/support", class: "hover:underline" },
                "Doanh nghiệp vừa và nhỏ",
              ),
            ),
            h(
              "li",
              {},
              h(
                "a",
                { href: "#/support", class: "hover:underline" },
                "Khách hàng lớn (Enterprise)",
              ),
            ),
            h(
              "li",
              {},
              h(
                "a",
                { href: "#/support", class: "hover:underline" },
                "Giải pháp chuỗi cung ứng",
              ),
            ),
          ),
        ),

        h(
          "div",
          { class: "space-y-4" },
          h("h4", { class: "font-bold text-sm tracking-wide" }, "Về QuickShip"),
          h(
            "ul",
            { class: "flex flex-col gap-2.5 text-sm text-gray-600" },
            h(
              "li",
              {},
              h(
                "a",
                { href: "#/support", class: "hover:underline" },
                "Giới thiệu công ty",
              ),
            ),
            h(
              "li",
              {},
              h(
                "a",
                { href: "#/support", class: "hover:underline" },
                "Trung tâm báo chí",
              ),
            ),
            h(
              "li",
              {},
              h(
                "a",
                { href: "#/support", class: "hover:underline" },
                "Quan hệ cổ đông",
              ),
            ),
            h(
              "li",
              {},
              h(
                "a",
                { href: "#/support", class: "hover:underline" },
                "Cơ hội nghề nghiệp",
              ),
            ),
          ),
        ),

        h(
          "div",
          { class: "col-span-2 lg:col-span-2 space-y-4" },
          h(
            "div",
            { class: "flex items-center gap-2" },
            h(
              "svg",
              {
                class: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
              },
              h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z",
              }),
            ),
            h("h4", { class: "font-bold text-sm" }, "Trợ giúp & Hỗ trợ"),
          ),

          h(
            "div",
            {},
            h(
              "a",
              {
                href: "#/support",
                class:
                  "inline-flex items-center gap-1.5 text-sm font-semibold hover:underline",
              },
              h("span", {}, "Nhận trợ giúp hoặc liên hệ ngay"),
              h("span", {}, "→"),
            ),
          ),

          h(
            "div",
            { class: "flex items-center gap-3 pt-4" },
            h(
              "a",
              {
                href: "#",
                class:
                  "w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center font-bold text-xs hover:border-black transition",
              },
              "f",
            ),
            h(
              "a",
              {
                href: "#",
                class:
                  "w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center font-bold text-xs hover:border-black transition",
              },
              "in",
            ),
            h(
              "a",
              {
                href: "#",
                class:
                  "w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center font-bold text-xs hover:border-black transition",
              },
              "li",
            ),
          ),
        ),
      ),
    ),
    // =========================================================================
    h(
      "div",
      { class: "border-t border-gray-100 py-6" },
      h(
        "div",
        {
          class:
            "mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 text-xs text-gray-400 md:flex-row",
        },

        h(
          "div",
          { class: "flex flex-wrap items-center gap-4 sm:gap-6 font-medium" },
          h("a", { href: "#", class: "hover:underline" }, "Sơ đồ trang web"),
          h("a", { href: "#", class: "hover:underline" }, "Điều khoản sử dụng"),
          h("a", { href: "#", class: "hover:underline" }, "Chính sách bảo mật"),
          h("a", { href: "#", class: "hover:underline" }, "An toàn trực tuyến"),
          h("a", { href: "#", class: "hover:underline" }, "Ấn phẩm bưu chính"),
        ),

        h("p", {}, "© 2026 QuickShip Logistics. Bảo lưu mọi quyền."),
      ),
    ),
  );
};
