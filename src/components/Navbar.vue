

<template>
    <nav>
        <div class="logo">
            <router-link active-class="active" to="/">
                <img src="/src/assets/images/logo.png">
            </router-link>
        </div>
        <ul>
            <li>
                <router-link active-class="active" to="/about">{{ texts[language as LanguageType].navbar.about
                }}</router-link>
            </li>
            <li>
                <router-link active-class="active" to="/projects">{{ texts[language as LanguageType].navbar.projects
                }}</router-link>
            </li>
        </ul>
        <div class="custom-select">
            <select :value="language" @change="$emit('update:language', ($event.target as HTMLSelectElement).value)">
                <option value="english" class="english">🇺🇸 English</option>
                <option value="portuguese" class="portuguese">🇧🇷 Português</option>
            </select>
        </div>
    </nav>
</template>

<script lang="ts">
import type { RouterLink } from 'vue-router';
import { texts } from '../content/texts';
import type { LanguageType } from '../content/language-type';

export default {
    props: ['language'],
    data() {
        return {
            texts,
        };
    },
}
</script>

<style lang="scss">
.portuguese {
    background-image: url("/src/assets/images/brazil-flag.png");
}

nav {
    position: fixed;
    top: 16px;
    width: 80%;
    margin: 0px 10%;
    max-width: var(--max-width);
    z-index: 10;
    display: flex;
    padding: 10px 20px;
    align-items: center;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 8px;
    color: var(--background-dark);
    background-color: var(--white-soft);

    .logo>span {
        font-size: 4rem;
    }

    ul {
        padding: 0px;
        display: flex;
        justify-content: space-around;

    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        font-size: 1rem;
        margin-left: 10px;
        color: black;
        transition: var(--hover-transition);
        border: 2px solid transparent;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        padding: 12px 20px;

        &:has(img) {
            padding: 0px;
        }

        img {
            width: 48px;
            height: 48px;
            object-fit: cover;
        }

        &:hover {
            background-color: transparent;
            border: 2px solid var(--focus-color);
        }

        &.active {
            background-color: var(--focus-color);
            color: white;

            img {
                filter: invert(1)
            }
        }
    }


}

@media(max-width: 420px) {}
</style>