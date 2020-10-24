# install vuepress

> for docs.

## install

```shell
npm install -D vuepress@next
npm install -D webpack-dev-middleware
```

## add to package.json:

```json
"resolutions": {
  "webpack-dev-middleware": "3.6.0"
},
"scripts":{
  "docs:dev": "vuepress dev docs",
  "docs:build": "vuepress build docs"
}
```

## preview:

- http://localhost:8080/
