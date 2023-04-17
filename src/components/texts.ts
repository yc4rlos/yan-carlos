interface INavbar {
    lang: string;
    about: string;
    projects: string;
}

export enum ELanguages {
    'portuguese',
    'english'
}

export const navbar: { english: INavbar, portuguese: INavbar } = {
    english: {
        lang: 'Languages',
        about: 'About',
        projects: 'Projects'
    },
    portuguese: {
        lang: 'Idiomas',
        about: 'Sobre',
        projects: 'Projetos'
    }
}