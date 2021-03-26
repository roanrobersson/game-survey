# Game Survey 
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/roanrobersson/dspesquisa/blob/master/LICENSE) 

# Sobre o projeto

https://game-survey-roan.netlify.app

Game Survey é uma aplicação full stack web e mobile construída durante a 1ª edição da **Semana DevSuperior**, evento organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação consiste em uma pesquisa de preferência de games, onde os dados são coletados no app mobile, e depois são listados no app web, que também apresenta um dashboard com gráficos baseados nestes dados.

## Layout mobile
![Mobile 1](https://raw.githubusercontent.com/roanrobersson/assets/master/dspesquisa/mobile1.png) ![Mobile 2](https://raw.githubusercontent.com/roanrobersson/assets/master/dspesquisa/mobile2.png)

## Layout web
![Web 1](https://raw.githubusercontent.com/roanrobersson/assets/master/dspesquisa/web1.png)

![Web 2](https://raw.githubusercontent.com/roanrobersson/assets/master/dspesquisa/web2.png)

## Modelo conceitual
![Modelo Conceitual](https://raw.githubusercontent.com/roanrobersson/assets/master/dspesquisa/modelo-conceitual.png)

# Tecnologias utilizadas
## Back end
- Java
- [Spring Boot](https://spring.io/projects/spring-boot "Documentação do Spring Boot")
- [JPA / Hibernate](https://spring.io/projects/spring-data-jpa "Documentação do Spring Data JPA")
- [Maven](https://maven.apache.org "Site do Maven")
## Front end
- HTML / CSS / JS / TypeScript
- [ReactJS](https://reactjs.com "Site do ReactJS")
- [React Native](https://reactnative.dev "Site do React Native")
- [Apex Charts](https://apexcharts.com "Site do Apex Charts")
- [Expo](https://expo.io "Site do Expo")
## Implantação em produção
- Back end: [Heroku](https://www.heroku.com "Site do Heroku")
- Front end web: [Netlify](https://www.netlify.com "Site do Netlify")
- Banco de dados: [Postgresql](https://www.postgresql.org "Site do Postgresql")

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/roanrobersson/game-survey

# entrar na pasta do projeto back end
cd backend

# executar o projeto
mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/roanrobersson/game-survey

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
npm install

# executar o projeto
npm start
```

