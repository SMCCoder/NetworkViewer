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

            console.log(this.model.get("nodes"));

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

            var interpolateRadius = d3.interpolate(1, 15);

            this.circles = this.nodes.append("circle")
            .attr("class", "graph_circle")
            .attr("id", function(d) {return "node-"+d.index})
            .attr("node-index", function(d) {return d.index})
            .attr("r", function(d){
                //console.log(d)
                return interpolateRadius(d.value) })

                //this.model.get("node_radius"))

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
                var interpolateRadius = d3.interpolate(5, 25);

                this.labels = this.nodes.append("text")
                .attr("class", "graph_text")
                .attr("dx", function(d) {return interpolateRadius(d.value)})
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
                    d3.selectAll(".graph_node").transition()
                    .each("start", function() { d3.select(this) })
                    .attr("fill", function(d){return colorUpdate(d.value)});
                    //return colors;
                });
            },

            size_slider: function() {
                var scope = this;
                var interpolateRadius = d3.interpolate(5, 25);

                //this.circles
                //.attr("r", function(d) {return interpolateRadius(d.value)});

                //this.labels
                //.attr("dx", function(d) {return interpolateRadius(d.value)});

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
                // Define scope.
                var scope = this;

                var tags = function(key){
                    var nodes = scope.model.get("nodes");
                    var node_names = [];
                    for(var i = 0; i<nodes.length; i++){
                        node_names.push(nodes[i].id);
                    }
                    console.log(node_names);
                    return node_names;
                }

                $( "#inputNumber" ).autocomplete({
                    source: tags()
                });

                $("#gobutton").click(function(){

                    var numInput = $("#inputNumber").val();

                    var nodes = scope.model.get("nodes");
                    var node_names = [];

                    console.log(nodes[2]);

                    for(var i = 0; i < nodes.length; i++){
                        node_names.push(nodes[i].id);
                        //console.log(node_names[i]);

                        if (node_names[i] === numInput) {
                            console.log(node_names[i]);
                        }
                    }

                });

            },

            update_data: function() {

                var scope = this;

                // Create dataMenu object for
                var dataMenu = function() {}

                dataMenu.prototype.add_element = function(element) {
                    /*
                    Create an element in dropdown.
                    */
                    // Construct dropdown label.
                    label = $("<a>").attr("id", "dropdown-" + element)
                    .attr("href","#")
                    .text(element);

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
                    /*
                    Get dataset's refs.
                    */
                    var datasets = scope.model.get("datasets");
                    var refs = [];
                    console.log(datasets)

                    for (var i = 0; i < datasets.length; i++) {
                        refs.push(datasets[i].ref);
                    }
                    console.log(refs);
                    return refs;
                };


                var click_reference = function(d){
                    //
                    // Function to switch data when different reference
                    // is selected from dropdown menu.
                    //
                    var index = d.data;

                    var dataUpdate = function() {
                      var datasets = scope.model.get("datasets")[index];
                      for (var i = 0; i < datasets.length; i++){
                        datasets.push([i]);
                      }
                      return datasets;
                    }

                    var dataSelect = dataUpdate();
                    console.log(dataSelect);

                    var get_nodes = function(key) {
                        //
                        //
                        //
                        var datasets = scope.model.get("datasets");
                        var node = [];

                        for (var i = 0; i < datasets.length; i++) {
                            node.push(datasets[i].nodes);
                        }
                        return node;
                    }

                    var datasets = scope.model.get("datasets");
                    var node = get_nodes(datasets)[index];

                    console.log(node);

                    var node_value = function() {
                        var nodeValues = [];

                        for (var i = 0; i < node.length; i++) {
                            nodeValues.push(node[i].value);
                        }
                        return nodeValues;
                    }

                    var nodeValues = node_value(datasets);
                    console.log(nodeValues);

                    var get_links = function(key) {
                        //
                        // Takes reference key, returns array of links from dataset[key].
                        //
                        var datasets = scope.model.get("datasets");
                        var link = [];

                        for (var i = 0; i < datasets.length; i++) {
                            link.push(datasets[i].links);
                        }
                        return link;
                    };

                    var link = get_links(datasets)[index];

                    var old_nodes = scope.force.nodes();
                    var old_links = scope.force.links();
                    console.log("Old node data:");
                    console.log(old_nodes);
                    //console.log(node)

                    // function that takes old nodes, and updates value with
                    // new node value... return new_nodes

                    var new_values = function () {
                        //var datasets = old_nodes;
                        var new_nodes = nodeValues;
                        var values = [];

                        for (var i = 0; i < old_nodes.length; i++) {
                            values.push(old_nodes[i].value);
                        }

                        //var valueUpdate =
                        return values;
                    };

                    var new_nodes = new_values();
                    //new_nodes = nodeValues;
                    console.log(new_nodes);

                    scope.force.stop()
                    scope.force.nodes(node)
                                .links(link)
                                .start()

                    var nodeUpdate = scope.nodes.data(node)
                        .attr("class", "graph_node")
                        .call(scope.force.drag);

                    nodeUpdate.select("circle")
                        .attr("class", "graph_circle")
                        .attr("id", function(d) {return "node-"+d.index})
                        .attr("node-index", function(d) {return d.index})
                        .attr("r", function(d){ return d3.interpolate(1, 15)(d.value) })

                    nodeUpdate.select("text")
                        .attr("class", "graph_text")
                        .attr("dx", function(d) {return d3.interpolate(1, 15)(d.value)})
                        .attr("dy", ".35em")
                        .text(function(d) { return d.id; });

                    var linkUpdate = scope.links.data(link)
                        .attr("class", "graph_link");

                    //scope.force_on();
                }

                var datasets = scope.model.get("datasets")[0];
                var refs = get_refs(datasets);

                var drops = new dataMenu();
                drops.build_list("#menu1", refs);

            },

        });

        return NetworkView;

    });
