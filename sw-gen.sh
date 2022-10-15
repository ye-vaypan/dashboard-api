#!/bin/bash
swagger-jsdoc -d ./swagger/swagger.defs.json ./src/**/*.ts -o ./public/swagger.json