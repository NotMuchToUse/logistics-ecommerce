import { h } from "../utils/dom.js";
import headsetIcon from "lucide-static/icons/headset.svg";
import settingsIcon from "lucide-static/icons/settings-2.svg";
import chevronDownIcon from "lucide-static/icons/chevron-down.svg";

export const Header = () => {
  return h(
    "header",
    { class: "sticky top-0 z-50 w-full border-b border-gray-200 bg-white" },

    h(
      "div",
      { class: "border-b border-gray-100" },
      h(
        "div",
        {
          class:
            "mx-auto flex min-h-[72px] w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 max-md:min-h-0 max-md:flex-wrap",
        },

        h(
          "a",
          {
            href: "#/",
            class:
              "flex items-center gap-2 text-xl font-bold tracking-tight text-brand-strong",
          },
          h("span", {}, "QuickShip"),
        ),

        h(
          "div",
          { class: "flex items-center gap-4 text-sm font-medium lg:gap-6" },

          h(
            "a",
            {
              href: "#/support",
              class:
                "flex items-center gap-1.5 transition-colors hover:text-brand-blue",
            },
            h("img", {
              src: headsetIcon,
              alt: "",
              class: "h-4 w-4 shrink-0 object-contain",
            }),
            h("span", {}, "Help & Support"),
          ),

          h(
            "div",
            { class: "relative group py-2" },
            h(
              "button",
              {
                class:
                  "flex items-center gap-1.5 cursor-pointer outline-none transition-colors hover:text-brand-blue",
              },
              h("img", {
                src: settingsIcon,
                alt: "",
                class: "h-4 w-4 shrink-0 object-contain",
              }),
              h("span", {}, "Tools"),
              h("img", {
                src: chevronDownIcon,
                alt: "",
                class: "h-3 w-3 shrink-0 object-contain",
              }),
            ),

            h(
              "div",
              {
                class:
                  "hidden group-hover:block absolute right-0 top-full w-52 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50",
              },
              h(
                "a",
                { href: "#/track", class: "block px-4 py-2 hover:bg-gray-50" },
                "Track Items",
              ),
              h(
                "a",
                {
                  href: "#/calculate-rates",
                  class: "block px-4 py-2 hover:bg-gray-50",
                },
                "Calculate Rates",
              ),
              h(
                "a",
                {
                  href: "#/locate-us",
                  class: "block px-4 py-2 hover:bg-gray-50",
                },
                "Locate Us",
              ),
              h(
                "a",
                {
                  href: "#/find-postal-code",
                  class: "block px-4 py-2 hover:bg-gray-50",
                },
                "Find a Postal Code",
              ),
            ),
          ),
        ),
      ),
    ),

    // ================= TẦNG 2: NAVBAR DƯỚI =================
    h(
      "div",
      {},
      h(
        "nav",
        {
          class:
            "mx-auto flex w-full max-w-7xl items-center justify-start gap-6 px-4 py-3 text-sm font-semibold lg:gap-8",
        },
        h(
          "a",
          { href: "#/", class: "transition-colors hover:text-brand-blue" },
          "Trang chủ",
        ),
        h(
          "a",
          { href: "#/shop", class: "transition-colors hover:text-brand-blue" },
          "Cửa hàng",
        ),
      ),
    ),
  );
};
