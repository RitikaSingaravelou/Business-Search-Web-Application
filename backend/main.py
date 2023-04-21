import requests
#url = "https://api.yelp.com/v3/businesses/search?term=sushi&latitude=33.8491816&longitude=-118.3884078&categories=food&radius=8046"

#headers = {'Authorization': 'Bearer DemAQjz10DFF96-9hkV_ZRV0v1ObX03S9J0_JJDTkUuHdFFQC4Ok8jUyVvVd7BL0O1vsISIzpDoeahk_2PQp_3gcExmXYk-i4-T2q9NE5q99CuUyi-nb5tgf76tAY3Yx'}
#response = requests.request("GET", url, headers=headers)
#print(response.text)


from flask import Flask,jsonify,request,current_app
import requests
import json
app =   Flask(__name__)

@app.route('/')
def initial():
    return current_app.send_static_file('yelpbiz.html')

@app.route('/searchresults',methods=['GET'])
def searchresroute():
  term = request.args.get('keyword', type = str)
  latitude = request.args.get('latitude', type = float)
  longitude = request.args.get('longitude', type = float)
  categories = request.args.get('categories', type = str)
  distance = request.args.get('distance', default = 10, type = float)
  radius= round(distance*1609.344)
  print(radius)
  #url = "https://api.yelp.com/v3/businesses/search?term=sushi&latitude=33.8491816&longitude=-118.3884078&categories=food&radius=8046"

  url = "https://api.yelp.com/v3/businesses/search?term="+term+"&latitude="+str(latitude)+"&longitude="+str(longitude)+"&categories="+categories+"&radius="+str(radius)
  print(url)
  print(requests.__version__)
  headers = {'Authorization': 'Bearer DemAQjz10DFF96-9hkV_ZRV0v1ObX03S9J0_JJDTkUuHdFFQC4Ok8jUyVvVd7BL0O1vsISIzpDoeahk_2PQp_3gcExmXYk-i4-T2q9NE5q99CuUyi-nb5tgf76tAY3Yx'}
  resp = requests.request("GET", url, headers=headers)
  
  json_resp=json.loads(resp.text)
  return json_resp

@app.route('/specificbusiness/<id>',methods=['GET'])
def bizdetroute(id):
    url="https://api.yelp.com/v3/businesses/"+str(id)
    print(url)
    headers = {'Authorization': 'Bearer DemAQjz10DFF96-9hkV_ZRV0v1ObX03S9J0_JJDTkUuHdFFQC4Ok8jUyVvVd7BL0O1vsISIzpDoeahk_2PQp_3gcExmXYk-i4-T2q9NE5q99CuUyi-nb5tgf76tAY3Yx'}
    resp = requests.request("GET", url, headers=headers)
    
    
    json_resp=json.loads(resp.text)
    return json_resp


if __name__=='__main__':
    app.run(debug=True)