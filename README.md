# NC News

## Project Overview

**NC News** is a simulated social news aggregation platform where users can view and interact with articles.

You can view the **deployed version** of the app [here](https://nc-news-cc.netlify.app/).

### Features:

- **View a List of Articles**: Display a list of articles on the main page.
- **View an Individual Article**: Navigate to a page displaying a single article.
- **View Comments**: See comments associated with an article on the article page.
- **Vote on Articles**: Upvote or downvote articles.
- **Post a Comment**: Add comments to articles.
- **Delete Comments**: Users can delete their own comments.
- **Sort Articles**: Sort articles by date, comment count, or votes in ascending or descending order.
- **Topic-Based Views**: View articles filtered by different topics.

---

## Technologies Used

- **JavaScript XML, CSS**
- **React, React Router**
- **Axios**
- **Netlify**

---

## Backend Repository

This frontend app interacts with a backend API to fetch and manipulate data. You can find the backend repository [here](https://github.com/CCronje96/back-end-nc-news).

---

## Requirements

To run this project locally, ensure that you have the following installed:

- **Node.js** (Minimum version: 23.5.0)

---

## Running the Project Locally

### 1. Clone the Repository

Clone this repository to your local machine:

```
git clone <repo-url>
```

### 2. Install Dependencies

Navigate into the project folder and install the necessary dependencies:

```
cd fe-nc-news
npm install
```

### 3. Run the Development Server

Start the development server to run the app locally:

```
npm run dev
```

This will start the app at a local development server URL, e.g. http://localhost:3000.  
You can now open this URL in your browser to see the app in action

### 4. Additional Notes

The database is hosted on Supabase and the api on Render, however it might take a while to "spin up" after inactivity. If you're running and hosting the backend and frontend locally, ensure they're both configured to interact properly in order for data to be fetched successfully.

**This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)**

---
