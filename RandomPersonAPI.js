function printMenu () {
    console.log(
    "Hello welcome the RandmPersonAPI" + '\n' + 
    "Chosse the number of action you'd like to do:" + '\n' + 
    "1)To display a table" + '\n' + 
    "2)To add a row" + '\n' + 
    "3)To delete a row" + '\n' + 
    "4)To clear a table")
}

var randomPersonAPIgame = false;
var maxiumMenuOptions = 4
var table = ['id', 'name', 'phone', 'email']

var request = new XMLHttpRequest();
request.open("GET", "https://randomuser.me/api/", false);
request.send();
//console.log(table)

printMenu()
while(!randomPersonAPIgame){
    var loads = JSON.parse(request.response)
    var filterData = loads['results'][0]
    var personDetails = []
    while(personDetails.length < table.length){
        for ( var i = 0; i < table.length; i++ ) { 
            if (table[i] == 'id'){
                personDetails.push(filterData['id']['name']);
            } else if (table[i] == 'name'){
                personDetails.push(" " + filterData['name']['first']);
            } else if (table[i] == 'phone'){
                personDetails.push(" " + filterData['phone']);
            } else if (table[i] == 'email'){
                personDetails.push(" " + filterData['email']);
            }
        }
    }
    table += '\n' + personDetails
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
            console.log(table)
        } else if (2 == userInput) {
            var request = new XMLHttpRequest();
            request.open("GET", "https://randomuser.me/api/", false);
            request.send();
        } else if (3 == userInput){
            console.log("please choose which row to delete")
            userInput = prompt("Enter row number")
        } else if (4 == userInput) {
    
        }
    }
}
