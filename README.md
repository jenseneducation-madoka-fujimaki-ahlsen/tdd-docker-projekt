# tdd-docker-projekt

# Docker ----------------------------------------------

## Build a image

```
docker build -t tdd-docker-projekt .
```

### Run docker image

```
docker run -it -p 8081:8080 --rm --name docker-container tdd-docker-projekt
```

### Process status

```
docker ps
```

# Heroku ------------------------------------------------

### Login heroku

```
heroku login
```

### Login heroku container

```
heroku container:login
```

### Build image for heroku

```
docker build -t registry.heroku.com/tdd-docker-projekt/web .
```

### Push image to heroku

```
docker push registry.heroku.com/tdd-docker-projekt/web
```

### Release image on heroku

```
heroku container:release --app tdd-docker-projekt web
```

# unit test ------------------------------------------------

### Run unit tests

```
npm run test:unit
```

# e2e test ------------------------------------------------

### Run e2e tests

```
npm run e2e
```

# project ------------------------------------------------

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
