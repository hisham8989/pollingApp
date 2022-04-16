# Polling App

it is a basic polling app that offers to create a question and options regarding it

## Features

- Create a question (you can add as many questions as you want)
- Add options to a question
- Add a vote to an option of question
- Delete a question → ( A question can’t be deleted if one of it’s options has votes)
- Delete an option → ( An option can’t be deleted if it has even one vote given to it)
- View a question with it’s options and all the votes given to it

## Run Locally

Clone the project

```bash
  git clone https://github.com/hisham8989/pollingApp
```

Go to the project directory

```bash
  cd pollingApp
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

# To connect the mongo db locally

- replace the code from a /config/mongoose.js with the code below :-

  const mongoose = require('mongoose')

  let dbName = ### <-- database name of your choice
  mongoose.connect('mongodb://localhost:27017/' + dbName || 'polling_local')

  const db = mongoose.connection

  db.on('error',console.error.bind(console,"Error in in connecting to MongoDb"))

  db.once('open',function () {
  console.log("Connected to Database :: MongoDb",dbName);
  })

  module.exports = db;

## API Reference

#### Get all questions

```http
  GET /api/v1/questions
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get question

```http
  GET /api/v1/questions/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Post create question

```http
  GET /api/v1/questions/create
  body - title : 'Where is the question?'
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Post create option for a question

```http
  GET /api/v1/questions/${id}/options/create
  body - text : 'option1'
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Get delete a option for a question

```http
  GET /api/v1/options/${id}/delete
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Get delete a question

```http
  GET /api/v1/questions/${id}/delete
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


## Demo

https://polling-api-111.herokuapp.com/api/v1/questions