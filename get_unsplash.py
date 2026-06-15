import urllib.request
import json
import sys

def search(query):
    # we can scrape unsplash search page
    url = f"https://unsplash.com/napi/search/photos?query={urllib.parse.quote(query)}&per_page=5"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        resp = urllib.request.urlopen(req)
        data = json.loads(resp.read())
        for r in data['results']:
            print(f"URL: {r['urls']['raw']}")
            print(f"Desc: {r.get('alt_description', '')}")
            print("---")
    except Exception as e:
        print("Error:", e)

search(sys.argv[1])
