import { shallowMount, createLocalVue } from "@vue/test-utils";
import AddEvent from "@/components/AddEvent.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("AddEvent.vue", () => {
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
        events: [event],
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
      actions: { addEvent: jest.fn() },
    };
    store = new Vuex.Store(storeOptions);

    wrapper = shallowMount(AddEvent, {
      data: () => ({
        title: "Title",
        description: "Description",
        place: "Place",
        date: "2020-10-10",
        fileName: "1.jpg",
        valid: true,
      }),
      localVue,
      store,
    });
  });

  it("should calls store action 'addEvent' when button 'Logga in' is clicked", () => {
    //Arrange
    let button = wrapper.find("button");
    //Act
    button.trigger("click");
    //Assert
    expect(storeOptions.actions.addEvent).toHaveBeenCalled();
  });
});
