# AI Chatbot with React and Flask

This project is an AI-powered chatbot with a React frontend and a Flask backend. It features a responsive design, markdown support, code highlighting, and smooth animations.

## Features

- Real-time chat interface
- Markdown rendering for rich text messages
- Syntax highlighting for code blocks
- Responsive design (works on desktop, tablet, and mobile)
- Smooth animations for enhanced user experience
- AI-powered responses using Google's Generative AI

## Project Structure

```
chatbot-ui/
├── backend/
│   ├── .env
│   ├── requirements.txt
│   └── app.py
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatWindow.js
│   │   │   └── InputArea.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├──package.json
└── README.md
```

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm (v6 or later)
- Python (v3.10 or later)
- pip (for Python package management)

## Installation

### Frontend (React)

1. Clone the repository:
   ```sh
   git clone https://github.com/FOX2920/chatbot-ui.git
   cd ai-chatbot/frontend
   ```

2. Install the required npm packages:
   ```sh
   npm install
   ```

### Backend (Flask)

1. Navigate to the backend directory:
   ```sh
   cd ../backend
   ```

2. Create a virtual environment (optional but recommended):
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows, use venv\Scripts\activate
   ```

3. Install the required Python packages:
   ```sh
   pip install -r requirements.txt
   ```

## Configuration

1. Set up your Google API key:
   - Create a `.env` file in the backend directory
   - Add your Google API key:
     ```env
     GOOGLE_API_KEY=your_api_key_here
     ```

## Running the Application

1. Start the Flask backend:
   ```sh
   cd backend
   python app.py
   ```
   The backend will start running on `http://localhost:5000`.

2. In a new terminal, start the React frontend:
   ```sh
   cd frontend
   npm start
   ```
   The frontend will start running on `http://localhost:3000`.

3. Open your browser and navigate to `http://localhost:3000` to use the chatbot.

## Usage

- Type your message in the input field at the bottom of the chat window.
- Press Enter or click the Send button to send your message.
- The AI will respond with formatted text, including markdown and code highlighting when appropriate.
- Use the scroll-to-bottom button to quickly navigate to the latest messages.

## Contributing

Contributions to this project are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Create a new Pull Request

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Flask](https://flask.palletsprojects.com/)
- [Google Generative AI](https://developers.generative-ai.google/)
- [react-markdown](https://github.com/remarkjs/react-markdown)
- [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
