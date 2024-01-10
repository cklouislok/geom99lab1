# ![routes](https://mapsplatform.google.com/static/images/icons/header/NAV_Products_Supernav_Icon_02-Routes.svg) Directions API

The Routes capabilities in Google Maps provides directions. Follow this exercise and modify the identified MarkDown document to provide your answers to this activity.

Look at the following URL: 

```
https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=YOUR_API_KEY
```
As provided, it will not work. That is because you must provide an API Key. The IP-whitelisted API key will work with this (the directions API is meant to be used server-side, not on a webpage itself. It is a service provided on the web, not a web page itself). Modify the URL above to replace YOUR_API_KEY with the second key provided in this course and test it in a tab. 

With a valid API Key, the direction results returned are JSON. (What is JSON? https://www.w3schools.com/whatis/whatis_json.asp)

## Explore the Hierarchy of the returned JSON

Viewing JSON directly isn't easy. The code is meant for a JavaScript program to read, not humans. To make it easier to read we can copy the results (CTRL-A on the page) and paste it into the viewer page at  (CTRL-V). You can directly copy your JSON text in this online viewer http://jsonviewer.stack.hu/. Paste the JSON into the TEXT tab, then switch to the VIEWER tab to explore it more interactively. 

The results will now display with the heirarchy more clear. We will now explore this using the + and - next to each line. 

The first entry `JSON` denotes the entire document is of JSON type. 

### Places and Place IDs
The next line `geocoded_waypoints` contains two items, `0` and `1`. Expanding first the `0` you see this has a `place_id` of `ChIJa147K9HX3IAR-lwiGIQv9i4`. A [Place ID](https://developers.google.com/maps/documentation/places/web-service/place-id) uniquely identifies any place in the Google Places database and on Google Maps. It can be an address, a business, building, monument, natural or physical feature--everything has a place id! 

#### You can open any Place ID in Google Maps using a crafted URL: https://www.google.com/maps/place/?q=place_id:ChIJa147K9HX3IAR-lwiGIQv9i4
Our route in this case requested directions from two places. Before a route can be determined Google had to find each of those places. The `0` is the first place, the _origin_ (Disneyland), and the 1 is the second place (Universal Studios), was the _destination_. Digging deeper into the hierarchy for these shows metadata about each of the geocoded places. If there were multiple stops in the directions request there would be that number of items here. 

#### **Q) Is there a limit to the number of "stops" in the directions API?** 
Hint: the answers (yes there are multiple) can be found on the [Usage and Billing](https://developers.google.com/maps/documentation/directions/usage-and-billing) page. 

> _Interested in learning more about Places? You can discover the place id of any location using this tool: https://googlemaps.github.io/js-samples/dist/samples/places-placeid-finder/index.html_
>
> _Learn more about place id's at https://developers.google.com/maps/documentation/places/web-service/place-id._

### Routes
Returning back to the top of the hierarchy, next you find `routes`. This contains one item, `0`, which has many items listed within it:

- `bounds` provides the northeast and southwest corner points (lat/lng) encompassing the entire route.
- `copyrights` in case you didn't know, this ain't Alexa!
- `legs` provides a breakdown of each "leg" between the places, including distance and time. Here is where the bulk of the details are for the directions. It also shows the lat and long for the start and end address!
- `overview_polyline` contains an encoded line representing the path. You can decode and display the path using this [google developers tool](https://developers.google.com/maps/documentation/utilities/polylineutility). 
- `summary` shows the major names of the route
- `warnings` contains a list of any warnings, which for this example there were none. 
- `waypoint_order` is used if there is an order to the places that is not in the listed order. 

### Status
This final element in the JSON reassures whatever is reading it that everything is (in this case) OK. 

## Conclusion and Your Task
Now you understand how to make a request to Google's maps and return directions. These directions have many elements embedded, including IDs of the various stops, lines representing the map, the bounding box for the results and details about each "turn by turn" called a leg. 
### Create your own directions request
Modify the URL to go from a place you know to another place you know and add in appropriate and novel parameters from the various available in the Directions API. Explore your results using the http://jsonviewer.stack.hu/ tool. In this repository modify the MarkDown file [mydirections.md](mydirections.md) to document your working URL with valid API Key, and the full JSON response from that URL. 
