import { mount, RouterLinkStub } from "@vue/test-utils";
import Footer from "@/components/Footer.vue";

const wrapper = mount(Footer, {
  data: () => ({
    links: [
      {
        id: 2,
        text: "Kontakt",
        page: "/contact",
      },
    ],
  }),
  stubs: {
    RouterLink: RouterLinkStub,
  },
});

// Systemtest
it("should renders a router-link tag with to /contact", () => {
  //Arrange
  const expected = "/contact";
  const button = wrapper.findComponent(RouterLinkStub);

  //Assert
  expect(button.props().to).toBe(expected);
});
