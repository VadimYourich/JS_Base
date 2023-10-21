const app = {
  data() {
    return {
      items: [
        {
          id: 1,
          src: "img/news_photo1.png",
          alt: "news photo 1",
          tag: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        {
          id: 2,
          src: "img/news_photo2.png",
          alt: "news photo 2",
          tag: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
        },
        {
          id: 3,
          src: "img/news_photo3.png",
          alt: "news photo 3",
          tag: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
        },
        {
          id: 4,
          src: "img/news_photo4.png",
          alt: "news photo 4",
          tag: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        {
          id: 5,
          src: "img/news_photo5.png",
          alt: "news photo 5",
          tag: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
        },
        {
          id: 6,
          src: "img/news_photo6.png",
          alt: "news photo 6",
          tag: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
        },
      ],
    };
  },
};

Vue.createApp(app).mount("#news-articles");
