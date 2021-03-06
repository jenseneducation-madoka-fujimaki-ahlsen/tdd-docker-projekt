import { shallowMount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);
const router = new VueRouter();

describe("Home.vue", () => {
  let wrapper;
  let store;
  let data = {
    events: [
      {
        id: 0,
        title: "Höstens picknick",
        place: "Vasaparken",
        date: "2020-09-15",
        image: "picnic.jpg",
        description:
          "Vivamus viverra, augue blandit ultricies euismod, justo nisl condimentum urna, nec sodales orci dolor vitae dolor. Donec at leo et velit faucibus egestas ut vulputate magna. Vivamus eu posuere dui. Etiam semper venenatis purus, quis laoreet est elementum nec.",
        host: "1.jpg",
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
        host: "1.jpg",
        participant: [],
        reviews: [],
      },
    ],
    people: [
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
    ],
  };

  beforeEach(() => {
    const storeOptions = {
      state: { events: data.events, people: data.people, loggedIn: true },
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
        RouterLink: RouterLinkStub,
      },
    });
  });

  it("should get event data from store when renders", () => {
    //Arrange
    const expected = store.state.events.length;

    let actual = wrapper.vm.events.length;
    //Assert
    expect(actual).toBe(expected);
  });

  it("should be displayed only events with valid dates", () => {
    //Arrange
    const expected = 1;

    let actual = wrapper.vm.validEvents.length;
    //Assert
    expect(actual).toBe(expected);
  });

  it("should not display hero when logged in", async () => {
    //Arrange
    const expected = "display: none;";

    let actual = wrapper.find(".hero");

    //Assert
    expect(actual.attributes().style).toBe(expected);
  });

  it("should display eventTab when logged in", async () => {
    //Arrange
    const expected = true;

    let actual = wrapper.find(".eventTab");

    //Assert
    expect(actual.exists()).toBe(expected);
  });
});
