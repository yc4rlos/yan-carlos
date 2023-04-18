<template>
    <div class="about-me">

        <div class="left">
            <div class="me-image">
                <img src="/src/assets/images/me.jpeg">
            </div>
        </div>
        <div class="right">
            <p>
                {{ texts.english.about.text }}
            </p>

            <LottieAnimation path="animations/coffee.json" />
        </div>
    </div>
</template>

<script lang="js">
import { texts } from '../content/texts';
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"

export default {
    components: {
        LottieAnimation
    },
    data() {
        return { texts }
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

    }

    @media(max-width: 660px) {
        flex-direction: column;

        .left,
        .right {
            width: 100%;
        }
    }
}
</style>