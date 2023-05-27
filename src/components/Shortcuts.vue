<template>
    <div class="logos">
        <a class="link" href="https://github.com/yc4rlos" target="_blank">
            <img src="/src/assets/images/github-logo.png" alt="Github Logo">
        </a>
        <a class="link" href="https://www.linkedin.com/in/yan-carlos-b95461216/" target="_blank">
            <img src="/src/assets/images/linkedin-logo.png" alt="Linkedin Logo">
        </a>
        <a class="link" href="https://www.instagram.com/yc4rl0s_/" target="_blank">
            <img src="/src/assets/images/instagram-logo.png" alt="Instagram Logo">
        </a>
    </div>
</template>
<style scoped lang="scss">
.logos {
    position: fixed;
    z-index: 10;
    bottom: 0px;
    right: 20px;
    display: flex;
    justify-content: flex-end;

    .link {
        display: flex;
        justify-content: center;
        padding: 4px;
        border-radius: 50%;
        background-color: white;
        margin: 20px 15px;
        transition: var(--hover-transition);
        box-shadow: rgba(125, 125, 125, 0.25) 0px 54px 55px, rgba(125, 125, 125, 0.12) 0px -12px 30px, rgba(125, 125, 125, 0.12) 0px 4px 6px, rgba(125, 125, 125, 0.17) 0px 12px 13px, rgba(125, 125, 125, 0.09) 0px -3px 5px;

        img {
            width: 40px;
            height: 40px;
        }

        &:hover {
            background-color: var(--focus-color);

        }
    }
}
</style>