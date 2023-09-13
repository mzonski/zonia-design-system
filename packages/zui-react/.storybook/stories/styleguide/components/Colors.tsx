import './display-helpers.scss';

const ExpandedColors = ['primary', 'secondary', 'accent', 'error', 'success', 'info', 'neutral'];
const Variants = ['background', 'hover', 'focused'];
const Colors = ['black', 'white', 'canvas'];

function StyleguideColors() {
  return (
    <div className="default-canvas">
      <div className="panel">
        <div className="default-canvas">
          {Colors.map((color) => {
            return (
              <div key={color}>
                <h2>{color}</h2>
                <div className="color-category">
                  <div className="color-display">
                    <div className={`color-box zui-bg-color-${color}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="color-display">
          {ExpandedColors.map((color) => (
            <div key={color}>
              <h2>{color}</h2>
              <div className="color-category">
                <div className="color-display">
                  <div className={`color-box zui-bg-color-${color}`} />
                </div>
                {Variants.map((variant) => (
                  <div className="color-display" key={color + variant}>
                    <div className={`color-box zui-bg-color-${color}-${variant}`} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StyleguideColors;
