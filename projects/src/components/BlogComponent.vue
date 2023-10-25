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
      <header class="header center">
        <div class="header__menubar">
          <a class="header__logo" href="index.html">
            <svg
              class="header__logoimg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                fill="#CDA274"
              />
            </svg>
            <p class="header__logoText">Interno</p>
          </a>
          <nav class="header__menu">
            <ul class="header__menuList">
              <li class="header__menuItem">
                <a href="index.html" class="header__menuLink">Home</a>
              </li>
              <li class="header__menuItem">
                <a href="#" class="header__menuLink">Project</a>
              </li>
              <li class="header__menuItem">
                <a href="blog.html" class="header__menuLink">Blog</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

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
          <!-- Vue -->
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
          <!-- /Vue -->

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

      <footer class="footer center">
        <div class="footer__items">
          <div class="footer__logos">
            <!-- стили logo - от header  -->
            <a class="header__logo" href="index.html">
              <svg
                class="header__logoimg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                  fill="#CDA274"
                />
              </svg>
              <p class="header__logoText">Interno</p>
            </a>
            <p class="footer__text">
              It&nbsp;is&nbsp;a&nbsp;long established fact that a&nbsp;reader
              will be&nbsp;distracted lookings.
            </p>
            <div class="footer__icons">
              <a href="#" class="footer__iconlink">
                <svg
                  class="footer__icon"
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6367 4.59375C17.3398 4.06641 17.9727 3.43359 18.4648 2.69531C17.832 2.97656 17.0938 3.1875 16.3555 3.25781C17.1289 2.80078 17.6914 2.09766 17.9727 1.21875C17.2695 1.64062 16.4609 1.95703 15.6523 2.13281C14.9492 1.39453 14 0.972656 12.9453 0.972656C10.9062 0.972656 9.25391 2.625 9.25391 4.66406C9.25391 4.94531 9.28906 5.22656 9.35938 5.50781C6.30078 5.33203 3.55859 3.85547 1.73047 1.64062C1.41406 2.16797 1.23828 2.80078 1.23828 3.50391C1.23828 4.76953 1.87109 5.89453 2.89062 6.5625C2.29297 6.52734 1.69531 6.38672 1.20312 6.10547V6.14062C1.20312 7.93359 2.46875 9.41016 4.15625 9.76172C3.875 9.83203 3.52344 9.90234 3.20703 9.90234C2.96094 9.90234 2.75 9.86719 2.50391 9.83203C2.96094 11.3086 4.33203 12.3633 5.94922 12.3984C4.68359 13.3828 3.10156 13.9805 1.37891 13.9805C1.0625 13.9805 0.78125 13.9453 0.5 13.9102C2.11719 14.9648 4.05078 15.5625 6.16016 15.5625C12.9453 15.5625 16.6367 9.97266 16.6367 5.08594C16.6367 4.91016 16.6367 4.76953 16.6367 4.59375Z"
                    fill="#292F36"
                  />
                </svg>
              </a>
              <a href="#" class="footer__iconlink">
                <svg
                  class="footer__icon"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.14062 16V5.48828H0.871094V16H4.14062ZM2.48828 4.08203C3.54297 4.08203 4.38672 3.20312 4.38672 2.14844C4.38672 1.12891 3.54297 0.285156 2.48828 0.285156C1.46875 0.285156 0.625 1.12891 0.625 2.14844C0.625 3.20312 1.46875 4.08203 2.48828 4.08203ZM16.3398 16H16.375V10.2344C16.375 7.42188 15.7422 5.24219 12.4375 5.24219C10.8555 5.24219 9.80078 6.12109 9.34375 6.92969H9.30859V5.48828H6.17969V16H9.44922V10.7969C9.44922 9.42578 9.69531 8.125 11.3828 8.125C13.0703 8.125 13.1055 9.67188 13.1055 10.9023V16H16.3398Z"
                    fill="#292F36"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div class="footer__menubar">
            <h3 class="footer__heading">Pages</h3>
            <nav class="footer__menu">
              <ul class="footer__menuList">
                <li class="footer__menuItem">
                  <a href="index.html" class="footer__menuLink">Home</a>
                </li>
                <li class="footer__menuItem">
                  <a href="#" class="footer__menuLink">Project</a>
                </li>
                <li class="footer__menuItem">
                  <a href="blog.html" class="footer__menuLink">Blog</a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="footer__contact">
            <h3 class="footer__heading">Contact</h3>
            <p class="footer__address">
              55 East Birchwood Ave.<br />
              Brooklyn, New York 11201
            </p>
            <a class="footer__email" href="#">contact@interno.com</a>
            <p class="footer__phone">(123) 456 - 7890</p>
          </div>
        </div>
      </footer>
    </body>
  </html>
</template>

<script>
export default {
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
