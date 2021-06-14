 var options = {
          series: [{
          name: 'Kenaikan',
          data: [0,0.47,0,0,0,0,0,0,0,0,2.14,0,0,0.48,0,1.35,0,0,3.29,0,0,0,0,0,2.49,0,0,0,0,0.19,0,0,0,0,1.61,0,0,0
          ]
        },
        {
          name: 'Penurunan',
          data: [-12.82,0,-1.72,-2.52,-7.64,-12.51,-1.52,-1.63,-2.26,-5.91,0,-10.64,-3,0,-15.28,0,-17.87,-33.18,0,-5.9,-1.04,-2.82,-0.27,-6.51,0,-6.83,-6.15,-1.87,-4.77,0,-16.17,-2.34,-19.45,-6.93,0,-5.85,-7.65,-5.94
          ]
        }
        ],
          chart: {
          type: 'bar',
          height: 600,
          stacked: true
        },
        colors: ['#FF4560', '#008FFB'],
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '80%',
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 1,
          colors: ["#fff"]
        },
        
        grid: {
          xaxis: {
            lines: {
              show: false
            }
          }
        },
        yaxis: {
          min: -40,
          max: 10,
          title: {
            // text: 'Age',
          },
        },
        tooltip: {
          shared: false,
          x: {
            formatter: function (val) {
              return val
            }
          },
          y: {
            formatter: function (val) {
              return Math.abs(val) + "%"
            }
          }
        },
        title: {
          text: 'Grafik Perubahan Periode II Terhadap Periode I (NO2)'
        },
        xaxis: {
          categories: ['Bangkalan','Banyuwangi','Blitar','Bojonegoro','Bondowoso',
          'Gresik','Jember','Jombang','Kediri','Kota Batu','Kota Blitar','Kota Kediri',
          'Kota Madiun','Kota Malang','Kota Mojokerto','Kota Pasuruan','Kota Probolinggo',
          'Kota Surabaya','Lamongan','Lumajang','Madiun','Magetan','Malang','Mojokerto',
          'Nganjuk','Ngawi','Pacitan','Pamekasan','Pasuruan','Ponorogo','Probolinggo',
          'Sampang','Sidoardjo','Situbondo','Sumenep','Trenggalek','Tuban','Tulung Agung'
          ],
          title: {
            text: 'Percent'
          },
          labels: {
            formatter: function (val) {
              return Math.abs(Math.round(val)) + "%"
            }
          }
        },
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();

