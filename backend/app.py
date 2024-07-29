from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai

app = Flask(__name__)
CORS(app)  # Để xử lý các yêu cầu CORS từ frontend

# Thiết lập khóa API của bạn
GOOGLE_API_KEY = 'AIzaSyBS1YPnwCX3uZKMuXQXep7yDdVT5Y7tjYQ'
genai.configure(api_key=GOOGLE_API_KEY)

# Tạo một session chat
model = genai.GenerativeModel('gemini-1.5-flash')
chat_sessions = {}

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    session_id = data['session_id']
    message = data['message']

    if session_id not in chat_sessions:
        chat_sessions[session_id] = {
            'chat': model.start_chat(history=[]),
            'history': []
        }

    chat_session = chat_sessions[session_id]
    chat = chat_session['chat']
    history = chat_session['history']

    # Update history with the user's message
    history.append(f'User: {message}')

    # Generate response including the history
    prompt = '\n'.join(history) + f'\nAI:'
    response = chat.send_message(prompt)

    # Update history with the AI's response
    history.append(f'AI: {response.text}')

    return jsonify({
        'response': response.text,
        'history': history
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, use_reloader=False)
