export const sleep = async (ms: number | string) =>
  new Promise((r) => setTimeout(r, +ms));
