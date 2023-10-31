<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Project</title>
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

      <section class="projectbanner center">
        <div class="blogbanner__content">
          <div class="blogbanner__title">
            <h1 class="blogbanner__heading">Our Project</h1>
            <ul class="blogbanner__breadcrumbs">
              <li class="blogbanner__breadcrumb">
                <a class="blogbanner__link" href="index.html">Home</a>
              </li>
              <li class="blogbanner__breadcrumb">
                <a class="blogbanner__link" href="project.html">Project</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="projects center">
        <div class="projects__categories">
          <button
            v-for="button in buttons"
            :key="button.idflag"
            @click="activeButton(button.idflag)"
            type="button"
            :class="[
              'projects__button',
              button.idflag === buttonActive
                ? 'projects__button_active'
                : false,
            ]"
          >
            {{ button.title }}
          </button>
        </div>

        <div class="projects__box">
          <div
            v-for="item in listProjects"
            :key="item.id"
            class="projects__project"
          >
            <div class="projects__starbox">
              <svg
                v-if="item.flag"
                class="projects__star"
                width="36"
                height="35"
                viewBox="0 0 36 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_993_156)">
                  <path
                    d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z"
                    fill="#FFA928"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_993_156"
                    x="0.186424"
                    y="0.431396"
                    width="35.6271"
                    height="34.3619"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_993_156"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_993_156"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <img
              @click="changeStar(item.id)"
              class="projects__img"
              :src="item.src"
              alt="photo project"
            />
            <div class="projects__content">
              <div class="projects__info">
                <h2 class="projects__heading">{{ item.heading }}</h2>
                <p class="projects__text">{{ item.paragraph }}</p>
              </div>
              <a class="projects__projectlink" href="#">
                <svg
                  class="projects__icon"
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

        <div class="projects__pagination">
          <div class="news__paginationbox">
            <a class="news__paginationlink news__paginationlink_active" href="#"
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
      headTitle: "Project",
      buttonActive: 1,
      buttons: [
        { id: "bathroom", idflag: 1, title: "Bathroom" },
        { id: "bedroom", idflag: 2, title: "Bed Room" },
        { id: "kitchan", idflag: 3, title: "Kitchan" },
        { id: "livingarea", idflag: 4, title: "Living Area" },
      ],
      listProjects: [
        {
          id: 1,
          flag: false,
          src: require("@/assets/img/project1.png"),
          heading: "Minimal Bedroom",
          paragraph: "Decor / Architecture",
        },
        {
          id: 2,
          flag: false,
          src: require("@/assets/img/project2.png"),
          heading: "Minimal Bedroom",
          paragraph: "Decor / Architecture",
        },
        {
          id: 3,
          flag: false,
          src: require("@/assets/img/project3.png"),
          heading: "Classic Minimal Bedroom",
          paragraph: "Decor / Architecture",
        },
        {
          id: 4,
          flag: false,
          src: require("@/assets/img/project4.png"),
          heading: "Modern Bedroom",
          paragraph: "Decor / Architecture",
        },
        {
          id: 5,
          flag: false,
          src: require("@/assets/img/project5.png"),
          heading: "Minimal Bedroom table",
          paragraph: "Decor / Architecture",
        },
        {
          id: 6,
          flag: false,
          src: require("@/assets/img/project6.png"),
          heading: "System Table",
          paragraph: "Decor / Architecture",
        },
        {
          id: 7,
          flag: false,
          src: require("@/assets/img/project7.png"),
          heading: "Modern Medroom",
          paragraph: "Decor / Architecture",
        },
        {
          id: 8,
          flag: false,
          src: require("@/assets/img/project8.png"),
          heading: "Modern Bedroom",
          paragraph: "Decor / Architecture",
        },
      ],
      basketProject: [],
    };
  },
  methods: {
    activeButton(flag) {
      const index = flag;
      this.buttons.forEach((button) => {
        if (index === button.idflag) {
          this.buttonActive = index;
        }
      });
    },
    changeStar(id) {
      const index = id;
      this.listProjects.forEach((project) => {
        if (index === project.id && !this.basketProject.includes(index)) {
          project.flag = true;
          this.basketProject.push(project.id);
        } else if (index === project.id && this.basketProject.includes(index)) {
          project.flag = false;
          this.basketProject = this.basketProject.filter((e) => e !== index);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
