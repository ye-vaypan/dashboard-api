#!/bin/bash
swagger-jsdoc -d ./swagger/swagger.defs.json -o ./public/swagger.json \
                  ./src/creational/singleton/*.ts \
                  ./src/creational/factory/*.ts \
                  ./src/creational/abstract-factory/*.ts \
                  ./src/creational/builder/*.ts \
                  ./src/creational/prototype/*.ts \
                  ./src/structural/adapter/*.ts \
                  ./src/structural/bridge/*.ts