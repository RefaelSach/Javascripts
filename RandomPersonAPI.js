function printMenu () {
    console.log(
    "Hello welcome the RandmPersonAPI" + '\n' + 
    "Chosse the number of action you'd like to do:" + '\n' + 
    "1)To display a table" + '\n' + 
    "2)To add a row" + '\n' + 
    "3)To delete a row" + '\n' + 
    "4)To clear a table")
}

function requestInfo(request){
    request = new XMLHttpRequest();
    request.open("GET", "https://randomuser.me/api/", false);
    request.send();
    loads = JSON.parse(request.response)
    return loads;
}

var randomPersonAPIgame = false;
var maxiumMenuOptions = 4
var frontendTable = ['id', 'name', 'phone', 'email']

requestInfo()
var filterData = loads['results'][0]
var personDetails = []
while(personDetails.length <= 3){
    for ( var i = 0; i <= 3; i++ ) {
        if (frontendTable[i] == 'id'){
            personDetails.push(" " + filterData['id']['name']);
            //personDetails += " " + filterData['id']['name'];
        } else if (frontendTable[i] == 'name'){
            personDetails.push(" " + filterData['name']['first']);
           //personDetails += " " + filterData['name']['first'];
        } else if (frontendTable[i] == 'phone'){
            personDetails.push(" " + filterData['phone']);
            //personDetails += " " + filterData['phone'];
        } else if (frontendTable[i] == 'email'){
            personDetails.push(" " + filterData['email']);
            //personDetails += " " + filterData['email'];
        }
    }
}
var backendTable = frontendTable.concat(personDetails)
frontendTable += '\n' + personDetails
console.log(frontendTable)
printMenu()
while(!randomPersonAPIgame){
    var table2 = ['id', 'name', 'phone', 'email']
    var userInput = prompt("Press the wished upon number")
    if (userInput == ""){
        console.log("Cant enter a character.. must be a number, try again")
        randomPersonAPIgame = true
    }
    if (personDetails[0] == null || personDetails[0] == ""){
        console.log("The id is invalid")
        randomPersonAPIgame = true
    }
    //Validation the input is in the acceptable interger numbers.
    if(userInput > maxiumMenuOptions || userInput == 0 ) {
        randomPersonAPIgame = true
    } else {
        if (1 == userInput) {
            console.log(frontendTable)
        } else if (2 == userInput) {
            requestInfo()
            filterData = loads['results'][0]
            var personDetails = []
            for ( var i = 0; i <= 3; i++ ) {
                if (table2[i] == 'id'){
                    personDetails += " " + filterData['id']['name'];
                } else if (table2[i] == 'name'){
                    personDetails += " " + filterData['name']['first'];
                } else if (table2[i] == 'phone'){
                    personDetails += " " + filterData['phone'];
                } else if (table2[i] == 'email'){
                    personDetails += " " + filterData['email'];
                }
            }
            frontendTable += '\n' + personDetails
            console.log(frontendTable)
        } else if (3 == userInput){
            frontendTable.pop()
            console.log(frontendTable)
            console.log(frontendTable.length)
        } else if (4 == userInput) {

        }
    }
}