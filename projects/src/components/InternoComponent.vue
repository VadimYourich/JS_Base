<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Interno Blog</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="scss/style.css" />
    </head>
    <body>
      <HeaderComponent />

      <section class="banner center">
        <div class="banner__box">
          <div class="banner__content">
            <div class="banner__subcontent">
              <h1 class="banner__heading">Let Your Home Be Unique</h1>
              <p class="banner__text">
                There are many variations of the passages of lorem Ipsum
                fromavailable, majority.
              </p>
            </div>
            <a class="banner__button" href="#">
              Get Started
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                  stroke="#CDA274"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section class="project center">
        <div class="project__info">
          <h2 class="project__heading">Follow Our Projects</h2>
          <p class="project__text">
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>
        </div>
        <div class="project__items">
          <div class="project__item">
            <img
              class="project__img project__img1"
              src="@/assets/img/project_photo1.png"
              alt="project photo 1"
            />
            <div class="project__box">
              <div class="project__infobox">
                <h3 class="project__title">Modern Kitchan</h3>
                <p class="project__subtitle">Decor / Artchitecture</p>
              </div>
              <a class="project__button" href="#">
                <svg
                  class="project__icon"
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                  <path
                    d="M32 44L40 35L32 26"
                    stroke="#292F36"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="project__item">
            <img
              class="project__img project__img2"
              src="@/assets/img/project_photo2.png"
              alt="project photo 2"
            />
            <div class="project__box">
              <div class="project__infobox">
                <h3 class="project__title">Modern Kitchan</h3>
                <p class="project__subtitle">Decor / Artchitecture</p>
              </div>
              <a class="project__button" href="#">
                <svg
                  class="project__icon"
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                  <path
                    d="M32 44L40 35L32 26"
                    stroke="#292F36"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="project__item">
            <img
              class="project__img project__img3"
              src="@/assets/img/project_photo3.png"
              alt="project photo 3"
            />
            <div class="project__box">
              <div class="project__infobox">
                <h3 class="project__title">Modern Kitchan</h3>
                <p class="project__subtitle">Decor / Artchitecture</p>
              </div>
              <a class="project__button" href="#">
                <svg
                  class="project__icon"
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                  <path
                    d="M32 44L40 35L32 26"
                    stroke="#292F36"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="project__item">
            <img
              class="project__img project__img4"
              src="@/assets/img/project_photo4.png"
              alt="project photo 4"
            />
            <div class="project__box">
              <div class="project__infobox">
                <h3 class="project__title">Modern Kitchan</h3>
                <p class="project__subtitle">Decor / Artchitecture</p>
              </div>
              <a class="project__button" href="#">
                <svg
                  class="project__icon"
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                  <path
                    d="M32 44L40 35L32 26"
                    stroke="#292F36"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="counter center">
        <div class="counter__content">
          <div class="counter__item">
            <p class="counter__number">12</p>
            <p class="counter__text">Years Of Experiance</p>
          </div>
          <div class="counter__item">
            <p class="counter__number">85</p>
            <p class="counter__text">Success Project</p>
          </div>
          <div class="counter__item">
            <p class="counter__number">15</p>
            <p class="counter__text">Active Project</p>
          </div>
          <div class="counter__item">
            <p class="counter__number">95</p>
            <p class="counter__text">Happy CUstomers</p>
          </div>
        </div>
      </section>

      <section class="blog center">
        <h2 class="blog__heading">Articles & News</h2>
        <p class="blog__text">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </p>
        <div class="blog__items">
          <CardsComponent :items="items" />
        </div>
      </section>

      <FooterComponent />
    </body>
  </html>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import FooterComponent from "./FooterComponent.vue";
import CardsComponent from "./CardsComponent.vue";
export default {
  components: { HeaderComponent, FooterComponent, CardsComponent },
  data() {
    return {
      headTitle: "Interno",
      items: [
        {
          id: 1,
          src: require("@/assets/img/news_photo1.png"),
          alt: "news photo 1",
          tag: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        {
          id: 2,
          src: require("@/assets/img/news_photo2.png"),
          alt: "news photo 2",
          tag: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
        },
        {
          id: 3,
          src: require("@/assets/img/news_photo3.png"),
          alt: "news photo 3",
          tag: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
        },
        {
          id: 4,
          src: require("@/assets/img/news_photo4.png"),
          alt: "news photo 4",
          tag: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        {
          id: 5,
          src: require("@/assets/img/news_photo5.png"),
          alt: "news photo 5",
          tag: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
        },
        {
          id: 6,
          src: require("@/assets/img/news_photo6.png"),
          alt: "news photo 6",
          tag: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
