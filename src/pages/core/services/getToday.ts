import moment from "moment";

const today = moment();

export const getToday = () => {
  return today.format("YYYY-MM-DD");
};
