import { h } from "../../utils/dom.js";
import { ctaSection } from "./ctaSection.js";
import { featuresAndServicesSection } from "./featuresAndServicesSection.js";
import { heroSection } from "./heroSection.js";
import { presentSection } from "./presentSection.js";
import { supportSection } from "./supportSection.js";

export const HomePage = () => {
  return h(
    "main",
    { class: "w-full" },
    heroSection(),
    featuresAndServicesSection(),
    supportSection(),
    presentSection(),
    ctaSection(),
  );
};
