🌦️ Cinematic Weather Dashboard
A premium, glassmorphism-inspired weather application built with modern JavaScript and real-time API integration. This project focuses on high-end UI/UX, featuring dynamic data fetching and smooth visual transitions.

🚀 Key Features
Real-time Data: Fetches live weather updates using the WeatherAPI.

Premium Glassmorphism UI: A sleek, transparent interface with blurred backgrounds for a modern aesthetic.

Smart Error Handling: Robust validation to handle incorrect city names or API failures gracefully with user alerts.

Dynamic Visuals: Condition-based text and icons (Mist, Sunny, Rain, etc.) that update instantly.

Swipe Animations: Smooth CSS-powered slide-in transitions for a cinematic user experience.

Responsive Metrics: Displays Wind Speed, Humidity, UV Index, Visibility, Pressure, and Cloud Cover.

🛠️ Tech Stack
HTML5: Structured for a semantic and accessible dashboard layout.

CSS3: Custom styling featuring Flexbox, Grid, Glassmorphism, and Keyframe Animations.

JavaScript (ES6+): Utilizes async/await for asynchronous API calls, DOM manipulation, and error handling logic.

📸 Dashboard Preview
[Yahan tum apna screenshot attach kar dena jo tumne mujhe dikhaya tha]

💡 How it Works
The user enters a city name in the search field.

The dataUpdate() async function triggers a fetch request to the WeatherAPI.

Upon a successful response, the JSON data is parsed and mapped to specific DOM elements.

If the city is not found, a custom error handling logic catches the 400 status and alerts the user.
