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
        <div class="select">
            <select :value="language" @change="$emit('update:language', ($event.target as HTMLSelectElement).value)">
                <option value="english">🇺🇸 {{ texts[language as LanguageType].navbar.languages[0] }}</option>
                <option value="portuguese">🇧🇷 {{ texts[language as LanguageType].navbar.languages[1] }}</option>
            </select>
            <span class="focus"></span>
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

    .select {
        width: 130px;
        border: 1px solid transparent;
        border-radius: 4px;
        font-size: 14px;
        cursor: pointer;
        line-height: 1.1;
        background-color: transparent;
        display: grid;
        grid-template-areas: "select";
        align-items: center;
        position: relative;

        select {
            appearance: none;
            background-color: transparent;
            border: none;
            padding: 0 1rem;
            margin: 0;
            width: 100%;
            height: 52px;
            font-family: inherit;
            font-size: inherit;
            cursor: inherit;
            line-height: inherit;
            outline: none;

            &::-ms-expand {
                display: none;
            }

            option {
                color: black;
                background-color: lightcoral;
                padding: 0.5rem;

                &:hover {
                    background-color: white;
                }
            }

            &:focus+.focus {
                position: absolute;
                top: -1px;
                left: -1px;
                right: -1px;
                bottom: -1px;
                border: 2px solid red;
                border-radius: inherit;
            }
        }

        &::after {
            content: "";
            width: 0.8em;
            height: 0.5em;
            border-radius: 0px;
            background-color: lightcoral;
            clip-path: polygon(100% 0%, 0 0%, 50% 100%);
            margin-right: 1rem;
        }
    }

    select,
    .select:after {
        grid-area: select;
        justify-self: end;
    }

    @media(max-width:420px) {
        padding: 5px 2px;

        .select {
            width: 30px;
        }
    }

}
</style>