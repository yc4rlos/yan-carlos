<template>
  <div class="header">
    <div class="left">
      <span class="saudation">
        {{ home.saudation }}
      </span>
      <span class="name">
        {{ home.apresentation }} Yan Carlos
      </span>
      <span class="job">
        {{ home.job }}
      </span>
      <div class="buttons-get">
        <button @click="openLinkedin">Talk with me</button>
        <button @click="downloadCv">GET CV</button>
      </div>
    </div>

    <div class="right">
      <lottie-animation path="src/assets/animations/fire.json" />
    </div>
  </div>
  <div class="title">
    {{ home.aboutTitle }}
  </div>
  <div class="about">
    <div class="left">
      Image
    </div>
    <div class="right">
      <div class="text">
        {{ home.aboutText }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"
import { home } from "./texts"
export default {
  components: {
    LottieAnimation
  },
  data() {
    return {
      home
    }
  },
  methods: {
    downloadCv() {
      alert("Download CV...");
    },
    openLinkedin() {
      window.open("https://linkedin.com/in/yan-carlos-b95461216/");
    }
  },
}
</script>

<style lang="scss">
.title {
  color: var(--white-soft);
  font-size: 2rem;
  margin-top: 80px;
}

.about,
.header {
  background-color: var(--background-dark);
  padding: 30px;
  border-radius: 4px;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  >div {
    display: flex;
    width: 50%;
  }
}

.header {
  margin-top: 30px;

  .left {
    flex-direction: column;
    align-items: flex-end;

    span:hover {
      transition: var(--hover-transition);
      color: var(--focus-color)
    }

    .saudation,
    .job {
      font-size: 1.2rem;
    }

    .name {
      font-size: 1.9rem;
    }
  }

  .right {
    justify-content: center;
  }

  .buttons-get button {
    margin-left: 20px;
    margin-top: 20px;
    border: 1px solid var(--white-soft);
    border-radius: 4px;
    padding: 12px 20px;
    background-color: transparent;
    cursor: pointer;
    color: var(--white-soft);
    transition: var(--hover-transition);

    &:hover {

      border: 1px solid var(--focus-color);
      color: var(--focus-color);
    }
  }
}

.about {
  color: var(--white-soft);

  .left {
    display: flex;
    justify-content: center;
  }

  .right {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    transition: var(--hover-transition);

    &:hover {
      color: var(--focus-color);
    }
  }
}
</style>