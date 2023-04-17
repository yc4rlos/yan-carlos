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
    {{ home.title }}
  </div>
  <div class="technologies">
    <div class="angular">
      <i class="devicon-angularjs-plain no-color"></i>
      <i class="devicon-angularjs-plain colored"></i>
    </div>

    <div class="vue">
      <i class="devicon-vuejs-plain no-color"></i>
      <i class="devicon-vuejs-plain colored"></i>
    </div>

    <div class="javascript">
      <i class="devicon-javascript-plain no-color"></i>
      <i class="devicon-javascript-plain colored"></i>
    </div>

    <div class="typescript">
      <i class="devicon-typescript-plain no-color"></i>
      <i class="devicon-typescript-plain colored"></i>
    </div>

    <div class="go">
      <i class="devicon-go-original-wordmark no-color"></i>
      <i class="devicon-go-original-wordmark colored"></i>
    </div>

    <div class="C">
      <i class="devicon-c-plain no-color"></i>
      <i class="devicon-c-plain colored"></i>
    </div>

    <div class="node">
      <i class="devicon-nodejs-plain no-color"></i>
      <i class="devicon-nodejs-plain colored"></i>
    </div>

    <div class="bootstrap">
      <i class="devicon-bootstrap-plain no-color"></i>
      <i class="devicon-bootstrap-plain colored"></i>
    </div>

    <div class="html">
      <i class="devicon-html5-plain no-color"></i>
      <i class="devicon-html5-plain colored"></i>
    </div>

    <div class="css">
      <i class="devicon-css3-plain no-color"></i>
      <i class="devicon-css3-plain colored"></i>
    </div>


    <div class="scss">
      <i class="devicon-sass-original no-color"></i>
      <i class="devicon-sass-original colored"></i>
    </div>

    <div class="handlebars">
      <i class="devicon-handlebars-plain no-color"></i>
      <i class="devicon-handlebars-plain colored"></i>
    </div>

    <div class="express">
      <i class="devicon-express-original no-color"></i>
      <i class="devicon-express-original colored"></i>
    </div>

    <div class="nest">
      <i class="devicon-nestjs-plain no-color"></i>
      <i class="devicon-nestjs-plain colored"></i>
    </div>

    <div class="jasmine">
      <i class="devicon-jasmine-plain no-color"></i>
      <i class="devicon-jasmine-plain colored"></i>
    </div>

    <div class="jest">
      <i class="devicon-jest-plain no-color"></i>
      <i class="devicon-jest-plain colored"></i>
    </div>

    <div class="graphql">
      <i class="devicon-graphql-plain no-color"></i>
      <i class="devicon-graphql-plain colored"></i>
    </div>

    <div class="mongo">
      <i class="devicon-mongodb-plain no-color"></i>
      <i class="devicon-mongodb-plain colored"></i>
    </div>

    <div class="mysql">
      <i class="devicon-mysql-plain no-color"></i>
      <i class="devicon-mysql-plain colored"></i>
    </div>

    <div class="postgresql">
      <i class="devicon-postgresql-plain no-color"></i>
      <i class="devicon-postgresql-plain colored"></i>
    </div>

    <div class="npm">
      <i class="devicon-npm-original-wordmark no-color"></i>
      <i class="devicon-npm-original-wordmark colored"></i>
    </div>

    <div class="docker">
      <i class="devicon-docker-plain no-color"></i>
      <i class="devicon-docker-plain colored"></i>
    </div>

    <div class="linux">
      <i class="devicon-linux-plain no-color"></i>
      <i class="devicon-linux-plain colored"></i>
    </div>

    <div class="git">
      <i class="devicon-git-plain no-color"></i>
      <i class="devicon-git-plain colored"></i>
    </div>

  </div>
</template>

<script lang="ts" script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"
import { home } from "./texts-home"
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

.technologies {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  row-gap: 10px;

  >div {
    &:hover {
      .no-color {
        display: none;
      }

      .colored {
        display: block;
      }
    }

    i {
      font-size: 60px;

      &.colored {
        transition: display 1s ease-in;
        display: none;
      }
    }
  }

  @media(max-width:970px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media(max-width: 720px) {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>