import './display-helpers.scss';
import {ZuiConsts} from "../../../../definitions/style";

const Types = ZuiConsts.elevation.types;
const Levels = ZuiConsts.elevation.levels;

function ShadowsDisplay() {
  return (
    <div className="default-canvas">
      <div className="panel">
        <div className="default-canvas">
          {Types.map((type) => {
            return Levels.map(level => {
              return (<div key={type + level}>
                <h2>{type} / {level}</h2>
                <div className="color-category">
                  <div className="color-display">
                    <div className={`color-box zui-bg-color-white zui-elevation-${type}-${level}`} />
                  </div>
                </div>
              </div>);
            })
          })}
        </div>
      </div>
    </div>
  );
}

export default ShadowsDisplay;
