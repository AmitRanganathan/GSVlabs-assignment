# Poem Generator

A vue.js/node.js/express/sql project to generate a poem based off user inputs.

## Installation

You must have npm to run this project.  If you do not, you can use homebrew to install npm


## Usage
Clone the repo into your local machine.  
Have two terminal windows open, one for client and one for server.

## Client
In client:
```bash
npm install
```

If you get audit issues, run:
```bash
  npm audit fix
```

Then run:
```bash
  npm run dev
```
Your client side is running now.  You can go to http://localhost:8080 to view the client side.

## Server
In server:
```bash
npm install
```

If you get audit issues, run:
```bash
  npm audit fix
```

Then run:
```bash
  npm start
```

If you get an error telling you to manually install sqlite3, perform the following operations:

```bash
npm un sqlite3
npm i —save sqlite3
```

To run:
```bash
npm start
```
