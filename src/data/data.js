const people = [
  {
    id: 0,
    name: "Madoka",
    Participate: [events[3], events[4], events[6], events[7]],
    Participated: [
      {
        event: events[0],
        review: 5,
      },
      {
        event: events[1],
        review: 3,
      },
    ],
  },
  {
    id: 1,
    name: "Christian",
    Participate: [events[4], events[6], events[7]],
    Participated: [
      {
        event: events[0],
        review: 3,
      },
    ],
  },
  {
    id: 2,
    name: "Jonatan",
    Participate: [events[2], events[6]],
    Participated: [
      {
        event: events[1],
        review: "",
      },
    ],
  },
  {
    id: 3,
    name: "Hanna",
    Participate: [events[2], events[5], events[6], events[7]],
    Participated: [
      {
        event: events[1],
        review: 4,
      },
    ],
  },
  {
    id: 4,
    name: "Emma",
    Participate: [events[4], events[5], events[6], events[7]],
    Participated: [
      {
        event: events[1],
        review: 4,
      },
    ],
  },
];

const events = [
  {
    id: 0,
    title: "Höstens picknick",
    place: "Vasaparken",
    date: "2020-09-15",
    description:
      "Vivamus viverra, augue blandit ultricies euismod, justo nisl condimentum urna, nec sodales orci dolor vitae dolor. Donec at leo et velit faucibus egestas ut vulputate magna. Vivamus eu posuere dui. Etiam semper venenatis purus, quis laoreet est elementum nec.",
    host: people[0].name,
    participant: [people[0].name, people[1].name, people[3].name],
    reviews: [
      { person: people[0].name, review: 5 },
      { person: people[1].name, review: 3 },
    ],
  },
  {
    id: 1,
    title: "Löpning och avslappnad middag",
    place: "Farsta",
    date: "2020-08-01",
    description:
      "Quisque mollis ex elit, id pellentesque ipsum hendrerit sodales. Donec consectetur libero et ipsum aliquam, sit amet faucibus enim varius. Mauris suscipit, neque vel volutpat eleifend, ex lacus suscipit neque, aliquam suscipit dui nulla in arcu.",
    host: people[2].name,
    participant: [
      people[0].name,
      people[2].name,
      people[3].name,
      people[4].name,
    ],
    reviews: [
      { person: people[0].name, review: 3 },
      { person: people[3].name, review: 4 },
      { person: people[4].name, review: 4 },
    ],
  },
  {
    id: 2,
    title: "Figur ritning",
    place: "Vasaparken",
    date: "2020-10-22",
    description:
      "Mauris suscipit, neque vel volutpat eleifend, ex lacus suscipit neque, aliquam suscipit dui nulla in arcu. Aliquam erat volutpat. Nam in pulvinar tortor, iaculis scelerisque lacus. Pellentesque tristique, ligula sed vulputate rhoncus, elit massa imperdiet diam, a gravida purus quam sed purus.",
    host: people[3].name,
    participant: [people[3].name, people[2].name],
    reviews: [],
  },
  {
    id: 3,
    title: "Laga japansk mat",
    place: "Vasaparken",
    date: "2020-10-01",
    description:
      "Nam in pulvinar tortor, iaculis scelerisque lacus. Pellentesque tristique, ligula sed vulputate rhoncus, elit massa imperdiet diam, a gravida purus quam sed purus.",
    host: people[0].name,
    participant: [people[0].name],
    reviews: [],
  },
  {
    id: 4,
    title: "Game kväll",
    place: "Vasaparken",
    date: "2020-09-25",
    description:
      "Donec at leo et velit faucibus egestas ut vulputate magna. Vivamus eu posuere dui. Etiam semper venenatis purus, quis laoreet est elementum nec. Quisque mollis ex elit, id pellentesque ipsum hendrerit sodales. Donec consectetur libero et ipsum aliquam, sit amet faucibus enim varius. ",
    host: people[4].name,
    participant: [people[0].name, people[1].name, people[4].name],
    reviews: [],
  },
  {
    id: 5,
    title: "Språkkafé svenska",
    place: "Vasaparken",
    date: "2020-11-30",
    description:
      "Quisque mollis ex elit, id pellentesque ipsum hendrerit sodales. Donec consectetur libero et ipsum aliquam, sit amet faucibus enim varius. Mauris suscipit, neque vel volutpat eleifend, ex lacus suscipit neque, aliquam suscipit dui nulla in arcu. Aliquam erat volutpat. Nam in pulvinar tortor, iaculis scelerisque lacus. Pellentesque tristique, ligula sed vulputate rhoncus, elit massa imperdiet diam, a gravida purus quam sed purus.",
    host: people[3].name,
    participant: [people[3].name, people[4].name],
    reviews: [],
  },
  {
    id: 6,
    title: "Frontend utvecklare",
    place: "Vasaparken",
    date: "2020-11-15",
    description:
      "Pellentesque tristique, ligula sed vulputate rhoncus, elit massa imperdiet diam, a gravida purus quam sed purus.",
    host: people[2].name,
    participant: [
      people[0].name,
      people[1].name,
      people[2].name,
      people[3].name,
      people[4].name,
    ],
    reviews: [],
  },
  {
    id: 7,
    title: "Jul fest",
    place: "Vasaparken",
    date: "2020-12-20",
    description:
      "Libero et ipsum aliquam, sit amet faucibus enim varius. Mauris suscipit, neque vel volutpat eleifend, ex lacus suscipit neque, aliquam suscipit dui nulla in arcu. Aliquam erat volutpat. Nam in pulvinar tortor, iaculis scelerisque lacus. Pellentesque tristique, ligula sed vulputate rhoncus, elit massa imperdiet diam, a gravida purus quam sed purus.",
    host: people[3].name,
    participant: [
      people[0].name,
      people[1].name,
      people[3].name,
      people[4].name,
    ],
    reviews: [],
  },
];

function getAnimals() {
  const LS_KEY = "viewlist-animals";
  let fromLs = localStorage.getItem(LS_KEY);

  if (!fromLs) {
    localStorage.setItem(LS_KEY, JSON.stringify(defaultData));
    fromLs = localStorage.getItem(LS_KEY);
  }

  return JSON.parse(fromLs);
}

export { getAnimals };
