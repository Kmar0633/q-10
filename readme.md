
# Question 10-11 Express API Project


This project is a simple Node.js application using Express that provides two API endpoints: one for a GET request and one for a POST request. The project also includes header validation for incoming requests. You


## Installation

#### 1. Clone the Repository

```http\\
  git clone Q10
  cd Q10
```
#### 2. Install the dependancies

```http\\
  npm install
```
## Running the Application

#### 1. Start the server

```
  npm start
```
#### 2. Access the API:


Open your browser or use a tool like Postman to send requests to http://localhost:3000.
## API Reference


#### Get Request

```http\\
  GET /q10/v1/user/getData
```
| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `User-id` | `string` | **Required**. Your user id |
| `Scope` | `string` | **Required**. Your user type |

You need to use User-id ifabula and Scope user to make the requests
#### Get Request Success Response
```
  {
    "code": 200,
    "message": "GET request successful"
}
```

#### Post Request

```http
  POST /q10/v1/user/postData
```

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `User-id` | `string` | **Required**. Your user id |
| `Scope` | `string` | **Required**. Your user type |

You need to use User-id ifabula and Scope user to make the requests

#### Post Request Success Response
```
  {
    "code": 200,
    "message": "POST request successful"
}
```
#### Unauthorised Response for Post and Get

```
{
  "responseCode": 401,
  "responseMessage": "UNAUTHORIZED"
}
```
If the headers are incorrect then it will give this response

## Notes

You can modify the request and response data in the routes/index.js file.
The server listens on port 3000 by default. You can change this by modifying the PORT variable in the index.js file. USe localhost as the server to run the api calls. Example: http:///localhost:3000/q10/v1/user/getData