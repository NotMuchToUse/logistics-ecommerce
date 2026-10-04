export const createElement = (tag, attrs = {}, ...children) => {
  const el = document.createElement(tag);

  for (const [key, val] of Object.entries(attrs || {})) {
    if (key.startsWith("on") && typeof val === "function")
      el.addEventListener(key.slice(2).toLowerCase(), val);
    else if (key === "class" || key === "className") el.className = val;
    else if (val !== null && val !== undefined) el.setAttribute(key, val);
  }

  children.flat(Infinity).forEach((child) => {
    if (child !== null && child !== undefined && child !== false)
      el.append(child);
  });

  return el;
};

export const h = createElement;

export const render = (element, container = "#app") => {
  const root =
    typeof container === "string"
      ? document.querySelector(container)
      : container;
  if (root) root.replaceChildren(element);
};
