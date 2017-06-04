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
    // Trajectory widget
    // --------------------------------------

    var TrajectoryTable = backbone.View.extend({


        initialize: function(){
            //Initialize Trajectory Table

            this.element = "#network_viewer";

            // Click function for trajectory
            this.traj = this.model.get("trajectories");


            this.indices = this.get_path_index(this.traj);
            this.build_list("#tablebody", this.indices);
            console.log(_.clone(this.model.get("nodes")));
        },

        build_list: function(parent, index){
            // Construct a complete html table of all trajectories
            console.log(index);
            for (var e = 0; e < index.length; e++) {
                var menu = this.add_element(index[e]);
                var edges = this.traj[e];

                // Add menu to html table
                $(parent).append(menu);

                // Enable clicking selections in table.
                menu.click([this, e, menu], this.click_row);

                // Handle hovering over selections.
                menu.mouseover([this, edges, menu], this.hover_row);
                menu.mouseout([this, edges, menu], this.out_row);
            }
        },

        add_element: function(index){
            // Built an html table element for trajectory

            column = $("<td>").attr("id", "tablecolumn_"+index)
                .text("Trajectory "+index)
                .attr("padding-right","300")
                .attr("class", "network-viewer");

            weight = $("<td>").attr("id", "tablecolumn_0")
                .text(0);

            label = $("<tr>").append(column).append(weight);
            return label;
        },

        get_path_index: function(){
            // Get the indices of all paths
            //
            var path_index = [];
            for (var prop in this.traj) {
                if( this.traj.hasOwnProperty( prop ) ) {
                    path_index.push(prop);
                }
            }
            return path_index;

        },

        click_row: function(d){
            //
            // Set click behavior of trajectory table
            //
            var that = d.data[0]
            var index = d.data[1];
            var menu = d.data[2];

            //var menu = d.data[1];
            //console.log(menu);
            $(menu)
                .css("color", "red")
                .css("font-size","17px");

            // Remove previous click event and add trajectory to model.
            menu.off("click")
            //menu.off("mouseover")
            //menu.off("mouseout")

            that.model.add_trajectory(index);
            menu.click([that, index, menu], that.unclick_row);
        },

        unclick_row: function(d){
            //
            // Set click behavior of trajectory table
            //
            var that = d.data[0]
            var index = d.data[1];
            var menu = d.data[2];

            $(menu)
                .css("color", "#333")
                .css("font-size","14px");

            // Remove previous click event and remove trajectory from model.
            menu.off("click")
            that.model.rm_trajectory(index);
            menu.click([that, index, menu], that.click_row);

        },

        hover_row: function(d){
            // Handle hovering of mouse over trajectory table.

            var that = d.data[0];
            var edges = d.data[1];
            var menu = d.data[2]

            for (var h = 0; h < edges.length; h++) {
                var edge = edges[h]

                $("#link_"+edge.endpoints[0]+"_"+edge.endpoints[1])
                    .attr("stroke-opacity", String(edge.width*.15))
                    .attr("stroke-width", edge.width);

                $("#link_"+edge.endpoints[1]+"_"+edge.endpoints[0])
                    .attr("stroke-opacity", String(edge.width*.15))
                    .attr("stroke-width", edge.width);
            }
        },

        out_row: function(d){
            // Remove hovering handle

            var that = d.data[0];
            var edges = d.data[1];
            var menu = d.data[2]

            for (var h = 0; h < edges.length; h++) {
                var edge = edges[h]

                $("#link_"+edge.endpoints[0]+"_"+edge.endpoints[1])
                    .css("stroke","#999")
                    .attr("stroke-opacity", "1")
                    .attr("stroke-width", 1);

                $("#link_"+edge.endpoints[1]+"_"+edge.endpoints[0])
                    .css("stroke","#999")
                    .attr("stroke-opacity", "1")
                    .attr("stroke-width", 1);
            }
        },

    });

    return TrajectoryTable;

});
