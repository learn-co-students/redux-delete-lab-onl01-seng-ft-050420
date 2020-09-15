import uuid from "uuid";
export default function manageBand(
  state = {
    bands: [],
  },
  action
) {
  switch (action.type) {
    case "ADD_BAND":
      let band = { name: action.name, id: uuid() };
      return { bands: [...state.bands, band] };
    case "DELETE_BAND":
      return { bands: state.bands.filter((x) => x.id !== action.id) };
    default:
      return state;
  }
}
