var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT ?? FROM ?? ";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        }



    