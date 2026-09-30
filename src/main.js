// src/main.js
import "./style.css";
import { h, render } from "./utils/dom.js";

// 1. Tạo component Button con
const Button = ({ text, onClick, variant = "primary" }) => {
  const bg =
    variant === "primary"
      ? "bg-blue-600 hover:bg-blue-700"
      : "bg-emerald-600 hover:bg-emerald-700";

  return h(
    "button",
    {
      class: `cursor-pointer text-white font-bold px-4 py-2 rounded-lg text-sm transition shadow ${bg}`,
      onClick: onClick,
    },
    text,
  );
};

// 2. Tạo component TrackBox (Áp dụng đúng Widget SingPost)
const TrackBox = () => {
  let trackingCode = "";

  return h(
    "div",
    {
      class:
        "bg-[#1d5aa6] text-white p-7 rounded-2xl max-w-md shadow-2xl space-y-4",
    },
    h("h2", { class: "text-2xl font-bold tracking-tight" }, "Track your item"),

    h(
      "p",
      { class: "text-blue-100 text-xs" },
      "Nhập mã vận đơn để kiểm tra lộ trình trực tiếp:",
    ),

    // Khung input + button
    h(
      "div",
      { class: "flex bg-white rounded-lg p-1.5 shadow-inner" },
      h("input", {
        type: "text",
        placeholder: "Enter tracking number...",
        class:
          "w-full px-3 py-1.5 text-slate-800 text-sm outline-none font-medium",
        onInput: (e) => {
          trackingCode = e.target.value;
        },
      }),
      Button({
        text: "Tra cứu",
        onClick: () => {
          if (!trackingCode.trim()) {
            alert("Vui lòng nhập mã vận đơn!");
            return;
          }
          alert(`🎉 Bắt sự kiện thành công! Đang tra cứu mã: ${trackingCode}`);
        },
      }),
    ),
  );
};

// 3. Component Trang chủ App
const App = () => {
  return h(
    "div",
    { class: "min-h-screen bg-slate-100 flex items-center justify-center p-6" },
    TrackBox(),
  );
};

// 4. Render toàn bộ ra màn hình
render(App());
