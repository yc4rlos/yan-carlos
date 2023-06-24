<template>
    <div class="technologies-list">

        <div class="C#">
            <i class="devicon-csharp-plain no-color"></i>
            <i class="devicon-csharp-plain colored"></i>
        </div>

        <div class="javascript">
            <i class="devicon-javascript-plain no-color"></i>
            <i class="devicon-javascript-plain colored"></i>
        </div>

        <div class="typescript">
            <i class="devicon-typescript-plain no-color"></i>
            <i class="devicon-typescript-plain colored"></i>
        </div>

        <div class="go">
            <i class="devicon-go-original-wordmark no-color"></i>
            <i class="devicon-go-original-wordmark colored"></i>
        </div>

        <div class="node">
            <i class="devicon-nodejs-plain no-color"></i>
            <i class="devicon-nodejs-plain colored"></i>
        </div>

        <div class="nest">
            <i class="devicon-dotnetcore-plain no-color"></i>
            <i class="devicon-dotnetcore-plain colored"></i>
        </div>

        <div class="nest">
            <i class="devicon-nestjs-plain no-color"></i>
            <i class="devicon-nestjs-plain colored"></i>
        </div>

        <div class="express">
            <i class="devicon-express-original no-color"></i>
            <i class="devicon-express-original colored"></i>
        </div>

        <div class="angular">
            <i class="devicon-angularjs-plain no-color"></i>
            <i class="devicon-angularjs-plain colored"></i>
        </div>

        <div class="bootstrap">
            <i class="devicon-bootstrap-plain no-color"></i>
            <i class="devicon-bootstrap-plain colored"></i>
        </div>

        <div class="html">
            <i class="devicon-html5-plain no-color"></i>
            <i class="devicon-html5-plain colored"></i>
        </div>

        <div class="css">
            <i class="devicon-css3-plain no-color"></i>
            <i class="devicon-css3-plain colored"></i>
        </div>

        <div class="scss">
            <i class="devicon-sass-original no-color"></i>
            <i class="devicon-sass-original colored"></i>
        </div>

        <div class="handlebars">
            <i class="devicon-handlebars-plain no-color"></i>
            <i class="devicon-handlebars-plain colored"></i>
        </div>        

        <div class="jest">
            <i class="devicon-jest-plain no-color"></i>
            <i class="devicon-jest-plain colored"></i>
        </div>

        <div class="graphql">
            <i class="devicon-graphql-plain no-color"></i>
            <i class="devicon-graphql-plain colored"></i>
        </div>

        <div class="mongo">
            <i class="devicon-mongodb-plain no-color"></i>
            <i class="devicon-mongodb-plain colored"></i>
        </div>

        <div class="mysql">
            <i class="devicon-mysql-plain no-color"></i>
            <i class="devicon-mysql-plain colored"></i>
        </div>

        <div class="sqlserver">
            <i class="devicon-microsoftsqlserver-plain no-color"></i>
            <i class="devicon-microsoftsqlserver-plain colored"></i>
        </div>

        <div class="postgresql">
            <i class="devicon-postgresql-plain no-color"></i>
            <i class="devicon-postgresql-plain colored"></i>
        </div>

        <div class="docker">
            <i class="devicon-docker-plain no-color"></i>
            <i class="devicon-docker-plain colored"></i>
        </div>

        <div class="azure">
            <i class="devicon-azure-plain no-color"></i>
            <i class="devicon-azure-plain colored"></i>
        </div>

        <div class="linux">
            <i class="devicon-linux-plain no-color"></i>
            <i class="devicon-linux-plain colored"></i>
        </div>

        <div class="git">
            <i class="devicon-git-plain no-color"></i>
            <i class="devicon-git-plain colored"></i>
        </div>
    </div>
</template>
<style scoped lang="scss">
.technologies-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    row-gap: 10px;

    >div {

        &:hover {
            .no-color {
                display: none;
            }

            .colored {
                display: block;
            }
        }

        i {
            font-size: 60px;

            &.colored {
                transition: display 1s ease-in;
                display: none;
            }
        }
    }
}

@media(max-width:970px) {
    .technologies-list {
        grid-template-columns: repeat(8, 1fr);
    }
}

@media(max-width: 720px) {
    .technologies-list {
        grid-template-columns: repeat(6, 1fr);
    }
}

@media(max-width: 420px) {
    .technologies-list {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>