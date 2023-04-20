<template>
    <div class="projects">
        <h4>{{ texts[language].projects.introduction }}</h4>
        <div class="maintenance">
            <lottie-animation path="animations/maintenance.json"></lottie-animation>
        </div>
    </div>
</template>
<script lang="js">
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"
import { texts } from "../content/texts"

export default {
    props: ["language"],
    components: {
        LottieAnimation,
    },
    data() {
        return {
            texts
        }
    }
}
</script>

<style lang="scss">
.projects {
    margin-top: 30px;
    color: white;

    h4 {
        font-size: 1.15rem;
    }

    .maintenance {
        margin-top: 20px;
        border-radius: 4px;
        padding: 30px;
        background-color: var(--background-dark);

        div {
            max-width: 300px
        }
    }
}
</style>