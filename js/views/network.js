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
            this.size_slider();
            this.form();
            this.update_data();
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
                //.attr("r", this.model.get("node_radius"))

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
                  //var scope2 = this;
                  //d3.select(scope.nodes).transition()
                    //.each("start", function() { d3.select(scope.nodes) })
                    scope.nodes.attr("fill", function(d){return colorUpdate(d.value)});
                    //return colors;
                });
        },

        size_slider: function() {
          var scope = this;
          var interpolateRadius = d3.interpolate(5, 25);

          this.circles
               .attr("r", function(d) {return interpolateRadius(d.value)});

          this.labels
              .attr("dx", function(d) {return interpolateRadius(d.value)});

          $(function() {
            $( "#slider" ).slider({
              value: 1.5,
              min: 0,
              max: 3,
              step: .5,
              slide: function( event, ui ) {
                $( "#amount" ).val( ui.value );
                scope.labels
                     .attr("dx", function(d) {return interpolateRadius(d.value * ui.value)});
                scope.circles
                     .attr("r", function(d) {return interpolateRadius(d.value * ui.value)});
              }
            });
            $( "#amount" ).val( $( "#slider" ).slider( "value" ) );
            });
        },

        form: function() {

          var scope = this;

          var tags = function(key){
              var nodes = scope.model.get("nodes");
              var node_names = [];
              for(var i = 0; i<nodes.length; i++){
                node_names.push(nodes[i].id);
              }
              return node_names;
          }

          $( "#inputNumber" ).autocomplete({
            source: tags()
          });

          $("#gobutton").click(function(){

            var numInput = $("#inputNumber").val();

            var nodes = scope.model.get("nodes");
            var node_names = [];

            for(var i = 0; i < nodes.length; i++){
              node_names.push(nodes[i].id);

              if (node_names[i] === numInput) {
                console.log(node_names[i]);
              }
            }

          });

        },

        update_data: function() {
          //$('.dropdown-toggle').dropdown('toggle')
          var scope = this;

          var dataMenu = function() {
            this.list1 = $("<li>");
            this.drop1 = $("<a>").attr("id","select1")
                                 .attr("href","#");

            this.list2 = $("<li>");
            this.drop2 = $("<a>").attr("id","select2")
                                 .attr("href","#");
          }

          dataMenu.prototype.add_drops = function(element) {
            element.append(this.list1);
            this.list1.append(this.drop1);
            this.drop1.text(scope.model.get("ref"));

            this.list1.after(this.list2);
            this.list2.append(this.drop2);
            this.drop2.text("dat2");
          }

          var drops = new dataMenu();
          drops.add_drops($("#menu1"));

          $("#select1").click(function() {
            console.log("toggled");
          });

        },

    });

    return NetworkView;

});
