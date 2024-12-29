# Personal Portfolio

This project is a personal portfolio website built using the MERN stack (MongoDB, Express, React, Node.js). It showcases my work, skills, and projects as a full stack developer.

## Project Structure

The project is divided into two main parts: the backend and the frontend.

### Backend

- **`/backend/src/app.js`**: Entry point for the backend application. Sets up the Express server and connects to the MongoDB database.
- **`/backend/src/controllers/index.js`**: Contains functions that handle requests for different routes, such as getting, creating, and updating portfolio items.
- **`/backend/src/models/index.js`**: Defines Mongoose models for the portfolio items, including properties like title, description, and imageUrl.
- **`/backend/src/routes/index.js`**: Sets up API routes for portfolio-related operations.
- **`/backend/package.json`**: Configuration file for the backend, listing dependencies and scripts.
- **`/backend/.env`**: Contains environment variables for the backend, including the MongoDB connection string.

### Frontend

- **`/frontend/public/index.html`**: Main HTML file for the frontend application.
- **`/frontend/src/components/App.js`**: Main component of the React application, setting up routing and layout.
- **`/frontend/src/pages/Home.js`**: Displays portfolio items and introductory content.
- **`/frontend/src/App.js`**: Sets up the React application, including routing and global state management.
- **`/frontend/src/index.js`**: Entry point for the React application, rendering the App component.
- **`/frontend/src/styles/App.css`**: CSS styles for the React application.
- **`/frontend/package.json`**: Configuration file for the frontend, listing dependencies and scripts.
- **`/frontend/.env`**: Contains environment variables for the frontend, such as API endpoints.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

3. Create a `.env` file in the backend directory and add your MongoDB connection string and any other necessary environment variables.

4. Start the backend server:
   ```
   npm start
   ```

5. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

6. Create a `.env` file in the frontend directory and add your API endpoint.

7. Start the frontend application:
   ```
   npm start
   ```

## Usage

Once both the backend and frontend are running, you can access the portfolio website at `http://localhost:3000`. You can view and manage your portfolio items through the interface provided.

## License

This project is licensed under the MIT License.