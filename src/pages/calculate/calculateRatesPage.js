import { h } from "../../utils/dom.js";
import { calculateRates } from "../../services/calculate.js";

export const calculateRatesPage = () => {
  // --- STATE LƯU TRỮ LỰA CHỌN CỦA NGƯỜI DÙNG ---
  let currentScope = "DOMESTIC"; // DOMESTIC hoặc OVERSEAS
  let currentItemType = "PACKAGE"; // PACKAGE hoặc MAIL

  // 1. TABS: TRONG NƯỚC / QUỐC TẾ
  const tabDomestic = h(
    "button",
    {
      type: "button",
      class:
        "flex-1 py-4 text-center font-bold text-base text-brand-strong border-b-2 border-brand-strong bg-white cursor-pointer transition",
      onclick: () => switchScope("DOMESTIC"),
    },
    "Trong nước (Domestic)",
  );

  const tabOverseas = h(
    "button",
    {
      type: "button",
      class:
        "flex-1 py-4 text-center font-semibold text-base text-gray-500 bg-gray-50 hover:bg-gray-100 cursor-pointer transition",
      onclick: () => switchScope("OVERSEAS"),
    },
    "Quốc tế (Overseas)",
  );

  const switchScope = (scope) => {
    currentScope = scope;
    if (scope === "DOMESTIC") {
      tabDomestic.className =
        "flex-1 py-4 text-center font-bold text-base text-brand-strong border-b-2 border-brand-strong bg-white cursor-pointer transition";
      tabOverseas.className =
        "flex-1 py-4 text-center font-semibold text-base text-gray-500 bg-gray-50 hover:bg-gray-100 cursor-pointer transition";
    } else {
      tabOverseas.className =
        "flex-1 py-4 text-center font-bold text-base text-brand-strong border-b-2 border-brand-strong bg-white cursor-pointer transition";
      tabDomestic.className =
        "flex-1 py-4 text-center font-semibold text-base text-gray-500 bg-gray-50 hover:bg-gray-100 cursor-pointer transition";
    }
  };

  // 2. TOGGLE: PACKAGE HAY MAIL
  const btnPackage = h(
    "button",
    {
      type: "button",
      class:
        "flex-1 py-2.5 rounded-lg border-2 border-brand-strong text-brand-strong font-bold text-sm bg-blue-50/20 cursor-pointer transition",
      onclick: () => switchItemType("PACKAGE"),
    },
    "Package (Bưu kiện)",
  );

  const btnMail = h(
    "button",
    {
      type: "button",
      class:
        "flex-1 py-2.5 rounded-lg border border-gray-300 text-gray-600 font-medium text-sm hover:border-gray-400 cursor-pointer transition",
      onclick: () => switchItemType("MAIL"),
    },
    "Mail (Thư từ)",
  );

  const switchItemType = (type) => {
    currentItemType = type;
    if (type === "PACKAGE") {
      btnPackage.className =
        "flex-1 py-2.5 rounded-lg border-2 border-brand-strong text-brand-strong font-bold text-sm bg-blue-50/20 cursor-pointer transition";
      btnMail.className =
        "flex-1 py-2.5 rounded-lg border border-gray-300 text-gray-600 font-medium text-sm hover:border-gray-400 cursor-pointer transition";
      sizeFieldWrapper.style.display = "flex"; // Hiện mục chọn kích thước
    } else {
      btnMail.className =
        "flex-1 py-2.5 rounded-lg border-2 border-brand-strong text-brand-strong font-bold text-sm bg-blue-50/20 cursor-pointer transition";
      btnPackage.className =
        "flex-1 py-2.5 rounded-lg border border-gray-300 text-gray-600 font-medium text-sm hover:border-gray-400 cursor-pointer transition";
      sizeFieldWrapper.style.display = "none"; // Ẩn chọn kích thước nếu là thư từ
    }
  };

  // 3. INPUT CÂN NẶNG
  const weightInput = h("input", {
    type: "number",
    step: "0.1",
    min: "0.1",
    value: "1.0",
    class:
      "flex-1 px-3 py-2.5 rounded-l-lg border border-gray-300 text-sm outline-none focus:border-brand-strong",
  });

  const weightUnit = h(
    "div",
    {
      class:
        "px-4 py-2.5 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg text-sm font-semibold text-gray-700",
    },
    "Kg",
  );

  // 4. DROPDOWN CHỌN KÍCH CỠ (Theo đúng ảnh số 2)
  const sizeSelect = h(
    "select",
    {
      class:
        "w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 outline-none focus:border-brand-strong bg-white cursor-pointer",
    },
    h("option", { value: "SMALL" }, "Small — 32.4 × 22.9 × 6.5 cm"),
    h("option", { value: "MEDIUM" }, "Medium — 32 × 25 × 10 cm"),
    h("option", { value: "LARGE" }, "Large — 60 × 40 × 30 cm"),
    h(
      "option",
      { value: "OVERSIZE" },
      "Oversize — L up to 1.5m, L + 2W + 2H < 3m",
    ),
  );

  const sizeFieldWrapper = h(
    "div",
    { class: "flex flex-col gap-2" },
    h(
      "label",
      { class: "font-bold text-sm text-gray-900" },
      "What is the size? (Kích cỡ bưu gửi)",
    ),
    sizeSelect,
  );

  // 5. KHU VỰC HIỂN THỊ KẾT QUẢ
  const resultBox = h("div", { class: "mt-4 flex flex-col gap-2" });

  // 6. XỬ LÝ SỰ KIỆN KHI BẤM "CALCULATE"
  const handleCalculate = async () => {
    resultBox.innerHTML = "";
    resultBox.appendChild(
      h(
        "p",
        { class: "text-sm text-gray-500 italic" },
        "Đang tính cước phí...",
      ),
    );

    try {
      const result = await calculateRates({
        scope: currentScope,
        itemType: currentItemType,
        weightKg: weightInput.value,
        size: sizeSelect.value,
      });

      resultBox.innerHTML = "";
      resultBox.appendChild(
        h(
          "div",
          {
            class:
              "rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 flex flex-col gap-2",
          },
          h(
            "div",
            { class: "flex justify-between items-center" },
            h(
              "span",
              { class: "text-xs font-semibold text-gray-600 uppercase" },
              `Gói: ${result.itemType} (${result.scope})`,
            ),
            h(
              "span",
              { class: "text-xs text-emerald-700 font-medium" },
              `Thời gian dự kiến: ${result.estimatedDays}`,
            ),
          ),
          h(
            "div",
            {
              class:
                "flex justify-between items-baseline pt-1 border-t border-emerald-200/60",
            },
            h(
              "span",
              { class: "text-sm font-bold text-gray-800" },
              "Cước phí ước tính:",
            ),
            h(
              "span",
              { class: "text-2xl font-extrabold text-emerald-700" },
              result.formattedPrice,
            ),
          ),
          h(
            "p",
            { class: "text-[11px] text-gray-500" },
            "* Giá cước đã đồng bộ từ cơ sở dữ liệu hệ thống.",
          ),
        ),
      );
    } catch (err) {
      resultBox.innerHTML = "";
      resultBox.appendChild(
        h(
          "p",
          { class: "text-xs font-semibold text-red-500" },
          `⚠️ ${err.message}`,
        ),
      );
    }
  };

  const btnCalculate = h(
    "button",
    {
      type: "button",
      class:
        "rounded-full bg-brand-strong px-8 py-3 text-sm font-bold text-white transition hover:opacity-90 cursor-pointer shadow-sm",
      onclick: handleCalculate,
    },
    "Calculate (Tính cước)",
  );

  // ==========================================
  // RETURN GIAO DIỆN KHUNG CARD
  // ==========================================
  return h(
    "div",
    { class: "mx-auto w-full max-w-2xl px-4 py-10" },
    h(
      "div",
      {
        class:
          "overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm",
      },

      // Tabs Header
      h(
        "div",
        { class: "flex border-b border-gray-200" },
        tabDomestic,
        tabOverseas,
      ),

      // Form Body
      h(
        "div",
        { class: "flex flex-col gap-6 p-6 sm:p-8" },

        // Field 1: Package vs Mail
        h(
          "div",
          { class: "flex flex-col gap-2" },
          h(
            "label",
            { class: "font-bold text-sm text-gray-900" },
            "What are you sending? (Bạn gửi gì?)",
          ),
          h("div", { class: "flex gap-3" }, btnPackage, btnMail),
        ),

        // Field 2: Weight
        h(
          "div",
          { class: "flex flex-col gap-2" },
          h(
            "label",
            { class: "font-bold text-sm text-gray-900" },
            "What is the weight? (Khối lượng kiện hàng)",
          ),
          h("div", { class: "flex" }, weightInput, weightUnit),
        ),

        // Field 3: Size
        sizeFieldWrapper,

        // Actions
        h(
          "div",
          { class: "flex items-center justify-between pt-2" },
          btnCalculate,
          h(
            "a",
            {
              href: "#/rates-info",
              class: "text-sm font-medium text-brand-strong hover:underline",
            },
            "See rate tables (Bảng cước chi tiết)",
          ),
        ),

        // Result Display Box
        resultBox,
      ),
    ),
  );
};
