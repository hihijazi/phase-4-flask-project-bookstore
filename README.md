# Flask Project - H&M Bookstore Management App

## Owners: Hadil Hijazi & Melissa Velasquez Greene

## Phase and Cohort: Flask Phase 4 SE111323

## Description: This App allows you to streamline your bookstore operations.  Manage inventory, process orders, and provide a user-friendly interface for customers to browse, purchase, and review books. 

![Alt text](phase-4-flask-project-bookstore/project domain model.jpg)  

In this repo:

- There is a Flask application with some features built out.
- There is a fully built React frontend application.

You can check your API by:

- Using Postman to make requests

- Running the React application in the browser and interacting with the API via
  the frontend

You can import `project-4-bookstore.postman_collection.json` into Postman by
pressing the `Import` button.

## Setup

To download the dependencies for the frontend and backend, run:

```console
pipenv install
pipenv shell
npm install --prefix client
```

You can run your Flask API on [`localhost:5555`](http://localhost:5555) by
running:

```console
python server/app.py
```

You can run your React app on [`localhost:4000`](http://localhost:4000) by
running:

```sh
npm start --prefix client
```

## Models

The file `server/models.py` defines the model classes **without relationships**.
Use the following commands to create the initial database `app.db`:

```console
export FLASK_APP=server/app.py
flask db init
flask db upgrade head
```
You can run your Flask API on [`localhost:5555`](http://localhost:5555) by
running:

```console
python server/app.py
```

You can run your React app on [`localhost:4000`](http://localhost:4000) by
running:

```sh
npm start --prefix client
```
