/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const searchDestination = (id) => {
        const destination = paths[id][1];
        const path = paths.findIndex((item) => item[0] === destination);
        return path > -1 ? searchDestination(path) : paths[id][1];
    }
    return searchDestination(0);
};