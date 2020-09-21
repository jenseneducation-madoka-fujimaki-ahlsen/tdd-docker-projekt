import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Login from "@/components/Login.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Login.vue", () => {
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
    host: "1.jpg",
    participant: [],
    reviews: [],
  };

  beforeEach(() => {
    storeOptions = {
      state: { login: false, loginFormIsVisible: false },
      actions: { login: jest.fn() },
    };
    store = new Vuex.Store(storeOptions);

    wrapper = shallowMount(Login, {
      localVue,
      store,
    });
  });

  it("should calls store action 'login' when button 'Logga in' is clicked", () => {
    //Arrange
    let button = wrapper.find("button");
    //Act
    button.trigger("click");
    //Assert
    expect(storeOptions.actions.login).toHaveBeenCalled();
  });
});
