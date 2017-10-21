import path from "path";

export default {
  root: __dirname,
  logDir: path.join(__dirname, 'logs'),
  firebase: {
    databaseUrl: "https://speedtest-a288c.firebaseio.com",
    serviceAccount: {
      "type": "service_account",
      "project_id": "speedtest-a288c",
      "private_key_id": "88f9e922449311f5bb86fad31df3789fa865b987",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDl4zojxp2Jd4zW\n7eTy04WfgzeknvRigM7g0a6n4QALmAFmoiB9V4xYg+mOLRF2S1hhNLo5ZEd+11aw\nDdAnONcU3frlXlIXXheInqUe0vjWJwQ9wrTMTI7jYJqSWgYkPlI7+LGeojZKfQn9\nYndcD3skIxHT+BfK1rJiRpZGjrc01dQ6m4kHPXDZlXjgkJ5pNHnQhwpNeij5OW4U\nZ+pPgq/XaQQGNXQ1QXX/MIcNYbdeVhVtF1QOhfZFvxCOWZCrTJePz7+AbuipVrYd\nrdFW+DW1oOsjEZMc91j+ih/Rixm9YiywjokNbx9gOnGE8SQ+OA13IeEUy1zP1N8c\nmjggQpiDAgMBAAECggEAFYtsIXo1vXJk0qfM8yz7su1bQ6RaBvlHai58jeM6W9vN\nFc9P+C9CSfFi7B4xKsL473M/mK1bPfn0d99ziJl9HsmHAAQM8X+x+O3VT8Q56egS\nL6+VvifWpFyjX9/r/22Py2sNSm6tY+HAE+0sfoY85jAbNaBkqm/gm/E9mDM73EmY\nZyBVJSBEDtee6b/HakjJw5cF2hfx5o5T9BFc39AVjl1qDfL+sdDRQH/WBk9f5mJ5\nIjKQM2v9ewsXFIx5dR+E3xbsy7KjJ2mU3xCKStjhkAz1ohUgM8XsH7PqaP1lzCin\nCCclWl9fqOVltFnOUj2wh7rADXmsF+w9jJBCgrCtkQKBgQD/1srAlFYAJ+P/UWmR\nLlBuyY3kjfzvRur3MUYR40Yt75glncNZJHQ5n2gaoPI7BFnm2M0/ayHKOmemxgJp\np5V538Q2Y/XpJjt0l/X5K24HnM2517HN8HntR/CqmX/W02HgaclD+roaatLgbYdz\nyYjfUxSUCzeZmi6nJ2/w06DklQKBgQDmCEFO7o1cjtyqb0euMkvTKPOV55gRVEQw\nmQ2iBdRqoRX1BnQUXO4eZJKNAu0Z6a7X8JUBTJrm+o/tLHmUe8wKJ+0Hyw2YJKDe\n9pzcx8qvGaMF/KZysVx/Zue6iX7EJCsDIsBfRLFu+1zJyX3AStY+gPINFy0p7THz\n5ushP1PqtwKBgQCNlaQ9cZoqmejuynJe2z++ICM7omyhSyELziQWEC4ti9QqtSV/\n9tGvdg2Z9wo3KRBL1h24hCR+E1Z7kEeTiyAJA5JF+4oDDpqGyvZgf+1znw6nU7xd\n2UDQ1ShWcX6zN+aJ2GF/EondxtKPS25T4Ouzk/nmeFK72f0JmqSzpZr8BQKBgCZe\n8iXsfQAXhI+ZiGdyVFug1SEIRMF/QPCqVy/TsR8oR7VbojlTVxUSya9j8ZEE/flf\nVDunP5+P5Do31QADtoFrL4rBQD9EvOD0Wi4p1ZFnwV3aSxmOpFNMIxNmpBKrxdD8\nFwLNPpu4qj2usp9E3IAImle8qff4bQC2YDpnieP5AoGBANeW7rpqQiO97IPOMkTA\nFyyu4k2Lj8712Fc7E6wBDvvSYH1Oh9kW89hv3YPCBkYKv++VCbksN5IoZVAfjquo\nj+Jz+7QUZxv4XFyGoHEljjN6e/19daUOoZt6F25b8KVIxPE8mfvCgUJIEcsEbNaz\n8Fl5ge+fWbD7XSrq+V6PIS13\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-nshcn@speedtest-a288c.iam.gserviceaccount.com",
      "client_id": "117759947853092238752",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://accounts.google.com/o/oauth2/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-nshcn%40speedtest-a288c.iam.gserviceaccount.com"
    }
  },
  speedtest: {
    maxTime: 5000
  }
}