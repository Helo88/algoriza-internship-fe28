# Vue Vite Booking App view it from [https://algoriza-internship-fe28.vercel.app/](https://algoriza-internship-fe28.vercel.app/)

## Overview

This Vue.js app, built using Vite, utilizes the Rapid Fire API to display hotel data based on search criteria, including city name, check-in & checkout dates. Authenticated users can search, filter, and book hotels, while others can only view the home page.

## Features

- **Home Page:**

  - All users can view the home page with basic information.

- **Search and Filter (Authenticated Users Only):**

  - Authenticated users can perform advanced search and filter operations.

- **Sorting:**

  - Sort hotels based on various criteria.

- **Search by Hotel Name:**

  - Search for specific hotels by name.

- **User Authentication:**

  - Only authenticated users can access advanced features.

- **Booking:**

  - Authenticated users can book hotels.

- **Trip Management:**
  - Authenticated users can view and manage their booked trips.

## Getting Started

### Prerequisites

- Node.js (at least v18)
- npm or yarn

### Installation

1. **Clone the repository:**

   bash
   git clone https://github.com/Helo88/algoriza-internship-fe28.git

2. **Navigate to the project directory:**

   cd algoriza-internship-fe28

3. **Install dependencies:**

   npm install

   # or

   yarn install

### Development

npm run dev

# or

yarn dev

Visit [http://localhost:5173](http://localhost:5173) in your browser to view the app during development.

### Build for Production

bash
npm run build

# or

yarn build

The production-ready files will be generated in the `dist` directory.

## Configuration

### Rapid Fire API

- Create an account on [Rapid Fire API]([https://rapidapi.com/](https://rapidapi.com/DataCrawler/api/booking-com15/) and obtain an API key.
- Add the API key to the project configuration.

### Authentication

- Configure authentication settings in the app.

## Contributing

1. **Fork the repository.**
2. **Create a new branch: `git checkout -b feature-name`.**
3. **Make your changes and commit: `git commit -m 'Add new feature'`.**
4. **Push to the branch: `git push origin feature-name`.**
5. **Create a pull request.**
