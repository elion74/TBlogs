# TBlogs
This is a fullstack social media app. Here you can share technical experience and knowledge.It uses react.js for the frontend and node.js, express.js and mongodb for the backend.
The node api, which allows the frontend and Database to communicate, has validation, authentication, cors and cookies-support.It also has an opportunity to upload images with multer.The authentication is powered by jwt tokens and becrypt.To display this app in your browser you have to include a mongodb-uri and a random jwt signature in /backend/.env-sample.**After that rename the file to .env**.Finally you can run the client and backend seperatly using npm start.<br />

## The Homepage:
![Screenshot (17).png](https://github.com/elion74/TBlogs/blob/main/client/src/assets/Screenshot%20(17).png?raw=true)<br /><br /><br />

## Myblogs page:
![Screenshot (34).png](https://github.com/elion74/TBlogs/blob/main/client/src/assets/Screenshot%20(34).png?raw=true)<br /><br /><br />

## client

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## backend

In the project directory, you can run:

### `npm start`

Runs the app in production. \
Open [http://localhost:5000](http://localhost:5000).

### `npm run dev-start`

Runs the app in development mode. \
Open [http://localhost:5000](http://localhost:5000).

### `npm test`

Launches the test runner in the interactive watch mode.
