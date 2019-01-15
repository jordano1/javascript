//are both vegans? Only offer up vegan dishes
//at least one vega? make sure to offer up some vegan options
//else, offer up anything on the menu
let isGuestOneVegan = true
let isGuestTwoVegan = true
if (isGuestOneVegan && isGuestTwoVegan == true) {
    console.log("Only vegan options")
} else if(isGuestOneVegan || isGuestTwoVegan) {
    console.log("Some vegan options")
}else{
    console.log("no vegan options")
}