import { h } from "../../utils/dom.js";
import { trackingItemService } from "../../services/tracking.js";
import calculatorIcon from "lucide-static/icons/calculator.svg";
import mapPinIcon from "lucide-static/icons/map-pin.svg";
import mailboxIcon from "lucide-static/icons/mailbox.svg";
import packageIcon from "lucide-static/icons/package.svg";
import packageCheckIcon from "lucide-static/icons/package-check.svg";
import arrowRightIcon from "lucide-static/icons/arrow-right.svg";

export const heroSection = () => {
  const inputEl = h("input", {
    type: "text",
    placeholder: "Nhập mã vận đơn (VD: VN987654321)...",
    class:
      "min-w-0 w-full flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-inner shadow-slate-900/5 outline-none",
  });

  const resultBox = h("div", { class: "mt-3" });

  const handleTracking = async () => {
    const code = inputEl.value.trim();

    if (!code) {
      resultBox.innerHTML = "";
      resultBox.appendChild(
        h(
          "p",
          { class: "text-xs text-red-500 font-semibold" },
          "⚠️ Vui lòng nhập mã bưu gửi!",
        ),
      );
      return;
    }

    // Hiển thị chữ đang tìm trong lúc chờ API
    resultBox.innerHTML = "";
    resultBox.appendChild(
      h("p", { class: "text-xs text-gray-500 italic" }, "🔍 Đang tra cứu..."),
    );

    const data = await trackingItemService(code);

    // Xóa chữ đang tra cứu đi
    resultBox.innerHTML = "";

    // TRƯỜNG HỢP 1: Gõ bậy bạ không có trong DB
    if (!data) {
      resultBox.appendChild(
        h(
          "div",
          {
            class:
              "rounded-lg border border-red-200 bg-red-50 p-3 text-xs text-red-600 font-medium",
          },
          "❌ Không tìm thấy thông tin mã bưu gửi này!",
        ),
      );
      return;
    }

    // TRƯỜNG HỢP 2: CÓ DATA -> VẼ GIAO DIỆN
    // 2.1. Hộp tóm tắt thông tin bưu kiện
    const infoBox = h(
      "div",
      {
        class:
          "flex flex-col gap-1 rounded-lg border border-blue-100 bg-blue-50/60 p-3 text-xs",
      },
      h(
        "div",
        { class: "font-bold text-brand-strong" },
        `Mã vận đơn: ${data.id}`,
      ),
      h(
        "div",
        { class: "text-gray-600" },
        `Gửi từ: ${data.sender} ➔ Đến: ${data.receiver}`,
      ),
      h("div", { class: "text-gray-500" }, `Dịch vụ: ${data.serviceType}`),
    );

    // 2.2. Danh sách Timeline các mốc sự kiện (Dùng .map lặp qua data.events)
    const timelineBox = h(
      "div",
      {
        class:
          "mt-2 flex flex-col gap-3 border-l-2 border-brand-blue pl-3 ml-2 text-xs",
      },
      ...data.events.map((ev) =>
        h(
          "div",
          { class: "relative flex flex-col" },
          // Chấm tròn mốc thời gian
          h("span", {
            class:
              "absolute -left-[19px] top-1 h-2.5 w-2.5 rounded-full bg-brand-blue ring-4 ring-white",
          }),
          h("span", { class: "font-bold text-gray-800" }, ev.status),
          h("span", { class: "text-gray-600" }, ev.location),
          h("span", { class: "text-[10px] text-gray-400 mt-0.5" }, ev.time),
        ),
      ),
    );

    // Nhét 2 hộp vừa vẽ vào resultBox
    resultBox.appendChild(infoBox);
    resultBox.appendChild(timelineBox);
  };

  const btnSearch = h(
    "button",
    {
      type: "button",
      class:
        "min-w-[4.75rem] shrink-0 whitespace-nowrap rounded-md border border-brand-blue bg-brand-blue px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-px hover:opacity-95 cursor-pointer",
      onclick: handleTracking,
    },
    "Tra cứu",
  );

  return h(
    "section",
    { class: "bg-[#f4f6f8] py-8 lg:py-[3.25rem]" },
    h(
      "div",
      { class: "mx-auto w-full max-w-7xl px-4" },

      // =========================================================================
      h(
        "div",
        {
          class:
            "grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10",
        },

        h(
          "div",
          { class: "lg:col-span-7 flex flex-col gap-6" },
          h(
            "h1",
            {
              class:
                "max-md:max-w-[20ch] text-[2.35rem] leading-[1.08] font-extrabold text-brand-strong lg:text-[3.5rem]",
            },
            "Kết nối cộng đồng bằng dịch vụ giao hàng tin cậy",
          ),
          h(
            "div",
            {
              class: "w-full overflow-hidden rounded-lg border border-gray-200",
            },
            h("img", {
              src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop",
              alt: "Dịch vụ giao hàng",
              class: "aspect-[1.9/1] max-h-[360px] w-full object-cover",
            }),
          ),
        ),

        h(
          "div",
          { class: "lg:col-span-5" },
          h(
            "div",
            {
              class:
                "flex flex-col gap-6 rounded-xl border border-gray-200 bg-white p-5 shadow-[0_14px_36px_rgba(15,23,42,0.06)] lg:p-8 max-md:gap-5",
            },

            h(
              "h2",
              {
                class:
                  "text-[1.5rem] font-extrabold leading-tight text-brand-strong lg:text-[1.8rem]",
              },
              "Tra cứu bưu gửi",
            ),
            // +++++++++++ Cụm input tracking
            h(
              "div",
              { class: "flex min-w-0 rounded-lg border border-gray-300 p-1.5" },
              inputEl,
              btnSearch,
            ),
            resultBox,

            // ++++++++++
            h(
              "div",
              {
                class: "flex flex-col gap-2 border-t border-gray-100 pt-4",
              },

              h(
                "a",
                {
                  href: "#/calculate-rates",
                  class:
                    "flex min-h-12 items-center gap-3 rounded-lg border border-transparent px-3 py-2 transition hover:translate-x-0.5 hover:border-brand-blue/15 hover:bg-brand-light",
                },
                h("img", { src: calculatorIcon, alt: "", class: "home-icon" }),
                h(
                  "span",
                  { class: "text-sm font-semibold text-brand-strong" },
                  "Tính cước vận chuyển",
                ),
              ),

              h(
                "a",
                {
                  href: "#/locate-us",
                  class:
                    "flex min-h-12 items-center gap-3 rounded-lg border border-transparent px-3 py-2 transition hover:translate-x-0.5 hover:border-brand-blue/15 hover:bg-brand-light",
                },
                h("img", { src: mapPinIcon, alt: "", class: "home-icon" }),
                h(
                  "span",
                  { class: "text-sm font-semibold text-brand-strong" },
                  "Tìm bưu cục gần nhất",
                ),
              ),

              h(
                "a",
                {
                  href: "#/find-postal-code",
                  class:
                    "flex min-h-12 items-center gap-3 rounded-lg border border-transparent px-3 py-2 transition hover:translate-x-0.5 hover:border-brand-blue/15 hover:bg-brand-light",
                },
                h("img", { src: mailboxIcon, alt: "", class: "home-icon" }),
                h(
                  "span",
                  { class: "text-sm font-semibold text-brand-strong" },
                  "Tra cứu mã bưu chính",
                ),
              ),
            ),
          ),
        ),
      ),

      // =========================================================================
      h(
        "div",
        {
          class:
            "mt-11 grid grid-cols-1 gap-7 border-t border-gray-100 pt-6 md:grid-cols-2 lg:gap-12 lg:pt-8",
        },

        h(
          "div",
          { class: "flex min-w-0 flex-col gap-4" },
          h(
            "div",
            { class: "inline-flex items-center gap-2 font-bold text-lg" },
            h("img", { src: packageIcon, alt: "", class: "home-icon" }),
            h("span", {}, "Gửi hàng"),
          ),
          h(
            "p",
            { class: "text-sm text-gray-600 leading-relaxed" },
            "Gửi bưu kiện trong nước và quốc tế dễ dàng, nhanh chóng và an toàn. Các giải pháp được thiết kế linh hoạt phù hợp với nhu cầu của bạn.",
          ),
          h(
            "div",
            {
              class:
                "flex flex-col gap-2 pt-2 text-sm font-semibold text-brand-blue",
            },
            h(
              "a",
              { href: "#/shop", class: "flex items-center gap-1.5" },
              h("img", {
                src: arrowRightIcon,
                alt: "",
                class: "home-arrow-icon",
              }),
              h("span", {}, "Gửi bưu kiện trong nước"),
            ),
            h(
              "a",
              { href: "#/shop", class: "flex items-center gap-1.5" },
              h("img", {
                src: arrowRightIcon,
                alt: "",
                class: "home-arrow-icon",
              }),
              h("span", {}, "Gửi bưu kiện quốc tế"),
            ),
          ),
        ),

        h(
          "div",
          { class: "flex min-w-0 flex-col gap-4" },
          h(
            "div",
            { class: "inline-flex items-center gap-2 font-bold text-lg" },
            h("img", { src: packageCheckIcon, alt: "", class: "home-icon" }),
            h("span", {}, "Nhận hàng"),
          ),
          h(
            "p",
            { class: "text-sm text-gray-600 leading-relaxed" },
            "Quản lý bưu phẩm của bạn an toàn với các giải pháp thông minh: nhận hàng linh hoạt tại bưu cục, tủ khóa tự động hoặc chuyển tiếp bưu phẩm.",
          ),
          h(
            "div",
            {
              class:
                "flex flex-col gap-2 pt-2 text-sm font-semibold text-brand-blue",
            },
            h(
              "a",
              { href: "#/locate-us", class: "flex items-center gap-1.5" },
              h("img", {
                src: arrowRightIcon,
                alt: "",
                class: "home-arrow-icon",
              }),
              h("span", {}, "Điểm nhận hàng bưu cục"),
            ),
            h(
              "a",
              { href: "#/locate-us", class: "flex items-center gap-1.5" },
              h("img", {
                src: arrowRightIcon,
                alt: "",
                class: "home-arrow-icon",
              }),
              h("span", {}, "Tủ khóa thông minh nhận hàng 24/7"),
            ),
            h(
              "a",
              { href: "#/support", class: "flex items-center gap-1.5" },
              h("img", {
                src: arrowRightIcon,
                alt: "",
                class: "home-arrow-icon",
              }),
              h("span", {}, "Dịch vụ lưu giữ bưu phẩm tạm thời"),
            ),
            h(
              "a",
              { href: "#/support", class: "flex items-center gap-1.5" },
              h("img", {
                src: arrowRightIcon,
                alt: "",
                class: "home-arrow-icon",
              }),
              h("span", {}, "Dịch vụ chuyển tiếp bưu phẩm"),
            ),
          ),
        ),
      ),
    ),
  );
};
