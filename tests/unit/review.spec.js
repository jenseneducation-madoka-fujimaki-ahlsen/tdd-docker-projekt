import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Review from "@/components/Review.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Review.vue", () => {
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
    participant: ["1.jpg", "2.jpg", "3.jpg"],
    reviews: [
      { person: "1.jpg", review: 5 },
      { person: "2.jpg", review: 3 },
    ],
  };

  beforeEach(() => {
    storeOptions = {
      state: {},
      actions: {},
    };
    store = new Vuex.Store(storeOptions);

    wrapper = shallowMount(Review, {
      propsData: { event },
      localVue,
      store,
    });
  });

  it("should display average of reviews when renders", () => {
    //Arrange
    const expected = 4;
    //Act
    let actual = wrapper.vm.averageReview;
    //Assert
    expect(actual).toBe(expected);
  });
});
