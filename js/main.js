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
          "ref": "111",
          "multigraph": false,
          "nodes": [
            {
              "value": 0.006374208718566098,
              "id": "aAETS",
              "errors": null,
              "binary": "10011"
            },
            {
              "value": 0.02353160081316065,
              "id": "aGKTG",
              "errors": null,
              "binary": "11110"
            },
            {
              "value": 0.018602821321040238,
              "id": "aAKMG",
              "errors": null,
              "binary": "10100"
            },
            {
              "value": 0.08928345125983857,
              "id": "aGEMG",
              "errors": null,
              "binary": "11000"
            },
            {
              "value": 0.014278405097018023,
              "id": "aAKMS",
              "errors": null,
              "binary": "10101"
            },
            {
              "value": 0.006374208718566098,
              "id": "gAKTS",
              "errors": null,
              "binary": "00111"
            },
            {
              "value": 0.006374208718566098,
              "id": "gAEMG",
              "errors": null,
              "binary": "00000"
            },
            {
              "value": 0.02353160081316065,
              "id": "gGETS",
              "errors": null,
              "binary": "01011"
            },
            {
              "value": 0.07072875262687442,
              "id": "gGKMG",
              "errors": null,
              "binary": "01100"
            },
            {
              "value": 0.02353160081316065,
              "id": "aAETG",
              "errors": null,
              "binary": "10010"
            },
            {
              "value": 0.04787400094891286,
              "id": "aAEMG",
              "errors": null,
              "binary": "10000"
            },
            {
              "value": 0.04787400094891286,
              "id": "gGETG",
              "errors": null,
              "binary": "01010"
            },
            {
              "value": 0.014278405097018023,
              "id": "gGKTG",
              "errors": null,
              "binary": "01110"
            },
            {
              "value": 0.04787400094891286,
              "id": "aGEMS",
              "errors": null,
              "binary": "11001"
            },
            {
              "value": 0.056433816991228895,
              "id": "aGKMS",
              "errors": null,
              "binary": "11101"
            },
            {
              "value": 0.12120198664266135,
              "id": "aGKTS",
              "errors": null,
              "binary": "11111"
            },
            {
              "value": 0.02353160081316065,
              "id": "gAEMS",
              "errors": null,
              "binary": "00001"
            },
            {
              "value": 0.014278405097018023,
              "id": "gAETS",
              "errors": null,
              "binary": "00011"
            },
            {
              "value": 0.006374208718566098,
              "id": "gGKTS",
              "errors": null,
              "binary": "01111"
            },
            {
              "value": 0.04787400094891286,
              "id": "gAKMS",
              "errors": null,
              "binary": "00101"
            },
            {
              "value": 0.03321527450546653,
              "id": "aAEMS",
              "errors": null,
              "binary": "10001"
            },
            {
              "value": 0.03962500099564907,
              "id": "gAKMG",
              "errors": null,
              "binary": "00100"
            },
            {
              "value": 0.006374208718566098,
              "id": "aGETG",
              "errors": null,
              "binary": "11010"
            },
            {
              "value": 0.010104826650998587,
              "id": "gGEMG",
              "errors": null,
              "binary": "01000"
            },
            {
              "value": 0.04787400094891286,
              "id": "aGKMG",
              "errors": null,
              "binary": "11100"
            },
            {
              "value": 0.0032665899591443745,
              "id": "gAETG",
              "errors": null,
              "binary": "00010"
            },
            {
              "value": 0.03962500099564907,
              "id": "aGETS",
              "errors": null,
              "binary": "11011"
            },
            {
              "value": 0.07072875262687442,
              "id": "aAKTG",
              "errors": null,
              "binary": "10110"
            },
            {
              "value": 0.006374208718566098,
              "id": "gGEMS",
              "errors": null,
              "binary": "01001"
            },
            {
              "value": 0.04787400094891286,
              "id": "aAKTS",
              "errors": null,
              "binary": "10111"
            },
            {
              "value": 0.04787400094891286,
              "id": "gGKMS",
              "errors": null,
              "binary": "01101"
            },
            {
              "value": 0.02353160081316065,
              "id": "gAKTG",
              "errors": null,
              "binary": "00110"
            }
          ],
          "directed": true,
          "links": [
            {
              "mutation": "a0g",
              "source": 0,
              "target": 17
            },
            {
              "mutation": "E2K",
              "source": 0,
              "target": 29
            },
            {
              "mutation": "S4G",
              "source": 0,
              "target": 9
            },
            {
              "mutation": "T3M",
              "source": 0,
              "target": 20
            },
            {
              "mutation": "A1G",
              "source": 0,
              "target": 26
            },
            {
              "mutation": "K2E",
              "source": 1,
              "target": 22
            },
            {
              "mutation": "T3M",
              "source": 1,
              "target": 24
            },
            {
              "mutation": "G4S",
              "source": 1,
              "target": 15
            },
            {
              "mutation": "a0g",
              "source": 1,
              "target": 12
            },
            {
              "mutation": "G1A",
              "source": 1,
              "target": 27
            },
            {
              "mutation": "K2E",
              "source": 2,
              "target": 10
            },
            {
              "mutation": "A1G",
              "source": 2,
              "target": 24
            },
            {
              "mutation": "M3T",
              "source": 2,
              "target": 27
            },
            {
              "mutation": "G4S",
              "source": 2,
              "target": 4
            },
            {
              "mutation": "a0g",
              "source": 2,
              "target": 21
            },
            {
              "mutation": "M3T",
              "source": 3,
              "target": 22
            },
            {
              "mutation": "a0g",
              "source": 3,
              "target": 23
            },
            {
              "mutation": "E2K",
              "source": 3,
              "target": 24
            },
            {
              "mutation": "G4S",
              "source": 3,
              "target": 13
            },
            {
              "mutation": "G1A",
              "source": 3,
              "target": 10
            },
            {
              "mutation": "M3T",
              "source": 4,
              "target": 29
            },
            {
              "mutation": "a0g",
              "source": 4,
              "target": 19
            },
            {
              "mutation": "A1G",
              "source": 4,
              "target": 14
            },
            {
              "mutation": "S4G",
              "source": 4,
              "target": 2
            },
            {
              "mutation": "K2E",
              "source": 4,
              "target": 20
            },
            {
              "mutation": "K2E",
              "source": 5,
              "target": 17
            },
            {
              "mutation": "g0a",
              "source": 5,
              "target": 29
            },
            {
              "mutation": "A1G",
              "source": 5,
              "target": 18
            },
            {
              "mutation": "T3M",
              "source": 5,
              "target": 19
            },
            {
              "mutation": "S4G",
              "source": 5,
              "target": 31
            },
            {
              "mutation": "g0a",
              "source": 6,
              "target": 10
            },
            {
              "mutation": "M3T",
              "source": 6,
              "target": 25
            },
            {
              "mutation": "E2K",
              "source": 6,
              "target": 21
            },
            {
              "mutation": "G4S",
              "source": 6,
              "target": 16
            },
            {
              "mutation": "A1G",
              "source": 6,
              "target": 23
            },
            {
              "mutation": "G1A",
              "source": 7,
              "target": 17
            },
            {
              "mutation": "E2K",
              "source": 7,
              "target": 18
            },
            {
              "mutation": "S4G",
              "source": 7,
              "target": 11
            },
            {
              "mutation": "T3M",
              "source": 7,
              "target": 28
            },
            {
              "mutation": "g0a",
              "source": 7,
              "target": 26
            },
            {
              "mutation": "K2E",
              "source": 8,
              "target": 23
            },
            {
              "mutation": "G4S",
              "source": 8,
              "target": 30
            },
            {
              "mutation": "g0a",
              "source": 8,
              "target": 24
            },
            {
              "mutation": "M3T",
              "source": 8,
              "target": 12
            },
            {
              "mutation": "G1A",
              "source": 8,
              "target": 21
            },
            {
              "mutation": "A1G",
              "source": 9,
              "target": 22
            },
            {
              "mutation": "T3M",
              "source": 9,
              "target": 10
            },
            {
              "mutation": "a0g",
              "source": 9,
              "target": 25
            },
            {
              "mutation": "E2K",
              "source": 9,
              "target": 27
            },
            {
              "mutation": "G4S",
              "source": 9,
              "target": 0
            },
            {
              "mutation": "a0g",
              "source": 10,
              "target": 6
            },
            {
              "mutation": "E2K",
              "source": 10,
              "target": 2
            },
            {
              "mutation": "A1G",
              "source": 10,
              "target": 3
            },
            {
              "mutation": "G4S",
              "source": 10,
              "target": 20
            },
            {
              "mutation": "M3T",
              "source": 10,
              "target": 9
            },
            {
              "mutation": "g0a",
              "source": 11,
              "target": 22
            },
            {
              "mutation": "T3M",
              "source": 11,
              "target": 23
            },
            {
              "mutation": "G1A",
              "source": 11,
              "target": 25
            },
            {
              "mutation": "G4S",
              "source": 11,
              "target": 7
            },
            {
              "mutation": "E2K",
              "source": 11,
              "target": 12
            },
            {
              "mutation": "K2E",
              "source": 12,
              "target": 11
            },
            {
              "mutation": "g0a",
              "source": 12,
              "target": 1
            },
            {
              "mutation": "G4S",
              "source": 12,
              "target": 18
            },
            {
              "mutation": "T3M",
              "source": 12,
              "target": 8
            },
            {
              "mutation": "G1A",
              "source": 12,
              "target": 31
            },
            {
              "mutation": "M3T",
              "source": 13,
              "target": 26
            },
            {
              "mutation": "E2K",
              "source": 13,
              "target": 14
            },
            {
              "mutation": "S4G",
              "source": 13,
              "target": 3
            },
            {
              "mutation": "a0g",
              "source": 13,
              "target": 28
            },
            {
              "mutation": "G1A",
              "source": 13,
              "target": 20
            },
            {
              "mutation": "K2E",
              "source": 14,
              "target": 13
            },
            {
              "mutation": "S4G",
              "source": 14,
              "target": 24
            },
            {
              "mutation": "M3T",
              "source": 14,
              "target": 15
            },
            {
              "mutation": "a0g",
              "source": 14,
              "target": 30
            },
            {
              "mutation": "G1A",
              "source": 14,
              "target": 4
            },
            {
              "mutation": "G1A",
              "source": 15,
              "target": 29
            },
            {
              "mutation": "a0g",
              "source": 15,
              "target": 18
            },
            {
              "mutation": "S4G",
              "source": 15,
              "target": 1
            },
            {
              "mutation": "T3M",
              "source": 15,
              "target": 14
            },
            {
              "mutation": "K2E",
              "source": 15,
              "target": 26
            },
            {
              "mutation": "M3T",
              "source": 16,
              "target": 17
            },
            {
              "mutation": "S4G",
              "source": 16,
              "target": 6
            },
            {
              "mutation": "E2K",
              "source": 16,
              "target": 19
            },
            {
              "mutation": "g0a",
              "source": 16,
              "target": 20
            },
            {
              "mutation": "A1G",
              "source": 16,
              "target": 28
            },
            {
              "mutation": "g0a",
              "source": 17,
              "target": 0
            },
            {
              "mutation": "E2K",
              "source": 17,
              "target": 5
            },
            {
              "mutation": "S4G",
              "source": 17,
              "target": 25
            },
            {
              "mutation": "A1G",
              "source": 17,
              "target": 7
            },
            {
              "mutation": "T3M",
              "source": 17,
              "target": 16
            },
            {
              "mutation": "G1A",
              "source": 18,
              "target": 5
            },
            {
              "mutation": "K2E",
              "source": 18,
              "target": 7
            },
            {
              "mutation": "g0a",
              "source": 18,
              "target": 15
            },
            {
              "mutation": "T3M",
              "source": 18,
              "target": 30
            },
            {
              "mutation": "S4G",
              "source": 18,
              "target": 12
            },
            {
              "mutation": "M3T",
              "source": 19,
              "target": 5
            },
            {
              "mutation": "S4G",
              "source": 19,
              "target": 21
            },
            {
              "mutation": "A1G",
              "source": 19,
              "target": 30
            },
            {
              "mutation": "g0a",
              "source": 19,
              "target": 4
            },
            {
              "mutation": "K2E",
              "source": 19,
              "target": 16
            },
            {
              "mutation": "A1G",
              "source": 20,
              "target": 13
            },
            {
              "mutation": "M3T",
              "source": 20,
              "target": 0
            },
            {
              "mutation": "S4G",
              "source": 20,
              "target": 10
            },
            {
              "mutation": "E2K",
              "source": 20,
              "target": 4
            },
            {
              "mutation": "a0g",
              "source": 20,
              "target": 16
            },
            {
              "mutation": "K2E",
              "source": 21,
              "target": 6
            },
            {
              "mutation": "g0a",
              "source": 21,
              "target": 2
            },
            {
              "mutation": "G4S",
              "source": 21,
              "target": 19
            },
            {
              "mutation": "A1G",
              "source": 21,
              "target": 8
            },
            {
              "mutation": "M3T",
              "source": 21,
              "target": 31
            },
            {
              "mutation": "a0g",
              "source": 22,
              "target": 11
            },
            {
              "mutation": "E2K",
              "source": 22,
              "target": 1
            },
            {
              "mutation": "T3M",
              "source": 22,
              "target": 3
            },
            {
              "mutation": "G4S",
              "source": 22,
              "target": 26
            },
            {
              "mutation": "G1A",
              "source": 22,
              "target": 9
            },
            {
              "mutation": "G1A",
              "source": 23,
              "target": 6
            },
            {
              "mutation": "M3T",
              "source": 23,
              "target": 11
            },
            {
              "mutation": "g0a",
              "source": 23,
              "target": 3
            },
            {
              "mutation": "E2K",
              "source": 23,
              "target": 8
            },
            {
              "mutation": "G4S",
              "source": 23,
              "target": 28
            },
            {
              "mutation": "M3T",
              "source": 24,
              "target": 1
            },
            {
              "mutation": "G1A",
              "source": 24,
              "target": 2
            },
            {
              "mutation": "K2E",
              "source": 24,
              "target": 3
            },
            {
              "mutation": "a0g",
              "source": 24,
              "target": 8
            },
            {
              "mutation": "G4S",
              "source": 24,
              "target": 14
            },
            {
              "mutation": "G4S",
              "source": 25,
              "target": 17
            },
            {
              "mutation": "T3M",
              "source": 25,
              "target": 6
            },
            {
              "mutation": "A1G",
              "source": 25,
              "target": 11
            },
            {
              "mutation": "E2K",
              "source": 25,
              "target": 31
            },
            {
              "mutation": "g0a",
              "source": 25,
              "target": 9
            },
            {
              "mutation": "G1A",
              "source": 26,
              "target": 0
            },
            {
              "mutation": "T3M",
              "source": 26,
              "target": 13
            },
            {
              "mutation": "a0g",
              "source": 26,
              "target": 7
            },
            {
              "mutation": "E2K",
              "source": 26,
              "target": 15
            },
            {
              "mutation": "S4G",
              "source": 26,
              "target": 22
            },
            {
              "mutation": "G4S",
              "source": 27,
              "target": 29
            },
            {
              "mutation": "A1G",
              "source": 27,
              "target": 1
            },
            {
              "mutation": "T3M",
              "source": 27,
              "target": 2
            },
            {
              "mutation": "K2E",
              "source": 27,
              "target": 9
            },
            {
              "mutation": "a0g",
              "source": 27,
              "target": 31
            },
            {
              "mutation": "g0a",
              "source": 28,
              "target": 13
            },
            {
              "mutation": "S4G",
              "source": 28,
              "target": 23
            },
            {
              "mutation": "M3T",
              "source": 28,
              "target": 7
            },
            {
              "mutation": "E2K",
              "source": 28,
              "target": 30
            },
            {
              "mutation": "G1A",
              "source": 28,
              "target": 16
            },
            {
              "mutation": "a0g",
              "source": 29,
              "target": 5
            },
            {
              "mutation": "K2E",
              "source": 29,
              "target": 0
            },
            {
              "mutation": "A1G",
              "source": 29,
              "target": 15
            },
            {
              "mutation": "S4G",
              "source": 29,
              "target": 27
            },
            {
              "mutation": "T3M",
              "source": 29,
              "target": 4
            },
            {
              "mutation": "M3T",
              "source": 30,
              "target": 18
            },
            {
              "mutation": "G1A",
              "source": 30,
              "target": 19
            },
            {
              "mutation": "S4G",
              "source": 30,
              "target": 8
            },
            {
              "mutation": "g0a",
              "source": 30,
              "target": 14
            },
            {
              "mutation": "K2E",
              "source": 30,
              "target": 28
            },
            {
              "mutation": "G4S",
              "source": 31,
              "target": 5
            },
            {
              "mutation": "K2E",
              "source": 31,
              "target": 25
            },
            {
              "mutation": "T3M",
              "source": 31,
              "target": 21
            },
            {
              "mutation": "g0a",
              "source": 31,
              "target": 27
            },
            {
              "mutation": "A1G",
              "source": 31,
              "target": 12
            }
          ],
          "graph": []
        }

    var trajectory = {
          "paths": [
            {
              "index": 1,
              "rank": 1,
              "nodes": [
                0,
                1,
                9,
                25,
                29,
                31
              ],
              "weight": 3.367295829986474
            },
            {
              "index": 2,
              "rank": 2,
              "nodes": [
                0,
                1,
                9,
                13,
                15,
                31
              ],
              "weight": 4.48863636973214
            },
            {
              "index": 3,
              "rank": 3,
              "nodes": [
                0,
                4,
                5,
                13,
                15,
                31
              ],
              "weight": 4.672828834461906
            },
            {
              "index": 4,
              "rank": 4,
              "nodes": [
                0,
                1,
                3,
                7,
                15,
                31
              ],
              "weight": 4.07753744390572
            },
            {
              "index": 5,
              "rank": 5,
              "nodes": [
                0,
                1,
                9,
                11,
                15,
                31
              ],
              "weight": 3.5553480614894135
            },
            {
              "index": 6,
              "rank": 6,
              "nodes": [
                0,
                1,
                5,
                13,
                15,
                31
              ],
              "weight": 6.0014148779611505
            },
            {
              "index": 7,
              "rank": 7,
              "nodes": [
                0,
                4,
                20,
                21,
                29,
                31
              ],
              "weight": 0
            },
            {
              "index": 8,
              "rank": 8,
              "nodes": [
                0,
                4,
                6,
                7,
                23,
                31
              ],
              "weight": 1.9459101490553132
            },
            {
              "index": 9,
              "rank": 9,
              "nodes": [
                0,
                1,
                3,
                7,
                23,
                31
              ],
              "weight": 3.6635616461296463
            },
            {
              "index": 10,
              "rank": 10,
              "nodes": [
                0,
                4,
                12,
                28,
                29,
                31
              ],
              "weight": 1.791759469228055
            },
            {
              "index": 11,
              "rank": 11,
              "nodes": [
                0,
                4,
                6,
                14,
                15,
                31
              ],
              "weight": 0.6931471805599453
            },
            {
              "index": 12,
              "rank": 12,
              "nodes": [
                0,
                4,
                20,
                28,
                29,
                31
              ],
              "weight": 1.0986122886681098
            },
            {
              "index": 13,
              "rank": 13,
              "nodes": [
                0,
                4,
                6,
                7,
                15,
                31
              ],
              "weight": 1.9459101490553132
            },
            {
              "index": 14,
              "rank": 14,
              "nodes": [
                0,
                4,
                12,
                13,
                15,
                31
              ],
              "weight": 3.332204510175204
            },
            {
              "index": 15,
              "rank": 15,
              "nodes": [
                0,
                1,
                9,
                25,
                29,
                13,
                15,
                31
              ],
              "weight": 2.1972245773362196
            },
            {
              "index": 16,
              "rank": 16,
              "nodes": [
                0,
                4,
                20,
                21,
                23,
                31
              ],
              "weight": 1.3862943611198906
            },
            {
              "index": 17,
              "rank": 17,
              "nodes": [
                0,
                1,
                3,
                19,
                23,
                31
              ],
              "weight": 4.418840607796598
            },
            {
              "index": 18,
              "rank": 18,
              "nodes": [
                0,
                1,
                3,
                11,
                15,
                31
              ],
              "weight": 4.477336814478207
            }
          ],
          "source": 0,
          "target": 31
        }

    var data = [data1];

    // Initializing backbone model for network app.
    this.network_model = new NetworkModel( data, trajectory );
    console.log(trajectory);

    // Initializing all backbone views.
    this.network_modal = new NetworkModal();
    this.network_viewer = new NetworkView( { "model" : this.network_model } );

});
