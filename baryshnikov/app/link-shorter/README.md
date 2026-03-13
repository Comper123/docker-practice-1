URL Shortener API

Endpoints

POST /shorten
{ "url": "https://example.com" }

GET /r/{code}
redirect to original url

GET /stats/{code}
returns statistics

Run project

docker compose up --build