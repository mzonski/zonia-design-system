import React, { forwardRef, PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';
import { ElevationLevel, ElevationType, ZuiStyle } from '../../definitions/style';

export interface WidgetProps {
  /**
   * Elevation level
   */
  elevationLevel: ElevationLevel;
  /**
   * Widget type level
   */
  elevationType: ElevationType;
}

export const ForwardedWidget = forwardRef<HTMLDivElement, PropsWithChildren<WidgetProps>>(function ZuiWidget(
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

ForwardedWidget.defaultProps = {
  elevationLevel: 'far',
  elevationType: 'primary',
};
ForwardedWidget.propTypes = {
  elevationLevel: PropTypes.oneOf<ElevationLevel>(ZuiStyle.elevation.levels),
  elevationType: PropTypes.oneOf<ElevationType>(ZuiStyle.elevation.types),
};

export default ForwardedWidget;
