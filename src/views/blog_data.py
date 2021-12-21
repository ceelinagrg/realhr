import requests
import json

url= "https://realhrsoft.com/api/pages/?type=home.BlogPage&fields=title,cover,body,category&order=-id"

r=requests.get(url).text


jsondata=json.loads(r)
blogs=jsondata["items"]
print(len(blogs))
print(blogs[0].keys())
print(blogs[0].meta.html_url)