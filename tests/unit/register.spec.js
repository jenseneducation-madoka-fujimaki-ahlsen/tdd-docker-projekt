import { shallowMount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Register from "@/components/Register.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);

const router = new VueRouter();

describe("Register.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Register, {
      localVue,
      router,

      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
  });

  it("should ", () => {
    //Arrange
    const expected = "";
    //Act
    let actual = "";
    //Assert
    expect(actual).toBe(expected);
  });
});
