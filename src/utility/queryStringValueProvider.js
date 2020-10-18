import cleanLocationSearch from "./cleanLocationSearch";
import map from "./map";
import reduce from "./reduce";
import split from "./split";
import pipe from "./pipe";

const queryStringValueProvider = (id) =>
  pipe(
    cleanLocationSearch,
    split("&"),
    map(split("=")),
    reduce((acc, cur) => {
      acc[cur[0]] = cur[1];
      return acc;
    }, {})
  )(location.search)[id] || '';

  export default queryStringValueProvider;