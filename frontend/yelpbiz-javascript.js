


function disableloc()
{
    var autoloc=document.getElementById('autolocation').checked;
    var loc=document.getElementById('location');
    if (autoloc===true)
{loc.value="";loc.disabled=true;}
else{loc.disabled=false;}
}

function formval() {
var keyw=document.getElementById('keyword');
keyw.setCustomValidity('');
var loc=document.getElementById('location');
loc.setCustomValidity('');
var latitude,longitude;
var autoloc=document.getElementById('autolocation').checked;
var dist=document.getElementById('distance');
dist.setCustomValidity('');
var category=document.getElementById('category').value;
if (keyw.value == '') {
  keyw.setCustomValidity('Please fill out this field.');
  
  } 

else if (dist.value == '') {
    dist.setCustomValidity('Please fill out this field.');
    }
else if (autoloc==true)
{loc.value='';loc.disabled=true;
 
var requesturl = 'https://ipinfo.io/?token=ecab35a1f49e70';
    
var xhttpip = new XMLHttpRequest();
    xhttpip.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var latlong=xhttpip.response.loc;
        var latlongsplit=latlong.split(/[, ]+/);
        latitude= latlongsplit[0];
        longitude= latlongsplit[1];
        var requestURLb = 'http://127.0.0.1:5000/searchresults?keyword='+keyw.value+'&latitude='+latitude+'&longitude='+longitude+'&categories='+category+'&distance='+dist.value;
   console.log(requestURLb) 
   alert("ok")
    var xhttpb = new XMLHttpRequest();
    xhttpb.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        bizsearchresults=xhttpb.response;
        console.log(bizsearchresults.businesses[0].name);
        createtable(bizsearchresults);
        //showbusinesssearchresults(bizsearchresults);
    }}

xhttpb.open('GET', requestURLb);
xhttpb.responseType = 'json';
xhttpb.send();
    }
    }
xhttpip.open('GET', requesturl);
xhttpip.responseType = 'json';
xhttpip.send();


}




else if(autoloc==false){

if (loc.value == '') {
    loc.setCustomValidity('Please fill out this field.');
    
    }

else{console.log(keyw.value);
    console.log(loc.value);
    var addr=encodeURI(loc.value);
    console.log(addr);
    var requestURL = 'https://maps.googleapis.com/maps/api/geocode/json?address='+addr+'&key=AIzaSyAL78J1QJfnMjNujfe5PntVDDYd-clxvS0';
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        
    if (this.readyState == 4 && this.status == 200) {
        latitude=xhttp.response.results[0].geometry.location.lat;
        longitude=xhttp.response.results[0].geometry.location.lng;
        var requestURLb = '/searchresults?keyword='+keyw.value+'&latitude='+latitude+'&longitude='+longitude+'&categories='+category+'&distance='+dist.value;
   console.log(requestURLb) 
   
    var xhttpb = new XMLHttpRequest();
    xhttpb.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        bizsearchresults=xhttpb.response;
        console.log(bizsearchresults);
        createtable(bizsearchresults);
    }}

xhttpb.open('GET', requestURLb);
xhttpb.responseType = 'json';
xhttpb.send();
        
        
    }}

xhttp.open('GET', requestURL);
xhttp.responseType = 'json';
xhttp.send();



}
}

/*if(keyw.value!=''){
    console.log(latitude);
        console.log(longitude);
var requestURLb = 'http://127.0.0.1:5000/searchresults?keyword='+keyw.value+'&latitude='+window.latitude+'&longitude='+window.longitude+'&categories='+category+'&distance='+dist.value;
   console.log(requestURLb) 
   alert("ok")
    var xhttpb = new XMLHttpRequest();
    xhttpb.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        bizsearchresults=xhttpb.response;
        console.log(bizsearchresults);
    }}

xhttpb.open('GET', requestURLb);
xhttpb.responseType = 'json';
xhttpb.send();
}*/
};

document.getElementById('custinput').onsubmit= function(e){
    e.preventDefault();
}

