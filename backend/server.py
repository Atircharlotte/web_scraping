from flask import Flask, request, jsonify, make_response
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.firefox.options import Options
from flask_cors import CORS
#get specific element from html
from selenium.webdriver.common.by import By


app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])

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
        #title = driver.title

        #get the specific elements in html
        title = driver.title
        #get the h1 element
        heading = driver.find_element(By.TAG_NAME, 'h1');

        #close the webdriver
        driver.quit()
        #return the scraping result
        response = jsonify({'result': title})

        return response
    
    except Exception as e:
        return jsonify({'error': str(e)})
'''

@app.route('/scrape', methods=['OPTIONS'])
def options():
    response = make_response()
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Methods', 'POST')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    return response
'''

if __name__ == '__main__':
    app.run(port=9000, debug=True)
