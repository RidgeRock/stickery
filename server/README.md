# Stickery Backend

## Development Preparation
- This service needs MySQL, and we can be simply use it from docker-compose.db.yaml file for development
```shell
# open another shell session
$ docker-compose -f docker-compose.db.yaml up
```

- Setup create .env file and set the variables
```shell
$ cat .env.example > .env 
# install dependencies
$ npm ci
```

## Migration
```shell
# to run with options
$ npm run migrate:up -- --step 1

# to run all migrations
$ npm run migrate:up

# to create migration scripts
$ npm run migrate:create -- --name file-name
```

## Load Sample Fixtures (Categories, Stickers)
```shell
$ npm run db:fixtures
```

## Development
- Make sure that node >= 14 has been installed
```shell
# run development server
$ npm run dev
```

## Miscellaneous
- https://app.mycrypto.com/sign-message
