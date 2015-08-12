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
            .attr("width", 790)
            .attr("height", this.height);

            console.log(this.width);

            // Initialize the force
            this.force = d3.layout.force()
            .charge(this.model.get("charge"))
            .linkDistance(this.model.get("link_distance"))
            .size([this.width-300, this.height-10])

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
            this.draw_trajectory_table();
        },

        draw_trajectory_table: function(){

            var scope = this;

            // Click function for trajectory
            var traj = this.model.get("trajectories");

            var dataTable = function() {}

            dataTable.prototype.add_element = function(pathIndex, weight) {
                //console.log(pathIndex);
                //console.log(weight);

                /*title1 = $("<th>").text("Tractory #");
                title2 = $("<th>").text("Value");

                header = $("<thead>").append(title1).append(title2);
                //return header;*/

                column = $("<td>").attr("id", "tablecolumn_"+pathIndex)
                    .text("Trajectory "+pathIndex)
                    .attr("padding-right","300");

                weight = $("<td>").attr("id", "tablecolumn_"+weight)
                    .text(weight);

                label = $("<tr>").append(column).append(weight);
                return label;

            }

            dataTable.prototype.build_list = function(parent, pathIndex, probability) {
                //console.log(parent);
                //console.log(pathIndex);
                //console.log(probability);

                for (var e = 0; e < pathIndex.length; e++) {
                    //console.log(e);
                    menu = this.add_element(pathIndex[e], probability[e]);
                    $(parent).append(menu);
                    //console.log(traj.paths[e]);
                    menu.click([traj.paths[e], menu], click_row);
                    //menu.click(traj.paths, rm_traj);
                    menu.mouseover(traj.paths[e], hover_row);
                    menu.mouseout(traj.paths[e], out_row);
                    //menu.dblclick
                }
            }

            var get_path_index = function(traj) {
                //console.log(traj.paths);
                var path_index = [];
                for (var i = 0; i < traj.paths.length; i++) {
                    path_index.push(traj.paths[i].index);
                    //console.log(path_index);
                }
                //console.log(path_index);
                return path_index;
            }

            var get_weight = function(traj) {

                var probability = [];
                for (var i = 0; i < traj.paths.length; i++) {
                    probability.push(traj.paths[i].weight);
                }
                //console.log(probability);
                return probability;
            }

            var hover_row = function(d) {
                //console.log("hovered");
                var weight = d.data.weight;

                for (var h = 0; h < d.data.nodes.length-1; h++) {
                    //console.log(d.data.nodes[h]);
                    var slice = d.data.nodes.slice(h, h+2);
                    //console.log(d.data.nodes[h]);

                    d3.select("#node_"+d.data[h])
                        .attr("fill", "red");

                    d3.select("#link_"+slice[0]+"_"+slice[1])
                        .attr("stroke-opacity", String(weight*.005))
                        .attr("stroke-width", weight*1);

                    d3.select("#link_"+slice[1]+"_"+slice[0])
                        .attr("stroke-opacity", String(weight*.005))
                        .attr("stroke-width", weight*1);
                }
            }

            var out_row = function(d) {
                //console.log("out");
                //console.log(d.data)

                for (var h = 0; h < d.data.nodes.length-1; h++) {
                    //console.log(d.data.nodes[h]);
                    var slice = d.data.nodes.slice(h, h+2);
                    //console.log(d.data.nodes[h]);

                    //d3.select("#node_"+d.data[h])
                        //.attr("fill", "red");

                    d3.select("#link_"+slice[0]+"_"+slice[1])
                        .attr("stroke-opacity", "1")
                        .attr("stroke-width", 1);

                    d3.select("#link_"+slice[1]+"_"+slice[0])
                        .attr("stroke-opacity", "1")
                        .attr("stroke-width", 1);
                }
            }

            var click_row = function(d) {
                //var scope = this;
                //console.log(scope);
                //console.log(d.data[1]);

                var weight = d.data[0].weight;
                var menu = d.data[1];

                for (var h = 0; h < d.data[0].nodes.length-1; h++) {
                    //console.log(d.data.nodes[h]);
                    var slice = d.data[0].nodes.slice(h, h+2);
                    //console.log(slice);
                    //console.log(scope.links);

                    var line = "<line>";
                        //.attr("class", "graph_link")
                        //.attr("stroke-opacity", String(weight*.15))
                        //.attr("stroke-width", weight*2);
                        //.attr("id", function(d) {return "link-"+d.source.index+"-"+d.target.index});

                    console.log(line);

                    $("#link_"+slice[0]+"_"+slice[1])
                        .append(line);
                            //.attr("stroke-opacity", String(weight*.15))
                            //.attr("stroke-width", weight*2);

                    $("#link_"+slice[1]+"_"+slice[0])
                        .append(line);
                            //.attr("class", "Line")
                            //.attr("stroke-opacity", String(weight*.15))
                            //.attr("stroke-width", weight*2);
                }
                menu.unbind("mouseover")
                    .unbind("mouseout");
                //rm_traj();

            }

            var rm_traj = function(d) {
                var weight = d.data.weight;

                for (var h = 0; h < d.data.nodes.length-1; h++) {
                    //console.log(d.data.nodes[h]);
                    var slice = d.data.nodes.slice(h, h+2);
                    //console.log(slice);

                    d3.select("#link_"+slice[0]+"_"+slice[1])
                        .attr("stroke-opacity", "1")
                        .attr("stroke-width", 1);

                    d3.select("#link_"+slice[1]+"_"+slice[0])
                        .attr("stroke-opacity", "1")
                        .attr("stroke-width", 1);
                }
            }

            var probability = get_weight(traj);
            //console.log(probability);

            var index = get_path_index(traj);
            //console.log(index);

            var list = new dataTable();
            list.build_list("#tablebody", index, probability);



            //console.log(traj.paths);

            /*for (var i = 0; i < traj.paths.length; i++){
                var nodeNumbers = traj.paths[i].nodes;
                //console.log(nodeNumbers);
                var Path = traj.paths[i];

                for (var e = 0; e < nodeNumbers.length; e++) {
                    //console.log(nodeNumbers[e]);

                    var scope = this;

                    var n = nodeNumbers[e];

                    $("#node_"+nodeNumbers[e]).click(traj, function(d){
                        scope.draw_trajectory(d.data);
                        //console.log(d.data);
                    });
                }
            }*/
        },

        undraw_trajectory: function(){

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
                .attr("id", function(d) {return "node_"+d.index})
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
                .attr("id", function(d) {return "link_"+d.source.index+"_"+d.target.index});
        },

        draw_trajectory: function(trajectory) {
            // Parse trajectory object and change edges appropriately

            // Identify edges to change
            // Should return this -->[[0,1], [1,4]]

            // Change those edges

            //console.log(trajectory.nodes);
            //console.log(trajectory.weight);

            /*for (var y = 0; y < trajectory.nodes.length-1; y++) {
                //console.log(trajectory.nodes[y]);
                var weight = trajectory.weight[y];

                var slice = trajectory.nodes.slice(y, y+2);

                $("#link_"+slice[0]+"_"+slice[1])
                    .css("stroke-opacity", String(weight*.15))
                    .css("stroke-width", weight*2);

                console.log("#link_"+slice[0]+"_"+slice[1]);
            }*/

            /*for (var i = 0; i < trajectory.paths.length; i++) {
                var weight = trajectory.paths[i].weight;

                for (var s = 0; s < trajectory.paths[i].nodes.length-1; s++) {
                    var slice = trajectory.paths[i].nodes.slice(s, s+2)

                    d3.select("#link_"+slice[0]+"_"+slice[1])
                        .attr("stroke-opacity", String(weight*.15))
                        .attr("stroke-width", weight*2);

                    d3.select("#link_"+slice[1]+"_"+slice[0])
                        .attr("stroke-opacity", String(weight*.15))
                        .attr("stroke-width", weight*2);
                }
            }*/

        },

        node_shape: function(shape) {
            //
            // Add shapes to each node in D3 force simulation.
            //
            // Parameter:
            // ---------
            // shape: string
            // SVG shape for each node.
            //

            var interpolateRadius = d3.interpolate(2, 13);

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
                var interpolateRadius = d3.interpolate(2, 13);

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
                var interpolateRadius = d3.interpolate(2, 13);

                $(function() {
                    $( "#slider" ).slider({
                        value: 1,
                        min: 0,
                        max: 6,
                        step: .25,
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
                    for(var i = 0; i < nodes.length; i++){
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
                            var interpolateRadius = d3.interpolate(1, 15);
                            $("#node-"+nodes[i].name)
                                .attr("r", 40 )
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
                        }
                    }

                    // Change the nodes inplace
                    change_node_value(new_nodes);

                    // Lets the slider keep track of the new data size.
                    scope.size_slider();

                    var nodeUpdate = scope.nodes
                        .attr("id", function(d) {return "node_"+d.name});

                    nodeUpdate.select("circle").transition().duration(1000)
                        .attr("id", function(d) {return "node-"+d.index})
                        .attr("node-index", function(d) {return d.index})
                        .attr("r", function(d){ return d3.interpolate(2, 60)(d.value) });

                    nodeUpdate.select("text").transition().duration(1000)
                        .attr("dx", function(d) {return d3.interpolate(2, 60)(d.value)});

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
