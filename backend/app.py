from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import openai

app = Flask(__name__)
CORS(app)

def chat(question) -> str:
    openai.api_key = "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"

    response = openai.Completion.create(prompt = question, 
                                model="text-davinci-002", 
                                temperature = 0.85,
                                top_p=1, 
                                frequency_penalty=0, 
                                presence_penalty=0.7, 
                                best_of=2,
                                max_tokens=1000,
                                stop = "\nHuman: ")

    return response.choices[0].text


@app.route('/andjelika', methods=['POST'])
def andjelika():

    data = request.get_json()['message']
    response = chat(data)[2:]

    return response

if __name__ == '__main__':
    app.run(debug=True)