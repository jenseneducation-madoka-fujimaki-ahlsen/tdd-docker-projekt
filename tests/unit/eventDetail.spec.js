import { shallowMount, createLocalVue } from "@vue/test-utils";
import EventDetail from "@/components/EventDetail.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("EventDetail.vue", () => {
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
      state: {
        login: false,
        loginFormIsVisible: false,
        loginUser: {
          id: 1,
          name: "Madoka",
          email: "madoka@madoka.com",
          password: "madoka123",
          image: "2.jpg",
          participate: [],
          participated: [],
        },
      },
      actions: { checkLogin: jest.fn() },
    };
    store = new Vuex.Store(storeOptions);

    wrapper = shallowMount(EventDetail, {
      propsData: { event },
      localVue,
      store,
    });
  });

  it("should calls store action 'checkLogin' when button 'Delta' is clicked", () => {
    //Arrange
    let button = wrapper.find("button");
    //Act
    button.trigger("click");
    //Assert
    expect(storeOptions.actions.checkLogin).toHaveBeenCalled();
  });

  it("should not display button 'Delta' for past events", () => {
    //Arrange
    const expected = false;
    let oldEvents = true;
    let wrapper = shallowMount(EventDetail, {
      propsData: { event, oldEvents },
      localVue,
      store,
    });
    let actual = wrapper.find(".join-button");
    //Assert
    expect(actual.exists()).toBe(expected);
  });

  it("should not display button 'Ta bort' for past events", () => {
    //Arrange
    const expected = false;
    let oldEvents = true;
    let wrapper = shallowMount(EventDetail, {
      propsData: { event, oldEvents },
      localVue,
      store,
    });

    let actual = wrapper.find(".remove-button");
    //Assert
    expect(actual.exists()).toBe(expected);
  });

  // Systemtest
  it("should display 4 starts on rewiew detail when user has set 4 stars on rewiew form", () => {
    //Arrange
    const setReview = wrapper.findComponent("SetReview");

    //Assert
    expect(actual.exists()).toBe(expected);
  });
});
