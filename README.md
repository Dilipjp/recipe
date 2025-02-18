# Kitchen-Magic App 🍽️  

Kitchen-Magic is a recipe search web application designed to help users find and explore recipes based on ingredients, keywords, or categories. With an intuitive interface, users can search for recipes, view detailed instructions, and save their favorite recipes for future reference.  

This project was developed using **React.js** for the front end and **MongoDB** for the database, along with **Firebase Authentication** for secure user login and **Edamam API** for fetching recipe data.  

## Features  

✅ **Recipe Search:** Users can search for recipes by entering keywords or ingredients.  
✅ **Detailed Recipe View:** Each recipe includes a list of ingredients, step-by-step instructions, cooking time, and nutritional information.  
✅ **User Authentication:** Secure login and registration using **Firebase Authentication** (Email/Password, Google Sign-in, etc.).  
✅ **Favorite Recipes:** Registered users can save their favorite recipes for quick access later.  
✅ **Responsive Design:** The app is optimized for desktops, tablets, and mobile devices.  
✅ **Fast and Scalable:** The backend is built with **MongoDB**, ensuring smooth performance even with a growing number of recipes.  

---

## Screenshots

### Home Page
![Home Page](https://github.com/Dilipjp/recipe/blob/main/screenshots/Screenshot%202024-03-26%20at%2020.17.12.png)

### Recipe Search
![Recipe Search](https://github.com/Dilipjp/recipe/blob/main/screenshots/Screenshot%202024-03-26%20at%2020.17.31.png)

### Recipe Details
![Recipe Details](https://github.com/Dilipjp/recipe/blob/main/screenshots/Screenshot%202024-03-26%20at%2020.17.43.png)

### Prerequisites  

- **Node.js** installed on your machine  
- A Firebase project set up for authentication  
- API keys for **Edamam API**  

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## API Integration

This application uses the following APIs:

- **[Edamam API](https://api.edamam.com)**: Fetches recipe data, including ingredients, instructions, and nutritional information.  
- **Firebase Authentication**: Manages user authentication, including sign-up, login, and authentication state management.  

# Mind Map

Recipe Search Web Site  
│  
├── Home Page  
│ ├── Search Bar  
│  
├── Search Results  
│ ├── List of Recipes  
│  
├── Recipe Page  
│ ├── Ingredients  
│ ├── Instructions  
│ ├── Nutritional Information  
│  
└── User Account  
   ├── Profile  

# Functional Requirements

- **User Registration**: Allow users to create accounts using Firebase Authentication to save their favorite recipes and customize their experience.  
- **Search Functionality**: Provide a search bar to allow users to search for recipes based on keywords, ingredients, or categories.  
- **Recipe Display**: Display recipes with ingredients, instructions, cooking time, and nutritional information.  
- **Responsive Design**: Ensure the website is optimized for various devices, including desktops, tablets, and smartphones.  

# Non-Functional Requirements

- **Performance**: Ensure fast loading times and responsiveness, even during peak traffic.  
- **Security**: Implement Firebase Authentication for secure login and user management.  
- **Scalability**: Design the website to handle increasing numbers of users and recipes.  
- **Accessibility**: Ensure the website is accessible to users with disabilities, following WCAG guidelines.  
- **Usability**: Design the website with a user-friendly interface and intuitive navigation.  
- **Reliability**: Ensure the website is available and functional at all times, with minimal downtime.  
- **Compatibility**: Ensure compatibility with different web browsers and operating systems.  
- **Legal Compliance**: Ensure compliance with data protection regulations and copyright laws.  

# Technologies Used

- **React.js** for the front end  
- **MongoDB** for the database  
- **Edamam API** for fetching recipe data  
- **Firebase Authentication** for user authentication  
- **RESTful API** for backend communication  
