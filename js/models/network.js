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
            // Data is going to be an array of objects.
            this.set({
              "datasets": data,
            })

            // Make DEEP copy (first argument set to true) of first set
            // of data for initializing our model. Copy is necessary to
            // avoid pointing with reference.
            var data_copy = $.extend(true, {}, data[0]);

            this.set({
                "nodes": data_copy.nodes,
                "links": data_copy.links,
                "ref": data_copy.ref
            })

        },

    });

    return NetworkModel;

});
