export const formatDate = (date) => {
  // DATE(YYYY - MM - DD);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return [year,month,day].join("-");
};



export const formatFullNameDate = (date)=> {
  // console.log(dat)
  const fDate = new Date(date); // Replace this with your date object
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = fDate.toLocaleDateString(undefined, options);
  return formattedDate;
}