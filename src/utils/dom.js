// src/utils/dom.js

// Danh sách các thẻ SVG phổ biến để trình duyệt render đúng icon
const SVG_TAGS = new Set([
  "svg",
  "path",
  "g",
  "circle",
  "rect",
  "line",
  "polyline",
  "polygon",
  "use",
]);

/**
 * Hàm tạo phần tử DOM (DOM Builder / Hyperscript)
 * @param {string|Function} tag - Tên thẻ HTML (div, button...) hoặc một Function Component
 * @param {Object} attributes - Các thuộc tính (class, id, onClick, style...)
 * @param  {...any} children - Các phần tử con lồng bên trong
 * @returns {HTMLElement|SVGElement}
 */
export const createElement = (tag, attributes = {}, ...children) => {
  // 1. Nếu tag là một Function Component -> Gọi hàm và truyền props
  if (typeof tag === "function") {
    return tag({ ...attributes, children: children.flat(Infinity) });
  }

  // 2. Tạo Element (Phân biệt thẻ HTML thường và thẻ SVG)
  const isSvg = SVG_TAGS.has(tag.toLowerCase());
  const element = isSvg
    ? document.createElementNS("http://www.w3.org/2000/svg", tag)
    : document.createElement(tag);

  // 3. Xử lý các Attributes & Events
  if (attributes && typeof attributes === "object") {
    for (const [key, value] of Object.entries(attributes)) {
      if (value === null || value === undefined) continue;

      // A. Bắt sự kiện: onClick, onInput, onChange, onSubmit...
      if (key.startsWith("on") && typeof value === "function") {
        const eventName = key.slice(2).toLowerCase();
        element.addEventListener(eventName, value);
      }
      // B. Xử lý Class / ClassName cho Tailwind CSS
      else if (key === "class" || key === "className") {
        if (isSvg) {
          element.setAttribute("class", value);
        } else {
          element.className = value;
        }
      }
      // C. Xử lý Style dạng Object { color: 'red', display: 'flex' } hoặc chuỗi
      else if (key === "style") {
        if (typeof value === "object") {
          Object.assign(element.style, value);
        } else {
          element.style.cssText = value;
        }
      }
      // D. Xử lý thuộc tính Boolean: disabled, checked, required...
      else if (typeof value === "boolean") {
        if (value) {
          element.setAttribute(key, "");
          element[key] = true;
        } else {
          element.removeAttribute(key);
          element[key] = false;
        }
      }
      // E. Xử lý giá trị form input (value)
      else if (key === "value" && "value" in element) {
        element.value = value;
      }
      // F. Các thuộc tính thông thường khác (id, type, placeholder, href, src...)
      else {
        element.setAttribute(key, value);
      }
    }
  }

  // 4. Xử lý các phần tử con (Children)
  const appendChild = (child) => {
    // Bỏ qua giá trị rỗng hoặc boolean (cho phép viết: condition && h('div', ...))
    if (child === null || child === undefined || typeof child === "boolean") {
      return;
    }

    // Nếu con là một mảng (khi dùng [].map) -> Đệ quy duyệt tiếp
    if (Array.isArray(child)) {
      child.forEach(appendChild);
    }
    // Nếu con là DOM Node thực thụ
    else if (child instanceof Node) {
      element.appendChild(child);
    }
    // Nếu con là chữ (String) hoặc số (Number)
    else {
      element.appendChild(document.createTextNode(String(child)));
    }
  };

  children.forEach(appendChild);

  return element;
};

// Đặt thêm alias tên là "h" để khi code bạn gõ cho ngắn gọn
export const h = createElement;

/**
 * Hàm hỗ trợ mount giao diện vào DOM (Dùng cho Navigo Router sau này)
 * @param {HTMLElement} component - Component DOM cần render
 * @param {HTMLElement|string} container - Thẻ cha chứa giao diện (mặc định là '#app')
 */
export const render = (component, container = "#app") => {
  const root =
    typeof container === "string"
      ? document.querySelector(container)
      : container;
  if (!root) throw new Error(`Không tìm thấy thẻ container: ${container}`);

  // replaceChildren giúp xóa trang cũ và gắn trang mới trong 1 thao tác duy nhất
  root.replaceChildren(component);
};
