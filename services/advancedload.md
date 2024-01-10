# Advanced Library Loading in Google Maps examples

Note: This is an optional item to understand and only the simple API loading method will be tested on like:

Remember, always replace YOUR_API_KEY with your actual key applicable to the usage method. You can find these two keys (IP-based and web reference based) on the D2L website.

## Easy loading method (required to understand)

```javascript
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=myMap"></script>
```

## Advanced loading as shown in Google API documentation

This method works by first creating a new script element. It then configures this element with the Google Maps API URL, including any additional parameters like the API key and version. This script element is dynamically appended to the document's head, initiating the loading of the Google Maps JavaScript API. The function also handles callbacks and errors, ensuring the API loads correctly and executes any specified callback functions. This approach provides more control and flexibility over how the API is loaded and managed. Many variables are created to further simplify the code, but does make it challenging to read. 

```javascript
    <script>(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
        ({key: "YOUR_API_KEY", v: "weekly"});</script>
```

## Reformatted version of above to make it more readable

This is the Advanced library load alternative to the above one-line option and is reformatted for better readability and understanding. Note that this will be a simplified overview. 

```javascript
(g => {
    var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window;
    b = b[c] || (b[c] = {});
    var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async(f, n) => {
        await (a = m.createElement("script"));
        e.set('libraries', [...r] + "");
        for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]);
        e.set('callback', c + ".maps." + q);
        a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
        d[q] = f;
        a.onerror = () => h = n(Error(p + " could not load."));
        a.nonce = m.querySelector("script[nonce]")?.nonce || "";
        m.head.append(a)
    }));
    d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n))
})({ key: "YOUR_API_KEY", v: "weekly" });
```

This code dynamically loads the Google Maps JavaScript API. It constructs a URL with necessary parameters, creates a script element, sets the URL as the script's source, and then appends it to the document. It also handles potential errors and ensures the API loads only once.

## Refactored version removing variables:

```javascript
(function (config) {
    var mapsAPI = window.google = window.google || {};
    mapsAPI.maps = mapsAPI.maps || {};
    var scriptLoaded = new Promise((resolve, reject) => {
        var script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${config.key}&callback=${config.callback}`;
        script.onerror = () => reject(new Error("Google Maps API could not load."));
        document.head.appendChild(script);
        mapsAPI.maps.__ib__ = resolve;
    });

    if (mapsAPI.maps.importLibrary) {
        console.warn("Google Maps API only loads once. Ignoring:", config);
    } else {
        mapsAPI.maps.importLibrary = (libraryName) => scriptLoaded.then(() => {
            // Additional logic for library import
        });
    }
})({ key: "YOUR_API_KEY", callback: "yourCallbackFunction" });

```

These examples are only for a deeper concept understanding and are modified by Shawn--not meant to be used as provided. If trying to implement them into some code they may require modifications. For a complete understanding, it's best to refer directly to the [Google Maps Platform documentation](https://developers.google.com/maps/documentation/javascript/examples/map-simple#maps_map_simple-html).
