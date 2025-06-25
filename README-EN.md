# Angular Users App

### Overview

Angular Users App is a simple application built with Angular that allows you to list, filter, and create users. It uses JSON Server to simulate a RESTful API for development purposes.

### Clone the repository

If you haven’t already cloned the code, run:

```bash
git clone https://github.com/your-username/angular-users-app.git
cd angular-users-app
```

### Prerequisites

- Docker (version 20.10 or higher)
- Docker Compose (v2)

### Running with Docker

1. **Navigate to the project root** (the folder containing `docker-compose.yml`):

   ```bash
   cd path/to/angular-users-app
   ```
2. **Build the Docker images**:

   ```bash
   docker compose build
   ```
3. **Start the application**:

   ```bash
   docker compose up
   ```
4. **Open your browser** and access:

   * Frontend UI: `http://localhost:4200`
   * Users API:    `http://localhost:3000/users`

> Containers:
>
> * **frontend**: serves the Angular app via Nginx on port 4200
> * **api**: runs JSON Server serving `db.json` on port 3000

## Running without Docker

To run the application without Docker:

1. **Open a terminal and navigate to the frontend folder**:

   ```bash
   cd path/to/users-app
   ```
2. **Start the Angular development server**:

   ```bash
   ng serve
   ```
3. **In another terminal, from the project root, run**:

   ```bash
   json-server --watch db.json
   ```
4. **Open your browser** and access:

   * Frontend UI: `http://localhost:4200`
   * Users API:    `http://localhost:3000/users`

### Data Model

The application data is stored in `db.json` under the `users` array. Each user object has the following properties:

| Property     | Type   | Description                                   | Example                                               |
| ------------ | ------ | --------------------------------------------- | ----------------------------------------------------- |
| **id**       | string | Unique identifier (e.g., national ID)         | `"4782938L"`                                          |
| **name**     | string | User's first name                             | `"Jhon"`                                              |
| **surname**  | string | User's last name                              | `"Doe"`                                               |
| **email**    | string | Contact email                                 | `"jhon.doe@email.com"`                                |
| **imageUrl** | string | URL to the user's avatar image                | `"https://images.pexels.com/photos/220453/... .jpeg"` |

Sample entry:

```json
{
  "id": "4782938L",
  "name": "Jhon",
  "surname": "Doe",
  "email": "jhon.doe@email.com",
  "imageUrl": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
}
```

### Project Structure

```
angular-users-app/
├── db.json               # Sample data for JSON Server
├── docker-compose.yml    # Docker Compose configuration
└── users-app/            # Angular application source code
    ├── Dockerfile        # Docker build for frontend
    ├── package.json      # npm dependencies and scripts
    ├── angular.json      # Angular CLI configuration
    └── src/              # Application source (components, services, styles)
```

## TODO

- Optimize and compress images (serve in WebP or AVIF).  
- Minify and uglify CSS/JS for the production build.  
- Review and adjust **Cache-Control** in API HTTP responses to optimize reuse.  
- Add unit and end-to-end tests to ensure code quality.  
- Improve accessibility (ARIA attributes, keyboard navigation, high-contrast colors).  
