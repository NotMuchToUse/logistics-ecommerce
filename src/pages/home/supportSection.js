import { h } from "../../utils/dom.js";

export const supportSection = () => {
  return h(
    "section",
    {
      class: "w-full border-t border-gray-100 bg-[#f3f5f7] py-12 lg:py-24",
    },
    h(
      "div",
      {
        class:
          "mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-4 text-center",
      },
      h(
        "h2",
        {
          class:
            "text-[2rem] font-extrabold leading-tight text-brand-strong lg:text-[2.5rem]",
        },
        "Hỗ trợ & Cập nhật dịch vụ",
      ),
      h(
        "div",
        { class: "flex flex-wrap items-center justify-center gap-4" },
        h(
          "a",
          {
            href: "#/support",
            class:
              "rounded-md border border-brand-blue/15 bg-white px-7 py-2.5 text-sm font-semibold text-brand-strong shadow-[0_10px_24px_rgba(15,23,42,0.03)] transition hover:-translate-y-px hover:shadow-[0_18px_28px_rgba(15,23,42,0.06)]",
          },
          "Trung tâm hỗ trợ",
        ),
        h(
          "a",
          {
            href: "#/support",
            class:
              "rounded-md border border-brand-blue/15 bg-white px-7 py-2.5 text-sm font-semibold text-brand-strong shadow-[0_10px_24px_rgba(15,23,42,0.03)] transition hover:-translate-y-px hover:shadow-[0_18px_28px_rgba(15,23,42,0.06)]",
          },
          "Thông báo dịch vụ",
        ),
      ),
    ),
  );
};