function formvali()
{var keyw=document.getElementById('keyword');
//keyw.setCustomValidity('');
var loc=document.getElementById('location');
//loc.setCustomValidity('');
var latitude,longitude;
var autoloc=document.getElementById('autolocation').checked;
var dist=document.getElementById('distance');
//dist.setCustomValidity('');
var category=document.getElementById('category').value;


if (autoloc===true&&keyw.value!="")
{
 
var requesturl = 'https://ipinfo.io/?token=ecab35a1f49e70';
    
var xhttpip = new XMLHttpRequest();
    xhttpip.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var latlong=xhttpip.response.loc;
        var latlongsplit=latlong.split(/[, ]+/);
        latitude= latlongsplit[0];
        longitude= latlongsplit[1];
        var requestURLb = '/searchresults?keyword='+keyw.value+'&latitude='+latitude+'&longitude='+longitude+'&categories='+category+'&distance='+dist.value;
   console.log(requestURLb) 
 
    var xhttpb = new XMLHttpRequest();
    xhttpb.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        bizsearchresults=xhttpb.response;
        console.log(bizsearchresults.businesses[0].name);
        createtable(bizsearchresults);
        //showbusinesssearchresults(bizsearchresults);
    }}

xhttpb.open('GET', requestURLb);
xhttpb.responseType = 'json';
xhttpb.send();
    }
    }
xhttpip.open('GET', requesturl);
xhttpip.responseType = 'json';
xhttpip.send();


}




else if(keyw.value!=""&&loc.value!=""){
console.log(keyw.value);
    console.log(loc.value);
    var addr=encodeURI(loc.value);
    console.log(addr);
    var requestURL = 'https://maps.googleapis.com/maps/api/geocode/json?address='+addr+'&key=AIzaSyAL78J1QJfnMjNujfe5PntVDDYd-clxvS0';
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        
    if (this.readyState == 4 && this.status == 200) {
      if(xhttp.response.hasOwnProperty("results")&& xhttp.response.results.length>=1&&xhttp.response.results[0].hasOwnProperty("geometry")&&xhttp.response.results[0].geometry.hasOwnProperty("location")&&xhttp.response.results[0].geometry.location.lat!=""&&xhttp.response.results[0].geometry.location.lng!="")
        {latitude=xhttp.response.results[0].geometry.location.lat;
        longitude=xhttp.response.results[0].geometry.location.lng;
        var requestURLb = '/searchresults?keyword='+keyw.value+'&latitude='+latitude+'&longitude='+longitude+'&categories='+category+'&distance='+dist.value;
   console.log(requestURLb) ;
   
    var xhttpb = new XMLHttpRequest();
    xhttpb.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        bizsearchresults=xhttpb.response;
        console.log(bizsearchresults);
        document.getElementById('tablediv').innerHTML="";
        createtable(bizsearchresults);
    }}

xhttpb.open('GET', requestURLb);
xhttpb.responseType = 'json';
xhttpb.send();
        
        
    }

    else{ var noresults=`<p id="nores"> No record has been found </p>`;
    document.getElementById('tablediv').innerHTML += noresults;

      document.getElementById('tablediv').scrollIntoView();}
  }
  }

xhttp.open('GET', requestURL);
xhttp.responseType = 'json';
xhttp.send();



}
}









  
  function formreset()
  {
    document.getElementById('keyword').value='';
    document.getElementById('distance').value='10';
    document.getElementById('location').value='';
    document.getElementById('category').selectedIndex = '0';
    document.getElementById('autolocation').checked = false;

    document.getElementById('tablediv').innerHTML = '';
    document.getElementById('deets').innerHTML ='';
   


  }


  function showspecificbiz(n,data)
{   //var n=document.getElementById(this.id).innerText;
    //var textNode = n.firstChild;
    //var name = textNode.data;
    //console.log(n);
    for(var p = 0; p < data.businesses.length; p++)
        {  console.log(p);
            console.log(n);
            console.log(typeof(data.businesses[p].name));
            console.log(data.businesses[p].name);
            if(n===data.businesses[p].name)
          {
            var id=data.businesses[p].id;
            var requestURLbusi = '/specificbusiness/'+id;
   
            var xhtpsb = new XMLHttpRequest();
            xhtpsb.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        bizresults=xhtpsb.response;
        console.log(bizresults.location.hasOwnProperty("display_address"));
        document.getElementById('deets').innerHTML="";
        createdetails(bizresults);
        //createtable(bizsearchresults);
    }}
    xhtpsb.open('GET', requestURLbusi);
xhtpsb.responseType = 'json';
xhtpsb.send();
break;
          
        }

    
}};



  function createtable(data) {
   if(data.businesses.length==0)
   {
    var noresults=`<p id="nores"> No record has been found </p>`;
    document.getElementById('tablediv').innerHTML += noresults;

      document.getElementById('tablediv').scrollIntoView();
   }

  else{
    var table = "<table id='result_table' width='100%'>";
    // add a row for name and marks
    table += `<tr>
                <th width="55"><strong>No.</strong></th>
                <th width="100"><strong>Image</strong></th>
                <th width="400" data-type="string" onClick="sortcol(2)"> <strong>Business Name</strong> </th>
                <th  width="150" data-type="number" onClick="sortcol(3)"><strong> Rating</strong> </th>
                <th width="150" data-type="number" onClick="sortcol(4)"><strong> Distance(miles) </strong> </th>
              </tr>`;
    
    // now loop through students
    // show their name and marks
    var tr = "";
    for(let i = 0; i < data.businesses.length; i++) {
      tr += "<tr>";
      tr+= `<td width="55">${i+1}</td>`;
      tr += `<td width="100"><img src=${data.businesses[i].image_url} width=98px height=69px> </td>`;
      tr += `<td data-type="string" class="mouseeffect" width="400" id="a${i}" >${data.businesses[i].name}</td>`;
      //tr +=`<a id="a${i}">${data.businesses[i].name}</a></td>`;
      tr += `<td width="150" data-type="float">${data.businesses[i].rating}</td>`;
      var distmiles=(data.businesses[i].distance/1609.344).toFixed(2);

      tr += `<td width="150" data-type="float">${distmiles}</td>`;
      tr += "</tr>"
    }
    table += tr + "</table>";
    
      document.getElementById('tablediv').innerHTML += table;

      document.getElementById('tablediv').scrollIntoView();


        table = document.getElementById("result_table");
        rows = table.getElementsByTagName("tr");

        for (var i = 0; i < rows.length-1; i++) {
                 var aid="a"+i;
                 var na=document.getElementById(aid);
                 var textNode = na.firstChild;
                 var n = textNode.data;
                 console.log(n);
                 console.log(aid);
                 document.getElementById(aid).addEventListener('click',showspecificbiz.bind(this,n,data),false);}
                    
        }
        }



