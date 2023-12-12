from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Home comes here"

@app.route("/rita")
def rita():
    return "Rita comes here"


if __name__ == "__main__":
    app.run(port=8000,debug=True)