export enum ELanguages {
    'portuguese',
    'english'
}

export const texts = {
    english: {
        navbar: {
            lang: 'Languages',
            about: 'About',
            projects: 'Projects'
        },
        home: {
            phone: 'Phone',
            email: 'Email',
            saudation: "Hi!",
            apresentation: "I'm",
            job: "Fullstack Developer",
            title: "Technologies"
        },
        about: {
            text: "A Simple text about me"
        },
        projects: {
            introduction: "All of my projects are closed sources, so for now this page is under maintenance."
        }

    },
    portuguese: {
        navbar: {
            lang: 'Idiomas',
            about: 'Sobre',
            projects: 'Projetos',

        },
        about: {
            text: "Sou técnico em redes e apaixonado por desenvolvimento de software."
        },
    }
}