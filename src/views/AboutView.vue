<template>
    <div class="about-me">

        <div class="left">
            <div class="me-image">
                <img src="/src/assets/images/me.jpeg">
            </div>
        </div>
        <div class="right">
            <p>
                {{ texts[language].about.text }}
            </p>
            <div class="animation">
                <LottieAnimation path="animations/coffee.json" />
            </div>
        </div>
    </div>
</template>

<script lang="js">
import { texts } from '../content/texts';
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"

export default {
    props: ["language"],
    components: {
        LottieAnimation
    },
    data() {
        return { texts }
    },
    methods: {
        /** É brincadeira meu*/
        brincadeirinha() { }
    }
}
</script>

<style lang="scss">
.about-me {
    margin-top: 30px;
    display: flex;
    flex-shrink: 1;

    .left {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: stretch;
        align-items: center;
        margin-bottom: 30px;

        .me-image {
            display: flex;
            height: fit-content;
            background-color: white;
            padding: 10px;
            overflow: hidden;
            border-radius: 50%;

            img {
                border-radius: 50%;
                width: 200px;
                height: 200px;
            }
        }
    }

    .right {
        width: 50%;
        background-color: var(--background-dark);
        border-radius: 4px;
        padding: 30px;
        color: white;
        position: relative;
        white-space: pre-wrap;
        padding-bottom: 28vw;

        .animation {
            position: absolute;
            bottom: -50px;
            z-index: 1;
        }
    }

    @media(max-width: 720px) {
        flex-direction: column;

        .right>p {
            z-index: 2
        }

        .animation {
            opacity: 0.3;
        }

        .left,
        .right {
            width: 100%;
        }
    }
}
</style>