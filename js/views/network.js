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

        initialize: function(){
            //
            //Initialize network view
            //
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
            this.draw_trajectory();
            this.node_text();
            this.node_color();
            this.size_slider();
            this.form();
            this.update_data();

        },

        start_force: function(){
            //
            //Starts D3's force network simulation
            //
            this.force
                .nodes(this.model.get("nodes"))
                .links(this.model.get("links"))
                .start();
        },

        draw_nodes: function() {
            //
            //Add node data to D3 force simulation.
            //
            this.nodes = this.svg.selectAll(".graph_node")
                .data(this.model.get("nodes"))
              .enter().append("g")
                .attr("class", "graph_node")
                .call(this.force.drag);

        },

        draw_links: function() {
            //
            //Add link data to D3 force simulation.
            //
            this.links = this.svg.selectAll(".graph_link")
                .data(this.model.get("links"))
              .enter().append("line")
                .attr("class", "graph_link")
                .attr("id", function(d) {return "link-"+d.source.name+"-"+d.target.name});
                //.style("stroke-width", 3);
        },

        update_link_width: function() {
            this.links
                .style("stroke-width", 5);
        },

        update_link_color: function() {
            this.links
                .style("opacity", 0.5);
        },

        draw_trajectory: function(d) {
            var traj = {
                            "source": 1,
                            "target": 4,
                            "paths": [
                                        {
                                            "index": 1,
                                            "weight": 1,
                                            "rank": 1,
                                            "nodes": [1, 2, 4]
                                        },
                                        {
                                            "index": 2,
                                            "weight": 0.5,
                                            "rank": 2,
                                            "nodes": [1, 3, 4]
                                        },
                                     ]
                        };
            var scope = this;
            //this.nodes.click(this.update_link_color(), this.update_link_width());
            var datalinks = this.model.get("links")[1];
            console.log(datalinks);

            //var node = d.data;
            //console.log(node);

            /*this.links// = this.svg.selectAll(".graph_link")
                .data(this.model.get("links"))
              //.enter().append("line")
                .attr("class", "graph_link")
                .style("stroke-width", 5);*/

            /*var trajlinks = [];

            for (var i = 0; i < datalinks.length; i++){
                trajlinks.push(datalinks[i].name);
            }
            console.log(trajlinks);
            return trajlinks; */
            /*$("#node-1").hover(function(){
                scope.update_link_width();
            });*/
            //("#link-0-1")
            //    .style("stroke-width", 5);
        },

        node_shape: function(shape) {
            /*
            Add shapes to each node in D3 force simulation.

            Parameter:
            ---------
            shape: string
            SVG shape for each node.
            */

            var interpolateRadius = d3.interpolate(1, 15);

            this.circles = this.nodes.append("circle")
                .attr("class", "graph_circle")
                .attr("id", function(d) {return "node-"+d.index})
                .attr("node-index", function(d) {return d.index})
                .attr("r", function(d){ return interpolateRadius(d.value) });

            },

            force_on: function() {
                //
                // How to handle each tick in a force simulation.
                //
                var scope = this;

                this.force.on("tick", function () {
                    scope.links
                    .attr("x1", function(d) { return d.source.x; })
                    .attr("y1", function(d) { return d.source.y; })
                    .attr("x2", function(d) { return d.target.x; })
                    .attr("y2", function(d) { return d.target.y; });

                    scope.nodes
                    .attr("transform", function(d) {
                        return "translate(" + d.x + "," + d.y + ")";
                    })
                });

                this.force.start();
            },

            node_text: function(){
                //
                //Add text to each node based on each node's "id".
                //
                var interpolateRadius = d3.interpolate(1, 15);

                this.labels = this.nodes.append("text")
                    .attr("class", "graph_text")
                    .attr("dx", function(d) {return interpolateRadius(d.value)})
                    .attr("dy", ".35em")
                    .text(function(d) { return d.id; });

                this.force_on();
            },

            node_color: function() {
                //
                //Add color to each node based on the node's "value".
                //
                var colors = d3.interpolate('orange', 'purple');

                this.nodes
                    .attr("fill", function(d){ return colors(d.value)});

                $('#colorbutton').click(function() {
                    var colorUpdate = d3.interpolate('blue', 'red');

                    d3.selectAll(".graph_node").transition()
                        .each("start", function() { d3.select(this) })
                        .attr("fill", function(d){return colorUpdate(d.value)});
                });
            },

            size_slider: function() {
                var scope = this;
                var interpolateRadius = d3.interpolate(1, 15);

                $(function() {
                    $( "#slider" ).slider({
                        value: 1,
                        min: 0,
                        max: 3,
                        step: .5,
                        slide: function( event, ui ) {
                            $( "#amount" ).val( ui.value );
                            scope.labels.transition().duration(300)
                                .attr("dx", function(d) {return interpolateRadius(d.value * ui.value)});
                            scope.circles.transition().duration(300)
                                .attr("r", function(d) {return interpolateRadius(d.value * ui.value)});
                        }
                    });
                    $( "#amount" ).val( $( "#slider" ).slider( "value" ) );
                });
            },

            form: function() {

                // Define scope.
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

                var scope = this;

                // Create dataMenu object for dropdown menu.
                var dataMenu = function() {}

                dataMenu.prototype.add_element = function(element) {
                    //
                    //Create an element in dropdown.
                    //
                    // Construct dropdown label.
                    label = $("<a>").attr("id", "dropdown-" + element)
                    .attr("href","#")
                    .text(element);
                    console.log(element);

                    // Construct html element here
                    html_el = $("<li>").append(label)
                    return html_el;
                }

                dataMenu.prototype.build_list = function(parent, elements){
                    /*
                    Append html list elements to parent html element.

                    Args:
                    ----
                    parent: string
                    html-element id for appending list.
                    elements: array of strings
                    array of text to append html list and make clickable.
                    */
                    for (var e = 0; e < elements.length; e++) {
                        dropdown = this.add_element(elements[e]);
                        $(parent).append(dropdown);
                        dropdown.click(e, click_reference);
                    }
                }

                var get_refs = function(key){
                    //
                    //Get dataset's refs.
                    //
                    var datasets = scope.model.get("datasets");
                    var refs = [];

                    for (var i = 0; i < datasets.length; i++) {
                        refs.push(datasets[i].ref);
                    }
                    return refs;
                }

                var click_reference = function(d){
                    //
                    // Function to switch data when different reference
                    // is selected from dropdown menu.
                    //
                    var index = d.data;
                    var new_data = scope.model.get("datasets")[index];

                    var new_nodes = new_data["nodes"];
                    var new_links = new_data["links"];

                    var change_node_value = function(data) {
                        //
                        // Changes model's node values inplace.
                        //
                        var old_nodes = scope.model.get("nodes");
                        for (var i = 0; i < old_nodes.length; i++) {
                            old_nodes[i].value = data[i].value;
                            console.log(data[i].value);
                        }
                    }

                    // Change the nodes inplace
                    change_node_value(new_nodes);

                    // Lets the slider keep track of the new data size.
                    scope.size_slider();

                    var nodeUpdate = scope.nodes;

                    nodeUpdate.select("circle").transition().duration(1000)
                        .attr("r", function(d){ return d3.interpolate(1, 15)(d.value) });

                    nodeUpdate.select("text").transition().duration(1000)
                        .attr("dx", function(d) {return d3.interpolate(1, 15)(d.value)});

                    nodeUpdate.transition().duration(1000)
                        .attr("fill", function(d){ return d3.interpolate('orange', 'purple')(d.value)});

                }

                var datasets = scope.model.get("datasets")[0];
                var refs = get_refs(datasets);

                var drops = new dataMenu();
                drops.build_list("#menu1", refs);

            },

        });

        return NetworkView;

    });
