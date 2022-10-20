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
    filterData = loads['results'][0]
    id = filterData['id']['name'] + filterData['id']['value']
    human = {"id":id, "name": filterData['name']['first'], "phone": filterData['phone'], "email": filterData['email'] }
    return human;
}

var clearThemAll = {
    0 : { id: "", name: "", phone: "", email: ""}
};

var humansList = []
var randomPersonAPIgame = false;
var maxiumMenuOptions = 4

requestInfo()
humansList.push(human)
printMenu()
while(!randomPersonAPIgame){
    var nullCheck = human.id
    var userInput = prompt("Press the wished upon number")
    if (userInput == ""){
        console.log("Cant enter a character.. must be a number, try again")
        randomPersonAPIgame = true
    }
    if (humansList[0].id == "null" || humansList[0].id == ""){
        console.log("The id is invalid")
        randomPersonAPIgame = true
    }
    //Validation the input is in the acceptable interger numbers.
    if(userInput > maxiumMenuOptions || userInput == 0 ) {
        randomPersonAPIgame = true
    } else {
        if (1 == userInput) {
            console.log("You choose (1)")
            console.table(humansList)
        } else if (2 == userInput) {
            console.log("You choose (2)")
            requestInfo()
            nullCheck = human.id
            if (nullCheck == 'null' || nullCheck == ""){
                console.log("The id is invalid")
            } else {
                humansList.push(human)
            console.table(humansList)
            }
        } else if (3 == userInput){
            console.log("You choose (3)")
            humansList.splice(-1)
            console.table(humansList)
        } else if (4 == userInput) {
            console.log("You choose (4)")
            humansList = clearThemAll
            console.table(humansList)
        }
    }
}