import React, { forwardRef, PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';
import { ElevationLevel, ElevationType, ZuiConsts } from '../../definitions/style';

export interface CardProps {
  /**
   * Elevation level
   */
  elevationLevel: ElevationLevel;
  /**
   * Card type level
   */
  elevationType: ElevationType;
}

export const ForwardedCard = forwardRef<HTMLDivElement, PropsWithChildren<CardProps>>(function ZuiCard(
  { elevationLevel, elevationType, children },
  ref,
) {
  return (
    <div
      ref={ref}
      className={clsx(
        'zui-bg-color-white',
        `zui-elevation-${elevationType}-${elevationLevel}`,
        'zui-border-solid-black',
      )}
    >
      {children}
    </div>
  );
});

ForwardedCard.defaultProps = {
  elevationLevel: ElevationLevel.Default,
  elevationType: ElevationType.Primary,
};
ForwardedCard.propTypes = {
  elevationLevel: PropTypes.oneOf<ElevationLevel>(ZuiConsts.elevation.levels),
  elevationType: PropTypes.oneOf<ElevationType>(ZuiConsts.elevation.types),
};

export default ForwardedCard;
