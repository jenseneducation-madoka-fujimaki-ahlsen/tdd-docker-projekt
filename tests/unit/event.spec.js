import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Event from "@/components/Event.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Event.vue", () => {
  let wrapper;
  let store;
  let storeOptions;
  let event = {
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
  };

  beforeEach(() => {
    storeOptions = {
      state: { login: false, loginFormIsVisible: false },
    };
    store = new Vuex.Store(storeOptions);

    wrapper = shallowMount(Event, {
      propsData: { event },
      localVue,
      store,
    });
  });

  it("should show login form when button 'Delta' is clicked of users who are not logged in", () => {
    //Arrange
    const expected = true;
    let button = wrapper.find("button");

    //Act
    button.trigger("click");
    let actual = storeOptions.state.loginFormIsVisible;

    //Assert
    expect(actual).toBe(expected);
  });
});
