# Anime-Connect

Welcome to Anime-Connect, a full-stack social media platform dedicated to anime enthusiasts around the world. Connect with fellow fans, share your favorite anime moments, and discover new series to binge-watch!

## Features

- **User Profiles:** Create a personalized profile to share your anime interests.
- **Anime Communities:** Explore a vast communities of anime series and movies.
- **Social Interaction:** Follow other users, make friends, post opinions, comment on posts, share post and exchange messages.
- **Recommendations:** Get personalized anime recommendations based on your preferences.

## Getting Started

To get a local copy up and running, follow these simple steps.

## 1. Prerequisites
Before you proceed, ensure that you have the following prerequisites installed:

- Node.js and npm: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)
- Git: [Download and Install Git](https://git-scm.com/downloads)

## 2. Project Structure
mern-food-website/  
├── backend/  
│   └── ...  
├── frontend/  
│   └── ...  
└── readme.md  



## 3. Setting up the Backend


### Express.js Configuration
1. Navigate to the `backend` directory: `cd backend`.
2. Install dependencies: Run `npm install`.
3. Create a `.env` file in the `backend` directory and add the following environment variables:





DB_CONNECTION = `mongodb+srv://ll1201:FLStiIQrHTxx7FXT@cluster0.f3rcrvs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

PORT = `4000`

SECRET = `Thsisthesecretkeycretedymy&&&`

REFRESH_SECRET = `Thisiisiitherefreshkeycreadet%%%%$$$$@`




├─────────────────────────────────────────────────────────────


Run 
`node server.mjs`


The old way:
`npm start or nodemon server.js or node server.js`.

## 4. Setting up the Frontend

1. Navigate to the `frontend` directory: `cd frontend`.
2. Open util.js in src, set BASE_URL to "http://localhost:4000"
3. Install dependencies: Run `npm install`.
4. Start the React frontend: Run `npm run dev`.

## 5. Running the Application
- Access the website at `http://localhost:5173/`.


Mongodb Atlas server to run the Mongo database in:

Connection String URL:

`mongodb+srv://ll1201:FLStiIQrHTxx7FXT@cluster0.f3rcrvs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`




Login:

https://account.mongodb.com/account/login

Email: `ll.1201@mailfence.com`
Password: `Anime-Connect`


 

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.
If you'd like to contribute to this project, follow the following steps:-   

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some Amazing Feature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request
