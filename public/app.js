console.log("hello world");
import * as d3 from "d3";
import axios from "axios";
// eslint-disable-next-line no-undef
//console.log('app loaded')
// var circle = d3.selectAll('circle');

// circle.style('fill', 'purple');

// var dataset = {
//   children:
//   [{Name: 'Olives', Count: 4319},
//       {Name: 'Tea', Count: 4159},
//       {Name: 'Mashed Potatoes', Count: 2583},
//       {Name: 'Boiled Potatoes', Count: 2074},
//       {Name: 'Milk', Count: 1894},
//       {Name: 'Chicken Salad', Count: 1809},
//       {Name: 'Vanilla Ice Cream', Count: 1713},
//       {Name: 'Cocoa', Count: 1636},
//       {Name: 'Lettuce Salad', Count: 1566},
//       {Name: 'Lobster Salad', Count: 1511},
//       {Name: 'Chocolate', Count: 1489},
//       {Name: 'Apple Pie', Count: 1487},
//       {Name: 'Orange Juice', Count: 1423},
//       {Name: 'American Cheese', Count: 1372},
//       {Name: 'Green Peas', Count: 1341},
//       {Name: 'Assorted Cakes', Count: 1331},
//       {Name: 'French Fried Potatoes', Count: 1328},
//       {Name: 'Potato Salad', Count: 1306},
//       {Name: 'Baked Potatoes', Count: 1293},
//       {Name: 'Roquefort', Count: 1273},
//       {Name: 'Stewed Prunes', Count: 1268}]
// };

//  const food ={
//    children:
//       [
//         {Type: 'Children': }
//       ]
//  }

// var dataset= [1, 2, 3, 20, 45];

// const bubbleGraph = function(){
//   let width = 600;
//   let height=400;

// }

// d3.select('#canvas').append("circle").attr("cx", dataset[i].name).attr("cy", dataset[i].count).attr("r", 5).attr("fill", "purple");

// const svgContainer = d3.select("#canvas").append("svg").attr("width", 1000).attr("height", 800)

// const circles = svgContainer.selectAll("circle").data(dataset).enter()
// .append("circle")
// .attr("cx", function(item, index){return 25 + (25* index);})
// .attr("cy", function(item, index){return 25 +(25 * index); })
// .attr("r", 10)
// .attr("fill", "purple")

// circles.exit().remove();

// const nodes = d3.hierarchy(circles)
// .sum(function(d){
//   return d.Count;
// })

// const packed = d3.pack(nodes).size(600, 600).padding(1.5)

// const dataset = {
//   "children": [{"Name":"Olives","Count":4319},
//       {"Name":"Tea","Count":4159},
//       {"Name":"Mashed Potatoes","Count":2583},
//       {"Name":"Boiled Potatoes","Count":2074},
//       {"Name":"Milk","Count":1894},
//       {"Name":"Chicken Salad","Count":1809},
//       {"Name":"Vanilla Ice Cream","Count":1713},
//       {"Name":"Cocoa","Count":1636},
//       {"Name":"Lettuce Salad","Count":1566},
//       {"Name":"Lobster Salad","Count":1511},
//       {"Name":"Chocolate","Count":1489},
//       {"Name":"Apple Pie","Count":1487},
//       {"Name":"Orange Juice","Count":1423},
//       {"Name":"American Cheese","Count":1372},
//       {"Name":"Green Peas","Count":1341},
//       {"Name":"Assorted Cakes","Count":1331},
//       {"Name":"French Fried Potatoes","Count":1328},
//       {"Name":"Potato Salad","Count":1306},
//       {"Name":"Baked Potatoes","Count":1293},
//       {"Name":"Roquefort","Count":1273},
//       {"Name":"Stewed Prunes","Count":1268}]
// };

// var diameter = 600;
// //var color = d3.scaleOrdinal(d3.schemeCategory20);
// var color = d3.schemeCategory10;

// var bubble = d3.pack(dataset)
//   .size([diameter, diameter])
//   .padding(5);

// var svg = d3.select("body")
//   .append("svg")
//   .attr("width", diameter)
//   .attr("height", diameter)
//   .attr("class", "bubble");

//   var nodes = d3.hierarchy(dataset)
//             .sum(function(d) { return d.Count; });

//             var node = svg.selectAll(".node")
//             .data(bubble(nodes).descendants())
//             .enter()
//             .filter(function(d){
//                 return  !d.children
//             })
//             .append("g")
//             .attr("class", "node")
//             .attr("transform", function(d) {
//                 return "translate(" + d.x + "," + d.y + ")";
//             });

//         node.append("title")
//             .text(function(d) {
//                 return d.Name + ": " + d.Count;
//             });

//         node.append("circle")
//             .attr("r", function(d) {
//                 return d.r;
//             })
//             .style("fill",
//             // function(d,i) {
//             //     return color(i);
//             "blue"
//             );

//         node.append("text")
//             .attr("dy", ".2em")
//             .style("text-anchor", "middle")
//             .text(function(d) {
//                 return d.data.Name.substring(0, d.r / 3);
//             })
//             .attr("font-family", "sans-serif")
//             .attr("font-size", function(d){
//                 return d.r/5;
//             })
//             .attr("fill", "white");

//         node.append("text")
//             .attr("dy", "1.3em")
//             .style("text-anchor", "middle")
//             .text(function(d) {
//                 return d.data.Count;
//             })
//             .attr("font-family",  "Gill Sans", "Gill Sans MT")
//             .attr("font-size", function(d){
//                 return d.r/5;
//             })
//             .attr("fill", "white");

//         d3.select(self.frameElement)
//             .style("height", diameter + "px");
async function createGraph() {
  const width = 500;
  const height = 500;
  try {
    const svg = d3
      .select("#body")
      .append("svg")
      .attr("height", height)
      .attr("width", width)
      .append("g")
      .attr("transform", "translate(0,0)");

      //read in the data
    const csv = axios.get("/public/foodDataSet.csv");
    console.log("csv", csv);

    let myData = await d3.csv("foodDataSet.csv");
    console.log("Data returned", myData);

    // forces telling circles how to move and interact
    //this one pushed everything to the middle
    const simulation = d3.forceSimulation()
    .force("x", d3.forceX(width / 2).strength(0.05))
    .force("y", d3.forceY(height/2).strength(0.05));



    //creating circles for each datapoint
    let circles = svg
      .selectAll(".group")
      .data(myData)
      .enter()
      .append("circle")
      .attr("class", "group")
      .attr("r", 10)
      .attr("fill", "green");

    const ticked = () => {
      circles
      .attr("cx", function(d){
        return d.x;
      })
      .attr("cy", function(d){
        return d.y;
      });
    };

    //feed the data to the simulation, each time clock ticks, run function and reposition circles
    simulation.nodes(myData).on("tick", ticked);

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

createGraph();
