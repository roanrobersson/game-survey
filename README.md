# Big Game Survey 
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/roanrobersson/dspesquisa/blob/master/LICENSE) 

# Sobre o projeto

https://sds1-roan.netlify.app

Big Game Survey é uma aplicação full stack web e mobile construída durante a 1ª edição da **Semana DevSuperior**, evento organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação consiste em uma pesquisa de preferência de games, onde os dados são coletados no app mobile, e depois são listados no app web, que também apresenta um dashboard com gráficos baseados nestes dados.

## Layout mobile
![Mobile 1](https://raw.githubusercontent.com/roanrobersson/assets/master/dspesquisa/mobile1.png?token=AHOQ54ABGQZ7YUOLEOGHBN272K5RW) ![Mobile 2](https://raw.githubusercontent.com/roanrobersson/assets/master/dspesquisa/mobile2.png?token=AHOQ54ARXKO3XNYDD4KIXPC72K6BM)

## Layout web
![Web 1](https://raw.githubusercontent.com/roanrobersson/assets/master/dspesquisa/web1.png?token=AHOQ54CH5XXPTKVYQN7NL2K72K6DO)

![Web 2](https://raw.githubusercontent.com/roanrobersson/assets/master/dspesquisa/web2.png?token=AHOQ54AHS3OXBA5OQIN3VHC72K6EK)

## Modelo conceitual
![Modelo Conceitual](https://raw.githubusercontent.com/roanrobersson/assets/master/dspesquisa/modelo-conceitual.png?token=AHOQ54DOPCOKQ44RGWRNUSC72K6FA)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- React Native
- Apex Charts
- Expo
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/roanrobersson/dspesquisa

# entrar na pasta do projeto back end
cd backend

# executar o projeto
mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/roanrobersson/dspesquisa

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```

