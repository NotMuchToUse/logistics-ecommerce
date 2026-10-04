import { h } from "../../utils/dom.js";

export const ShopPage = () => {
  return h(
    "main",
    { class: "w-full pb-20" },

    // =========================================================================
    // 1. BANNER DANH MỤC TRÊN CÙNG (Category Hero Banner)
    // =========================================================================
    h(
      "div",
      { class: "w-full bg-gray-100 border-b border-gray-200 py-10 lg:py-14" },
      h(
        "div",
        { class: "mx-auto flex w-full max-w-7xl flex-col gap-2 px-4" },
        h(
          "div",
          { class: "flex items-center gap-2 text-xs text-gray-500" },
          h("a", { href: "#/", class: "hover:underline" }, "Trang chủ"),
          h("span", {}, "/"),
          h(
            "span",
            { class: "font-semibold text-gray-800" },
            "Vật tư đóng gói & Bao bì bưu chính",
          ),
        ),
        h(
          "h1",
          { class: "text-3xl lg:text-4xl font-black tracking-tight uppercase" },
          "Vật tư đóng gói tiêu chuẩn",
        ),
        h(
          "p",
          { class: "text-sm text-gray-600 max-w-2xl leading-relaxed" },
          "Cung cấp đầy đủ thùng carton đa kích thước, bì thư bọc khí chống sốc, băng dính niêm phong đạt chuẩn vận chuyển bưu chính trong nước và quốc tế.",
        ),
      ),
    ),

    // =========================================================================
    // 2. NỘI DUNG CHÍNH: BỘ LỌC (TRÁI) + LƯỚI SẢN PHẨM (PHẢI)
    // =========================================================================
    h(
      "div",
      { class: "mx-auto w-full max-w-7xl px-4 py-8" },
      h(
        "div",
        { class: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" },

        // -------------------------------------------------------------
        // A. CỘT TRÁI (3 CỘT): SIDEBAR BỘ LỌC (FILTERS)
        // -------------------------------------------------------------
        h(
          "aside",
          {
            class:
              "lg:col-span-3 space-y-6 border border-gray-200 rounded-xl p-5",
          },
          h(
            "div",
            {
              class:
                "flex items-center justify-between border-b border-gray-100 pb-3",
            },
            h("h3", { class: "font-bold text-base" }, "Bộ lọc tìm kiếm"),
            h(
              "button",
              {
                type: "button",
                class: "text-xs text-gray-500 hover:underline cursor-pointer",
              },
              "Đặt lại",
            ),
          ),

          h(
            "div",
            { class: "space-y-3" },
            h(
              "h4",
              {
                class:
                  "font-semibold text-xs uppercase tracking-wider text-gray-700",
              },
              "Loại bao bì",
            ),
            h(
              "div",
              { class: "flex flex-col gap-2 text-sm text-gray-600" },
              h(
                "label",
                { class: "flex items-center gap-2 cursor-pointer" },
                h("input", { type: "checkbox", class: "rounded" }),
                h("span", {}, "Thùng Carton bưu phẩm"),
              ),
              h(
                "label",
                { class: "flex items-center gap-2 cursor-pointer" },
                h("input", { type: "checkbox", class: "rounded" }),
                h("span", {}, "Bì thư bóng khí chống sốc"),
              ),
              h(
                "label",
                { class: "flex items-center gap-2 cursor-pointer" },
                h("input", { type: "checkbox", class: "rounded" }),
                h("span", {}, "Băng keo & Phụ kiện niêm phong"),
              ),
              h(
                "label",
                { class: "flex items-center gap-2 cursor-pointer" },
                h("input", { type: "checkbox", class: "rounded" }),
                h("span", {}, "Màng bọc xốp PE"),
              ),
            ),
          ),

          h(
            "div",
            { class: "space-y-3 border-t border-gray-100 pt-4" },
            h(
              "h4",
              {
                class:
                  "font-semibold text-xs uppercase tracking-wider text-gray-700",
              },
              "Mức giá (VNĐ)",
            ),
            h(
              "div",
              { class: "flex flex-col gap-2 text-sm text-gray-600" },
              h(
                "label",
                { class: "flex items-center gap-2 cursor-pointer" },
                h("input", { type: "radio", name: "price-filter" }),
                h("span", {}, "Dưới 20.000 đ"),
              ),
              h(
                "label",
                { class: "flex items-center gap-2 cursor-pointer" },
                h("input", { type: "radio", name: "price-filter" }),
                h("span", {}, "20.000 đ - 50.000 đ"),
              ),
              h(
                "label",
                { class: "flex items-center gap-2 cursor-pointer" },
                h("input", { type: "radio", name: "price-filter" }),
                h("span", {}, "50.000 đ - 200.000 đ"),
              ),
              h(
                "label",
                { class: "flex items-center gap-2 cursor-pointer" },
                h("input", { type: "radio", name: "price-filter" }),
                h("span", {}, "Trên 200.000 đ"),
              ),
            ),
          ),

          h(
            "div",
            { class: "space-y-3 border-t border-gray-100 pt-4" },
            h(
              "h4",
              {
                class:
                  "font-semibold text-xs uppercase tracking-wider text-gray-700",
              },
              "Kích cỡ (Size)",
            ),
            h(
              "div",
              { class: "grid grid-cols-3 gap-2" },
              h(
                "button",
                {
                  type: "button",
                  class:
                    "py-1.5 border border-gray-200 rounded text-xs font-semibold",
                },
                "Size S",
              ),
              h(
                "button",
                {
                  type: "button",
                  class:
                    "py-1.5 border border-gray-200 rounded text-xs font-semibold",
                },
                "Size M",
              ),
              h(
                "button",
                {
                  type: "button",
                  class:
                    "py-1.5 border border-gray-200 rounded text-xs font-semibold",
                },
                "Size L",
              ),
            ),
          ),
        ),

        // -------------------------------------------------------------
        // B. CỘT PHẢI (9 CỘT): TOOLBAR + LƯỚI SẢN PHẨM + PHÂN TRANG
        // -------------------------------------------------------------
        h(
          "div",
          { class: "lg:col-span-9 space-y-6" },

          h(
            "div",
            {
              class:
                "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-gray-200 rounded-xl p-4",
            },
            h(
              "p",
              { class: "text-sm text-gray-500" },
              "Hiển thị ",
              h("strong", { class: "text-gray-900" }, "6"),
              " trên ",
              h("strong", { class: "text-gray-900" }, "24"),
              " sản phẩm",
            ),
            h(
              "div",
              { class: "flex items-center gap-2 text-sm" },
              h("span", { class: "text-gray-500" }, "Sắp xếp theo:"),
              h(
                "select",
                {
                  class:
                    "border border-gray-200 rounded-lg px-3 py-1.5 outline-none font-medium",
                },
                h("option", {}, "Mới nhất"),
                h("option", {}, "Giá: Thấp đến Cao"),
                h("option", {}, "Giá: Cao đến Thấp"),
                h("option", {}, "Bán chạy nhất"),
              ),
            ),
          ),

          h(
            "div",
            { class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" },

            renderProductCard({
              name: "Thùng Carton 3 lớp tiêu chuẩn Size S",
              code: "BOX-S-01",
              dimensions: "20 x 15 x 10 cm",
              price: "8.000 đ",
              badge: "Bán chạy",
            }),

            renderProductCard({
              name: "Thùng Carton bưu chính Size M",
              code: "BOX-M-02",
              dimensions: "30 x 20 x 15 cm",
              price: "15.000 đ",
            }),

            renderProductCard({
              name: "Thùng Carton hàng nặng Size L",
              code: "BOX-L-03",
              dimensions: "45 x 35 x 20 cm",
              price: "28.000 đ",
              badge: "5 Lớp",
            }),

            renderProductCard({
              name: "Bì thư chống sốc bọc khí Size A5",
              code: "ENV-A5",
              dimensions: "18 x 25 cm",
              price: "5.000 đ",
            }),

            renderProductCard({
              name: "Bì thư bọt khí dày Size A4",
              code: "ENV-A4",
              dimensions: "25 x 35 cm",
              price: "9.000 đ",
            }),

            renderProductCard({
              name: "Cuộn băng keo niêm phong QuickShip 100m",
              code: "TAPE-100",
              dimensions: "Bản rộng 5cm",
              price: "22.000 đ",
            }),
          ),

          h(
            "div",
            {
              class:
                "flex items-center justify-center gap-2 pt-6 border-t border-gray-100",
            },
            h(
              "button",
              {
                type: "button",
                class:
                  "px-3 py-1.5 border border-gray-200 rounded text-sm hover:border-black",
              },
              "← Trước",
            ),
            h(
              "button",
              {
                type: "button",
                class:
                  "px-3.5 py-1.5 border border-black font-bold rounded text-sm",
              },
              "1",
            ),
            h(
              "button",
              {
                type: "button",
                class:
                  "px-3.5 py-1.5 border border-gray-200 rounded text-sm hover:border-black",
              },
              "2",
            ),
            h(
              "button",
              {
                type: "button",
                class:
                  "px-3.5 py-1.5 border border-gray-200 rounded text-sm hover:border-black",
              },
              "3",
            ),
            h(
              "button",
              {
                type: "button",
                class:
                  "px-3 py-1.5 border border-gray-200 rounded text-sm hover:border-black",
              },
              "Sau →",
            ),
          ),
        ),
      ),
    ),
  );
};

// =========================================================================
const renderProductCard = ({ name, code, dimensions, price, badge }) => {
  return h(
    "div",
    {
      class:
        "border border-gray-200 rounded-2xl overflow-hidden p-4 flex flex-col justify-between hover:shadow-md transition",
    },

    h(
      "div",
      { class: "space-y-3" },
      h(
        "div",
        {
          class:
            "relative w-full h-44 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden",
        },
        badge
          ? h(
              "span",
              {
                class:
                  "absolute top-2 left-2 text-[10px] uppercase font-bold px-2 py-0.5 border border-gray-300 rounded bg-white",
              },
              badge,
            )
          : null,
        h(
          "span",
          { class: "text-xs text-gray-400 font-semibold" },
          "Hình ảnh sản phẩm",
        ),
      ),
      h(
        "div",
        { class: "space-y-1" },
        h("span", { class: "text-[11px] font-mono text-gray-400 block" }, code),
        h("h4", { class: "font-bold text-sm line-clamp-2 leading-snug" }, name),
        h("p", { class: "text-xs text-gray-500" }, `Quy cách: ${dimensions}`),
      ),
    ),

    h(
      "div",
      { class: "pt-4 border-t border-gray-100 mt-4 space-y-3" },
      h("div", { class: "text-base font-extrabold" }, price),
      h(
        "button",
        {
          type: "button",
          class:
            "w-full py-2.5 rounded-xl border border-gray-300 font-bold text-xs uppercase tracking-wider hover:border-black cursor-pointer transition",
        },
        "Thêm vào giỏ",
      ),
    ),
  );
};
