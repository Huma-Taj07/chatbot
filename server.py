from flask import Flask, request, jsonify
import google.generativeai as genai

# Configure Generative AI (assuming you have the necessary credentials)
genai.configure(api_key="AIzaSyDBz1MC-RTok81bjp-Bdvx6mxc8bjQChTI")
model = genai.GenerativeModel('gemini-pro', generation_config={"temperature": 0.7})

app = Flask(__name__)

@app.route('/generate', methods=['POST'])
def generate_story():
  # Get the prompt from the request body
  data = request.get_json()
  if not data or 'prompt' not in data:
    return jsonify({'error': 'Missing prompt in request body'}), 400

  prompt = data['prompt']

  # Generate response
  chat = model.start_chat(history=[])
  response = chat.send_message(prompt)

  return jsonify({'response': response.text})

if __name__ == '__main__':
  app.run(debug=True)

# import google.generativeai as genai
# import os

# # Configure Generative AI
# genai.configure(api_key="AIzaSyDBz1MC-RTok81bjp-Bdvx6mxc8bjQChTI")
# model = genai.GenerativeModel('gemini-pro', generation_config={"temperature": 0.7})
# chat = model.start_chat(history=[])

# # Generate story
# response = chat.send_message("What is apple?")

# print("Generated Story:")
# print(response.text)
