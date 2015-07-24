// Main application single entry point
requirejs([
    'jquery',
    'd3',
    'js/models/network',
    'js/views/network',
    'js/views/modal'
], function($, d3, NetworkModel, NetworkView, NetworkModal) {

    //var datasets = [data1, data2]

    //var datasets = new Object( data1, data2 );
    // Data plotted in network
    var data1 = { "ref": "000",
                  "links": [
                    {
                      "source": 0,
                      "target": 1,
                      "tsize": 0.029,
                      "ssize": 0.019
                    },
                    {
                      "source": 0,
                      "target": 4,
                      "tsize": 0.55,
                      "ssize": 0.019
                    },
                    {
                      "source": 0,
                      "target": 6,
                      "tsize": 0.332,
                      "ssize": 0.019
                    },
                    {
                      "source": 1,
                      "target": 3,
                      "tsize": 0.057,
                      "ssize": 0.029
                    },
                    {
                      "source": 1,
                      "target": 2,
                      "tsize": 0.486,
                      "ssize": 0.029
                    },
                    {
                      "source": 2,
                      "target": 4,
                      "tsize": 0.55,
                      "ssize": 0.486
                    },
                    {
                      "source": 2,
                      "target": 5,
                      "tsize": 0.01,
                      "ssize": 0.486
                    },
                    {
                      "source": 3,
                      "target": 5,
                      "tsize": 0.01,
                      "ssize": 0.057
                    },
                    {
                      "source": 3,
                      "target": 6,
                      "tsize": 0.332,
                      "ssize": 0.057
                    },
                    {
                      "source": 4,
                      "target": 7,
                      "tsize": 0.089,
                      "ssize": 0.55
                    },
                    {
                      "source": 5,
                      "target": 7,
                      "tsize": 0.089,
                      "ssize": 0.01
                    },
                    {
                      "source": 6,
                      "target": 7,
                      "tsize": 0.089,
                      "ssize": 0.332
                    }
                  ],
                  "directed": false,
                  "nodes": [
                    {
                      "value": 0.019,
                      "id": "110",
                      "name": 0
                    },
                    {
                      "value": 0.029,
                      "id": "111",
                      "name": 1
                    },
                    {
                      "value": 0.486,
                      "id": "101",
                      "name": 2
                    },
                    {
                      "value": 0.057,
                      "id": "011",
                      "name": 3
                    },
                    {
                      "value": 0.55,
                      "id": "100",
                      "name": 4
                    },
                    {
                      "value": 0.01,
                      "id": "001",
                      "name": 5
                    },
                    {
                      "value": 0.332,
                      "id": "010",
                      "name": 6
                    },
                    {
                      "value": 0.089,
                      "id": "000",
                      "name": 7
                    }
                  ],
                  "multigraph": false,
                  "graph": []
                }

    var data2 = {
                  "ref": "111",
                  "links": [
                    {
                      "tsize": 0.112,
                      "target": 5,
                      "source": 0,
                      "ssize": 0.213
                    },
                    {
                      "tsize": 0.573,
                      "target": 6,
                      "source": 0,
                      "ssize": 0.213
                    },
                    {
                      "tsize": 0.187,
                      "target": 7,
                      "source": 0,
                      "ssize": 0.213
                    },
                    {
                      "tsize": 0.62,
                      "target": 4,
                      "source": 1,
                      "ssize": 0.179
                    },
                    {
                      "tsize": 0.573,
                      "target": 6,
                      "source": 1,
                      "ssize": 0.179
                    },
                    {
                      "tsize": 0.187,
                      "target": 7,
                      "source": 1,
                      "ssize": 0.179
                    },
                    {
                      "tsize": 0.573,
                      "target": 6,
                      "source": 2,
                      "ssize": 0.539
                    },
                    {
                      "tsize": 0.112,
                      "target": 5,
                      "source": 2,
                      "ssize": 0.539
                    },
                    {
                      "tsize": 0.62,
                      "target": 4,
                      "source": 2,
                      "ssize": 0.539
                    },
                    {
                      "tsize": 0.112,
                      "target": 5,
                      "source": 3,
                      "ssize": 0.132
                    },
                    {
                      "tsize": 0.62,
                      "target": 4,
                      "source": 3,
                      "ssize": 0.132
                    },
                    {
                      "tsize": 0.187,
                      "target": 7,
                      "source": 3,
                      "ssize": 0.132
                    }
                  ],
                  "nodes": [
                    {
                      "id": "011",
                      "name": 0,
                      "value": 0.213
                    },
                    {
                      "id": "101",
                      "name": 1,
                      "value": 0.179
                    },
                    {
                      "id": "000",
                      "name": 2,
                      "value": 0.539
                    },
                    {
                      "id": "110",
                      "name": 3,
                      "value": 0.132
                    },
                    {
                      "id": "100",
                      "name": 4,
                      "value": 0.62
                    },
                    {
                      "id": "010",
                      "name": 5,
                      "value": 0.112
                    },
                    {
                      "id": "001",
                      "name": 6,
                      "value": 0.573
                    },
                    {
                      "id": "111",
                      "name": 7,
                      "value": 0.187
                    }
                  ],
                  "multigraph": false,
                  "graph": [],
                  "directed": false
                }


    var data = [data1,data2];
    // Initializing backbone model for network app.
    this.network_model = new NetworkModel( data );

    // Initializing all backbone views.
    this.network_modal = new NetworkModal();
    this.network_viewer = new NetworkView( { "model" : this.network_model } );

});
