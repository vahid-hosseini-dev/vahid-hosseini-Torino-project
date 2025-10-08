import React from "react";
import OriginDestination from "../modules/Origin&Destination";
import DatePicker from "../modules/DatePicker";

function SearchBox() {
  return (
    <div>
      <div>
        <OriginDestination />
        <OriginDestination />
      </div>
      <div>
        <DatePicker />
      </div>
    </div>
  );
}

export default SearchBox;
