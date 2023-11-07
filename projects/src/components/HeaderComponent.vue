<template>
  <header class="header center">
    <div class="header__menubar">
      <router-link to="/" class="header__logo">
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
      </router-link>
      <nav class="header__menu">
        <ul class="header__menuList">
          <li class="header__menuItem">
            <router-link to="/" class="header__menuLink">Home</router-link>
          </li>
          <li class="header__menuItem">
            <router-link to="/project" class="header__menuLink"
              >Project</router-link
            >
          </li>
          <li class="header__menuItem">
            <router-link to="/blog" class="header__menuLink">Blog</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped></style>
