

<template>
    <nav>
        <div class="logo">
            <router-link active-class="active" to="/">
                <span>
                    YC
                </span>
            </router-link>
        </div>

        <ul>
            <li>
                <router-link active-class="active" to="/about">{{ navbar[language].about }}</router-link>
            </li>
            <li>
                <router-link active-class="active" to="/projects">{{ navbar[language].projects }}</router-link>
            </li>
        </ul>

        <select @change="changeLanguage($event)">
            <option value="english">English</option>
            <option value="portuguese">Portuguese</option>
        </select>

    </nav>
</template>

<script lang="ts">
import type { RouterLink } from 'vue-router';
import { navbar, ELanguages } from './texts';

let language: ELanguages;

export default {
    data() {
        return {
            navbar: navbar as any,
            language: 'english'
        };
    },
    methods: {
        changeLanguage(event: Event) {

            const value = (event.target as HTMLSelectElement).value;

            this.language = value;
        }
    }
}
</script>

<style lang="scss">
nav {
    position: fixed;
    top: 10px;
    width: 80%;
    margin: 0px 10%;
    z-index: 10;
    display: flex;
    padding: 20px;
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
        width: 50%;
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
        padding: 12px 20px;
        transition: var(--hover-transition);
        border: 2px solid transparent;
        border-radius: 8px;

        &:hover {
            background-color: transparent;
            border: 2px solid var(--focus-color);
        }

        &.active {
            background-color: var(--focus-color);
            color: white;
        }
    }

}
</style>