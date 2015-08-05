// Main application single entry point
requirejs([
    'jquery',
    'd3',
    'js/models/network',
    'js/views/network',
    'js/views/modal'
], function($, d3, NetworkModel, NetworkView, NetworkModal) {

    // Data plotted in network
    var data1 = {
        "ref":"000",
        "directed": false,
        "graph": [],
        "nodes": [
            {
                "name": 0,
                "value": 0.766,
                "id": "010"
            },
            {
                "name": 1,
                "value": 0.803,
                "id": "011"
            },
            {
                "name": 2,
                "value": 0.858,
                "id": "001"
            },
            {
                "name": 3,
                "value": 0.918,
                "id": "000"
            },
            {
                "name": 4,
                "value": 0.077,
                "id": "111"
            },
            {
                "name": 5,
                "value": 0.838,
                "id": "110"
            },
            {
                "name": 6,
                "value": 0.73,
                "id": "100"
            },
            {
                "name": 7,
                "value": 0.749,
                "id": "101"
            }
        ],
        "links": [
            {
                "source": 0,
                "tsize": 0.803,
                "ssize": 0.766,
                "target": 1
            },
            {
                "source": 0,
                "tsize": 0.918,
                "ssize": 0.766,
                "target": 3
            },
            {
                "source": 0,
                "tsize": 0.838,
                "ssize": 0.766,
                "target": 5
            },
            {
                "source": 1,
                "tsize": 0.858,
                "ssize": 0.803,
                "target": 2
            },
            {
                "source": 1,
                "tsize": 0.077,
                "ssize": 0.803,
                "target": 4
            },
            {
                "source": 2,
                "tsize": 0.918,
                "ssize": 0.858,
                "target": 3
            },
            {
                "source": 2,
                "tsize": 0.749,
                "ssize": 0.858,
                "target": 7
            },
            {
                "source": 3,
                "tsize": 0.73,
                "ssize": 0.918,
                "target": 6
            },
            {
                "source": 4,
                "tsize": 0.749,
                "ssize": 0.077,
                "target": 7
            },
            {
                "source": 4,
                "tsize": 0.838,
                "ssize": 0.077,
                "target": 5
            },
            {
                "source": 5,
                "tsize": 0.73,
                "ssize": 0.838,
                "target": 6
            },
            {
                "source": 6,
                "tsize": 0.749,
                "ssize": 0.73,
                "target": 7
            }
        ],
        "multigraph": false
    };

    var data2 = {
        "ref":"111",
        "directed": false,
        "graph": [],
        "nodes": [
            {
                "name": 0,
                "value": 0.203,
                "id": "010"
            },
            {
                "name": 1,
                "value": 0.892,
                "id": "011"
            },
            {
                "name": 2,
                "value": 0.581,
                "id": "001"
            },
            {
                "name": 3,
                "value": 0.641,
                "id": "000"
            },
            {
                "name": 4,
                "value": 0.5,
                "id": "111"
            },
            {
                "name": 5,
                "value": 0.713,
                "id": "110"
            },
            {
                "name": 6,
                "value": 0.415,
                "id": "100"
            },
            {
                "name": 7,
                "value": 0.895,
                "id": "101"
            }
        ],
        "links": [
            {
                "source": 0,
                "tsize": 0.892,
                "ssize": 0.203,
                "target": 1
            },
            {
                "source": 0,
                "tsize": 0.641,
                "ssize": 0.203,
                "target": 3
            },
            {
                "source": 0,
                "tsize": 0.713,
                "ssize": 0.203,
                "target": 5
            },
            {
                "source": 1,
                "tsize": 0.581,
                "ssize": 0.892,
                "target": 2
            },
            {
                "source": 1,
                "tsize": 0.5,
                "ssize": 0.892,
                "target": 4
            },
            {
                "source": 2,
                "tsize": 0.641,
                "ssize": 0.581,
                "target": 3
            },
            {
                "source": 2,
                "tsize": 0.895,
                "ssize": 0.581,
                "target": 7
            },
            {
                "source": 3,
                "tsize": 0.415,
                "ssize": 0.641,
                "target": 6
            },
            {
                "source": 4,
                "tsize": 0.895,
                "ssize": 0.5,
                "target": 7
            },
            {
                "source": 4,
                "tsize": 0.713,
                "ssize": 0.5,
                "target": 5
            },
            {
                "source": 5,
                "tsize": 0.415,
                "ssize": 0.713,
                "target": 6
            },
            {
                "source": 6,
                "tsize": 0.895,
                "ssize": 0.415,
                "target": 7
            }
        ],
        "multigraph": false
    }

    var trajectory = {
            "source": 0,
            "target": 4,
            "paths": [
                        {
                            "index": 1,
                            "weight": 1,
                            "rank": 1,
                            "nodes": [0,1,4]
                        }
                     ]
        };

    var data = [data1,data2];

    // Initializing backbone model for network app.
    this.network_model = new NetworkModel( data, trajectory );

    // Initializing all backbone views.
    this.network_modal = new NetworkModal();
    this.network_viewer = new NetworkView( { "model" : this.network_model } );

});
