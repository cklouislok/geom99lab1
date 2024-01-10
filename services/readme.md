# Google Maps as a Development Platform

Combined with the Weekly checklists in D2L, complete the following two activities before your scheduled practical lab. 


## ![maps](https://mapsplatform.google.com/static/images/icons/header/NAV_Products_Supernav_Icon_01-Maps.svg) 1. Maps - Simple HTML Map Example

This html page is associated with the readings at https://developers.google.com/maps/documentation/javascript/overview#maps_map_simple-html
(Note that Google's examples use an advanced API loading function which is optional to understand and is [explained on this page](advancedload.md).) 

The simplemap can be opened in GitHub Pages by modifying the url `https://[username].github.io/geom99lab1/services/simplemap.html`. Remember to replace the `[username]` portion with your actual GitHub username. 

Unmodified, opening this page fails with an error `Oops! Something went wrong.` Now Read the console using the F12 tools in your Chrome browser to see the actual error. The following warning should appear:
```
Google Maps JavaScript API warning: InvalidKey https://developers.google.com/maps/documentation/javascript/error-messages#invalid-key
```
To fix this and make the page work modify the provided sample:
#### [simplemap.html](simplemap.html) - Modify this HTML page for marks
In this page edit it and change YOUR_API_KEY to be the actual Google API key provided then reload the page. Remember, GitHub Pages can take 2-4 minutes to refresh changes, so be patient! Once this is showing a map be sure you complete all activities outlined in the D2L checklist for this item. . 


## ![routes](https://mapsplatform.google.com/static/images/icons/header/NAV_Products_Supernav_Icon_02-Routes.svg) 2. Routes - Directions API - URL request JSON response

Now that you have seen a custom map, let us look at some more services that power the website https://maps.google.ca. Directions is arguably the most important functionality in the Google Maps website. This is powered by the Directions API, which is a complex and powerful tool. 
The instructions to follow are provided in the markdown document: 
#### [directions.md](directions.md) - Explore the Directions API here, then complete the activity at the end for marks
Follow these instructions to explore how service based requests occur and how to interpret their JSON responses. Once you understand the URL request and JSON response,  complete the activity by modifying the mydirections.md markdown document with your novel Google Directions API URL. 

Revision 2
