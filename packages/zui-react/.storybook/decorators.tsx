import { ReactRenderer } from "@storybook/react";
import { DecoratorFunction } from "@storybook/types";

export const appendZuiStyleClass: DecoratorFunction<ReactRenderer> = (Story) => {
  return <div className="zui"><div className="zui-bg-color-canvas"><Story /></div></div>
}
