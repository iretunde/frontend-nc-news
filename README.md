# Northcoders News - Frontend

This project is a frontend application for **Northcoders News**, a social news aggregation, web content rating, and discussion site. Users can browse articles, explore topics, view individual articles with detailed content, and leave comments. This application is built with **React** and interacts with the API I built in the bc-nc-news project (a RESTful API built with Node.js and PostgreSQL) to retrieve and manipulate data.

## Features

- **View Articles:** Browse articles by topic and view individual article details.
- **User Interaction:** Upvote, downvote, and comment on articles.
- **Navigation:** Navigate between the homepage, topics, and articles, and view specific articles in detail.

## Getting Started

To get the project up and running, follow the steps below.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd frontend-nc-news
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

   This will start the app at `http://localhost:3000`.

## Project Structure

- **App Component** (`App.jsx`): Defines the main routes using `react-router-dom`.
- **Home Component** (`Home.jsx`): Displays the homepage with navigation options.
- **MainPage Component** (`MainPage.jsx`): Acts as a central page with links to other features.
- **Topics Component** (`Topics.jsx`): Lists available topics.
- **Articles Component** (`Articles.jsx`): Lists all articles.
- **SpecificArticle Component** (`SpecificArticle.jsx`): Displays the details of a single article, including the ability to view and post comments.

## API Endpoints

This frontend app uses the [Northcoders News API](#) to retrieve and manipulate data. Key API endpoints:

- `GET /api/articles`: Retrieves a list of articles.
- `GET /api/articles/:article_id`: Retrieves a specific article by ID.
- `POST /api/articles/:article_id/comments`: Adds a comment to a specific article.
- `GET /api/topics`: Retrieves a list of topics.

## Development Notes

- **Error Handling**: Error handling is partially implemented to manage invalid or unsuccessful requests.
- **Loading States**: Loading states have been added for asynchronous operations to improve the user experience.

## Future Improvements

- **Complete CRUD Functionality**: Implement article creation, updating, and deletion.
- **User Authentication**: Add user authentication for enhanced interactivity and user-specific features.
- **Additional Styling**: Improve UI/UX through additional styling and layout adjustments.

## Dependencies

- **React**: UI library
- **React Router**: Routing management
- **CSS**: For styling components

