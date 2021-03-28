import { countries } from '../config/client-graphql';

export const mocks = {
    request: {
      query: countries
    },
    result: {
      data: {
        Country: [
          {
            name: "Afghanistan",
            area: 652230,
            population: 27657145,
            capital: "Kabul",
            numericCode: "004",
            flag: {
              svgFile: "https://restcountries.eu/data/afg.svg"
            },
            topLevelDomains: [
              {
                name: ".af"
              }
            ]
          },
          {
            name: "Åland Islands",
            area: 1580,
            population: 28875,
            capital: "Mariehamn",
            numericCode: "248",
            flag: {
              svgFile: "https://restcountries.eu/data/ala.svg"
            },
            topLevelDomains: [
              {
                name: ".ax"
              }
            ]
          }
        ]
      }
    }
  };