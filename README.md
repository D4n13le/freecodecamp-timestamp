# Timestamp Microservice

## User Stories

- [x] I can pass a string as a parameter, and it will check to see whether that string contains a unix timestamp
- [x] If it does, it returns both the Unix timestamp and the natural language form of that date.
- [x] If it does not contain a Unix timestamp, it returns null for those properties.

### Example Usage

```
https://freecodecamp-timestamp-d4n13le.herokuapp.com/1424237800
```

### Example Output

```json
{
  "unix": 1424237800,
  "natural": "February 18, 2015"
}
```
