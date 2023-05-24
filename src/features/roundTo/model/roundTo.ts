export function roundTo(num: number, to: number | null) {
  if (!to) return num;
  if (num <= to) return to;
  else return num;
}
