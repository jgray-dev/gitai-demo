from flask import Flask
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)


@app.route('/api/hello')
def hello():
    return {'message': 'Hello from Flask!'}


print(os.getenv("test"))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
