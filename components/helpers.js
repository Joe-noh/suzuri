export function comma(val) {
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
