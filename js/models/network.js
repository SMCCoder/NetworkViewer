/*
General network graph of nodes and edges.
*/

define([
    'jquery',
    'd3',
    'backbone'
], function($, d3, backbone) {

    // --------------------------------------
    // Network Model
    // --------------------------------------

    var NetworkModel = backbone.Model.extend({

        // Initial attributes
        defaults:{
            "width": 1100,
            "height": 700,
            "charge": -100,
            "link_distance": 100,
            "color_on": false,
            "node_text_on": true,
            "node_radius": 10,
            "add_node_names": true,
        },

        initialize: function(data){
            // Data is going to be an array of objects
            // for loop to find data of interest and set nodes and links
            this.set({
              "datasets": data,
            })

            this.set({
                "nodes": data[0].nodes,
                "links": data[0].links,
                "ref": data[0].ref
            })

            

        },

    });

    return NetworkModel;

});
