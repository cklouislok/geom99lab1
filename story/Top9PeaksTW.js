/* This map utilizes the following methods: */
    /* Restricting Map Bounds */
/* https://developers.google.com/maps/documentation/javascript/examples/control-bounds-restriction#maps_control_bounds_restriction-javascript */
    /* Advanced Markers - Make markers clickable and accessible */
/* https://developers.google.com/maps/documentation/javascript/advanced-markers/accessible-markers#javascript */
    /* Marker Clustering */
/* https://github.com/cklouislok/geom99lab1/blob/main/clustering/clustering.js */
/* https://developers.google.com/maps/documentation/javascript/marker-clustering#maps_marker_clustering-javascript */
    /* Info Windows */
/* https://developers.google.com/maps/documentation/javascript/infowindows#maps_infowindow_simple-javascript */
    /* Reference on Map Marker Icon from Customizing a Google Map: Custom Legends */
/* https://developers.google.com/maps/documentation/javascript/adding-a-legend#maps_legend-javascript */

let mapVar;

/* Set Taiwan map boundary for Restricting Map Bounds*/
const TW_bounds = {
    north: 26.488,
    south: 21.791,
    west: 115.000,
    east: 125.000,
};

/* Set center of Taiwan. Taiwan is comprised of its main island and some outlying islands, but map center
    is set to center of its main island for easy interpretation */
/* Also initially intended to create boundaries for the main island and all outlying islands of Taiwan using
    boundaries-simple, but the relevant method involves the use of mapID so the idea is abandoned */
const Taiwan = { lat: 23.605, lng: 120.933 };

async function initMap() {
    
    /* Import Map and InfoWindow libraries */
    /* Adapted from Info Windows and Advanced Markers - Make markers clickable and accessible*/
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");

    /* Restricting Map Bounds */
    /* Set map center and boundary to Taiwan */
    mapVar = new Map(document.getElementById("mapMain"), {
        center: Taiwan,
        restriction: {
            latLngBounds: TW_bounds,
            /* Set strictBounds to false for best auto map display */
            strictBounds: false,
        },
        /* Zoom level 8 display the majority of Taiwan's territory */
        /* Without the top text div, zoom level 8 would perfectly show the entire main island. 
            However to show the entir main island with the current layout, the zoom level 7 would be too small,
            and hence zoom level is retained. */
        zoom: 8,
        mapTypeId: "terrain",
    });
    
    /* Create an array of numbers used to label the markers. */
    /* Initially intended to show 10 locations by did not figure out how to auto label the markers
        when number is more than 1 digit. So limited to 9 locations only. */
    /* Adapted from Clustering class example "clustering.js" and Marker Clustering */
    const labels = "123456789";

    /* Set markerIcon */
    /* Adapted from https://developers.google.com/maps/documentation/javascript/adding-a-legend;
        icon source from https://kml4earth.appspot.com/icons.html */
    const markerIcon = "https://maps.google.com/mapfiles/kml/shapes/parks.png"

    /* Create a list of 9 highest peaks in Taiwan, including peak location, 
        and title and altitude to show when infoWindow pops up upon clicking on the marker */
    /* Adapted from Advanced Markers - Make markers clickable and accessible */
    const peakList = [
        {
            peakLocation: { lat: 23.469, lng: 120.957 },
            title: "Yushan (Mount Jade) - 3952.4m",
        },
        {
            peakLocation: { lat: 24.383, lng: 121.231 },
            title: "Xueshan (Mount Sylvia) - 3884.6m",
        },
        {
            peakLocation: { lat: 23.470, lng: 120.965 },
            title: "Yushan (Mount Jade) East Peak - 3872.7",
        },
        {
            peakLocation: { lat: 23.446, lng: 120.958 },
            title: "Yushan (Mount Jade) South Peak - 3856.7m",
        },
        {
            peakLocation: { lat: 23.487, lng: 120.959 },
            title: "Yushan (Mount Jade) North Peak - 3854.9m",
        },
        {
            peakLocation: { lat: 23.496, lng: 121.057 },
            title: "Mount Xiuguluan - 3826.1m",
        },
        {
            peakLocation: { lat: 23.520, lng: 121.067 },
            title: "Mount Mabolasi - 3774.6m",
        },
        {
            peakLocation: { lat: 24.361, lng: 121.439 },
            title: "Mount Nanhu - 3740.9m",
        },
        {
            peakLocation: { lat: 23.439, lng: 120.963 },
            title: "East Xiaonan Mountain - 3707.9m",
        },
    ]

    /* Create infoWindow element */
    /* Adapted from Advanced Markers - Make markers clickable and accessible */
    const infoWindowElement = new InfoWindow();

    /* Create marker and infoWindow for each peakLocation */
    /* Adapted from Advanced Markers - Make markers clickable and accessible, Marker Clustering, 
        Clustering class example, and Customizing a Google Map: Custom Legends */
    const markers = peakList.map(({ peakLocation, title }, i) => {
        const marker = new google.maps.Marker({
            position: peakLocation,
            label: labels[i % labels.length],
            icon: markerIcon,
            mapVar,
            title,
        });
        
        /* Adapted from Advanced Markers - Make markers clickable and accessible, Marker Clustering,
            and Info Windows */
        marker.addListener("click", () => {
            infoWindowElement.close();
            infoWindowElement.setContent(title);
            infoWindowElement.open(mapVar, marker);
        });

        /* Adapted from Clustering Class example */
        /* Supplemental reference on return statement from W3Schools: https://www.w3schools.com/jsref/jsref_return.asp */
        /* Initially tried to place this return statement in the first section of this sub-section (const markers), 
            it worked properly for the marker part (display icons on map), but it didn't work for the marker.addListenser() 
            part (i.e. infoWindow did not pop up as expected upon clicking on a marker. I supposed marker.addListener() would 
            only work if the variable marker is declared, and the return statement by principle stops the execution 
            of a function and returns a value. Therefore, after several trials and errors, the return marker statement
            is placed at the end of this sub-section, after declaring const marker and the addListener() method. */
        return marker;
    });
    
    /* Add marker clurterer to the markers */
    /* Adapted from Clustering Class example */
    new MarkerClusterer(mapVar, markers, {
        imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}

/* Initialize map */
window.initMap = initMap;