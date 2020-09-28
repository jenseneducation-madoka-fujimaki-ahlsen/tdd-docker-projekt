import {
  shallowMount,
  mount,
  createLocalVue,
  RouterLinkStub,
} from "@vue/test-utils";

import Header from "@/components/Header.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);

const router = new VueRouter();

describe("Header.vue", () => {
  let wrapper;
  let store;
  let storeOptions;

  beforeEach(() => {
    storeOptions = {
      state: {
        loginFormIsVisible: true,
        registerFormIsVisible: true,
        loggedIn: true,
        loginUser: {
          id: 0,
          name: "Madoka",
          image: "1.jpg",
          participate: [],
          participated: [],
        },
      },
      actions: {
        showLoginForm: jest.fn(),
        showRegisterForm: jest.fn(),
        hideForm: jest.fn(),
      },
    };
    store = new Vuex.Store(storeOptions);
    wrapper = mount(Header, {
      localVue,
      router,
      store,
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
  });

  it(" should calls store action 'showLoginForm' when button 'Logga in' is clicked", async () => {
    //Arrange
    const button = wrapper.find(".login-button");

    //Act
    await button.trigger("click");

    //Assert
    expect(storeOptions.actions.showLoginForm).toHaveBeenCalled();
  });

  it(" should calls store action 'showRegisterForm' when button 'Bli medlem' is clicked", async () => {
    //Arrange
    const button = wrapper.find(".register-button");

    //Act
    await button.trigger("click");

    //Assert
    expect(storeOptions.actions.showRegisterForm).toHaveBeenCalled();
  });

  it("should appear login form when 'loginFormIsVisible' is true", async () => {
    //Arrange
    const expected = true;

    const childComponent = wrapper.findComponent(Login);
    let actual = childComponent.find("#login").exists();
    //Assert
    expect(actual).toBe(expected);
  });

  it("should appear register form when 'registerFormIsVisible' is true", async () => {
    //Arrange
    const expected = true;

    const childComponent = wrapper.findComponent(Register);
    let actual = childComponent.find("#register").exists();
    //Assert
    expect(actual).toBe(expected);
  });

  it("should not display link 'Logga in' when logged in", async () => {
    //Arrange
    const expected = "display: none;";

    let actual = wrapper.find(".login-button");
    //Assert
    expect(actual.attributes().style).toBe(expected);
  });

  // before use vuex

  // it("should appear login form when clicking on button 'Logga in'", async () => {
  //   //Arrange
  //   const expected = true;
  //   const button = wrapper.find(".login-button");

  //   //Act
  //   await button.trigger("click");
  //   const childComponent = wrapper.findComponent(Login);
  //   let actual = childComponent.find("#login").exists();
  //   //Assert
  //   expect(actual).toBe(expected);
  // });

  // it("should appear register form when clicking on button 'bli medlem'", async () => {
  //   //Arrange
  //   const expected = true;
  //   const button = wrapper.find(".register-button");

  //   //Act
  //   await button.trigger("click");
  //   const childComponent = wrapper.findComponent(Register);
  //   let actual = childComponent.find("#register").exists();
  //   //Assert
  //   expect(actual).toBe(expected);
  // });
});