var options = {
          series: [{
          name: 'Kenaikan',
          data: [15.62,1.82,0,3.26,3.1,0,3.09,5.46,0,0.13,0,0,0,0,5.51,0,8.08,36.78,2.81,0.73,0.69,4.96,0,4.43,0,3.81,6.64,4.11,1.01,0,2.06,4.99,15.85,7.83,1.58,2.72,5.85,0.41
          ]
        },
        {
          name: 'Penurunan',
          data: [0,0,-3.36,0,0,-0.4,0,0,-3.99,0,-12.1,-2.84,-3.04,-8.63,0,-9.01,0,0,0,0,0,0,-2.68,0,-1.78,0,0,0,0,-0.41,0,0,0,0,0,0,0,0
          ]
        }
        ],
          chart: {
          type: 'bar',
          height: 600,
          stacked: true
        },
        colors: ['#FF4560', '#008FFB'],
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '80%',
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 1,
          colors: ["#fff"]
        },
        
        grid: {
          xaxis: {
            lines: {
              show: false
            }
          }
        },
        yaxis: {
          min: -15,
          max: 40,
          title: {
            // text: 'Age',
          },
        },
        tooltip: {
          shared: false,
          x: {
            formatter: function (val) {
              return val
            }
          },
          y: {
            formatter: function (val) {
              return Math.abs(val) + "%"
            }
          }
        },
        title: {
          text: 'Grafik Perubahan Periode III Terhadap Periode II (NO2)'
        },
        xaxis: {
          categories: ['Bangkalan','Banyuwangi','Blitar','Bojonegoro','Bondowoso',
          'Gresik','Jember','Jombang','Kediri','Kota Batu','Kota Blitar','Kota Kediri',
          'Kota Madiun','Kota Malang','Kota Mojokerto','Kota Pasuruan','Kota Probolinggo',
          'Kota Surabaya','Lamongan','Lumajang','Madiun','Magetan','Malang','Mojokerto',
          'Nganjuk','Ngawi','Pacitan','Pamekasan','Pasuruan','Ponorogo','Probolinggo',
          'Sampang','Sidoardjo','Situbondo','Sumenep','Trenggalek','Tuban','Tulung Agung'
          ],
          title: {
            text: 'Percent'
          },
          labels: {
            formatter: function (val) {
              return Math.abs(Math.round(val)) + "%"
            }
          }
        },
        };

        var chart1 = new ApexCharts(document.querySelector("#chart1"), options);
        chart1.render();

 var options = {
            series: [{
            name: 'Kenaikan',
            data: [0,6.04,13.05,1.13,7.43,10.85,7.85,1.41,12.75,4.11,5.03,17.88,8.96,1.49,0,14.57,1.55,0,0,4.76,5.73,4.04,9.72,1.18,5.26,5.46,11.62,0,7.17,14.32,10.56,0,3.62,7.82,1.92,14.56,4.67,10.53
            ]
          },
          {
            name: 'Penurunan',
            data: [-1.55,0,0,0,0,0,0,0,0,0,0,0,0,0,-0.47,0,0,-2.16,-2.75,0,0,0,0,0,0,0,0,-4.7,0,0,0,-7.38,0,0,0,0,0,0
            ]
          }
          ],
            chart: {
            type: 'bar',
            height: 600,
            stacked: true
          },
          colors: ['#FF4560', '#008FFB'],
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: '80%',
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 1,
            colors: ["#fff"]
          },
          
          grid: {
            xaxis: {
              lines: {
                show: false
              }
            }
          },
          yaxis: {
            min: -10,
            max: 20,
            title: {
              // text: 'Age',
            },
          },
          tooltip: {
            shared: false,
            x: {
              formatter: function (val) {
                return val
              }
            },
            y: {
              formatter: function (val) {
                return Math.abs(val) + "%"
              }
            }
          },
          title: {
            text: 'Grafik Perubahan Periode IV Terhadap Periode III (NO2)'
          },
          xaxis: {
            categories: ['Bangkalan','Banyuwangi','Blitar','Bojonegoro','Bondowoso',
            'Gresik','Jember','Jombang','Kediri','Kota Batu','Kota Blitar','Kota Kediri',
            'Kota Madiun','Kota Malang','Kota Mojokerto','Kota Pasuruan','Kota Probolinggo',
            'Kota Surabaya','Lamongan','Lumajang','Madiun','Magetan','Malang','Mojokerto',
            'Nganjuk','Ngawi','Pacitan','Pamekasan','Pasuruan','Ponorogo','Probolinggo',
            'Sampang','Sidoardjo','Situbondo','Sumenep','Trenggalek','Tuban','Tulung Agung'
            ],
            title: {
              text: 'Percent'
            },
            labels: {
              formatter: function (val) {
                return Math.abs(Math.round(val)) + "%"
              }
            }
          },
          };
  
          var chart2 = new ApexCharts(document.querySelector("#chart2"), options);
          chart2.render();

