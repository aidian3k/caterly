FROM gradle:8.10.2-jdk21-alpine AS build
WORKDIR /app
COPY . /app
RUN gradle clean build

FROM openjdk:21-jdk
WORKDIR /app
COPY --from=build /app/build/libs/*.jar /app/app.jar
ENTRYPOINT ["java","-jar","/app/app.jar"]