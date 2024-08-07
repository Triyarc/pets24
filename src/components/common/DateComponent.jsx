import React from "react";
import { relativeDate } from "../../utils/relativeDate";

const DateComponent = ({ dateString }) => {
  return <span>{relativeDate(dateString)}</span>;
};

export default DateComponent;