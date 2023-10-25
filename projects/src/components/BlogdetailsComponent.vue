<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Blog details</title>
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

      <section class="top-banner center"></section>

      <!-- Vue -->
      <section id="blog-details" class="blogdetails center">
        <!-- <articles></articles> -->
        <p>{{ addArticle }}</p>
        <div class="blogdetails__box">
          <article
            v-for="article in selectedArticle"
            :key="article.id"
            class="blogdetails__article"
          >
            <div class="blogdetails__content">
              <h1 class="blogdetails__heading">{{ article.heading_1 }}</h1>
              <img
                class="blogdetails__articleimg"
                :src="article.src_1"
                :alt="article.alt_1"
              />

              <div class="blogdetails__menu">
                <p class="blogdetails__date">{{ article.date }}</p>
                <div class="blogdetails__menubox">
                  <ul class="blogdetails__breadcrumbs">
                    <li class="blogdetails__breadcrumb">
                      <a class="blogdetails__link" href="#">{{
                        article.link_1
                      }}</a>
                    </li>
                    <li class="blogdetails__breadcrumb">
                      <a class="blogdetails__link" href="#">{{
                        article.link_2
                      }}</a>
                    </li>
                    <li class="blogdetails__breadcrumb">
                      <a class="blogdetails__link" href="#">{{
                        article.link_3
                      }}</a>
                    </li>
                  </ul>
                </div>
              </div>

              <p class="blogdetails__text">{{ article.paragraph_1 }}</p>
              <p class="blogdetails__text">{{ article.paragraph_2 }}</p>

              <div class="blogdetails__quotes">
                <svg
                  class="blogdetails__icon"
                  width="74"
                  height="56"
                  viewBox="0 0 74 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z"
                    fill="#CDA274"
                  />
                </svg>
                <p class="blogdetails__note">{{ quoteText }}</p>
              </div>

              <h1 class="blogdetails__heading">{{ article.heading_2 }}</h1>
              <p class="blogdetails__text">{{ article.paragraph_3 }}</p>

              <div class="blogdetails__detailsbox">
                <div class="blogdetails__subbox">
                  <span class="blogdetails__span">{{ article.idtext_1 }}</span>
                  <p class="blogdetails__subtext">{{ article.text_1 }}</p>
                </div>
                <div class="blogdetails__subbox">
                  <span class="blogdetails__span">{{ article.idtext_2 }}</span>
                  <p class="blogdetails__subtext">{{ article.text_2 }}</p>
                </div>
                <div class="blogdetails__subbox">
                  <span class="blogdetails__span">{{ article.idtext_3 }}</span>
                  <p class="blogdetails__subtext">{{ article.text_2 }}</p>
                </div>
              </div>

              <img
                class="blogdetails__articleimg"
                :src="article.src_2"
                :alt="article.alt_2"
              />
              <p class="blogdetails__text">{{ article.paragraph_4 }}</p>
            </div>
          </article>

          <aside class="sidebar">
            <div class="sidebar__content">
              <h2 class="sidebar__heading">{{ sidebarTitle }}</h2>
              <div class="sidebar__buttonsbox">
                <button
                  v-for="button in buttons"
                  :key="button.idflag"
                  @click="activeButton(button.idflag)"
                  type="button"
                  :class="[
                    'sidebar__button',
                    button.idflag === buttonIsActive
                      ? 'sidebar__button_active'
                      : false,
                  ]"
                >
                  {{ button.title }}
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <!-- /Vue -->

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

      <!-- <script src="https://unpkg.com/vue@next"></script>
        <script src="scripts/blogdetails.js"></script> -->
    </body>
  </html>
</template>

