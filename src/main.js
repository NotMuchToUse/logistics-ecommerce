import "./style.css";
import { h, render } from "./utils/dom.js";
import { Footer } from "./layouts/footer.js";
import { initRouter } from "./routers/index.js";

const App = () => {
  return h(
    "div",
    { class: "min-h-screen flex flex-col justify-between" },
    h("div", { id: "app-header" }),
    h("div", { id: "app-content", class: "grow" }),
    Footer(),
  );
};

render(App());
initRouter();
