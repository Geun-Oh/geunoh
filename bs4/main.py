import requests
from bs4 import BeautifulSoup

url = "http://www.q-net.or.kr/crf021.do?id=crf02101&gSite=Q&gId=&scheType=04"

response = requests.get(url)

if response.status_code == 200:
    html = response.text
    soup = BeautifulSoup(html, "html.parser")
    title = soup.find('div', {"class": "cont_parbx"})
    mb = title.select('div > div:nth-of-type(2)')
    print(mb)
else:
    print(response.status_code)