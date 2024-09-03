# News.360° - Top Headlines Website

## Overview
News.360° is a dynamic web application designed to keep users informed with the latest top headlines from a variety of genres, including general news, technology, sports, and more. Built using ReactJS and styled with Tailwind CSS and Bootstrap, the application offers a seamless and responsive user experience. News.360° leverages the powerful NewsAPI.org to fetch real-time news data, ensuring users have access to the most current information available

## Features
- Top Headlines Display: Access the latest news across many categories such as general news, technology, sports, entertainment, and more.
- Infinite Scrolling: Enjoy a smooth browsing experience with infinite scrolling, which automatically loads more articles as you reach the bottom of the page.
- Category Filtering: Easily filter news articles by selecting from various categories, allowing you to focus on topics that interest you the most.
- Responsive Design: The application is fully responsive, ensuring an optimal viewing experience across different devices, from desktops to mobile phones.
- User-friendly Interface: Intuitive design elements powered by Bootstrap make the application easy to navigate for users of all skill levels.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Bootstrap**: A CSS framework for developing responsive and mobile-first websites.
- **NewsAPI.org**: A simple HTTP REST API for searching and retrieving live articles from all over the web.

## Setup and Installation

### Prerequisites
- Node.js and npm installed on your machine.
- A NewsAPI.org API key. You can get one by signing up at [NewsAPI.org](https://newsapi.org/register).

### Steps to Run the Project

1. **Clone the Repository**
    ```bash
    git clone https://github.com/your-username/News.360°.git
    cd News.360°
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Create an Environment Variables File**
    - Create a `.env` file in the root directory's project.
    - Add your NewsAPI.org API key in the `.env` file:
      ```env
      VITE_NEWS_API_KEY=your_actual_news_api_key
      ```

4. **Start the Development Server**
    ```bash
    npm run dev
    ```

5. **Build for Production**
    ```bash
    npm run build
    ```

6. **Preview the Production Build**
    ```bash
    npm run serve
    ```

### Project Structure
```
newscross/
├── public/                 # Static assets and public files
├── src/                    # Main source code for the application
│   ├── components/         # Reusable React components
│   │   ├── Newscontrol.jsx # Handles news fetching and display
│   │   ├── Navbar.jsx      # Navigation bar component
│   │   └── Spinner.jsx     # Loading spinner component
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point for React
│   ├── main.js             # Vite configuration entry point
│   └── ...
├── .env                    # Environment variables file
├── package.json            # Project metadata and dependencies
├── vite.config.js          # Vite configuration file
└── README.md               # Project documentation
```

## Component Overview

### `Newscontrol.jsx`
The main component responsible for fetching and displaying news articles. It uses the NewsAPI.org to fetch latest headlines and handles pagination and infinite scrolling.

### `Navbar.jsx`
A component to display individual news articles including the title, description, and image.

### `Spinner.jsx`
A simple spinner component to show a loading indicator while news articles are being fetched.

