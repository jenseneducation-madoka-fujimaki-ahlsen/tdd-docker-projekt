const people = [
  {
    id: 0,
    name: "Madoka",
    participate: [],
    participated: [],
  },
  {
    id: 1,
    name: "Christian",
    participate: [],
    participated: [],
  },
  {
    id: 2,
    name: "Jonatan",
    participate: [],
    participated: [],
  },
  {
    id: 3,
    name: "Hanna",
    participate: [],
    participated: [],
  },
  {
    id: 4,
    name: "Emma",
    participate: [],
    participated: [],
  },
];

const events = [
  {
    id: 0,
    title: "Höstens picknick",
    place: "Vasaparken",
    date: "2020-09-15",
    image: "picnic.jpg",
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
    image: "run.jpg",
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
    place: "Gamla stan",
    date: "2020-10-22",
    image: "drawing.jpg",
    description:
      "Mauris suscipit, neque vel volutpat eleifend, ex lacus suscipit neque, aliquam suscipit dui nulla in arcu. Aliquam erat volutpat. Nam in pulvinar tortor, iaculis scelerisque lacus. Pellentesque tristique, ligula sed vulputate rhoncus, elit massa imperdiet diam, a gravida purus quam sed purus.",
    host: people[3].name,
    participant: [people[3].name, people[2].name],
    reviews: [],
  },
  {
    id: 3,
    title: "Laga japansk mat",
    place: "Odenplan",
    date: "2020-10-01",
    image: "food.jpg",
    description:
      "Nam in pulvinar tortor, iaculis scelerisque lacus. Pellentesque tristique, ligula sed vulputate rhoncus, elit massa imperdiet diam, a gravida purus quam sed purus.",
    host: people[0].name,
    participant: [people[0].name],
    reviews: [],
  },
  {
    id: 4,
    title: "Game kväll",
    place: "Telefonplan",
    date: "2020-09-25",
    image: "game.jpg",
    description:
      "Donec at leo et velit faucibus egestas ut vulputate magna. Vivamus eu posuere dui. Etiam semper venenatis purus, quis laoreet est elementum nec. Quisque mollis ex elit, id pellentesque ipsum hendrerit sodales. Donec consectetur libero et ipsum aliquam, sit amet faucibus enim varius. ",
    host: people[4].name,
    participant: [people[0].name, people[1].name, people[4].name],
    reviews: [],
  },
  {
    id: 5,
    title: "Språkkafé svenska",
    place: "Odenplan",
    date: "2020-11-30",
    image: "sweden.jpg",
    description:
      "Quisque mollis ex elit, id pellentesque ipsum hendrerit sodales. Donec consectetur libero et ipsum aliquam, sit amet faucibus enim varius. Mauris suscipit, neque vel volutpat eleifend, ex lacus suscipit neque, aliquam suscipit dui nulla in arcu. Aliquam erat volutpat. Nam in pulvinar tortor, iaculis scelerisque lacus. Pellentesque tristique, ligula sed vulputate rhoncus, elit massa imperdiet diam, a gravida purus quam sed purus.",
    host: people[3].name,
    participant: [people[3].name, people[4].name],
    reviews: [],
  },
  {
    id: 6,
    title: "Frontend utvecklare",
    place: "Stockholm city",
    date: "2020-11-15",
    image: "pc.jpg",
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
    place: "Slussen",
    date: "2020-12-20",
    image: "christmas.jpg",
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

people[0].Participate = [events[3], events[4], events[6], events[7]];
people[1].Participate = [events[4], events[6], events[7]];
people[2].Participate = [events[2], events[6]];
people[3].Participate = [events[2], events[5], events[6], events[7]];
people[4].Participate = [events[4], events[5], events[6], events[7]];
people[0].participated = [
  {
    event: events[0],
    review: 5,
  },
  {
    event: events[1],
    review: 3,
  },
];
people[1].participated = [
  {
    event: events[0],
    review: 3,
  },
];
people[2].participated = [
  {
    event: events[1],
    review: "",
  },
];
people[3].participated = [
  {
    event: events[1],
    review: 4,
  },
];
people[4].participated = [
  {
    event: events[1],
    review: 4,
  },
];

function getEvents() {
  const LS_KEY = "viewlist-events";
  let fromLs = localStorage.getItem(LS_KEY);

  if (!fromLs) {
    localStorage.setItem(LS_KEY, JSON.stringify(events));
    fromLs = localStorage.getItem(LS_KEY);
  }

  return JSON.parse(fromLs);
}

function getPeople() {
  const LS_KEY = "viewlist-people";
  let fromLs = localStorage.getItem(LS_KEY);

  if (!fromLs) {
    localStorage.setItem(LS_KEY, JSON.stringify(people));
    fromLs = localStorage.getItem(LS_KEY);
  }

  return JSON.parse(fromLs);
}

export { getEvents, getPeople };
