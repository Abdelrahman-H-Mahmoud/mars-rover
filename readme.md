# Mars Rover



## Installation
prerequisite
- node
- npm

in the app root folder hit the terminal:
```bash
npm install
```
then
```bash
node index
```
or 
using Docker
```bash
docker build -t mars-rover
```
then
```bash
docker run mars-rover
```
## Usage
you can use postman and send a `GET` request to this endpoint
### /api/rover/:movePattern
the API has 2 different responses:
- 400 if the movement pattern is invalid.
- 200 and rover current position.

## Assumption
- case sensitive ignored in movement pattern
- only one rover initialized in the app and can communicate with it using an API call

## Test
you can run tests using
```sh
npm run test
```