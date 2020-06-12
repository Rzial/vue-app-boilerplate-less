# Multifunctional Vue Application Boilerplate

This template enables the use of multiple features out of the box:

* HTML and [Pug](https://pugjs.org/)
* CSS and [LESS](http://lesscss.org/)
* [dotenv](https://www.npmjs.com/package/dotenv) and [dotenv-webpack](https://www.npmjs.com/package/dotenv-webpack)
* [Vue.js](https://vuejs.org/), [VueRouter](https://router.vuejs.org/) and [Vuex](https://vuex.vuejs.org/)
* [Jest](https://jestjs.io/) with [@vue/test-utils](https://vue-test-utils.vuejs.org/)
* Multiple webpack configuration profiles for **development** and **production**

## Where to go?

* [VueRouter Configuration](./src/core/router/index.js)
* [Vuex Configuration](./src/core/store/index.js)
 
* [Sync Configuration](./src/core/sync/index.js)

> On `sync` you can configure anything that needs to be setup before the app gets mounted but after VueRouter and Vuex
> is instanced like, for example, routing guards.
