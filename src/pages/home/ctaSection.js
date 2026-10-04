import { h } from "../../utils/dom.js";
import arrowRightIcon from "lucide-static/icons/arrow-right.svg";

export const ctaSection = () => {
  return h(
    "section",
    { class: "border-t border-gray-100 bg-white py-12 lg:py-24" },
    h(
      "div",
      { class: "mx-auto w-full max-w-7xl px-4" },
      h(
        "div",
        {
          class: "grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-16",
        },
        h(
          "div",
          { class: "space-y-4" },
          h(
            "h2",
            {
              class:
                "text-[2.2rem] font-extrabold leading-[1.05] text-brand-strong lg:text-[3rem]",
            },
            "Khởi đầu kinh doanh: Chúng tôi luôn có giải pháp cho bạn",
          ),
          h(
            "p",
            { class: "text-sm leading-relaxed text-gray-600 lg:text-base" },
            "Nếu bạn đang ấp ủ kế hoạch khởi nghiệp và đang tìm kiếm giải pháp xuất nhập khẩu, vận chuyển hàng hóa tối ưu; hãy khám phá ngay các Gói Giải Pháp Doanh Nghiệp giúp hiện thực hóa tầm nhìn của bạn một cách đơn giản, tiết kiệm và hiệu quả nhất.",
          ),
        ),
        h(
          "div",
          { class: "flex flex-col gap-4" },
          h(
            "div",
            {
              class:
                "h-64 w-full overflow-hidden rounded-lg border border-gray-200 lg:h-80",
            },
            h("img", {
              src: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&auto=format&fit=crop",
              alt: "Giải pháp bưu chính cho doanh nghiệp",
              class: "h-full w-full object-cover",
            }),
          ),
          h(
            "a",
            {
              href: "#/support",
              class:
                "inline-flex items-center gap-2 pt-1 text-sm font-bold text-brand-strong hover:underline lg:text-base",
            },
            h("span", {}, "Khám phá giải pháp doanh nghiệp"),
            h("img", {
              src: arrowRightIcon,
              alt: "",
              class: "h-4 w-4 shrink-0 object-contain",
            }),
          ),
        ),
      ),
    ),
  );
};
