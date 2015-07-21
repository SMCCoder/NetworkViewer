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
            "node_radius": 12,
            "add_node_names": true,
        },

        initialize: function(data){
            this.set({
                "nodes": data.nodes,
                "links": data.links
            })

        },

    });

    return NetworkModel;

});
