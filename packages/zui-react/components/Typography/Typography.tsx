import { createElement, forwardRef, PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';
import { TypographyVariant, TypographyWeight, ZuiStyle } from '../../definitions/style';

export interface TypographyProps {
  /**
   * Typography variant
   */
  variant: TypographyVariant;
  /**
   * Typography weight
   */
  weight?: TypographyWeight;
}

const mapVariantToElement = (variant: TypographyVariant) => {
  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return variant;
    case 'subtitle1':
    case 'subtitle2':
    case 'body1':
    case 'body2':
    case 'caption':
    case 'overline':
    case 'list':
    default:
      return 'div';
  }
};

const getElevationClassName = (variant: TypographyVariant, weight: TypographyWeight) => {
  if (weight === 'regular') return `zui-typography-${variant}`;
  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return `zui-typography-${variant}`;
    case 'subtitle1':
    case 'subtitle2':
    case 'body1':
    case 'body2':
    case 'caption':
    case 'overline':
    case 'list':
    default:
      return `zui-typography-${variant}-${weight}`;
  }
};

export const Typography = forwardRef<HTMLDivElement, PropsWithChildren<TypographyProps>>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function ZuiTypography({ variant, children, weight = 'regular' }, ref) {
    return createElement(
      mapVariantToElement(variant),
      {
        className: clsx('zui-bg-color-white', getElevationClassName(variant, weight), 'zui-border-solid-black'),
        // eslint-disable-next-line no-param-reassign,no-return-assign
        ref: (newRef) => (ref = newRef),
      },
      children,
    );
  },
);

Typography.defaultProps = {
  variant: 'body1',
  weight: 'regular',
};
Typography.propTypes = {
  variant: PropTypes.oneOf<TypographyVariant>(ZuiStyle.typography.variant),
  weight: PropTypes.oneOf<TypographyWeight>(ZuiStyle.typography.weight),
};

export default Typography;
