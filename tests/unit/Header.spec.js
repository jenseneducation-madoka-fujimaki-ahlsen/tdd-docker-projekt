import { shallowMount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Header from "@/components/Header.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);

const router = new VueRouter();

describe("Header.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Header, {
      localVue,
      router,
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
  });

  it("should appear login form when clicking on button 'Logga in'", async () => {
    //Arrange
    const expected = true;
    const button = wrapper.find(".login-button");
    //Act
    await button.trigger("click");
    let actual = wrapper.find("#login").exists();
    //Assert
    expect(actual).toBe(expected);
  });
});
