import React, { memo, useEffect } from "react";
import 'rc-slider/assets/index.css';
import { Range as DoubleRange } from 'rc-slider';

const MultiRangeSlider = ({ timeout = 0, min, max, className = "", onChange, value }) => {

  console.log(min, max, value)
  
  const [middleValue, setMiddleValue] = React.useState(
    value || [min, max]
  );

  useEffect(() => {
    if (!onChange) return;
    const intervalRef = setTimeout(() => {
      if (value[0] !== middleValue[0] || value[1] !== middleValue[1])
        onChange(middleValue);
    }, timeout);
    return () => clearTimeout(intervalRef);
  }, [middleValue, timeout, onChange, value]);

  useEffect(() => {
    setMiddleValue(value);
  }, [value]);

  return (
    <div id="range">
      <DoubleRange
        min={0}
        max={max || 1000}
        className={className}
        onChange={setMiddleValue}
        value={middleValue}
      />
    </div>
  );
};

export default memo(MultiRangeSlider, (prevProps, nextProps) => {
  if (prevProps.min !== nextProps.min || prevProps.max !== nextProps.max)
    return false;
  if (
    prevProps.value[0] === nextProps.value[0] &&
    prevProps.value[1] === nextProps.value[1]
  )
    return true;
  else return false;
});