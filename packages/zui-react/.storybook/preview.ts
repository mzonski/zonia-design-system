import type { Preview } from "@storybook/react";
import "@zonia/zui-styles/src/zui-styles.scss";
import "packages/zui-styles/src/_normalize.css";
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
