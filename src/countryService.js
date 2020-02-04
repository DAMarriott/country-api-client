let countries = null;

export function getCountry(id) {
  return getCountries().then(items => items.find(item => item.name === id));
}

export function getCountries() {
  if (countries) {
    return Promise.resolve(countries);
  }

  return fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(items => {
      countries = items;
      return countries;
    });
}
