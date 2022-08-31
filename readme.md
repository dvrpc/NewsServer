# News Server

API for the DVRPC News page at <https://www.dvrpc.org/News/>. The repository for the frontend is at <https://github.com/dvrpc/News>.

## Local Development

Create a .env file with the following variables configured for a local installation of the "news" database:
  * PG_HOST
  * PG_PORT
  * PG_USER
  * PG_PASS
  * PG_DB

Then run `npm install` and `npm start`. The API will then be running at <http://localhost:3001/api/news/>.
