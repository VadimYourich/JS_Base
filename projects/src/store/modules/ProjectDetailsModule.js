export default {
  state: {
    projectdetails: {
      heading: "Minimal Look Bedrooms",
      paragraf_1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
      paragraf_2:
        "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
    },
    sliderPictures: [
      {
        src: require("@/assets/img/projectdetails1.png"),
        alt: "photo details 1",
      },
      {
        src: require("@/assets/img/projectdetails2.png"),
        alt: "photo details 2",
      },
      {
        src: require("@/assets/img/projectdetails3.png"),
        alt: "photo details 3",
      },
    ],
  },
  getters: {
    getSliderPictures(state) {
      return state.sliderPictures;
    },
    getProjectDetails(state) {
      return state.projectdetails;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
};
