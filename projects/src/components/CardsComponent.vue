<template>
  <div v-for="item in items" :key="item.id" class="cards__item">
    <img :src="item.src" :alt="item.alt" class="cards__img" />
    <p class="cards__tag">{{ item.tag }}</p>
    <div class="cards__content">
      <h3 class="cards__title">{{ item.title }}</h3>
      <div class="cards__boxDate">
        <p class="cards__date">{{ item.date }}</p>
        <a href="blog-details.html" class="cards__button">
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
</template>

<script>
export default {
  props: {
    items: Object,
  },
};
</script>

<style lang="scss" scoped></style>
