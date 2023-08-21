# k6-keycloak-load-test
Using k6 to perform Load Test for Keycloak (https://k6.io/)

## Install
Please see [installation instructions](https://k6.io/docs/getting-started/installation/).

## CI
To run the load tests on a CI platform, we recommend using Docker.  
You can run the same comand with Docker by
```
$ docker run -i loadimpact/k6 run - < xxxxx.js
```
