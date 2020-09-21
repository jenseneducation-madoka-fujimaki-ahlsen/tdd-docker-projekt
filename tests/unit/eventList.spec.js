import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import EventList from "@/views/Home.vue";
import Home from "@/views/Home.vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);
const router = new VueRouter();

describe("Home.vue", () => {
  let wrapper, wrapper2;
  let store;
  let events = [
    {
      id: 0,
      title: "Höstens picknick",
      place: "Vasaparken",
      date: "2020-09-15",
      image: "picnic.jpg",
      description:
        "Vivamus viverra, augue blandit ultricies euismod, justo nisl condimentum urna, nec sodales orci dolor vitae dolor. Donec at leo et velit faucibus egestas ut vulputate magna. Vivamus eu posuere dui. Etiam semper venenatis purus, quis laoreet est elementum nec.",
      host: "Madoka",
      participant: [],
      reviews: [],
    },
    {
      id: 1,
      title: "Löpning och avslappnad middag",
      place: "Farsta",
      date: "2020-10-01",
      image: "run.jpg",
      description:
        "Quisque mollis ex elit, id pellentesque ipsum hendrerit sodales. Donec consectetur libero et ipsum aliquam, sit amet faucibus enim varius. Mauris suscipit, neque vel volutpat eleifend, ex lacus suscipit neque, aliquam suscipit dui nulla in arcu.",
      host: "Madoka",
      participant: [],
      reviews: [],
    },
  ];

  beforeEach(() => {
    const storeOptions = {
      state: { events: events, people: [] },
      actions: { getEvents: jest.fn(), getPeople: jest.fn() },
    };
    store = new Vuex.Store(storeOptions);

    wrapper = shallowMount(Home, {
      localVue,
      router,
      store,
      stubs: {
        Header: true,
        Footer: true,
      },
    });

    wrapper2 = shallowMount(EventList, {
      localVue,
      store,
      parentComponent: wrapper,
      propsData: { events },
      stubs: {
        Event: true,
      },
    });
  });

  it("should get event data from Home.vue when renders", () => {
    //Arrange
    const expected = wrapper.vm.events.length;
    //Act
    let actual = wrapper2.vm.events.length;

    //Assert
    expect(actual).toBe(expected);
  });
});
