# TeeRex Store

## About the Project

Welcome to the T-Shirt Store project! This application is a simple e-commerce platform built using React, MaterialUI and Bootstrap, designed to provide a user-friendly interface for browsing and purchasing t-shirts. The project demonstrates essential React concepts such as state management, routing, and component-based architecture, making it a great example for learning or showcasing your skills.

### Features

- **Product Listing**: Browse through a collection of t-shirts with details including name, price, available quantity, and image.
- **Filtering**: Filter t-shirts based on gender, color, type, and price range.
- **Search Functionality**: Search for t-shirts by name, color, or type.
- **Shopping Cart**: Add t-shirts to a shopping cart, adjust quantities, and remove items.
- **Local Storage**: Persist cart items in the local storage so that the cart remains intact on page refresh.
- **Responsive Design**: The application is fully responsive and scales gracefully across various devices, ensuring a seamless user experience on desktops, tablets, and smartphones.
- **State Management**: Uses React's `useState` hook for efficient state management, enabling dynamic updates to the UI based on user interactions. Once add to cart is clicked the quantity decreases and increments in Cart. Any increase and decrease in quantity in cart also reflects in Product i.e, in home page. The navbar count of cart only increases when any new item is added. With this even the total amount also changes.

### Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Bootstrap**: Provides Bootstrap components as React components for creating responsive layouts.
- **React Router**: A standard library for routing in React applications.
- **Bootstrap**: A popular CSS framework for designing responsive and mobile-first websites.

### Project Structure

- `src/components`: Contains reusable React components such as `ProductCard` and `CustomNavbar`.
- `src`: Contains page components like `HomePage` and `ShoppingCartPage`.
- `src/App.js`: Main application component that sets up routing and state management.
- `src/index.js`: Entry point for the React application.

### Usage

- **Home Page**: View and filter t-shirts based on various criteria. Add items to the shopping cart.
- **Shopping Cart Page**: View the items in your cart, adjust quantities, and remove items if necessary.

### State Management

The application makes extensive use of React's `useState` hook for managing the state of various components. This includes:

- **Product State**: Managing the list of available t-shirts and their properties.
- **Cart State**: Managing the items in the shopping cart, including adding, updating, and removing items.
- **Filter State**: Managing the filters applied to the product listing, such as gender, color, and type.
- **Search State**: Managing the search term used to filter products by name, color, or type.

### Deployment

You can view the deployed application at the following link:

[https://aasthasingh-teerexstore.netlify.app/](https://aasthasingh-teerexstore.netlify.app/)


Thank you for checking out the T-Shirt Store project! If you have any questions or feedback, feel free to reach out or open an issue in the repository.
