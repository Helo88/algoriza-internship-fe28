const formatDate = (date) => {
  // DATE(YYYY - MM - DD);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return [year,month,day].join("-");
};
export default formatDate;
