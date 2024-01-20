import requests
from bs4 import BeautifulSoup
import pandas as pd
import re

categories = {'fiction','non-fiction','children-books','urdu-books'}

for category in categories:
    URL = f"https://www.libertybooks.com/{category}?limit=100&page="
    soup = BeautifulSoup(requests.get(URL).content, 'html.parser')
    NoOfPages = int(re.findall('[0-9]+', soup.find('div', class_='col-lg-6 text-right page-result').text.split('(')[1])[0])
    
    for i in range(1,NoOfPages+1):
        newURL = URL+str(i)
        soup = BeautifulSoup(requests.get(newURL).content, 'html.parser')
        productItems = soup.find_all('div', class_ = 'product-items')
