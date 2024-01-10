# Displaying Point Data on Google Dynamic Maps JavaScript API

The Dynamic Google Maps JavaScript API is very powerful and adaptable. This exercise is based on the content at :
https://developers.google.com/maps/documentation/javascript/marker-clustering 

The code has been adapted into a single page combining the HTML, CSS and JavaScript in the provided repository file :

### [ontarioparks.html](ontarioparks.html) - HTML File with Inline CSS
### [clustering.js](clustering.js) - JavaScript File linked to above HTML

This webpage is accessible on GitHub Pages web server using the URL `https://[username].github.io/geom99lab1/clustering/ontarioparks.html` where `[username]` is replaced with your GitHub account username. 

Using this as the base, first get the example working by adding the provided Google Maps API Key into the line calling the google maps library. Next, review how the example works. Compare this example to the previous activity [simplemap.html](../services/simplemap.html).

In this example, there are points spread out through Australia and New Zealand. The points are inserted into the `<SCRIPT>` section as a [JavaScript Array](https://www.w3schools.com/js/js_arrays.asp) where each element is an Object that contains a `lat` and `lng` value. 

---

## Modify example to show Ontario Parks points

For this activity modify the provided example files to show the points from the list of Ontario Parks provided in the CSV file [ontarioparkslist.csv](ontarioparkslist.csv). 

> **Shortcut:** Using Excel convert the two Lat and Long columns into the expected JavaScript list formatting using the provided formula. This formula takes the cell B2 (lat) and C2 (long) and appends them together with the proper JavaScript syntax. Paste the Excel Formula beside on Row 2 and then "fill down" to the end to make each row's JavaScript. 
>
> _Note that the last entry will need to have the comma removed to terminate the list when put into the code._ 
>
> ```
> ="{ lat: "&B2&", lng: "&C2&"},"
> ```
---
