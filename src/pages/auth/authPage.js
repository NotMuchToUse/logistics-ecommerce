import { h } from "../../utils/dom.js";

export const AuthPage = () => {
  let currentTab = "login";

  const formContainer = h("div", { class: "mt-6" });

  const tabLoginBtn = h(
    "button",
    {
      type: "button",
      class:
        "flex-1 py-3 text-sm font-bold border-b-2 border-black cursor-pointer transition",
    },
    "Đăng nhập",
  );

  const tabRegisterBtn = h(
    "button",
    {
      type: "button",
      class:
        "flex-1 py-3 text-sm font-semibold border-b-2 border-transparent text-gray-400 hover:text-black cursor-pointer transition",
    },
    "Đăng ký tài khoản",
  );

  const switchTab = (tab) => {
    currentTab = tab;
    if (tab === "login") {
      tabLoginBtn.className =
        "flex-1 py-3 text-sm font-bold border-b-2 border-black cursor-pointer transition";
      tabRegisterBtn.className =
        "flex-1 py-3 text-sm font-semibold border-b-2 border-transparent text-gray-400 hover:text-black cursor-pointer transition";
      formContainer.replaceChildren(renderLoginForm());
    } else {
      tabRegisterBtn.className =
        "flex-1 py-3 text-sm font-bold border-b-2 border-black cursor-pointer transition";
      tabLoginBtn.className =
        "flex-1 py-3 text-sm font-semibold border-b-2 border-transparent text-gray-400 hover:text-black cursor-pointer transition";
      formContainer.replaceChildren(renderRegisterForm());
    }
  };

  tabLoginBtn.addEventListener("click", () => switchTab("login"));
  tabRegisterBtn.addEventListener("click", () => switchTab("register"));

  formContainer.appendChild(renderLoginForm());

  return h(
    "main",
    {
      class:
        "w-full py-12 lg:py-20 flex items-center justify-center bg-gray-50/50",
    },
    h(
      "div",
      { class: "mx-auto w-full max-w-md px-4" },
      h(
        "div",
        {
          class:
            "bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 shadow-sm space-y-6",
        },

        h(
          "div",
          { class: "text-center space-y-2" },
          h(
            "h1",
            { class: "text-2xl font-black tracking-tight" },
            "Tài khoản QuickShip",
          ),
          h(
            "p",
            { class: "text-xs text-gray-500" },
            "Đăng nhập để theo dõi đơn mua vật tư và quản lý kiện hàng",
          ),
        ),

        h(
          "div",
          { class: "flex border-b border-gray-200" },
          tabLoginBtn,
          tabRegisterBtn,
        ),

        formContainer,
      ),
    ),
  );
};

// =========================================================================
// 1. FORM ĐĂNG NHẬP (LOGIN FORM)
// =========================================================================
const renderLoginForm = () => {
  return h(
    "form",
    { class: "space-y-4" },
    h(
      "div",
      { class: "space-y-1" },
      h(
        "label",
        {
          class:
            "block text-xs font-bold uppercase tracking-wider text-gray-700",
        },
        "Email",
      ),
      h("input", {
        type: "email",
        placeholder: "name@example.com",
        class:
          "w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm outline-none focus:border-black",
      }),
    ),

    h(
      "div",
      { class: "space-y-1" },
      h(
        "div",
        { class: "flex items-center justify-between" },
        h(
          "label",
          { class: "text-xs font-bold uppercase tracking-wider text-gray-700" },
          "Mật khẩu",
        ),
        h(
          "a",
          { href: "#", class: "text-xs text-gray-500 hover:underline" },
          "Quên mật khẩu?",
        ),
      ),
      h("input", {
        type: "password",
        placeholder: "••••••••",
        class:
          "w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm outline-none focus:border-black",
      }),
    ),

    h(
      "div",
      { class: "flex items-center gap-2 pt-1" },
      h("input", {
        type: "checkbox",
        id: "remember-me",
        class: "rounded cursor-pointer",
      }),
      h(
        "label",
        {
          for: "remember-me",
          class: "text-xs text-gray-600 cursor-pointer select-none",
        },
        "Ghi nhớ đăng nhập trên thiết bị này",
      ),
    ),

    h(
      "button",
      {
        type: "button",
        class:
          "w-full py-3 rounded-xl border border-black bg-black text-white font-bold text-sm tracking-wide cursor-pointer hover:opacity-90 transition mt-2",
      },
      "Đăng nhập",
    ),
  );
};

// =========================================================================
// 2. FORM ĐĂNG KÝ (REGISTER FORM)
// =========================================================================
const renderRegisterForm = () => {
  return h(
    "form",
    { class: "space-y-4" },
    h(
      "div",
      { class: "space-y-1" },
      h(
        "label",
        {
          class:
            "block text-xs font-bold uppercase tracking-wider text-gray-700",
        },
        "Họ và tên",
      ),
      h("input", {
        type: "text",
        placeholder: "Nguyễn Văn A",
        class:
          "w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm outline-none focus:border-black",
      }),
    ),

    h(
      "div",
      { class: "space-y-1" },
      h(
        "label",
        {
          class:
            "block text-xs font-bold uppercase tracking-wider text-gray-700",
        },
        "Địa chỉ Email",
      ),
      h("input", {
        type: "email",
        placeholder: "name@example.com",
        class:
          "w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm outline-none focus:border-black",
      }),
    ),

    h(
      "div",
      { class: "space-y-1" },
      h(
        "label",
        {
          class:
            "block text-xs font-bold uppercase tracking-wider text-gray-700",
        },
        "Số điện thoại",
      ),
      h("input", {
        type: "tel",
        placeholder: "0901234567",
        class:
          "w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm outline-none focus:border-black",
      }),
    ),

    h(
      "div",
      { class: "space-y-1" },
      h(
        "label",
        {
          class:
            "block text-xs font-bold uppercase tracking-wider text-gray-700",
        },
        "Mật khẩu",
      ),
      h("input", {
        type: "password",
        placeholder: "Ít nhất 6 ký tự",
        class:
          "w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm outline-none focus:border-black",
      }),
    ),

    h(
      "div",
      { class: "flex items-start gap-2 pt-1" },
      h("input", {
        type: "checkbox",
        id: "terms",
        class: "mt-0.5 rounded cursor-pointer",
      }),
      h(
        "label",
        {
          for: "terms",
          class:
            "text-xs text-gray-500 leading-tight cursor-pointer select-none",
        },
        "Tôi đồng ý với các Điều khoản dịch vụ và Chính sách bảo mật bưu chính.",
      ),
    ),

    h(
      "button",
      {
        type: "button",
        class:
          "w-full py-3 rounded-xl border border-black bg-black text-white font-bold text-sm tracking-wide cursor-pointer hover:opacity-90 transition mt-2",
      },
      "Tạo tài khoản",
    ),
  );
};
