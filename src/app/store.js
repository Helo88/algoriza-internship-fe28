import { defineStore } from "pinia";
import axios from "redaxios";
export const useHotelsStore = defineStore("hotelsDataStore", {
  // searchformData
  tempArr: JSON.parse(localStorage.getItem("trips")),
  state: () => ({
    searchHotelsData: {
      id: localStorage.getItem("id"),
      cityName: localStorage.getItem("cityName"),
      inDate: localStorage.getItem("inDate"),
      outDate: localStorage.getItem("outDate"),
      rooms: localStorage.getItem("rooms"),
      guests: localStorage.getItem("guests"),
      inDateFormatted: localStorage.getItem("inDateFormatted"),
      outDateFormatted: localStorage.getItem("outDateFormatted"),
    },
    tripsList: JSON.parse(localStorage.getItem("trips"))
      ? [...JSON.parse(localStorage.getItem("trips"))]
      : [],
  }),
  getters: {
    hell() {},
  },
  //
  actions: {
    updatehotelsSearchState(
      id = "",
      name = "",
      inDate = "",
      outDate = "",
      rooms = "",
      guests = "",
      inDateFormatted = "",
      outDateFormatted = ""
    ) {
      console.log("hereeeeeeeeeeeeeeeee");

      localStorage.setItem("id", id);
      localStorage.setItem("cityName", name);
      localStorage.setItem("inDate", inDate);
      localStorage.setItem("outDate", outDate);
      localStorage.setItem("rooms", rooms);
      localStorage.setItem("guests", guests);
      localStorage.setItem("inDateFormatted", inDateFormatted);
      localStorage.setItem("outDateFormatted", outDateFormatted);
      this.searchHotelsData.id = id;
      this.searchHotelsData.cityName = name;
      this.searchHotelsData.inDate = inDate;
      this.searchHotelsData.outDate = outDate;
      this.searchHotelsData.rooms = rooms;
      this.searchHotelsData.guests = guests;
      this.searchHotelsData.inDateFormatted = inDateFormatted;
      this.searchHotelsData.outDateFormatted = outDateFormatted;
    },
    updateTripsList(hotelId,hotelName, rate, reviewCount, checkIn, checkOut) {
      console.log("yes,pinia");
      this.tripsList.push({hotelId, hotelName, rate, reviewCount, checkIn, checkOut });
    },
  },
});
