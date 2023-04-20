export type Language = 'portuguese' | 'english';

interface ILanguage {
    navbar: {
        lang: string;
        about: string;
        projects: string;
    },
    home: {
        email: string;
        saudation: string;
        apresentation: string;
        job: string;
        title: string;
        contact: string;
        cv: string;
    },
    about: {
        text: string;
    },
    projects: {
        introduction: string;
    }
}

export interface LanguageOptions {
    english: ILanguage,
    portuguese: ILanguage
}
