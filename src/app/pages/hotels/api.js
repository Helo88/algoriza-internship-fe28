import client from "../../../network/index";

export const getHotels = async (
  id,
  date1,
  date2,
  guests = "1",
  rooms = "1",
  sort_by = null,
  price_min = "",
  price_max = "",
  page_number="1"
) => {
  console.log(
    "Api get hotels",
    id,
    " - ",
    date2,
    " - ",
    date1,
    guests,
    sort_by,
    rooms,
    price_max,
    price_min,
    page_number
  );
  const url = "searchHotels";
  let hotels = [];
  let error = "";
  let resultsCount = 0;

  const options = {
    params: {
      dest_id: id,
      search_type: "CITY",
      arrival_date: date1,
      departure_date: date2,
      adults: guests,
      room_qty: rooms,
      sort_by: sort_by,
      price_min: price_min,
      price_max: price_max,
      page_number:page_number,
      languagecode: "en-us",
    },
  };

  try {
    const response = await client.get(`${url}`, options);
    console.log(response);
    console.log("get hotels ");
    if (response.status == "200") {
      // console.log(response.data.data.meta[0].title.split(' '))
      hotels = response.data.data.hotels;
      resultsCount = Number(response.data.data.meta[0].title.split(" ")[0]);
    }
    console.log("count  ", resultsCount);
  } catch (error) {
    error = error.response;
    console.log("An error oocured ,please try again",error);
  }
  return { hotels, error, resultsCount };
};

export const sortHotels = async (
  id,
  date1,
  date2,
  guests = "1",
  rooms = "1"
) => {
  console.log("api sort ", id, " - ", date2, " - ", date1, guests, rooms);
  const url = "getSortBy";
  let categories = [];
  let error = "";
  const options = {
    params: {
      dest_id: id,
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
    console.log("second Api");
    if (response.status == "200") {
      console.log("sorts", response.data);
      categories = response.data.data;
    }
    console.log(categories);
  } catch (error) {
    error = error.response;
  }
  return { categories, error };
};
