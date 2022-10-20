function printMenu () {
    console.log(
    "Hello welcome the RandmPersonAPI" + '\n' + 
    "Choose the number of action you'd like to do:" + '\n' +
    "1)Display a table" + '\n' +
    "2)Add a row" + '\n' +
    "3)Delete a row" + '\n' +
    "4)Clear a table" + '\n' +
    "5)Filter human" + '\n' +
    "6)End game")
}

function requestInfo(){
    var request = new XMLHttpRequest();
    request.open("GET", "https://randomuser.me/api/", false);
    request.send();
    var loads = JSON.parse(request.response)
    var data = loads.results[0]
    var id = data.id['name'] + data.id['value']
    human = {"id":id, "name": data['name']['first'], "phone": data['phone'], "email": data['email'] }
    return human
}

var clearTable = {
    0 : { id: "", name: "", phone: "", email: ""}
};

var humansList = []
var randomPersonIsActive = true;
var maxiumMenuOptions = 6
var fullAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

printMenu()
while(randomPersonIsActive){
    var userInput = prompt("Enter number")
    // Validation that no string was entered
    for (i=0; i<fullAlphabet.length; i++ ){
        if (userInput == fullAlphabet[i]){
            console.log("Cant enter a character.. must be a number, try again")
        }
    }
    //Validation the input is in the acceptable integer numbers.
    if(userInput > maxiumMenuOptions || userInput == 0 ) {
        console.log("The number that was eneterd " + userInput + " is invalid " )
    } else {
        if (userInput == 1) {
            console.log("You choose (1)")
            console.table(humansList)
        } else if (userInput == 2) {
            console.log("You choose (2)")
            requestInfo()
            var nullCheck = human.id
            if (nullCheck == "null"){
                console.log("The id is " + nullCheck + " it is " + typeof(nullCheck) + " type and it is invalid")
            } else {
                humansList.push(human)
                console.table(humansList)
            }
        } else if (userInput == 3){
            console.log("You choose (3)")
            var userInput = prompt("Enter by which subject you'd like to delete")
            if (userInput == 'id'){
                var userInput = prompt("Enter the id to delete")
                var index = humansList.findIndex(Object => { return Object.id === userInput ; });
                console.log(index)
                humansList.splice(index, 1)
            } else if ( userInput == 'name') {
                var userInput = prompt("Enter the name to delete")
                var index = humansList.findIndex(Object => { return Object.name === userInput ; });
                console.log(index)
                humansList.splice(index, 1)
            }else if ( userInput == 'phone') {
                var userInput = prompt("Enter the phone number to delete")
                var index = humansList.findIndex(Object => { return Object.phone === userInput ; });
                console.log(index)
                humansList.splice(index, 1)
            }else if ( userInput == 'email'){
                var userInput = prompt("Enter the email to delete")
                var index = humansList.findIndex(Object => { return Object.email === userInput ; });
                console.log(index)
                humansList.splice(index, 1)
            }
            console.table(humansList)
        } else if (userInput == 4) {
            console.log("You choose (4)")
            humansList = clearTable
            console.table(humansList)
        } else if (userInput == 5) {
            console.log("You choose (5)")
            var userInput = prompt("Enter by which subject you'd like to filter")
            if (userInput == 'id'){
                var userInput = prompt("Enter the id to show its row")
                var index = humansList.findIndex(Object => { return Object.id === userInput ; });
                console.table(humansList[index])
            } else if ( userInput == 'name') {
                var userInput = prompt("Enter the name to show its row")
                var index = humansList.findIndex(Object => { return Object.name === userInput ; });
                console.table(humansList[index])
            }else if ( userInput == 'phone') {
                var userInput = prompt("Enter the phone number to show its row")
                var index = humansList.findIndex(Object => { return Object.phone === userInput ; });
                console.table(humansList[index])
            }else if ( userInput == 'email'){
                var userInput = prompt("Enter the email to show its row")
                var index = humansList.findIndex(Object => { return Object.email === userInput ; });
                console.table(humansList[index])
            }
        // Add another filter that will filter and print only humans based on filter
        } else if (userInput == 6){
            console.log("You choose (6), Ending game...")
            randomPersonIsActive = false
        }
    }
}
