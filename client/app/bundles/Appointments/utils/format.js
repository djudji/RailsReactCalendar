import moment from "moment";

export const formatDate = function(d) {
  return moment(d).format("DD MMMM YYYY, hh:mm a");
};
