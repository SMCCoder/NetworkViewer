/*

Backbone view modal for the network.

*/

define([
    'jquery',
    'd3',
    'backbone',
    'underscore',
    'bootstrap',
    'js/models/network',
    'text!templates/modal.html'
], function($, d3, backbone, _, bootstrap, NetworkModel, modalTemplate) {

    var NetworkModal = backbone.View.extend({

        el: "#cool",

        initialize: function() {
            /*
                Initialize a modal for the network.
            */
            this.render();
        },

        // Load modal template.
        template: _.template(modalTemplate),

        render: function() {
            /*
                Render the modal template.
            */
            this.$el.html(this.template());
            return this;
        },

        show: function(){
            /*
                Show the modal.
            */
            $("#myModal").modal({show:true})
        }
    });

    return NetworkModal;
});
