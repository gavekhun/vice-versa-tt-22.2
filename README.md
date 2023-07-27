# @RobaGeek | EJCM

Projeto de Marketplace em forma de  aplicativo focado em compra e venda de artigos geek como Funkos e HQs.   

**Status do Projeto** : Terminado

  

![Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

  

## Tabela de Conteúdo

  

*Faça um índice com links internos para todos os tópicos seguintes.*

  

1. [Tecnologias utilizadas](#tecnologias-utilizadas)

2. [Download](#Download)


3. [Instalação](#Instalação)

4. [Configurações](#Configurações)

5. [Execução](#Execução)

6. [Arquitetura](#arquitetura)

7. [Autores](#autores)

<br>
<hr>

## Tecnologias utilizadas

  

Essas são as frameworks e ferramentas que você precisará instalar para desenvolver esse projeto:

  

**[Node.js](https://nodejs.org/en/)**  
**[React](https://pt-br.reactjs.org/)**  
**[Expo](https://expo.dev/)**   
**[Sequelize](https://sequelize.org/)**

<br>
<hr>

##  Download

*Para que seja possível a execução dos arquivos deste repositório, o usuário deve clonar através da ferramenta **[git](https://git-scm.com/downloads)**. Abrindo o terminal do seu sistema operacional ou o GitBash, insira o seguinte comando na pasta desejada:*

  

``` git
git clone https://gitlab.com/ejcm/vice-versa-tt-22.2.git
```
<br>
<hr>

## Instalação

Para o correto funcionamento do aplicativo, terão que ser feitas as instalações das dependências, tanto da pasta `back-end`, quanto da pasta `front-end`. Para isso entre na pasta que foi clonada pelo comando e exclua a pasta `.git`:

``` bash
cd vice-versa-tt-22.2
rm -r .git
```

### Na pasta `back-end`

Abra o seu terminal e execute o comando para instalar as dependências da pasta `back-end`.

``` bash
cd back-end
npm install
```

### Na pasta `front-end`

Agora, a partir do passo anterior, execute os comandos abaixo para instalar as dependências da pasta `front-end`.

``` bash
cd ..
cd front-end/vice-versa/
yarn add
```


<br>
<hr>

## Configurações

Após a instalação, algumas preparações anteriores devem ser realizadas na pasta `back-end`.

A partir dos comandos abaixo, será feita a configuração da pasta `back-end`:

```bash
cd ..
cd back-end
cp .env_example .env
npm run keys
npm run migrate
npm run seed
```

<br>
<hr>

##  Execução

Ainda na pasta `back-end`, execute o seguinte comando para servir o aplicativo em um servidor customizado para posterior execução no front-end:

``` bash
npm run dev
```

Com as configurações feitas, mude a seguir para a pasta `front-end`, para a execução do aplicativo utilizando o **Expo** utilizando os seguintes comandos:

``` bash
cd ..
cd front-end/vice-versa/
expo start

```

Para parar a execução do aplicativo, basta executar o comando `CTRL + C` no terminal.

<br>
<hr>

## Arquitetura

- [Pesquisa Desk / User Flow](https://www.figma.com/file/6MXEry0Yx5OsotGgV89Auh/Marketplace-Colecionaveis?node-id=0:1)

- [Trello](https://trello.com/b/ddnDiPe0/squad-3)

- [Figma](https://www.figma.com/file/6MXEry0Yx5OsotGgV89Auh/Marketplace-Colecionaveis?node-id=2:3)

![enter image description here](https://cdn.discordapp.com/attachments/1016851443518554202/1019759020518682694/unknown.png)

## Autores


* Gerente - Michel Schorr

* Tech Lead - Rayssa Gomes

* Dev Front-end - Arthur Villarta

* Dev Front-end - João Pedro

* Dev Front-end - Rian Manhente

* Dev Back-end - Débora Vinagre

* Dev Back-end - Gabriel Tiburcio

&nbsp;

  

<br>
<hr>  

## Última atualização: 16/09/2022
