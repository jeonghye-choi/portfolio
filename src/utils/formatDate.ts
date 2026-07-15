const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function formatDate(date: string | null) {
  if (!date) return "Present";
  const [year, month] = date.split("-");
  return `${MONTH_NAMES[parseInt(month, 10) - 1]} ${year}`;
}

export function formatDateRange(start: string, end: string | null) {
  if (!end) return `${formatDate(start)} — Present`;
  if (start === end) return formatDate(start);
  return `${formatDate(start)} — ${formatDate(end)}`;
}
