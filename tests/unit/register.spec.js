import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Register from "@/components/Register.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Register.vue", () => {
  let wrapper;
  let store;
  let storeOptions;
  let people = [
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
  ];

  beforeEach(() => {
    storeOptions = {
      state: { people: people },
      actions: { register: jest.fn() },
    };
    store = new Vuex.Store(storeOptions);

    wrapper = shallowMount(Register, {
      data: () => ({
        valid: true,
      }),
      localVue,
      store,
    });
  });

  it("should calls store action 'register' when button 'Skapa konto' is clicked", () => {
    //Arrange
    let button = wrapper.find("button");
    //Act
    button.trigger("click");
    //Assert
    expect(storeOptions.actions.register).toHaveBeenCalled();
  });
});
