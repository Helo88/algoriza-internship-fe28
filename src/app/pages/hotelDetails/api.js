import client from "../../../network/index";

export const getHotelDetails = async (id, date1, date2, guests = "1", rooms = "1") => {
  console.log("api details ", id, " - ", date2, " - ", date1, guests, rooms);
  const url = "getHotelDetails";
  let details = {};
  let error = "";
  const options = {
    params: {
      hotel_id: id,
      search_type: "CITY",
      arrival_date: date1,
      departure_date: date2,
      adults: guests,
      room_qty: rooms,
      languagecode: "en-us",
    },
  };

  try {
    const response = await client.get(`${url}`, options);
    console.log("getDetails Api");
    if (response.status == "200") {
      console.log("details", response.data);
      details = response.data.data;
    }
    console.log(details);
  } catch (error) {
    error = error.response;
  }
  return { details, error };
};

export const getHotelInfo = async (id) => {
  console.log("api info ", id);

  const url = "getDescriptionAndInfo";
  let description = {};
  let error = "";
  const options = {
    params: {
      hotel_id: id,
    },
  };

  try {
    const response = await client.get(`${url}`, options);
    console.log("getInfo Api");
    if (response.status == "200") {
      console.log("info", response.data);
      description = response.data.data[0].description;
    }
    console.log("des", description);
  } catch (error) {
    error = error.response;
  }
  return { description, error };
};
