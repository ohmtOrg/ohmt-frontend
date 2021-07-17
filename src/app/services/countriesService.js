const countriesData = [
  {
    id: 1,
    name: "rwanda",
    population: "12.63 million",
    size: "26,338 km²",
    domains: [
      {
        id: 1,
        name: "Governance",
        categories: [
          {
            id: 1,
            score: 0,
            name: "One health Institutional policy",
            subcategories: [{
              name: "institutional setting",
              score: 1,
              action: "",
              priority: "",
              timeline: "",
              responsible: "",
            }, {
              name: "policy coherence",
              score: 2,
              action: "",
              priority: "",
              timeline: "",
              responsible: "",
            }, {
              name: "legislation framework",
              score: 1,
              action: "",
              priority: "",
              timeline: "",
              responsible: "",
            }]
           
          },
          {
            id: 1,
            score: 0,
            name: "Advocacy Strategy",
            subcategories: [{
              name: "tools and mechanisms for collecting..",
              score: 1,
              action: "",
              priority: "",
              timeline: "",
              responsible: "",
            }, {
              name: "communication and advocacy framework",
              score: 2,
              action: "",
              priority: "",
              timeline: "",
              responsible: "",
            }]
           
          },
        ],
      },
      {
        id: 2,
        name: "implementation and performance",
        categories: [
          {
            id: 1,
            score: 0,
            name: "institutional capacity development",
            subcategories: [{
              name: "framework implementation mechanism",
              score: 1,
              action: "",
              priority: "",
              timeline: "",
              responsible: "",
            }, {
              name: "funding for implementation",
              score: 2,
              action: "",
              priority: "",
              timeline: "",
              responsible: "",
            }, {
              name: "contribution of private sector to OH",
              score: 1,
              action: "",
              priority: "",
              timeline: "",
              responsible: "",
            }]
          },
          {
            id: 1,
            score: 0,
            name: "One Health Priorities",
            subcategories: [{
              name: "zoonotic diseases",
              score: 4,
              action: "",
              priority: "",
              timeline: "",
              responsible: "",
            }, {
              name: "Food safety",
              score: 3,
              action: "",
              priority: "",
              timeline: "",
              responsible: "",
            }]
           
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
