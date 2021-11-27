import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";
import {countArray} from "../mild/mild_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
var totalcityMpg = 0;
var totalhighwayMpg = 0;
var caryears = [];
var numhybrid = 0;
mpg_data.forEach(function(data) {
    totalcityMpg += data.city_mpg ;
    totalhighwayMpg += data.highway_mpg;
    caryears.push(data.year);
    if (data.hybrid) {
        numhybrid += 1;
    }
})

export const allCarStats = {
    avgMpg: {city: totalcityMpg/mpg_data.length, highway: totalhighwayMpg/mpg_data.length},
    allYearStats: getStatistics(caryears),
    ratioHybrids: numhybrid/mpg_data.length,
};


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
/*
function checkHybrid(obj) {
    return obj.hybrid;
}
var hybrids = mpg_data.filter(checkHybrid);



var makes = [];
hybrids.forEach(function(hybrid) {
    makes.push(hybrid.make);
})



var dict = countArray(makes);
var desc_makes = [];
for (var make in dict) {
    desc_makes.push([make, dict[make]]);
}
desc_makes.sort(function(a, b) {
    return b[1] - a[1];
});



var _makerHybrids = [];
desc_makes.forEach(function(make, index) {
    _makerHybrids[index] = {make: make, hybrids: []};
    hybrids.forEach(function(hybrid) {
        if (hybrid.make == make) {
            _makerHybrids[index].hybrids.push(hybrid.id);
        }
    })
})*/

var makes_used = [];
function getHybrids(hybrids, hybrid) {
    for (var i = 0; i < makes_used.length; i++) {
        if (makes_used[i] == hybrid.make) {
            hybrids[i].hybrids.push(hybrid.id);
        }
        else {
            hybrids[makes_used.length - 1] = {make: hybrid.make, hybrids = []};
        }
    }
    return hybrids;
}


export const moreStats = {
    makerHybrids: mpg_data.reduce(getHybrids),
    avgMpgByYearAndHybrid: undefined
};
