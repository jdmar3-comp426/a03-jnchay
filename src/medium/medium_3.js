import mpg_data from "./data/mpg_data.js";

/*
mpg_data is imported for you but that is for testing purposes only. All of the functions should use
a car_data param that is supplied as the first parameter.

As you write these functions notice how they could possibly be chained together to solve more complicated
queries.
 */

/**
 * @param {array} car_data - an instance of mpg_data that should be used for filtering.
 * @param minHorsepower {number}
 * @param minTorque {number}
 *
 * @return {array} An array of car objects with horsepower >= minHorsePower and torque >= minTorque
 * sorted by horsepower in descending order.
 *
 */
function checkPower(obj, hp, t) {
    return (obj.horsepower >= hp && obj.torque >= t);
}

export function searchHighPower(car_data, minHorsepower, minTorque) {
    var valid = car_data.filter(checkPower);
    valid.sort(function(a, b) {
        return valid[b].horsepower - valid[a].horsepower;
    });
    return valid;
}


/**
 * @param {array} car_data
 * @param minCity
 * @param minHighway
 *
 *
 * @return {array} An array of car objects with highway_mpg >= minHighway and city_mpg >= minCity
 * sorted by highway_mpg in descending order
 *
 */
function checkMpg(obj, city, highway) {
    return (obj.highway_mpg >= highway && obj.city_mpg >= city);
}

export function searchMpg(car_data, minCity, minHighway) {
    var valid = car_data.filter(checkMpg);
    valid.sort(function(a, b) {
        return valid[b].highway_mpg - valid[a].highway_mpg;        
    });
    return valid;
}


/**
 * Find all cars where 'id' contains the search term below.
 * Sort the results so that if the term appears earlier in the string
 * it will appear earlier in the list. Make sure searching and sorting ignores case.
 * @param car_data
 * @param searchTerm A string to that is used for searching
 * @returns {[]} array of cars
 */
export function searchName(car_data, searchTerm) {

}


/**
 * Find all cars made in the years asked for.
 * Sort the results by year in descending order.
 *
 * @param car_data
 * @param {number[]} years - array of years to be included in the results e.g. [2010, 2012]
 * @returns {[]} an array of car objects
 */
function checkYear(obj, years) {
    return obj.year in years;
}

export function searchByYear(car_data, years) {
    var valid = car_data.filter(checkYear);
    valid.sort(function(a, b) {
        valid[b].year - valid[a].year;
    });
    return valid;
}
