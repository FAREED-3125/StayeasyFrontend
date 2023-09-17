// IMPORT SECTION

import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
// =======================================================================================

const DateRangeComp = ({refOne,setRange,range,open}) => {
 

  return (
    <div className="calendarWrap">

      <div ref={refOne}>
        {open && (
          <DateRange
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
            rangeColors={['#C70039']}
          />
        )}
      </div>
    </div>
  );
};

export default DateRangeComp;
