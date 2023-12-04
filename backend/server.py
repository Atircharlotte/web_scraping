from flask import Flask, request, jsonify
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.firefox.options import Options
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/scrape": {"origins": "http://localhost:3000"}})

@app.route('/scrape', methods=['POST'])
def scrape():
    try:
        #get the url from the request
        url = request.json.get('url')
        
        #set up selenium webdriver for firefox
        options = Options()
        options.headless = True
        driver = webdriver.Firefox(options=options)

        #navigate to the specified URL
        driver.get(url)

        #perform web scraping (filtering by specific condition)
        #for example: get only title
        title = driver.title

        #close the webdriver
        driver.quit()
        #return the scraping result
        response = jsonify({'result': title})

        #set CORS header
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')

        return response
    
    except Exception as e:
        return jsonify({'error': str(e)})

    

if __name__ == '__main__':
    app.run(debug=True)
