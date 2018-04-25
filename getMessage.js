javascript:
var xhr = new XMLHttpRequest(); 
var st = ""; 
xhr.open('GET', "https://evening-wave-36315.herokuapp.com/msg", true); 
xhr.send(); 
xhr.onreadystatechange = processRequest; 
function processRequest(e) { 
    if (xhr.readyState == 4 && xhr.status == 200) { 
        var response = JSON.parse(xhr.responseText); 
        response.forEach((x)=>{st+=x.author+": "+x.message+"\n"}); 
        alert(st); 
    } 
}
