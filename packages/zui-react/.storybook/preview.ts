import type { Preview } from "@storybook/react";
import "@zonia/zui-styles/src/zui-styles.scss";
import "@zonia/zui-styles/src/normalize.css";
import { appendZuiStyleClass } from "./decorators";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    appendZuiStyleClass,
  ],
};

export default preview;
