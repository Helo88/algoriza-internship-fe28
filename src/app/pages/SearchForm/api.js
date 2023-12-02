import client from "../../../network/index";

export const getCities = async (country = "egypt") => {
  const cities = new Map();
  let error = "";

  const url = "searchDestination";
  const options = {
    params: { query: country },
  };

  try {
    const response = await client.get(`${url}`, options);

    response.data.data.forEach((city) => {
      if (city.search_type == "city") {
        cities.set(city.name, city.dest_id);
      }
    });

    console.log(cities);
  } catch (error) {
    console.log("fetching cities", error);
    error = error;
  }
  //handle error from Api
  return { cities, error };
};
