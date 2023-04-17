<template>
    <div class="about-me">

        <div class="left">
            <div class="me-image">
                <img src="src/assets/images/me.jpeg">
            </div>
        </div>
        <div class="right">
            <p>
                {{ about.about }}
            </p>

            <LottieAnimation path="src/assets/animations/coffee.json" />
        </div>
    </div>
</template>

<script lang="ts">
import { about } from './texts-about';
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"

export default {
    components: {
        LottieAnimation
    },
    data() {
        return { about }
    }
}
</script>

<style lang="scss">
.about-me {
    display: flex;
    flex-shrink: 1;


    .left {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: stretch;

        .me-image {
            display: flex;
            height: fit-content;
            background-color: white;
            padding: 16px;
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

        p {
            transition: var(--hover-transitio);

            &:hover {
                color: var(--focus-color);
            }
        }

    }
}
</style>