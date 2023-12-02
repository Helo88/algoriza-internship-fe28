import axios from "redaxios";

const url = "https://booking-com15.p.rapidapi.com/api/v1/hotels/";
const method = "GET";
const headers = {
  "X-RapidAPI-Key": "e70971f76bmsh2a0752739379b5bp15ca03jsn70dfbfef4aa1",
  "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
};
export const getHotels = async (id, date1, date2) => {
console.log("my goood",date1)
  const options = {
    method,
    url: url + "searchHotels",
    params: {
      dest_id: id,
      search_type: "CITY",
      arrival_date: date1,
      departure_date: date2,
  
      languagecode: "en-us",
      currency_code: "AED",
    },
    headers,
  };

  try {
    const response = await axios.request(options);
    console.log("second Api");
    console.log(response.data);
  } catch (error) {
    console.log(error.response);
  }
};
