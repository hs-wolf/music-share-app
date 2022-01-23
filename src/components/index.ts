import { App } from "vue";
import { convertToKebab } from "../assets/helper";

export default {
  async install(app: App) {
    const components = import.meta.globEager("./global/**/*.vue");
    Object.entries(components).forEach(([path, definition]) => {
      const componentName = path
        .split("/")
        .pop()
        ?.replace(/\.\w+$/, "");
      if (!componentName) {
        return;
      }
      app.component(
        `app-${convertToKebab(componentName)}`,
        definition.default || definition
      );
    });
  },
};
