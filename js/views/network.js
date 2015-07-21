/*
General network graph of nodes and edges.
*/

define([
    'jquery',
    'jqueryui',
    'd3',
    'backbone',
    'js/models/network'
], function($, $ui, d3, backbone, NetworkModel) {

    // --------------------------------------
    // Network View
    // --------------------------------------

    var NetworkView = backbone.View.extend({

        //element: "#network_viewer",

        initialize: function(){
            /*
                Initialize network view
            */
            this.element = "#network_viewer";

            // Parameters for building network
            this.width = this.model.get("width");
            this.height = this.model.get("height");

            // Initialize the svg width
            this.svg = d3.select(this.element).append("svg")
                .attr("width", this.width)
                .attr("height", this.height)

            // Initialize the force
            this.force = d3.layout.force()
                .charge(this.model.get("charge"))
                .linkDistance(this.model.get("link_distance"))
                .size([this.width-10, this.height-10])

            // Start force simulation.
            this.start_force();
            this.draw_links();
            this.draw_nodes();
            this.node_shape();
            this.node_text();
            this.node_color();
            this.update_node_color();
            this.size_slider();
            this.force_on();
        },

        start_force: function(){
            /*
                Starts D3's force network simulation
            */
            this.force
                .nodes(this.model.get("nodes"))
                .links(this.model.get("links"))
                .start();
        },

        draw_nodes: function() {
            /*
                Add node data to D3 force simulation.
            */
            this.nodes = this.svg.selectAll(".graph_node")
                .data(this.model.get("nodes"))
                .enter().append("g")
                .attr("class", "graph_node")
                .call(this.force.drag);
        },

        draw_links: function() {
            /*
                Add link data to D3 force simulation.
            */
            this.links = this.svg.selectAll(".graph_link")
                .data(this.model.get("links"))
                .enter().append("line")
                .attr("class", "graph_link");
        },

        node_shape: function(shape) {
            /*
                Add shapes to each node in D3 force simulation.

                Parameter:
                ---------
                shape: string
                    SVG shape for each node.
            */
            this.circles = this.nodes.append("circle")
                .attr("class", "graph_circle")
                .attr("id", function(d) {return "node-"+d.index})
                .attr("node-index", function(d) {return d.index})
                .attr("r", this.model.get("node_radius"))

            var scope = this;

            /*$("#sizebutton").click(function(){
              scope.circles = scope.nodes.append("circle")
                  .attr("r", 20);
            });*/
        },

        force_on: function() {
            /*
                How to handle each tick in a force simulation.
            */
            var that = this;

            this.force.on("tick", function () {
                that.links
                    .attr("x1", function(d) { return d.source.x; })
                    .attr("y1", function(d) { return d.source.y; })
                    .attr("x2", function(d) { return d.target.x; })
                    .attr("y2", function(d) { return d.target.y; });

                that.nodes
                    .attr("transform", function(d) {
                        return "translate(" + d.x + "," + d.y + ")";
                    })
            });

            this.force.start();
        },

        node_text: function(){
            /*
                Add text to each node based on each node's "id".
            */
            this.labels = this.nodes.append("text")
                .attr("class", "graph_text")
                .attr("dx", 12)
                .attr("dy", ".35em")
                //.attr("fill", "black")
                //.attr("font-size", "9px")
                .text(function(d) { return d.id; });

            this.force_on();
        },

        node_color: function() {
            /*
                Add color to each node based on the node's "value".
            */
            var colors = d3.interpolate('orange', 'purple');
            this.nodes
                .attr("fill", function(d){ return colors(d.value)});

                var scope = this;

                $('#colorbutton').click(function() {
                  //$(".graph_node").css('fill','violet');
                  //var colorUpdate = .data(this.model.get("nodes"))
                  var colorUpdate = d3.interpolate('blue', 'red');
                  //d3.select(".graph_node").transition()
                    //.each("start", function() { d3.select(".graph_node") })
                    scope.nodes.attr("fill", function(d){ return colorUpdate(d.value)});
                    //return colors;
                });
        },

        update_node_color: function() {
          /*$('#colorbutton').click(function() {
            //var colorUpdate = .data(this.model.get("nodes"))
            colors = d3.interpolate('blue', 'red');
            /*d3.select(this.nodes).transition()
              .each("start", function() { d3.select(this.nodes).style("fill", "steelblue"); })
              .style("fill", "red");/
          });
          return colors;*/
        },

        size_slider: function() {
          var scope = this;
          $(function() {
            $( "#slider" ).slider({
              value: 10,
              min: 5,
              max: 30,
              step: 5,
              slide: function( event, ui ) {
                $( "#amount" ).val( ui.value );
                scope.circles
                     .attr("r", ui.value);
              }
            });
            $( "#amount" ).val( $( "#slider" ).slider( "value" ) );
            });
          },

    });

    return NetworkView;

});
