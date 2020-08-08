import {
  fromUnixTime,
  differenceInCalendarWeeks,
  format,
  isToday,
} from "date-fns";

export default (date) => {
  const formatDate = fromUnixTime(date);
  const currentWeek = differenceInCalendarWeeks(new Date(), formatDate, {
    weekStartsOn: 1,
  });

  if (isToday(formatDate)) {
    return format(formatDate, "HH:mm");
  }

  if (currentWeek === 0) {
    return format(formatDate, "E HH:mm");
  }

  return format(formatDate, "MM.dd HH:mm");
};
