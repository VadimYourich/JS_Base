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

      <section class="blogbanner center">
        <div class="blogbanner__content">
          <div class="blogbanner__title">
            <h1 class="blogbanner__heading">Articles & News</h1>
            <ul class="blogbanner__breadcrumbs">
              <li class="blogbanner__breadcrumb">
                <a class="blogbanner__link" href="index.html">Home</a>
              </li>
              <li class="blogbanner__breadcrumb">
                <a class="blogbanner__link" href="blog.html">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="post center">
        <div class="post__content">
          <h1 class="post__heading">Latest Post</h1>
          <div class="post__box">
            <img
              class="post__img"
              src="@/assets/img/blg_post.png"
              alt="post image"
            />
            <div class="post__subcontent">
              <div class="post__info">
                <h3 class="post__title">
                  Low Cost Latest Invented Interior Designing Ideas
                </h3>
                <p class="post__text">
                  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                  turpis dignissim maximus.posuere in.Contrary to popular
                  belief.
                </p>
                <br /><br />
                <p class="post__text">
                  Lorem Ipsum is not simply random text. It has roots in a piece
                  of classica.
                </p>
              </div>
              <div class="post__datebox">
                <p class="post__date">26&nbsp;December,2022</p>
                <a class="post__button" href="#">
                  <svg
                    class="post__linkimg"
                    width="52"
                    height="53"
                    viewBox="0 0 52 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
                    <path
                      d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141"
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
        </div>
      </section>

      <section class="news center">
        <div class="news__contentbox">
          <h1 class="news__heading">Articles & News</h1>
          <div id="news-articles" class="news__newsbox">
            <div v-for="item in items" :key="item.id" class="news__item">
              <img :src="item.src" :alt="item.alt" class="news__itemimg" />
              <p class="news__tag">{{ item.tag }}</p>
              <div class="news__content">
                <h3 class="news__title">{{ item.title }}</h3>
                <div class="news__boxDate">
                  <p class="news__date">{{ item.date }}</p>
                  <a href="blog-details.html" class="news__button">
                    <svg
                      width="9"
                      height="16"
                      viewBox="0 0 9 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.27101 14.9525L7.21387 8.26683L1.27101 1.58112"
                        stroke="#292F36"
                        stroke-width="2"
                        roke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="news__pagination">
            <div class="news__paginationbox">
              <a
                class="news__paginationlink news__paginationlink_active"
                href="#"
                >01</a
              >
              <a class="news__paginationlink" href="#">02</a>
              <a class="news__paginationlink" href="#">03</a>
              <a class="news__paginationlink" href="#">
                <svg
                  class="news__paginationimg"
                  width="53"
                  height="52"
                  viewBox="0 0 53 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                  <path
                    d="M23.5571 32L29.5 25.3143L23.5571 18.6286"
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

      <FooterComponent />
    </body>
  </html>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import FooterComponent from "./FooterComponent.vue";
export default {
  components: { HeaderComponent, FooterComponent },
  data() {
    return {
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
