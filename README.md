# Full Stack Application with SQL Server, .NET Framework, and React

This project is a full stack application built using SQL Server, .NET Framework, and React. It utilizes tools like Bootstrap, Formik, and Yup for the front end. The application is containerized using Docker.

## Project Overview

### Database Structure

The project has two primary tables:
1. **Personas**: Stores information about people.
2. **Usuarios**: Stores login information for each person.

### API

The .NET Framework API calls stored procedures from SQL Server to create records or retrieve the list of people.

### Front End

The front end, built with React, allows you to:
- Create new records
- View existing records
- Test logins

### Tools and Libraries

- **Bootstrap**: For styling the application.
- **Formik**: For handling forms in React.
- **Yup**: For form validation in React.

## Getting Started

### Prerequisites

To run this application, you need to have Docker Engine installed on your machine.

### Running the Application

1. Build the Docker containers:
    ```sh
    docker-compose build
    ```

2. Start the Docker containers:
    ```sh
    docker-compose up
    ```

 3. Access the application:

Swagger page: http://localhost:8080/swagger   
Frontend application: http://localhost:3000

### Note

This server runs on HTTP instead of HTTPS because .NET requires an SSL certificate to run, and there's no way to automate it with Docker Compose.

## Usage

Once the application is running, you can access it via your web browser. The front end will provide you with the options to create new records, view existing records, and test logins.





#### 
Built by Jacobo Gallego for Double V partners

