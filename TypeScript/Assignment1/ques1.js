var strarray;
strarray = ['akshat', 'divya', 'oman', 'barde'];
var display = function (strarray) {
    strarray.forEach(function (value) {
        console.log(value, value.length);
    });
};
display(strarray);
