#REST api
Building a REST api using Node and mongo

Use `npm init -y` in the project root directory to initialize node project

Use `npm i` to install all the modules used in the project automatically (mentioned in _packages.json_)

The project uses _.env_ file for env vars. Use `touch .env` in project root directory to create the file
Add the mongo connect url if online or ignore if local mongo server. Set `MONGO_URI= _the connect url_`
The syntax is `NAME=VALUE` for env vars

Use `npm i -g nodemon` to install nodemon to run server if running project locally
Run `nodemon app.js` in project root directory

Open `localhost:3000` in any browser to access the project files on localhost or domain name if hosted on a live server