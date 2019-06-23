/* eslint-disable quotes */
console.log("hello world");
import * as d3 from "d3";
import axios from "axios";
import * as d3tip from 'd3-tip';
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
  const width = 900;
  const height = 500;
  try {

    //const tip = d3.d3tip.tip().attr('class', 'd3-tip').html(function(d) { return d; });
    const svg = d3
      .select("#body")
      .append("svg")
      .attr("height", height)
      .attr("width", width)
      .append("g")
      .attr("transform", "translate(0,0)");

    const radiusScale = d3
      .scaleSqrt()
      .domain([500, 2050])
      .range([10, 80]);

    //read in the data
    const csv = axios.get("/public/foodDataSet.csv");
    console.log("csv", csv);

    let myData = await d3.csv("foodDataSet.csv");
    console.log("Data returned", myData);

    const forceX = d3
      .forceX(function(d) {
        if (d.Location === "at-home") {
          return 250;
        } else {
          return 750;
        }
      })
      .strength(0.05);

    // forces telling circles how to move and interact
    //this one pushed everything to the middle
    const simulation = d3
      .forceSimulation()
      //.force("x", d3.forceX(width / 2).strength(0.05))
      .force("x", forceX)
      .force("y", d3.forceY(height / 2).strength(0.05))
      .force(
        "collide",
        d3.forceCollide(function(d) {
          return radiusScale(d.Total) + 1;
        })
      );
    //force collide gives radious fo area for collision to avoid - should match the radious of the circle

    //create tooltip
    let toolTips = d3
      .select("#body")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("position", "absolute")
    .style("z-index", "10")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px");

    let mouseover = function(d) {
      console.log("mouseover");
      toolTips.style("opacity", 1);
      d3.select(this)
        .style("stroke", "gray")
        .style("opacity", 1)
       // .html("The caloric <br> count is " + d.Total)
        // .style("left", (d3.event.pageX + 16 + 'px'))
        // .style("top", (d3.event.pageY + 16 + 'px'));
    };

    let mousemove = function(d) {
      console.log("mousemove");
      toolTips
        .html("The caloric <br> count is " + d.Total)
        .style("left", (d3.event.pageX + 10 + 'px'))
        .style("top", (d3.event.pageY - 10 + 'px'));
    };

    let mouseleave = function() {
      console.log("mouseleave");
      toolTips.style("opactiy", 0);
      d3.select(this)
        .style("stroke", "none")
        .style("opacity", 0.8);
    };

    //creating circles for each datapoint
    let circles = svg
      .selectAll(".dataCircle")
      .data(myData)
      .enter()
      .append("circle")
      .attr("class", "dataCircle")
      .attr("r", function(d) {
        return radiusScale(d.Total);
      })
      .attr("fill", function(d) {
        if (d.NutrientGroup === "Adults2") {
          return "green";
        } else if (d.NutrientGroup === "LowerIncome") {
          return "yellow";
        } else if (d.NutrientGroup === "HigherIncome") {
          return "pink";
        } else if (d.NutrientGroup === "Children2") {
          return "blue";
        } else {
          return "yellow";
        }
      })
      .on("click", function(d) {
        console.log(d);
      })
      // .on("mouseover", tip.show)
      // .on("mouseout", tip.hide);
      // .on('mouseover', function(){
      //   console.log('mouseover');
      // })
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);

    // let toolTips = d3
    //   .select('#body')
    //   .append('div')
    //   .style('position', 'absolute')
    //   .style('visibility', 'hidden')
    //   .style('background-color', 'blue')
    //   .style('border', 'solid')
    //   .style('border-width', '1px')
    //   .style('border-radius', '5px')
    //   .style('padding', '10px')
    //   .text("I'm a circle!");

    const ticked = () => {
      circles
        .attr("cx", function(d) {
          return d.x;
        })
        .attr("cy", function(d) {
          return d.y;
        });
    };

    d3.select("#location").on("click", function() {
      simulation
        .force("x", forceX)
        .alphaTarget(0.5)
        .restart();
    });

    //alpaTarget gives it more energy
    d3.select("#combine").on("click", function() {
      simulation
        .force("x", d3.forceX(width / 2).strength(0.05))
        .alphaTarget(0.5)
        .restart();
    });

    // d3.select('.dataCircle')
    //   .on('mouseover', function() {
    //     // return toolTips.style('visibility', 'visible');
    //     console.log('Hello');
    //   })
    //   .on('mousemove', function() {
    //     return toolTips
    //       .style('top', event.pageY - 50 + 'px')
    //       .style('left', event.pageX - 50 + 'px');
    //     })
    //   .on('mouseout', function() {
    //     return toolTips.style('visibility', 'hidden');
    //   });

    //feed the data to the simulation, each time clock ticks, run function and reposition circles
    simulation.nodes(myData).on("tick", ticked);

    console.log(myData);
  } catch (error) {
    console.log(error);
  }
}

createGraph();
