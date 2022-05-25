# React Test Task

## Requirements

Done:

- application connect to the locally running service
- application render price changes for tickers in real time
- additional visual effects to highlight positive or negative changes in the prices
- the possibility to switch on/off tickers by user
- rising/falling tickers filter

Was used the next technologies:

- React (with hooks)
- Redux (with Redux-Thunk or any other Redux middleware you are familiar)
- Socket.io - to connect to the service
- use just pure CSS
- Testing Library

## Running the local service

1. Open a new bash shell
2. `cd server`
3. `npm install` or `yarn install`
4. `npm run start` or `yarn start`
5. You can visit [http://localhost:4000](http://localhost:4000) to check that the service is working correctly and inspect the data it produces.

## Run your application

1. Open a new bash shell
2. `cd client`
3. `npm install` or `yarn install`
4. `npm run start` or `yarn start`

## Run the tests

1. Open a new bash shell
2. `cd client`
3. `npm run test` or `yarn test`

# Price Service Usage

URL:
`http://localhost:4000`

Price tickers are real-time via web-sockets.
