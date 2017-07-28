//popup.js : shows the repostable listing
//fetch the next repostable listing
//repost the fetched listing, shows the next repostable listing
//communicate with the content layer

'use strict';

import Listing from "../assets/scripts/modules/Listing";
//import cgWebPages from "../assets/scripts/modules/Pages";
import NewPage from "../assets/scripts/modules/NewPage";
var log = console.log;

var newPage = new NewPage(0);
newPage.getTabTitle();

//handle feedback message from Listener
function setListingInfo(info){

	console.log('setListingInfo.1.0: ', info);
	//setup the popup.html, show the available listing
	$('#status').text(info.status);
	$('#manage').text(info.manage);
	$('#postdate').text(info.postedDate);
	$('#title').text(info.title);
};

// $(function(){

// 	//alert("popup.0.0.Start Point: ");

// 	var tabTitle = '';

// 	chrome.tabs.query({
// 			active: true,
// 			currentWindow: true
// 		}, function(tabs){

// 			console.log("popup.1.2: request a repostable Listing from content layer...")

// 			chrome.tabs.sendMessage(

// 				tabs[0].id,

// 				{from: 'popup', subject: 'currentTabTitle'},

// 				function(info){
					
// 					log('readListing return tabTitle: ', info);
					
// 					if(info !== undefined){tabTitle = info.tabTitle;}
					


// ///////////////

// if (tabTitle=='craigslist account'){

// 		console.log("popup.1.0.No New Page: ");

// 	}else{

// 		(function(){

// 		console.log("popup.1.1: I am in popup.js");

// 		//var newURL = "https://accounts.craigslist.org/login?lang=en&cc=us&rt=L&rp=%2Flogin%2Fhome%3Flang%3Den%26cc%3Dus";
// 		var newURL = cgWebPages.cgHomePage;
//     	chrome.tabs.create({ url: newURL });

// 		//query for the active tab
// 		chrome.tabs.query({
// 			active: true,
// 			currentWindow: true
// 		}, function(tabs){

// 			console.log("popup.1.2: request a repostable Listing from content layer...")

// 			chrome.tabs.sendMessage(

// 				tabs[0].id,

// 				{from: 'popup', subject: 'currentListingInfo'},

// 				setListingInfo); //the message will be passed back thru setDOMInfo

// 		});

// 		}());
// 	}

// ///////////////////


// 				}); //the message will be passed back thru setDOMInfo

// 		}); 

		
	
	


	


$(function(){

		//GetListing button in popup.html
	$('#getListing').click(function(){

		//I want to read a repostable listing
		console.log("popup:2.1: request a repostable listing");

		//query for the active tab
		chrome.tabs.query({
			active: true,
			currentWindow: true
		}, function(tabs){

			console.log("popup:2.2: ready to send out message...")

			chrome.tabs.sendMessage(

				tabs[0].id,

				{from: 'popup', subject: 'listingInfo'},

				setListingInfo);

		});
		
	});

//Repost button in popup.html
	$('#repost').click(function(){

		//Repost the listing as popup shows out
		console.log("popup.3.1: repost this listing");

		//query for the active tab
		chrome.tabs.query({
			active: true,
			currentWindow: true
		}, function(tabs){

			console.log("popup.3.2: ready to repost the listing")

			chrome.tabs.sendMessage(

				tabs[0].id,

				{from: 'popup', subject: 'repost'},

				newPage.getTabtitle); //pass me the next available listing

		});

	})

	//Reset button in popup.html
	$('#reset').click(function(){

		//Repost the listing as popup shows out
		console.log("popup.4.1: reset the base listing");

		//query for the active tab
		var msg = {from: 'popup', subject: 'resetBaseListing'}
		chrome.runtime.sendMessage(

			msg,

			function(response){
				//send out the repost command
				//form object was saved when read the listing
				log("reset.1.response: ", response);
			}

		); 
	})

});


	