var options = {
            series: [{
            name: 'Kenaikan',
            data: [1.67,4.08,0,7.53,5.15,4.84,5.35,11.69,3.93,8.34,11.34,7.84,3.25,22.62,19.92,34.78,20.66,0,15.62,9.57,5.5,0.92,2.8,8.31,8.94,4.63,0,23.87,12.42,0,16.21,18.58,5.23,0,7.19,0,2.37,0
            ]
          },
          {
            name: 'Penurunan',
            data: [0,0,-2.33,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-7.72,0,0,0,0,0,0,0,0,-4.03,0,0,-3.81,0,0,0,-0.29,0,-3.46,0,-1.43
            ]
          }
          ],
            chart: {
            type: 'bar',
            height: 600,
            stacked: true
          },
          colors: ['#FF4560', '#008FFB'],
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: '80%',
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 1,
            colors: ["#fff"]
          },
          
          grid: {
            xaxis: {
              lines: {
                show: false
              }
            }
          },
          yaxis: {
            min: -10,
            max: 40,
            title: {
              // text: 'Age',
            },
          },
          tooltip: {
            shared: false,
            x: {
              formatter: function (val) {
                return val
              }
            },
            y: {
              formatter: function (val) {
                return Math.abs(val) + "%"
              }
            }
          },
          title: {
            text: 'Grafik Perubahan Periode V Terhadap Periode IV (NO2)'
          },
          xaxis: {
            categories: ['Bangkalan','Banyuwangi','Blitar','Bojonegoro','Bondowoso',
            'Gresik','Jember','Jombang','Kediri','Kota Batu','Kota Blitar','Kota Kediri',
            'Kota Madiun','Kota Malang','Kota Mojokerto','Kota Pasuruan','Kota Probolinggo',
            'Kota Surabaya','Lamongan','Lumajang','Madiun','Magetan','Malang','Mojokerto',
            'Nganjuk','Ngawi','Pacitan','Pamekasan','Pasuruan','Ponorogo','Probolinggo',
            'Sampang','Sidoardjo','Situbondo','Sumenep','Trenggalek','Tuban','Tulung Agung'
            ],
            title: {
              text: 'Percent'
            },
            labels: {
              formatter: function (val) {
                return Math.abs(Math.round(val)) + "%"
              }
            }
          },
          };
  
          var chart3 = new ApexCharts(document.querySelector("#chart3"), options);
          chart3.render();

          var options = {
            series: [{
            name: 'Kenaikan',
            data: [14.82,12.22,10.61,12.92,12.84,10.35,13.84,12.91,12.31,18.53,7.08,13.48,13.63,14.48,12.98,15.23,11.06,8.9,11.22,12.64,13.49,14.5,12.98,11.68,14.84,12.22,13.03,15.05,12.58,12.9,13.63,15.31,7.74,13.43,12.25,10.83,13.43,9.75
            ]
          },
          {
            name: 'Penurunan',
            data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
            ]
          }
          ],
            chart: {
            type: 'bar',
            height: 600,
            stacked: true
          },
          colors: ['#FF4560', '#008FFB'],
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: '80%',
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 1,
            colors: ["#fff"]
          },
          
          grid: {
            xaxis: {
              lines: {
                show: false
              }
            }
          },
          yaxis: {
            min: -5,
            max: 20,
            title: {
              // text: 'Age',
            },
          },
          tooltip: {
            shared: false,
            x: {
              formatter: function (val) {
                return val
              }
            },
            y: {
              formatter: function (val) {
                return Math.abs(val) + "%"
              }
            }
          },
          title: {
            text: 'Grafik Perubahan Periode II Terhadap Periode I (CO)'
          },
          xaxis: {
            categories: ['Bangkalan','Banyuwangi','Blitar','Bojonegoro','Bondowoso',
            'Gresik','Jember','Jombang','Kediri','Kota Batu','Kota Blitar','Kota Kediri',
            'Kota Madiun','Kota Malang','Kota Mojokerto','Kota Pasuruan','Kota Probolinggo',
            'Kota Surabaya','Lamongan','Lumajang','Madiun','Magetan','Malang','Mojokerto',
            'Nganjuk','Ngawi','Pacitan','Pamekasan','Pasuruan','Ponorogo','Probolinggo',
            'Sampang','Sidoardjo','Situbondo','Sumenep','Trenggalek','Tuban','Tulung Agung'
            ],
            title: {
              text: 'Percent'
            },
            labels: {
              formatter: function (val) {
                return Math.abs(Math.round(val)) + "%"
              }
            }
          },
          };
  
          var chart4 = new ApexCharts(document.querySelector("#chart4"), options);
          chart4.render();
  
  var options = {
            series: [{
            name: 'Kenaikan',
            data: [0,0,0,0,0.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
            ]
          },
          {
            name: 'Penurunan',
            data: [-4.69,-0.15,-6.55,-7.37,0,-5.56,-3.46,-4.63,-7.08,-5.14,-7.94,-8.27,-8.65,-4.97,-4.96,-8.31,-2.72,-2.73,-5.01,-3.77,-6.45,-7.11,-5.59,-2.33,-7.65,-4.56,-6.12,-3.36,-4.24,-5.7,-2.22,-3.73,-2.49,-0.46,-2.33,-4.03,-7.23,-5.98
            ]
          }
          ],
            chart: {
            type: 'bar',
            height: 600,
            stacked: true
          },
          colors: ['#FF4560', '#008FFB'],
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: '80%',
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 1,
            colors: ["#fff"]
          },
          
          grid: {
            xaxis: {
              lines: {
                show: false
              }
            }
          },
          yaxis: {
            min: -10,
            max: 5,
            title: {
              // text: 'Age',
            },
          },
          tooltip: {
            shared: false,
            x: {
              formatter: function (val) {
                return val
              }
            },
            y: {
              formatter: function (val) {
                return Math.abs(val) + "%"
              }
            }
          },
          title: {
            text: 'Grafik Perubahan Periode III Terhadap Periode II (CO)'
          },
          xaxis: {
            categories: ['Bangkalan','Banyuwangi','Blitar','Bojonegoro','Bondowoso',
            'Gresik','Jember','Jombang','Kediri','Kota Batu','Kota Blitar','Kota Kediri',
            'Kota Madiun','Kota Malang','Kota Mojokerto','Kota Pasuruan','Kota Probolinggo',
            'Kota Surabaya','Lamongan','Lumajang','Madiun','Magetan','Malang','Mojokerto',
            'Nganjuk','Ngawi','Pacitan','Pamekasan','Pasuruan','Ponorogo','Probolinggo',
            'Sampang','Sidoardjo','Situbondo','Sumenep','Trenggalek','Tuban','Tulung Agung'
            ],
            title: {
              text: 'Percent'
            },
            labels: {
              formatter: function (val) {
                return Math.abs(Math.round(val)) + "%"
              }
            }
          },
          };
  
          var chart5 = new ApexCharts(document.querySelector("#chart5"), options);
          chart5.render();
  
   var options = {
              series: [{
              name: 'Kenaikan',
              data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
              ]
            },
            {
              name: 'Penurunan',
              data: [-5.58,-11.56,-7.52,-6.06,-11.61,-5.59,-10.12,-7.01,-5.68,-6.77,-2.93,-5.21,-5.06,-5.53,-7.54,-5.74,-3.85,-1.26,-7.27,-8.58,-6.54,-7.77,-7.5,-6.91,-6.13,-7.71,-8.63,-9.29,-8.58,-8.39,-10.69,-6.65,-3.72,-9.86,-9.56,-9.65,-5.05,-6.84
              ]
            }
            ],
              chart: {
              type: 'bar',
              height: 600,
              stacked: true
            },
            colors: ['#FF4560', '#008FFB'],
            plotOptions: {
              bar: {
                horizontal: true,
                barHeight: '80%',
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              width: 1,
              colors: ["#fff"]
            },
            
            grid: {
              xaxis: {
                lines: {
                  show: false
                }
              }
            },
            yaxis: {
              min: -15,
              max: 5,
              title: {
                // text: 'Age',
              },
            },
            tooltip: {
              shared: false,
              x: {
                formatter: function (val) {
                  return val
                }
              },
              y: {
                formatter: function (val) {
                  return Math.abs(val) + "%"
                }
              }
            },
            title: {
              text: 'Grafik Perubahan Periode IV Terhadap Periode III (CO)'
            },
            xaxis: {
              categories: ['Bangkalan','Banyuwangi','Blitar','Bojonegoro','Bondowoso',
              'Gresik','Jember','Jombang','Kediri','Kota Batu','Kota Blitar','Kota Kediri',
              'Kota Madiun','Kota Malang','Kota Mojokerto','Kota Pasuruan','Kota Probolinggo',
              'Kota Surabaya','Lamongan','Lumajang','Madiun','Magetan','Malang','Mojokerto',
              'Nganjuk','Ngawi','Pacitan','Pamekasan','Pasuruan','Ponorogo','Probolinggo',
              'Sampang','Sidoardjo','Situbondo','Sumenep','Trenggalek','Tuban','Tulung Agung'
              ],
              title: {
                text: 'Percent'
              },
              labels: {
                formatter: function (val) {
                  return Math.abs(Math.round(val)) + "%"
                }
              }
            },
            };
    
            var chart6 = new ApexCharts(document.querySelector("#chart6"), options);
            chart6.render();
  
  var options = {
              series: [{
              name: 'Kenaikan',
              data: [0,0.12,0.77,5.04,0.18,4.71,0.91,3.09,4.45,3.4,0,4.73,2.52,5.82,6.79,11.64,0.88,0,6.27,0,1.64,0.14,1.52,2.21,3.1,2.29,1.35,0,4.8,0,1.73,0,2.46,0,0,0,3.11,0
              ]
            },
            {
              name: 'Penurunan',
              data: [-2.61,0,0,0,0,0,0,0,0,0,-1.57,0,0,0,0,0,0,-4.34,0,-0.08,0,0,0,0,0,0,0,-1.63,0,-0.39,0,-1.71,0,-1.46,-1.54,-0.46,0,-1.07
              ]
            }
            ],
              chart: {
              type: 'bar',
              height: 600,
              stacked: true
            },
            colors: ['#FF4560', '#008FFB'],
            plotOptions: {
              bar: {
                horizontal: true,
                barHeight: '80%',
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              width: 1,
              colors: ["#fff"]
            },
            
            grid: {
              xaxis: {
                lines: {
                  show: false
                }
              }
            },
            yaxis: {
              min: -10,
              max: 15,
              title: {
                // text: 'Age',
              },
            },
            tooltip: {
              shared: false,
              x: {
                formatter: function (val) {
                  return val
                }
              },
              y: {
                formatter: function (val) {
                  return Math.abs(val) + "%"
                }
              }
            },
            title: {
              text: 'Grafik Perubahan Periode V Terhadap Periode IV (CO)'
            },
            xaxis: {
              categories: ['Bangkalan','Banyuwangi','Blitar','Bojonegoro','Bondowoso',
              'Gresik','Jember','Jombang','Kediri','Kota Batu','Kota Blitar','Kota Kediri',
              'Kota Madiun','Kota Malang','Kota Mojokerto','Kota Pasuruan','Kota Probolinggo',
              'Kota Surabaya','Lamongan','Lumajang','Madiun','Magetan','Malang','Mojokerto',
              'Nganjuk','Ngawi','Pacitan','Pamekasan','Pasuruan','Ponorogo','Probolinggo',
              'Sampang','Sidoardjo','Situbondo','Sumenep','Trenggalek','Tuban','Tulung Agung'
              ],
              title: {
                text: 'Percent'
              },
              labels: {
                formatter: function (val) {
                  return Math.abs(Math.round(val)) + "%"
                }
              }
            },
            };
    
            var chart7 = new ApexCharts(document.querySelector("#chart7"), options);
            chart7.render();