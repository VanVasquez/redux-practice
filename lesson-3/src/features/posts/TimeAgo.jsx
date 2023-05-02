import { formatDistanceToNow, parseISO } from "date-fns";
import React from "react";

const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const distance = formatDistanceToNow(date);
    timeAgo = `${distance} ago`;
  }
  return (
    <span key={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};

export default TimeAgo;
