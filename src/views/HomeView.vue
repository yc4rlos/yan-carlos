<template>
  <div class="header">
    <div class="left">
      <span class="saudation">
        {{ texts[language].home.saudation }}
      </span>
      <span class="name">
        {{ texts[language].home.apresentation }} Yan Carlos
      </span>
      <span class="job">
        {{ texts[language].home.job }}
      </span>
      <div class="buttons">
        <button @click="collapseActive = !collapseActive">{{ texts[language].home.contact }}</button>
        <button @click="downloadCv">{{ texts[language].home.cv }}</button>
      </div>
      <div class="collapse" :class="{ 'open': collapseActive }">
        <div>
          <strong>{{ texts[language].home.email }}:</strong><span>ycarlos.live@gmail.com</span>
        </div>
        <div>
          <strong>Linkedin:</strong><span>
            <a target="_blank" href="https://www.linkedin.com/in/yan-carlos-b95461216/">Link</a></span>
        </div>
      </div>
    </div>

    <div class="right">
      <lottie-animation path="animations/fire.json" />
    </div>
  </div>
  <div class="title">
    {{ texts[language].home.title }}
  </div>
  <div class="technologies">
    <Technologies />

  </div>
</template>

<script lang="js">
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"
import { texts } from "../content/texts"
import Technologies from "@/components/Technologies.vue"
export default {
  props: ['language'],
  components: {
    LottieAnimation,
    Technologies
  },
  data() {
    return {
      texts,
      collapseActive: false
    }
  },
  methods: {
    downloadCv() {
      window.open("https://drive.google.com/file/d/1Tng_fhtpRPEBKT7SNI8Ly4sCnflzLAl0/view?usp=sharing")
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

.technologies,
.header {
  background-color: var(--background-dark);
  padding: 30px;
  border-radius: 4px;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  overflow: hidden;

  div {
    max-height: 400px;
  }

  >div {
    display: flex;
    width: 50%;
  }
}

.header {
  margin-top: 30px;

  .collapse {
    width: 100%;
    padding-top: 15px;
    padding-left: 8%;
    display: flex;
    justify-content: flex-end;
    height: 0px;
    flex-wrap: wrap;
    overflow: hidden;
    transition: all 0.3s ease-in;

    a {
      color: white;
      text-decoration: underline !important;

      &:hover {
        background-color: transparent;
        color: var(--focus-color);
      }
    }

    div {
      margin-right: 10px;
    }

    strong {
      margin-right: 8px;
    }

    &.open {
      height: 80px;
    }
  }

  .left {
    flex-direction: column;
    align-items: flex-end;

    .saudation,
    .job,
    .name {
      &:hover {
        transition: var(--hover-transition);
        color: var(--focus-color)
      }
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

  .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;

    button {
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
}

@media(max-width: 420px) {
  .header {
    position: relative;
    width: 100%;

    .left {
      width: 100%;
      z-index: 1;
      align-items: center;

      .buttons {
        display: flex;
        justify-content: space-between;
      }
    }

    .collapse {
      justify-content: flex-start;
    }

    .right {
      top: 50%;
      right: 20%;
      position: absolute;
      z-index: 0;
      opacity: 0.5;
    }
  }
}
</style>