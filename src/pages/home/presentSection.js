import { h } from "../../utils/dom.js";
import arrowRightIcon from "lucide-static/icons/arrow-right.svg";
import arrowUpRightIcon from "lucide-static/icons/arrow-up-right.svg";

export const presentSection = () => {
  return h(
    "section",
    {
      class:
        "overflow-hidden border-t border-gray-100 bg-[#f3f5f7] py-12 lg:py-24",
    },
    h(
      "div",
      { class: "mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 lg:gap-8" },

      // =========================================================================
      h(
        "div",
        {
          class:
            "w-full rounded-lg border border-gray-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)] lg:p-10",
        },
        h(
          "div",
          { class: "grid grid-cols-1 items-center gap-8 md:grid-cols-12" },

          h(
            "div",
            { class: "space-y-4 md:col-span-4" },
            h(
              "h3",
              {
                class:
                  "text-2xl font-extrabold leading-tight text-brand-strong",
              },
              "Cửa hàng bưu chính",
            ),
            h(
              "p",
              { class: "text-sm leading-relaxed text-gray-600" },
              "Từ quà tặng kỷ niệm đến các vật tư đóng gói tiêu chuẩn, đáp ứng đầy đủ mọi nhu cầu giao gửi bưu phẩm của bạn.",
            ),
            h(
              "a",
              {
                href: "#/shop",
                class:
                  "inline-flex items-center gap-2 rounded-md border border-brand-blue/20 bg-brand-light px-5 py-2.5 text-sm font-semibold text-brand-strong transition hover:border-brand-blue/30 hover:bg-brand-light",
              },
              h("span", {}, "Mua sắm ngay"),
              h("img", {
                src: arrowUpRightIcon,
                alt: "",
                class: "h-4 w-4 shrink-0 object-contain",
              }),
            ),
          ),

          h(
            "div",
            {
              class:
                "flex flex-col gap-3 border-y border-gray-100 py-4 text-sm font-semibold md:col-span-5 md:border-y-0 md:border-x md:py-0 md:px-6",
            },
            h(
              "a",
              {
                href: "#/shop",
                class:
                  "flex items-center justify-between gap-2 py-1.5 text-brand-blue hover:underline",
              },
              h("span", {}, "Mua vật tư đóng gói"),
              h("img", {
                src: arrowRightIcon,
                alt: "",
                class: "h-4 w-4 shrink-0 object-contain",
              }),
            ),
            h(
              "a",
              {
                href: "#/shop",
                class:
                  "flex items-center justify-between gap-2 py-1.5 text-brand-blue hover:underline",
              },
              h("span", {}, "Tem bưu chính & Sưu tầm"),
              h("img", {
                src: arrowRightIcon,
                alt: "",
                class: "h-4 w-4 shrink-0 object-contain",
              }),
            ),
            h(
              "a",
              {
                href: "#/shop",
                class:
                  "flex items-center justify-between gap-2 py-1.5 text-brand-blue hover:underline",
              },
              h("span", {}, "Quà tặng & Phụ kiện bưu cục"),
              h("img", {
                src: arrowRightIcon,
                alt: "",
                class: "h-4 w-4 shrink-0 object-contain",
              }),
            ),
          ),

          h(
            "div",
            {
              class:
                "flex items-center justify-center rounded-lg bg-gray-50 p-4 md:col-span-3",
            },
            h(
              "span",
              {
                class:
                  "text-xl font-black tracking-wide text-gray-400 uppercase",
              },
              "Shop @ QuickShip",
            ),
          ),
        ),
      ),

      // =========================================================================
      h(
        "div",
        {
          class:
            "w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.04)]",
        },
        h(
          "div",
          { class: "grid grid-cols-1 items-center md:grid-cols-2" },

          h(
            "div",
            { class: "h-64 w-full overflow-hidden bg-gray-100 md:h-80" },
            h("img", {
              src: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop",
              alt: "Mua sắm quốc tế",
              class: "h-full w-full object-cover",
            }),
          ),

          h(
            "div",
            { class: "space-y-4 p-6 lg:p-10" },
            h(
              "h3",
              {
                class:
                  "text-2xl font-extrabold leading-tight text-brand-strong",
              },
              "Mua sắm từ mọi nơi với vPost",
            ),
            h(
              "p",
              { class: "text-sm leading-relaxed text-gray-600" },
              "Trải nghiệm sự tiện lợi khi mua sắm trực tuyến từ các trang thương mại điện tử nước ngoài. Dễ dàng nhận hàng tại địa chỉ kho quốc tế và chuyển thẳng về tận nhà bạn.",
            ),
            h(
              "a",
              {
                href: "#/shop",
                class:
                  "inline-flex items-center gap-2 rounded-md border border-brand-blue/20 bg-brand-light px-5 py-2.5 text-sm font-semibold text-brand-strong transition hover:border-brand-blue/30 hover:bg-brand-light",
              },
              "Khám phá vPost ↗",
            ),
          ),
        ),
      ),

      // =========================================================================
      h(
        "div",
        {
          class:
            "w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.04)]",
        },
        h(
          "div",
          { class: "grid grid-cols-1 items-center md:grid-cols-2" },

          h(
            "div",
            { class: "order-2 space-y-4 p-6 md:order-1 lg:p-10" },
            h(
              "h3",
              {
                class:
                  "text-2xl font-extrabold leading-tight text-brand-strong",
              },
              "Ứng dụng di động QuickShip",
            ),
            h(
              "p",
              { class: "text-sm leading-relaxed text-gray-600" },
              "Theo dõi lộ trình kiện hàng theo thời gian thực, tính cước vận chuyển, tìm hộp thư và bưu cục gần bạn nhất ngay trên chiếc điện thoại thông minh.",
            ),
            h(
              "a",
              {
                href: "#/support",
                class:
                  "inline-flex items-center gap-2 rounded-md border border-brand-blue/20 bg-brand-light px-5 py-2.5 text-sm font-semibold text-brand-strong transition hover:border-brand-blue/30 hover:bg-brand-light",
              },
              "Tìm hiểu thêm",
            ),
          ),

          h(
            "div",
            {
              class:
                "order-1 h-64 w-full overflow-hidden bg-gray-100 md:order-2 md:h-80",
            },
            h("img", {
              src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
              alt: "Ứng dụng di động QuickShip",
              class: "h-full w-full object-cover",
            }),
          ),
        ),
      ),
    ),
  );
};
