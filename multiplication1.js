// multiplication table, best dynamic version

var x = num1
var y = num2
var table = ''
var totalLength = (x * y).toString().length

for (var i =1; i <= x ; i++){
    table += "\n"
    for (var j =1; j <= y ; j++){
        var multiply = i * j;
        var tileLength = totalLength - multiply.toString().length
        var space = ''
        for (var len=0; len <= tileLength; len++)
        {
            space += ' '
        }
        table += multiply + space

    } 
}

System.log(table)


