import React, { useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const Tooltip = () => {
  const [tooltipContent, setTooltipContent] = useState(false);

  return (
    <div>
      <span data-tip={tooltipContent}>
        <i
          className="fas fa-info-circle"
          onMouseEnter={() => setTooltipContent(true)}
          onMouseLeave={() => setTooltipContent(false)}
        ></i>
      </span>
      <ReactTooltip />
    </div>
  );
};

export default Tooltip;
