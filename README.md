# Artifacia javascript Client

This javascript client is a simple wrapper around our powerful Visual Discovery [API](http://docs.artifacia.com/).

The wrapper allows you to create your own indexes of images on which you would like to enhance the product discovery experiences. It also allows you to get various types of recommendations which are listed below.

* Visual Recommendation
* Cross Product Recommendation
* Smart Recommendation

## Installation

To install the package you can follow the steps:-

```javascript
[sudo] npm install artifacia --save
```

## Getting Started

The API is really easy and simple to use. First you need to visit [this](http://www.artifacia.com/requestaccess/) page and request for username and password. Using that credentials you can create your constructor and get stated.

```javascript
"use strict";
var client = require("artifacia");
var username = "dummy";
var password = "abcd1234";
client.artifacia(username, password);
```

### Creating your index
The first step is to create a index of the items that you would like to store in our databases to perform search against. If you don't have data ready right now you can quickly get started with our [sample data](https://github.com/artifacia/artifacia-client-js/blob/master/sample_data.json). Once the data is stored and indexed we will inform you shortly.

```javascript
var sample_data = require("./sample_data.json");
client.upload_item_data(sample_data,function(result){console.log(result)});
```

### Performing Visual Recommendation
Once you receive a notification form us about the status of the indexed data, you are ready to search.
You can search for a product ID indexed in the sample data you inserted/uploaded.

```javascript
var sample_prod_id = 2709;
client.get_visual_recommendation(sample_prod_id,function(result){console.log(result)});
```
