import React, { MouseEventHandler } from 'react';
import { clsx } from 'clsx';
import { ColorVariant } from '../../definitions/style';

export interface ButtonProps {
  /**
   * Button label
   */
  label: string;
  /**
   * Color variant
   */
  color: ColorVariant;
  /**
   * Optional click handler
   */
  onClick: MouseEventHandler<HTMLButtonElement>;
  /**
   * Disabled state
   */
  disabled?: boolean;
}

function Button({ label, color, disabled, onClick }: ButtonProps) {
  return (
    <button type="button" className={clsx('zui-button', `button-${color}`)} disabled={disabled} onClick={onClick}>
      <div className="zui-label">{label}</div>
    </button>
  );
}
export default Button;

Button.defaultProps = {
  color: 'primary',
} as ButtonProps;
Button.defaultName = 'ZUIButton';
