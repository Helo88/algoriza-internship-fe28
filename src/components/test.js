// const arr = [1, 2, 3];
// console.log(arr?.[0] ? arr[0] : 3);
// const hotel = {
//   accessibilityLabel: "",
//   property: {
//     name: "hotel name",
//     reviewScore: 2.4,
//     reviewCount: 23,
//     longitude: 3,
//     latitude: 9,
//     id: 123,
//     photoUrls: ["www "],
//     priceBreakdown: {
//       grossPrice: {
//         value: 130,
//       },
//       strikethroughPrice: {
//         value: 150,
//       },
//       benefitBadges: [
//         { identifier: "deal" }
//       ],
//     },
//   },
// };
// console.log(
//   hotel.property.photoUrls?.[0]? hotel.property.photoUrls?.[0] : " "
// );
// console.log(
//   hotel.property.priceBreakdown?.grossPrice
//     ? hotel.property.priceBreakdown.grossPrice.value
//     : ""
// );
// console.log(
//   hotel.property.priceBreakdown?.strikethroughPrice
//     ? hotel.property.priceBreakdown.strikethroughPrice.value
//     : ""
// );
// console.log(
//   hotel.property.priceBreakdown?.benefitBadges?.[0]
//     ? hotel.property.priceBreakdown.benefitBadges[0].identifier
//     : ""
// );
// // const checkGrossPrice = computed(() => {
// //     return hotel.property.priceBreakdown?.grossPrice
// //       ? hotel.property.priceBreakdown.grossPrice.value
// //       : "";
// // })
// // const checkStrikethroughPrice = computed(() => {
// //   return hotel.property.priceBreakdown?.strikethroughPrice
// //     ? hotel.property.priceBreakdown.strikethroughPrice.value
// //     : "";
// // });
// function tax() {
//   let x =
//     Number(hotel.property.priceBreakdown.strikethroughPrice.value) -
//     Number(hotel.property.priceBreakdown.grossPrice.value);
//   x = Math.round(
//     (x / Number(hotel.property.priceBreakdown.strikethroughPrice.value)) * 100
//   );
//   console.log("tax  ", x);
// }
// tax();
// console.log(' ' == true)

// const getRate = () => {
//     return Math.round(Number(hotel.property.reviewScore)/2)
// }
// console.log('4.4'>=3)
// localStorage.getItem('4')
// console.log()

const gg = {
    value: {
        details:{a:8}
        }
    }

console.log(gg.value.details?.a ? gg.value.details.a > 2 ? true : false : false)