<script>
export default {
  data() {
    return {
      listArticles: [
        {
          id: "kitchen",
          idflag: 1,
          heading_1: "Let’s Get Solution for Building Construction Work",
          src_1: require("@/assets/img/article11.png"),
          alt_1: "kitchen photo 1",
          date: "26 December,2022",
          link_1: "Interior",
          link_2: "Home",
          link_3: "Decore",
          paragraph_1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
          paragraph_2:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          heading_2: "Design sprints are great",
          paragraph_3:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          idtext_1: 1,
          text_1:
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          idtext_2: 2,
          text_2:
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          idtext_3: 3,
          text_3:
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          src_2: require("@/assets/img/article12.png"),
          alt_2: "kitchen photo 2",
          paragraph_4:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        },
        {
          id: "bedroom",
          idflag: 2,
          heading_1: "Advanced bedroom solutions in action",
          src_1: require("@/assets/img/article21.jpg"),
          alt_1: "bedroom photo 1",
          date: "10 December,2021",
          link_1: "Interior",
          link_2: "Home",
          link_3: "Bedroom",
          paragraph_1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
          paragraph_2:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          heading_2: "Design sprints are great",
          paragraph_3:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          idtext_1: 1,
          text_1:
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          idtext_2: 2,
          text_2:
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          idtext_3: 3,
          text_3:
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          src_2: require("@/assets/img/article22.jpg"),
          alt_2: "bedroom photo 2",
          paragraph_4:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        },
        {
          id: "building",
          idflag: 3,
          heading_1: "Construction according to your dream design",
          src_1: require("@/assets/img/article31.jpg"),
          alt_1: "building photo 1",
          date: "5 December,2022",
          link_1: "Interior",
          link_2: "Home",
          link_3: "Building",
          paragraph_1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
          paragraph_2:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          heading_2: "Design sprints are great",
          paragraph_3:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          idtext_1: 1,
          text_1:
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          idtext_2: 2,
          text_2:
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          idtext_3: 3,
          text_3:
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          src_2: require("@/assets/img/article32.jpg"),
          alt_2: "building photo 2",
          paragraph_4:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        },
        {
          id: "architecture",
          idflag: 4,
          heading_1: "Cutting-edge and most modern architecture",
          src_1: require("@/assets/img/article41.jpg"),
          alt_1: "architecture photo 1",
          date: "31 December,2022",
          link_1: "Interior",
          link_2: "Home",
          link_3: "Architecture",
          paragraph_1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
          paragraph_2:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          heading_2: "Design sprints are great",
          paragraph_3:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          idtext_1: 1,
          text_1:
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          idtext_2: 2,
          text_2:
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          idtext_3: 3,
          text_3:
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          src_2: require("@/assets/img/article42.jpg"),
          alt_2: "architecture photo 2",
          paragraph_4:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        },
        {
          id: "kitchen-planning",
          idflag: 5,
          heading_1: "Kitchen planning solutions today in action",
          src_1: require("@/assets/img/article51.jpg"),
          alt_1: "kitchen-planning photo 1",
          date: "16 December,2020",
          link_1: "Interior",
          link_2: "Home",
          link_3: "Kitchen-planning",
          paragraph_1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
          paragraph_2:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          heading_2: "Design sprints are great",
          paragraph_3:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          idtext_1: 1,
          text_1:
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          idtext_2: 2,
          text_2:
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          idtext_3: 3,
          text_3:
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          src_2: require("@/assets/img/article52.jpg"),
          alt_2: "kitchen-planning photo 2",
          paragraph_4:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        },
        {
          id: "bedroom",
          idflag: 6,
          heading_1: "Advanced bedroom solutions",
          src_1: require("@/assets/img/article61.jpg"),
          alt_1: "bedroom photo 1",
          date: "30 December,2022",
          link_1: "Interior",
          link_2: "Home",
          link_3: "Bedroom",
          paragraph_1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
          paragraph_2:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          heading_2: "Design sprints are great",
          paragraph_3:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          idtext_1: 1,
          text_1:
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          idtext_2: 2,
          text_2:
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          idtext_3: 3,
          text_3:
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          src_2: require("@/assets/img/article62.jpg"),
          alt_2: "bedroom photo 2",
          paragraph_4:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        },
      ],
      quoteText: "The details are not the details. They make the design.",
      sidebarTitle: "Tags",
      buttonIsActive: 1,
      selectedArticle: [],
      buttons: [
        { id: "kitchen", idflag: 1, title: "Kitchen" },
        { id: "bedroom", idflag: 2, title: "Bedroom" },
        { id: "building", idflag: 3, title: "Building" },
        { id: "architecture", idflag: 4, title: "Architecture" },
        { id: "kitchen-planning", idflag: 5, title: "Kitchen Planning" },
        { id: "bedroom", idflag: 6, title: "Bedroom" },
      ],
    };
  },
  methods: {
    activeButton(flag) {
      const index = flag;
      this.listArticles.forEach((article) => {
        if (index === article.idflag) {
          this.selectedArticle = [];
          this.buttonIsActive = index;
          return this.selectedArticle.push(article);
        }
      });
    },
  },
  computed: {
    addArticle() {
      if (this.selectedArticle.length === 0) {
        return this.selectedArticle.push(this.listArticles[0]);
      }
    },
  },
};
</script>

<style scoped></style>
