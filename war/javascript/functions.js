var eventArray = [];
var eventData = [];
function fbLogin()
{

	FB.login(function(response) {
		if (response.authResponse) 
		{
			// getUserInfo();
		} else 
		{
			console.log('User cancelled login or did not fully authorize.');
		}
	},{scope: 'email,user_photos,user_videos'});

}
var eventName;
var profileID;
function fbgetUserName() {
	FB.api('/me', function(response) {

		var str="<b>"+response.name+"</b>";
		document.getElementById("profilename").innerHTML+=str;});
	// str +="<b>Link: </b>"+response.link+"<br>";
	// str +="<b>Username:</b> "+response.username+"<br>";
	// var str1 ="<b>"+response.id+"</b>";
	// document.getElementById("profileID").innerHTML=str1;});
	// str +="<b>Email:</b> "+response.email+"<br>";
	//str +="<input type='button' value='Get Photo' onclick='getPhoto();'/>";
	//str +="<input type='button' value='Logout' onclick='Logout();'/>";

}
function fbgetUserId() {
	FB.api('/me', function(response) {

		var str1 ="<b>"+response.id+"</b>";
		profileID=response.id;
		document.getElementById("profileID").innerHTML=str1;});
	// str +="<b>Email:</b> "+response.email+"<br>";
	//str +="<input type='button' value='Get Photo' onclick='getPhoto();'/>";
	//str +="<input type='button' value='Logout' onclick='Logout();'/>";

}


/*
		square - 50x50
		small - 50 pixels wide, variable height
		normal - 100 pixels wide, variable height
		large - about 200 pixels wide, variable height
 */
function fbgetPhoto()
{
	FB.api('/me/picture?type=normal', function(response) {

		var str="<img src='"+response.data.url+"'/>";
		//str +="<br><b>Link:</b> "+response.data.url+"<br>";
		document.getElementById("profileimg").innerHTML+=str;});
}

function fbLogout()
{
	FB.logout(function(){document.location.reload();});
}

function fbGetLoginStatus() {
	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
			var str="";
			// the user is logged in and has authenticated your
			// app, and response.authResponse supplies
			// the user's ID, a valid access token, a signed
			// request, and the time the access token 
			// and signed request each expire
			var accessToken = response.authResponse.accessToken;
			str+="<br>"+accessToken+"<br>";
			document.getElementById("status").innerHTML+=str;
		} else if (response.status === 'not_authorized') {
			// the user is logged in to Facebook, 
			// but has not authenticated your app
		} else {
			// the user isn't logged in to Facebook.
		}
	});
}

/*$(function() {
	$(document).ready(function(){
		$('#addEvent').click(function(){
			var eventname = $( "#eventname" ).val();
			eventArray.push(eventname);
			$('#eventslist').append('<br>'+ eventname +'</br>');
		});
	});
});
*/
function newEvent() {
/*	alert('rawi');
	var eventname = $( "#eventname" ).val();
	eventArray.push(eventname);
	$(document).ready(function(){
		$(".eventslist").append( "<p>Test</p>" );
	});*/
	var eventname = document.getElementById('eventname').value;
	document.getElementById("eventslist").innerHTML+="<a  target='eventFrame' href='"+profileID+"/"+eventname+"/index.html'><img src='event_icon.png'/></img><b>"+eventname+"</a><br>";
}