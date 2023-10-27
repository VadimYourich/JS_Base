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
      <HeaderComponent />

      <section class="top-banner center"></section>

      <section id="blog-details" class="blogdetails center">
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