function createdetails(bdetails)
{

    var bd=`<p id="bname"><b>${bdetails.name}</b></p><hr id="nameline">`;
    
   bd+=`<div class="ddcol"><ul>`;
    //status
   if((bdetails.hasOwnProperty("hours"))&& bdetails.hours.length>=1)
    if(bdetails.hours[0].hasOwnProperty("is_open_now"))
   { 
    if(bdetails.hours[0].is_open_now!==''){
    var status=bdetails.hours[0].is_open_now;
     console.log(status);
    if(status===true) 
    {status="Open Now";bd+=`<li><p id="status"><strong>Status</strong><p id="rect" style="border: 7px solid darkgreen;
    background-color: darkgreen;">${status}</p></p></li>`;}
    else {status="Closed";

    bd+=`<li><p id="status"><strong>Status</strong><p id="rect" style="border: 7px solid red;
    background-color: red;">${status}</p></p></li>`;}}
   }

   else
   {//bd+=`<li></li>`
}

//category
if(bdetails.hasOwnProperty("categories")&&(bdetails.categories.length>=1))
{ //bd+=`<dt id="cate">Category</dt><dd id="d2"> `
   var cate="";
   for(var k=0;k<bdetails.categories.length-1;k++)
      {var c=bdetails.categories[k].title;
      if(c)
       cate+=c+"|";}
       var c=bdetails.categories[k].title;
       if(c)
       cate+=c;

 bd+=`<li><p id="cate"><strong>Category</strong><br>${cate}</p></li>`;
}

else
{//bd+=`<li></li>`
}

//address
if(bdetails.hasOwnProperty("location")&&bdetails.location.hasOwnProperty("display_address")&&(bdetails.location.display_address.length>=1))
{ //bd+=`<dt id="cate">Category</dt><dd id="d2"> `
   var daddr="";
   for(var k=0;k<bdetails.location.display_address.length;k++)
      {var c=bdetails.location.display_address[k];
      if(c)
       daddr+=c+" ";}

 bd+=`<li><p id="daddr"><strong>Address</strong><br>${daddr}</p></li>`;
}

else
{//bd+=`<li></li>`;
}

 //phone
 if(bdetails.hasOwnProperty("display_phone"))
 { //bd+=`<dt id="cate">Category</dt><dd id="d2"> `
    if(bdetails.display_phone!=="")
          bd+= `<li><p id="pho"><strong>Phone Number</strong><br>${bdetails.display_phone}</p></li>`;
          //`<li id="pho">Phone Number<p id="d5">${bdetails.display_phone}</p></li>`;
 }

 else
 {//bd+=`<li></li>`;
}


 //transaction
 if(bdetails.hasOwnProperty("transactions")&&(bdetails.transactions.length>=1))
 { //bd+=`<dt id="cate">Category</dt><dd id="d2"> `
    
    var trans="";
    for(var k=0;k<bdetails.transactions.length-1;k++)
       {var c=bdetails.transactions[k];
       if(c)
        {   c=c.charAt(0).toUpperCase()+c.slice(1);
            trans+=c+"|";}}
    var m=bdetails.transactions[k];
        if(m)
        {m=m.charAt(0).toUpperCase()+m.slice(1);
        trans+=m;}

  bd+=`<li><p id="trans"><strong>Transactions Supported</strong><br>${trans}</p></li>`;
  //`<li id="trans">Transactions Supported<p id="d4">${trans}</p></li>`;
 
}

 else
 {//bd+=`<li></li>`;
}

  
   

  
//price
if(bdetails.hasOwnProperty("price"))
{ //bd+=`<dt id="cate">Category</dt><dd id="d2"> `
   if(bdetails.price!=="")
         bd+=`<li><p id="price"><strong>Price</strong><br>${bdetails.price}</p></li>`;
         //`<li id="price">Price<p id="d6">${bdetails.price}</p></li>`;
}

else
{//bd+=`<li></li>`;
}

  
//more info
if(bdetails.hasOwnProperty("url"))
{ //bd+=`<dt id="cate">Category</dt><dd id="d2"> `
   if(bdetails.url!=="")
         bd+=`<li><p id="more"><strong>More Info</strong><br><a href="${bdetails.url}" target="_blank">Yelp</a></p></li>`;
         //`<li id="more">More Info<p id="d7"><a href="${bdetails.url}" target="_blank">Yelp</a><p></li>`;
}

else
{//bd+=`<li></li>`;
}

 



    

     
 bd+="<li></li></ul></div>";
   
bd+=`<div id="container"><div id="img1">`;

if(bdetails.hasOwnProperty("photos")&&(bdetails.photos[0]!=""))
{

    bd+=`<img src="${bdetails.photos[0]}" id="i1">`;
    bd+=`<span id="s1">Photo 1</span>`;
}
bd+= `</div><div id="img2">`;
if(bdetails.hasOwnProperty("photos")&&(bdetails.photos[1]!=""))
{

    bd+=`<img src="${bdetails.photos[1]}" id="i2">`;
    bd+=`<span id="s2">Photo 2</span>`;
}
bd+= `</div><div id="img3">`;
if(bdetails.hasOwnProperty("photos")&&(bdetails.photos[2]!=""))
{

    bd+=`<img src="${bdetails.photos[2]}" id="i3">`;
    bd+=`<span id="s3">Photo 3</span>`;
}
bd+="</div></div>";










document.getElementById('deets').innerHTML += bd;
   

      document.getElementById('deets').scrollIntoView();

}








