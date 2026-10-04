import { h } from "../../utils/dom.js";
import arrowRightIcon from "lucide-static/icons/arrow-right.svg";

export const featuresAndServicesSection = () => {
  return h(
    "section",
    { class: "border-t border-gray-100 bg-white py-12 lg:py-16" },
    h(
      "div",
      { class: "mx-auto w-full max-w-7xl px-4" },
      h(
        "div",
        {
          class:
            "grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12",
        },

        // =========================================================================
        h(
          "div",
          { class: "flex flex-col justify-between lg:col-span-4" },
          h(
            "div",
            { class: "space-y-4" },
            h(
              "h2",
              {
                class:
                  "text-[2rem] font-extrabold leading-[1.1] text-brand-strong lg:text-[2.5rem]",
              },
              "Sản phẩm & Dịch vụ nổi bật",
            ),
            h(
              "p",
              { class: "max-w-sm text-sm leading-relaxed text-gray-600" },
              "Khám phá danh mục toàn diện các giải pháp bưu chính và chuyển phát được thiết kế để đáp ứng mọi nhu cầu gửi nhận hàng của bạn.",
            ),
          ),
        ),

        // =========================================================================
        h(
          "div",
          { class: "min-w-0 lg:col-span-8" },
          h(
            "div",
            { class: "grid grid-cols-1 sm:grid-cols-2 gap-6" },
            h(
              "div",
              {
                class:
                  "flex flex-col justify-between overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0_8px_20px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-brand-blue/20 hover:shadow-[0_20px_30px_rgba(15,23,42,0.08)]",
              },
              h(
                "div",
                { class: "w-full h-48 bg-gray-100 overflow-hidden" },
                h("img", {
                  src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&auto=format&fit=crop",
                  alt: "Quy định vận chuyển quốc tế",
                  class: "w-full h-full object-cover",
                }),
              ),
              h(
                "div",
                { class: "p-6 flex flex-col grow justify-between gap-4" },
                h(
                  "div",
                  { class: "space-y-2" },
                  h(
                    "h3",
                    {
                      class:
                        "line-clamp-2 text-base font-extrabold leading-[1.35] text-gray-900",
                    },
                    "Quy định hải quan mới áp dụng từ tháng 7/2026",
                  ),
                  h(
                    "p",
                    {
                      class:
                        "line-clamp-3 text-sm leading-relaxed text-gray-600",
                    },
                    "Cập nhật chính sách khai báo thông quan điện tử và quy định bưu phẩm quốc tế mới nhất nhằm đảm bảo quá trình thông quan nhanh chóng.",
                  ),
                ),
                h(
                  "a",
                  {
                    href: "#/support",
                    class:
                      "inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-strong",
                  },
                  h("span", {}, "Tìm hiểu thêm"),
                  h("img", {
                    src: arrowRightIcon,
                    alt: "",
                    class: "home-arrow-icon",
                  }),
                ),
              ),
            ),

            h(
              "div",
              {
                class:
                  "flex flex-col justify-between overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0_8px_20px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-brand-blue/20 hover:shadow-[0_20px_30px_rgba(15,23,42,0.08)]",
              },
              h(
                "div",
                { class: "w-full h-48 bg-gray-100 overflow-hidden" },
                h("img", {
                  src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&auto=format&fit=crop",
                  alt: "Dịch vụ bưu cục",
                  class: "w-full h-full object-cover",
                }),
              ),
              h(
                "div",
                { class: "p-6 flex flex-col grow justify-between gap-4" },
                h(
                  "div",
                  { class: "space-y-2" },
                  h(
                    "h3",
                    {
                      class:
                        "line-clamp-2 text-base font-extrabold leading-[1.35] text-gray-900",
                    },
                    "Ưu đãi cước gửi hàng số lượng lớn tại bưu cục",
                  ),
                  h(
                    "p",
                    {
                      class:
                        "line-clamp-3 text-sm leading-relaxed text-gray-600",
                    },
                    "Áp dụng mức chiết khấu bậc thang hấp dẫn cho các doanh nghiệp và chủ shop khi gửi hàng trực tiếp tại các trung tâm khai thác bưu chính.",
                  ),
                ),
                h(
                  "a",
                  {
                    href: "#/calculate-rates",
                    class:
                      "inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-strong",
                  },
                  h("span", {}, "Tìm hiểu thêm"),
                  h("img", {
                    src: arrowRightIcon,
                    alt: "",
                    class: "home-arrow-icon",
                  }),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  );
};
