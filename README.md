# vue-tasks

### Demo

[https://apodacaduron.github.io/vue-tasks/](https://apodacaduron.github.io/vue-tasks/)

### About the project

This is a small project that i build for a frontend position that i applied, its built using Vue.js framework. The main objective of this project is to build a website to create, complete, update and delete tasks, but first the user must create an account and log in, the user will then get stored on the browser's localStorage just for demo purposes, the user will already have some tasks available to complete, this tasks where previously fetched using a fake data api. The routes are protected so if you dont have an account you cant create tasks, and if you do have an account then you wont be able to access login and signup pages without loggin out first.

Vuex is split in 2 modules, one for managing authentication stuff, and another to manage the tasks logic.
Other cool Vue features used here where: mixins, props, computed properties, event emitions, transitions.

To design this whole project i used an image that i found on dribbble, all of the stylesheets found here where custom made, i enjoy alot making my own stuff because i have more control of what i want and this way i'm able to work much faster while keeping less bloat styles. I also made sure that all the components used throught the projects had good accessibility. One more benefit of using a component based approach is that making a responsive website is so much easier and maintainable for other developers that start to get involved in the project.

[Landing design](https://dribbble.com/shots/15111239-Landing-page-WIP)

[Tasks Design](https://dribbble.com/shots/15185058-Collection-Tasks)

[Author](https://dribbble.com/oliver)

Right now i don't know about automated testing but i'm definetly planning to invest time to learn all that i can.

As we know Vue is not extremly SEO friendly on multi page websites but i tried my best to reach a good score on Google Lighthouse.

If someone else finds this repository, feel free take a look around and maybe even use it for whatever you want.👻

Packages: Vue-router, vuex, vuex-persistedstate, day.js, axios, sass, pug

VSCode extensions: Vetur, prettier, window auto save, sass, tabnine

Laptop specs:
Dell latitude 7370
8gb ram
256gn ssd
Intel core m7-62y5
Mac OS Big Sur

### Personal website

[https://apodacaduron.github.io/dapodaca-com-2021](https://apodacaduron.github.io/dapodaca-com-2021)

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```
