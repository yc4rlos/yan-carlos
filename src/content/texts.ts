import type { LanguageOptions } from "./language-options.interface";

export const texts: LanguageOptions = {
    english: {
        navbar: {
            lang: 'Languages',
            about: 'About',
            projects: 'Projects',
            languages: ['English', 'Portuguese']
        },
        home: {
            email: 'Email',
            saudation: "Hi!",
            apresentation: "I'm",
            job: "Fullstack Developer",
            title: "Technologies",
            contact: "Talk with me",
            cv: "Get CV"
        },
        about: {
            text: `\tHi! I'm 21 year old, married and soon i'll be father 😁. I'm gratuaded in Computer Networks and i'm studying a postgraduate degree in Software Engineering.\n\tAs a child i had my first contact with computers and linux, that's where i fell in love with computing. During high school I dedicated myself to military contests, but my passion for technology always spoke louder, therefore i chose to jump entirely in this universe!\n\tRight now, i'm studing Cloud Computing and Microservices. Soon my projects'll be avaible here 😎.`
        },
        projects: {
            introduction: "All of my projects are closed source, so for now this page is under maintenance."
        }
    },
    portuguese: {
        navbar: {
            lang: 'Idiomas',
            about: 'Sobre',
            projects: 'Projetos',
            languages: ["Inglês", "Português"]
        },
        home: {
            email: 'Email',
            saudation: "Olá!",
            apresentation: "Eu sou",
            job: "Desenvolvedor Fullstack",
            title: "Tecnologias",
            contact: "Fale comigo",
            cv: "Meu currículo"
        },
        about: {
            text: `     Olá! Tenho 21 anos, sou casado e em breve serei pai 😁. Sou formado em Redes de Computadores e estou cursando minha pós graduação em Engenharia de Software.\n\tTive meu primeiro contato com computadores e linux quando criança, onde me apaixonei por computação. Durante o colégio me dediquei a estudar para concursos militares, mas minha paixão por tecnologia sempre falou mais alto, o que me fez me dedicar inteiramente a esse universo! \n\tAtualmente estou estudando Cloud Computing e microsserviços. Em breve meus projetos estarão disponíveis aqui 😎.`
        },
        projects: {
            introduction: "Todos os meus projetos são closed source, então por enquanto esta página esta em manutenção."
        }
    }
}