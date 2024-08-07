import { formatDistanceToNow, parseISO } from "date-fns";

export const relativeDate = (dateString) => {
  const date = parseISO(dateString);
  return formatDistanceToNow(date, { addSuffix: true });
};