function sortcol(n) {
    var table,rows,switch_,i,r1,r2,flag,d,count = 0;
    
    d = "ascending";
    switch_ = true;
    
    table = document.getElementById("result_table");
    while (switch_) {
      switch_ = false;
      rows = table.getElementsByTagName("tr");
      for (i = 1; i < rows.length - 1; i++) { 
        flag= false;
        r1 = rows[i].getElementsByTagName("td")[n];
        r2 = rows[i + 1].getElementsByTagName("td")[n];
        
        if (d == "ascending") {
            if(r1.getAttribute("data-type")=="string"){
          if (r1.innerHTML.toLowerCase() > r2.innerHTML.toLowerCase()) 
          {flag = true;
            break;
          }
        }
          else if(r1.getAttribute("data-type")=="float")
            {if(parseFloat(r1.innerHTML)>parseFloat(r2.innerHTML))
                {flag = true; break;} }

        } else if (d == "descending") {
            if(r1.getAttribute("data-type")=="string"){
                if (r1.innerHTML.toLowerCase() < r2.innerHTML.toLowerCase()) {
                 flag = true; break;
                }}
                else if(r1.getAttribute("data-type")=="float")
                  {
                      if(parseFloat(r1.innerHTML)<parseFloat(r2.innerHTML))
                      {flag = true;
                          break;}
                  }
        }
      }
      if (flag) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switch_ = true;
        count+=1;
      } else {
        if (count == 0 && d == "ascending") {switch_ = true;
          d = "descending";
          
        }
      }
    }
   
    rno = table.getElementsByTagName("tr");
    for(var c=1;c<rno.length;c++)
    {
        rno[c].getElementsByTagName("td")[0].innerHTML=c;
    }
    
  }
  






    
