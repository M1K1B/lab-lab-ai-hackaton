from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/andjelika', methods=['POST'])
def andjelika():
    data = request.get_json()['message']

    return jsonify({'result': ['1', '2', '3'], 'name': data})

if __name__ == '__main__':
    app.run(debug=True)