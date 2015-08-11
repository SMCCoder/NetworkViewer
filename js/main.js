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
          "directed": true,
          "nodes": [
            {
              "value": 1.0152510120727598,
              "binary": "00000",
              "id": 0,
              "genotype": "gAEMG",
              "errors": null,
              "phenotype": 1.0152510120727598
            },
            {
              "errors": null,
              "id": 1,
              "phenotype": 1.0556310301916847,
              "genotype": "gAEMS",
              "binary": "00001",
              "value": 1.0556310301916847
            },
            {
              "errors": null,
              "id": 2,
              "phenotype": 1.0068622184069904,
              "genotype": "gAETG",
              "binary": "00010",
              "value": 1.0068622184069904
            },
            {
              "errors": null,
              "id": 3,
              "phenotype": 1.0248139196992883,
              "genotype": "gAKMG",
              "binary": "00100",
              "value": 1.0248139196992883
            },
            {
              "errors": null,
              "id": 4,
              "phenotype": 1.0152510120727598,
              "genotype": "gGEMG",
              "binary": "01000",
              "value": 1.0152510120727598
            },
            {
              "errors": null,
              "id": 5,
              "phenotype": 1.0152510120727598,
              "genotype": "aAEMG",
              "binary": "10000",
              "value": 1.0152510120727598
            },
            {
              "errors": null,
              "id": 6,
              "phenotype": 1.0931151178699843,
              "genotype": "gAETS",
              "binary": "00011",
              "value": 1.0931151178699843
            },
            {
              "errors": null,
              "id": 7,
              "phenotype": 1.113243817588169,
              "genotype": "gAKMS",
              "binary": "00101",
              "value": 1.113243817588169
            },
            {
              "errors": null,
              "id": 8,
              "phenotype": 1.0786314673865984,
              "genotype": "gGEMS",
              "binary": "01001",
              "value": 1.0786314673865984
            },
            {
              "errors": null,
              "id": 9,
              "phenotype": 1.0556310301916847,
              "genotype": "aAEMS",
              "binary": "10001",
              "value": 1.0556310301916847
            },
            {
              "errors": null,
              "id": 10,
              "phenotype": 1.0334809063896502,
              "genotype": "gAKTG",
              "binary": "00110",
              "value": 1.0334809063896502
            },
            {
              "errors": null,
              "id": 11,
              "phenotype": 1.0556310301916847,
              "genotype": "gGETG",
              "binary": "01010",
              "value": 1.0556310301916847
            },
            {
              "errors": null,
              "id": 12,
              "phenotype": 1.0152510120727598,
              "genotype": "aAETG",
              "binary": "10010",
              "value": 1.0152510120727598
            },
            {
              "errors": null,
              "id": 13,
              "phenotype": 1.0556310301916847,
              "genotype": "gGKMG",
              "binary": "01100",
              "value": 1.0556310301916847
            },
            {
              "errors": null,
              "id": 14,
              "phenotype": 1.0334809063896502,
              "genotype": "aAKMG",
              "binary": "10100",
              "value": 1.0334809063896502
            },
            {
              "errors": null,
              "id": 15,
              "phenotype": 1.0152510120727598,
              "genotype": "aGEMG",
              "binary": "11000",
              "value": 1.0152510120727598
            },
            {
              "errors": null,
              "id": 16,
              "phenotype": 1.113243817588169,
              "genotype": "gAKTS",
              "binary": "00111",
              "value": 1.113243817588169
            },
            {
              "errors": null,
              "id": 17,
              "phenotype": 1.113243817588169,
              "genotype": "gGETS",
              "binary": "01011",
              "value": 1.113243817588169
            },
            {
              "errors": null,
              "id": 18,
              "phenotype": 1.113243817588169,
              "genotype": "aAETS",
              "binary": "10011",
              "value": 1.113243817588169
            },
            {
              "errors": null,
              "id": 19,
              "phenotype": 1.1797097438793012,
              "genotype": "gGKMS",
              "binary": "01101",
              "value": 1.1797097438793012
            },
            {
              "errors": null,
              "id": 20,
              "phenotype": 1.113243817588169,
              "genotype": "aAKMS",
              "binary": "10101",
              "value": 1.113243817588169
            },
            {
              "errors": null,
              "id": 21,
              "phenotype": 1.113243817588169,
              "genotype": "aGEMS",
              "binary": "11001",
              "value": 1.113243817588169
            },
            {
              "errors": null,
              "id": 22,
              "phenotype": 1.044009502834679,
              "genotype": "gGKTG",
              "binary": "01110",
              "value": 1.044009502834679
            },
            {
              "errors": null,
              "id": 23,
              "phenotype": 1.0334809063896502,
              "genotype": "aAKTG",
              "binary": "10110",
              "value": 1.0334809063896502
            },
            {
              "errors": null,
              "id": 24,
              "phenotype": 1.0152510120727598,
              "genotype": "aGETG",
              "binary": "11010",
              "value": 1.0152510120727598
            },
            {
              "errors": null,
              "id": 25,
              "phenotype": 1.0931151178699843,
              "genotype": "aGKMG",
              "binary": "11100",
              "value": 1.0931151178699843
            },
            {
              "errors": null,
              "id": 26,
              "phenotype": 1.2233083203139679,
              "genotype": "gGKTS",
              "binary": "01111",
              "value": 1.2233083203139679
            },
            {
              "errors": null,
              "id": 27,
              "phenotype": 1.1797097438793012,
              "genotype": "aAKTS",
              "binary": "10111",
              "value": 1.1797097438793012
            },
            {
              "errors": null,
              "id": 28,
              "phenotype": 1.113243817588169,
              "genotype": "aGETS",
              "binary": "11011",
              "value": 1.113243817588169
            },
            {
              "errors": null,
              "id": 29,
              "phenotype": 1.1386104400539243,
              "genotype": "aGKMS",
              "binary": "11101",
              "value": 1.1386104400539243
            },
            {
              "errors": null,
              "id": 30,
              "phenotype": 1.0556310301916847,
              "genotype": "aGKTG",
              "binary": "11110",
              "value": 1.0556310301916847
            },
            {
              "errors": null,
              "id": 31,
              "phenotype": 1.3197838706452887,
              "genotype": "aGKTS",
              "binary": "11111",
              "value": 1.3197838706452887
            }
          ],
          "links": [
            {
              "target": 1,
              "mutation": "G4S",
              "source": 0
            },
            {
              "target": 2,
              "mutation": "M3T",
              "source": 0
            },
            {
              "target": 3,
              "mutation": "E2K",
              "source": 0
            },
            {
              "target": 4,
              "mutation": "A1G",
              "source": 0
            },
            {
              "target": 5,
              "mutation": "g0a",
              "source": 0
            },
            {
              "target": 8,
              "mutation": "A1G",
              "source": 1
            },
            {
              "target": 9,
              "mutation": "g0a",
              "source": 1
            },
            {
              "target": 0,
              "mutation": "S4G",
              "source": 1
            },
            {
              "target": 6,
              "mutation": "M3T",
              "source": 1
            },
            {
              "target": 7,
              "mutation": "E2K",
              "source": 1
            },
            {
              "target": 0,
              "mutation": "T3M",
              "source": 2
            },
            {
              "target": 10,
              "mutation": "E2K",
              "source": 2
            },
            {
              "target": 11,
              "mutation": "A1G",
              "source": 2
            },
            {
              "target": 12,
              "mutation": "g0a",
              "source": 2
            },
            {
              "target": 6,
              "mutation": "G4S",
              "source": 2
            },
            {
              "target": 0,
              "mutation": "K2E",
              "source": 3
            },
            {
              "target": 10,
              "mutation": "M3T",
              "source": 3
            },
            {
              "target": 13,
              "mutation": "A1G",
              "source": 3
            },
            {
              "target": 14,
              "mutation": "g0a",
              "source": 3
            },
            {
              "target": 7,
              "mutation": "G4S",
              "source": 3
            },
            {
              "target": 0,
              "mutation": "G1A",
              "source": 4
            },
            {
              "target": 8,
              "mutation": "G4S",
              "source": 4
            },
            {
              "target": 11,
              "mutation": "M3T",
              "source": 4
            },
            {
              "target": 13,
              "mutation": "E2K",
              "source": 4
            },
            {
              "target": 15,
              "mutation": "g0a",
              "source": 4
            },
            {
              "target": 0,
              "mutation": "a0g",
              "source": 5
            },
            {
              "target": 9,
              "mutation": "G4S",
              "source": 5
            },
            {
              "target": 12,
              "mutation": "M3T",
              "source": 5
            },
            {
              "target": 14,
              "mutation": "E2K",
              "source": 5
            },
            {
              "target": 15,
              "mutation": "A1G",
              "source": 5
            },
            {
              "target": 16,
              "mutation": "E2K",
              "source": 6
            },
            {
              "target": 17,
              "mutation": "A1G",
              "source": 6
            },
            {
              "target": 18,
              "mutation": "g0a",
              "source": 6
            },
            {
              "target": 2,
              "mutation": "S4G",
              "source": 6
            },
            {
              "target": 1,
              "mutation": "T3M",
              "source": 6
            },
            {
              "target": 16,
              "mutation": "M3T",
              "source": 7
            },
            {
              "target": 1,
              "mutation": "K2E",
              "source": 7
            },
            {
              "target": 19,
              "mutation": "A1G",
              "source": 7
            },
            {
              "target": 20,
              "mutation": "g0a",
              "source": 7
            },
            {
              "target": 3,
              "mutation": "S4G",
              "source": 7
            },
            {
              "target": 1,
              "mutation": "G1A",
              "source": 8
            },
            {
              "target": 19,
              "mutation": "E2K",
              "source": 8
            },
            {
              "target": 4,
              "mutation": "S4G",
              "source": 8
            },
            {
              "target": 21,
              "mutation": "g0a",
              "source": 8
            },
            {
              "target": 17,
              "mutation": "M3T",
              "source": 8
            },
            {
              "target": 1,
              "mutation": "a0g",
              "source": 9
            },
            {
              "target": 18,
              "mutation": "M3T",
              "source": 9
            },
            {
              "target": 20,
              "mutation": "E2K",
              "source": 9
            },
            {
              "target": 21,
              "mutation": "A1G",
              "source": 9
            },
            {
              "target": 5,
              "mutation": "S4G",
              "source": 9
            },
            {
              "target": 16,
              "mutation": "G4S",
              "source": 10
            },
            {
              "target": 2,
              "mutation": "K2E",
              "source": 10
            },
            {
              "target": 3,
              "mutation": "T3M",
              "source": 10
            },
            {
              "target": 22,
              "mutation": "A1G",
              "source": 10
            },
            {
              "target": 23,
              "mutation": "g0a",
              "source": 10
            },
            {
              "target": 24,
              "mutation": "g0a",
              "source": 11
            },
            {
              "target": 17,
              "mutation": "G4S",
              "source": 11
            },
            {
              "target": 2,
              "mutation": "G1A",
              "source": 11
            },
            {
              "target": 4,
              "mutation": "T3M",
              "source": 11
            },
            {
              "target": 22,
              "mutation": "E2K",
              "source": 11
            },
            {
              "target": 24,
              "mutation": "A1G",
              "source": 12
            },
            {
              "target": 2,
              "mutation": "a0g",
              "source": 12
            },
            {
              "target": 18,
              "mutation": "G4S",
              "source": 12
            },
            {
              "target": 5,
              "mutation": "T3M",
              "source": 12
            },
            {
              "target": 23,
              "mutation": "E2K",
              "source": 12
            },
            {
              "target": 19,
              "mutation": "G4S",
              "source": 13
            },
            {
              "target": 25,
              "mutation": "g0a",
              "source": 13
            },
            {
              "target": 3,
              "mutation": "G1A",
              "source": 13
            },
            {
              "target": 4,
              "mutation": "K2E",
              "source": 13
            },
            {
              "target": 22,
              "mutation": "M3T",
              "source": 13
            },
            {
              "target": 25,
              "mutation": "A1G",
              "source": 14
            },
            {
              "target": 3,
              "mutation": "a0g",
              "source": 14
            },
            {
              "target": 20,
              "mutation": "G4S",
              "source": 14
            },
            {
              "target": 5,
              "mutation": "K2E",
              "source": 14
            },
            {
              "target": 23,
              "mutation": "M3T",
              "source": 14
            },
            {
              "target": 24,
              "mutation": "M3T",
              "source": 15
            },
            {
              "target": 25,
              "mutation": "E2K",
              "source": 15
            },
            {
              "target": 4,
              "mutation": "a0g",
              "source": 15
            },
            {
              "target": 5,
              "mutation": "G1A",
              "source": 15
            },
            {
              "target": 21,
              "mutation": "G4S",
              "source": 15
            },
            {
              "target": 26,
              "mutation": "A1G",
              "source": 16
            },
            {
              "target": 27,
              "mutation": "g0a",
              "source": 16
            },
            {
              "target": 10,
              "mutation": "S4G",
              "source": 16
            },
            {
              "target": 6,
              "mutation": "K2E",
              "source": 16
            },
            {
              "target": 7,
              "mutation": "T3M",
              "source": 16
            },
            {
              "target": 8,
              "mutation": "T3M",
              "source": 17
            },
            {
              "target": 26,
              "mutation": "E2K",
              "source": 17
            },
            {
              "target": 11,
              "mutation": "S4G",
              "source": 17
            },
            {
              "target": 28,
              "mutation": "g0a",
              "source": 17
            },
            {
              "target": 6,
              "mutation": "G1A",
              "source": 17
            },
            {
              "target": 9,
              "mutation": "T3M",
              "source": 18
            },
            {
              "target": 27,
              "mutation": "E2K",
              "source": 18
            },
            {
              "target": 28,
              "mutation": "A1G",
              "source": 18
            },
            {
              "target": 6,
              "mutation": "a0g",
              "source": 18
            },
            {
              "target": 12,
              "mutation": "S4G",
              "source": 18
            },
            {
              "target": 8,
              "mutation": "K2E",
              "source": 19
            },
            {
              "target": 26,
              "mutation": "M3T",
              "source": 19
            },
            {
              "target": 13,
              "mutation": "S4G",
              "source": 19
            },
            {
              "target": 29,
              "mutation": "g0a",
              "source": 19
            },
            {
              "target": 7,
              "mutation": "G1A",
              "source": 19
            },
            {
              "target": 9,
              "mutation": "K2E",
              "source": 20
            },
            {
              "target": 27,
              "mutation": "M3T",
              "source": 20
            },
            {
              "target": 29,
              "mutation": "A1G",
              "source": 20
            },
            {
              "target": 14,
              "mutation": "S4G",
              "source": 20
            },
            {
              "target": 7,
              "mutation": "a0g",
              "source": 20
            },
            {
              "target": 8,
              "mutation": "a0g",
              "source": 21
            },
            {
              "target": 9,
              "mutation": "G1A",
              "source": 21
            },
            {
              "target": 28,
              "mutation": "M3T",
              "source": 21
            },
            {
              "target": 29,
              "mutation": "E2K",
              "source": 21
            },
            {
              "target": 15,
              "mutation": "S4G",
              "source": 21
            },
            {
              "target": 26,
              "mutation": "G4S",
              "source": 22
            },
            {
              "target": 10,
              "mutation": "G1A",
              "source": 22
            },
            {
              "target": 11,
              "mutation": "K2E",
              "source": 22
            },
            {
              "target": 13,
              "mutation": "T3M",
              "source": 22
            },
            {
              "target": 30,
              "mutation": "g0a",
              "source": 22
            },
            {
              "target": 10,
              "mutation": "a0g",
              "source": 23
            },
            {
              "target": 27,
              "mutation": "G4S",
              "source": 23
            },
            {
              "target": 12,
              "mutation": "K2E",
              "source": 23
            },
            {
              "target": 14,
              "mutation": "T3M",
              "source": 23
            },
            {
              "target": 30,
              "mutation": "A1G",
              "source": 23
            },
            {
              "target": 28,
              "mutation": "G4S",
              "source": 24
            },
            {
              "target": 11,
              "mutation": "a0g",
              "source": 24
            },
            {
              "target": 12,
              "mutation": "G1A",
              "source": 24
            },
            {
              "target": 30,
              "mutation": "E2K",
              "source": 24
            },
            {
              "target": 15,
              "mutation": "T3M",
              "source": 24
            },
            {
              "target": 30,
              "mutation": "M3T",
              "source": 25
            },
            {
              "target": 29,
              "mutation": "G4S",
              "source": 25
            },
            {
              "target": 13,
              "mutation": "a0g",
              "source": 25
            },
            {
              "target": 14,
              "mutation": "G1A",
              "source": 25
            },
            {
              "target": 15,
              "mutation": "K2E",
              "source": 25
            },
            {
              "target": 16,
              "mutation": "G1A",
              "source": 26
            },
            {
              "target": 17,
              "mutation": "K2E",
              "source": 26
            },
            {
              "target": 19,
              "mutation": "T3M",
              "source": 26
            },
            {
              "target": 22,
              "mutation": "S4G",
              "source": 26
            },
            {
              "target": 31,
              "mutation": "g0a",
              "source": 26
            },
            {
              "target": 16,
              "mutation": "a0g",
              "source": 27
            },
            {
              "target": 18,
              "mutation": "K2E",
              "source": 27
            },
            {
              "target": 23,
              "mutation": "S4G",
              "source": 27
            },
            {
              "target": 20,
              "mutation": "T3M",
              "source": 27
            },
            {
              "target": 31,
              "mutation": "A1G",
              "source": 27
            },
            {
              "target": 24,
              "mutation": "S4G",
              "source": 28
            },
            {
              "target": 17,
              "mutation": "a0g",
              "source": 28
            },
            {
              "target": 18,
              "mutation": "G1A",
              "source": 28
            },
            {
              "target": 21,
              "mutation": "T3M",
              "source": 28
            },
            {
              "target": 31,
              "mutation": "E2K",
              "source": 28
            },
            {
              "target": 25,
              "mutation": "S4G",
              "source": 29
            },
            {
              "target": 19,
              "mutation": "a0g",
              "source": 29
            },
            {
              "target": 20,
              "mutation": "G1A",
              "source": 29
            },
            {
              "target": 21,
              "mutation": "K2E",
              "source": 29
            },
            {
              "target": 31,
              "mutation": "M3T",
              "source": 29
            },
            {
              "target": 24,
              "mutation": "K2E",
              "source": 30
            },
            {
              "target": 25,
              "mutation": "T3M",
              "source": 30
            },
            {
              "target": 31,
              "mutation": "G4S",
              "source": 30
            },
            {
              "target": 22,
              "mutation": "a0g",
              "source": 30
            },
            {
              "target": 23,
              "mutation": "G1A",
              "source": 30
            },
            {
              "target": 26,
              "mutation": "a0g",
              "source": 31
            },
            {
              "target": 27,
              "mutation": "G1A",
              "source": 31
            },
            {
              "target": 28,
              "mutation": "K2E",
              "source": 31
            },
            {
              "target": 29,
              "mutation": "T3M",
              "source": 31
            },
            {
              "target": 30,
              "mutation": "S4G",
              "source": 31
            }
          ],
          "multigraph": false,
          "graph": []
        }

    var trajectory = {
        "target": 31,
        "source": 0,
        "paths": [
          {
            "index": 1,
            "weight": 7.597396320212795,
            "rank": 1,
            "nodes": [
              0,
              1,
              7,
              19,
              26,
              31
            ]
          },
          {
            "index": 2,
            "weight": 5.58724865840025,
            "rank": 2,
            "nodes": [
              0,
              1,
              6,
              16,
              26,
              31
            ]
          },
          {
            "index": 3,
            "weight": 2.1972245773362196,
            "rank": 3,
            "nodes": [
              0,
              3,
              10,
              22,
              26,
              31
            ]
          },
          {
            "index": 4,
            "weight": 6.150602768446279,
            "rank": 4,
            "nodes": [
              0,
              1,
              8,
              19,
              26,
              31
            ]
          },
          {
            "index": 5,
            "weight": 3.4657359027997265,
            "rank": 5,
            "nodes": [
              0,
              3,
              10,
              16,
              26,
              31
            ]
          },
          {
            "index": 6,
            "weight": 5.8971538676367405,
            "rank": 6,
            "nodes": [
              0,
              1,
              6,
              18,
              27,
              31
            ]
          },
          {
            "index": 7,
            "weight": 2.9444389791664403,
            "rank": 7,
            "nodes": [
              0,
              3,
              14,
              25,
              29,
              31
            ]
          },
          {
            "index": 8,
            "weight": 6.0473721790462776,
            "rank": 8,
            "nodes": [
              0,
              1,
              6,
              17,
              26,
              31
            ]
          },
          {
            "index": 9,
            "weight": 4.969813299576001,
            "rank": 9,
            "nodes": [
              0,
              1,
              8,
              21,
              29,
              31
            ]
          },
          {
            "index": 10,
            "weight": 6.429719478039138,
            "rank": 10,
            "nodes": [
              0,
              3,
              7,
              19,
              26,
              31
            ]
          },
          {
            "index": 11,
            "weight": 3.5553480614894135,
            "rank": 11,
            "nodes": [
              0,
              3,
              13,
              25,
              29,
              31
            ]
          },
          {
            "index": 12,
            "weight": 5.093750200806762,
            "rank": 12,
            "nodes": [
              0,
              1,
              6,
              16,
              27,
              31
            ]
          },
          {
            "index": 13,
            "weight": 0,
            "rank": 13,
            "nodes": [
              0,
              3,
              10,
              22,
              30,
              31
            ]
          },
          {
            "index": 14,
            "weight": 5.198497031265826,
            "rank": 14,
            "nodes": [
              0,
              3,
              13,
              19,
              26,
              31
            ]
          },
          {
            "index": 15,
            "weight": 3.4339872044851463,
            "rank": 15,
            "nodes": [
              0,
              3,
              14,
              20,
              27,
              31
            ]
          },
          {
            "index": 16,
            "weight": 5.10594547390058,
            "rank": 16,
            "nodes": [
              0,
              1,
              8,
              17,
              26,
              31
            ]
          },
          {
            "index": 17,
            "weight": 2.3978952727983707,
            "rank": 17,
            "nodes": [
              0,
              3,
              14,
              20,
              29,
              31
            ]
          },
          {
            "index": 18,
            "weight": 3.091042453358316,
            "rank": 18,
            "nodes": [
              0,
              3,
              10,
              16,
              27,
              31
            ]
          }
        ]
        }

    var data = [data1];

    // Initializing backbone model for network app.
    this.network_model = new NetworkModel( data, trajectory );
    //console.log(trajectory);

    // Initializing all backbone views.
    this.network_modal = new NetworkModal();
    this.network_viewer = new NetworkView( { "model" : this.network_model } );

});
