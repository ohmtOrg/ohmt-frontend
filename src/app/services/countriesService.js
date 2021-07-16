const countriesData = [
  {
    id: 1,
    name: "rwanda",
    population: "12.63 million",
    size: "26,338 km²",
    domains: [
      {
        id: 1,
        name: "domain 1",
        categories: [
          {
            id: 1,
            score: 0,
            action: "",
            priority: "",
            timeline: "",
            responsible: "",
          },
          {
            id: 2,
            score: 1,
            action: "",
            priority: "",
            timeline: "",
            responsible: "",
          },
        ],
      },
      {
        id: 2,
        name: "domain 2",
        categories: [
          {
            id: 1,
            score: 0,
            action: "",
            priority: "",
            timeline: "",
            responsible: "",
          },
          {
            id: 2,
            score: 1,
            action: "",
            priority: "",
            timeline: "",
            responsible: "",
          },
        ],
      },
    ],
  },
  {
    id:2,
    name: "kenya",
    population: "52.57 million",
    size: "580,367 km²",
    domains: [
      {
        id: 1,
        name: "domain 1",
        categories: [
          {
            id: 1,
            score: 10,
            action: "",
            priority: "",
            timeline: "",
            responsible: "",
          },
          {
            id: 2,
            score: 1,
            action: "",
            priority: "",
            timeline: "",
            responsible: "",
          },
        ],
      },
      {
        id: 2,
        name: "domain 2",
        categories: [
          {
            id: 1,
            score: 5,
            action: "",
            priority: "",
            timeline: "",
            responsible: "",
          },
          {
            id: 2,
            score: 1,
            action: "",
            priority: "",
            timeline: "",
            responsible: "",
          },
        ],
      },
    ],
  }
];

export const getCountriesData = () => countriesData;


export const getCountryData = (id) => countriesData.find(c => c.id === id);
