import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import SetReview from "@/components/SetReview.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("SetReview.vue", () => {
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
      { person: "1.jpg", review: 2 },
      { person: "2.jpg", review: 3 },
    ],
  };

  beforeEach(() => {
    storeOptions = {
      state: {
        loginUser: {
          id: 0,
          name: "Madoka",
          email: "madoka@madoka.com",
          password: "madoka123",
          image: "1.jpg",
          participate: [],
          participated: [event],
        },
      },
      actions: {},
    };
    store = new Vuex.Store(storeOptions);

    wrapper = shallowMount(SetReview, {
      propsData: { event },
      localVue,
      store,
    });
  });

  it("should display 2 yellow stars when user has previously set a review with 2 yellow stars", () => {
    //Arrange
    let expectedStar1 = true;
    let expectedStar2 = true;
    let expectedStar3 = false;
    let expectedStar4 = false;
    let expectedStar5 = false;

    let actualStar1 = wrapper.vm.star1;
    let actualStar2 = wrapper.vm.star2;
    let actualStar3 = wrapper.vm.star3;
    let actualStar4 = wrapper.vm.star4;
    let actualStar5 = wrapper.vm.star5;
    //Assert
    expect(actualStar1).toBe(expectedStar1);
    expect(actualStar2).toBe(expectedStar2);
    expect(actualStar3).toBe(expectedStar3);
    expect(actualStar4).toBe(expectedStar4);
    expect(actualStar5).toBe(expectedStar5);
  });

  it("should display button 'Uppdatera' when user has previously set a review", () => {
    //Arrange
    let expected = true;
    let button = wrapper.find(".update");
    let actual = button.exists();
    //Assert
    expect(actual).toBe(expected);
  });

  it("should not display yellow stars when user has not previously set a review", () => {
    //Arrange
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
      reviews: [{ person: "2.jpg", review: 3 }],
    };
    storeOptions = {
      state: {
        loginUser: {
          id: 0,
          name: "Madoka",
          email: "madoka@madoka.com",
          password: "madoka123",
          image: "1.jpg",
          participate: [],
          participated: [event],
        },
      },
      actions: {},
    };
    store = new Vuex.Store(storeOptions);

    wrapper = shallowMount(SetReview, {
      propsData: { event },
      localVue,
      store,
    });
    let expectedStar1 = false;
    let expectedStar2 = false;
    let expectedStar3 = false;
    let expectedStar4 = false;
    let expectedStar5 = false;

    let actualStar1 = wrapper.vm.star1;
    let actualStar2 = wrapper.vm.star2;
    let actualStar3 = wrapper.vm.star3;
    let actualStar4 = wrapper.vm.star4;
    let actualStar5 = wrapper.vm.star5;
    //Assert
    expect(actualStar1).toBe(expectedStar1);
    expect(actualStar2).toBe(expectedStar2);
    expect(actualStar3).toBe(expectedStar3);
    expect(actualStar4).toBe(expectedStar4);
    expect(actualStar5).toBe(expectedStar5);
  });

  it("should not display button 'Uppdatera' when user has not previously set a review", () => {
    //Arrange
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
        {
          person: "2.jpg",
          review: 3,
        },
      ],
    };
    storeOptions = {
      state: {
        loginUser: {
          id: 0,
          name: "Madoka",
          email: "madoka@madoka.com",
          password: "madoka123",
          image: "1.jpg",
          participate: [],
          participated: [event],
        },
      },
      actions: {},
    };
    store = new Vuex.Store(storeOptions);

    wrapper = shallowMount(SetReview, {
      propsData: {
        event,
      },
      localVue,
      store,
    });

    //Arrange
    let expected = false;
    let button = wrapper.find(".update");
    let actual = button.exists();
    //Assert
    expect(actual).toBe(expected);
  });
});
