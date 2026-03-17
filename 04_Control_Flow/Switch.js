const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    default:        // if there is no break in any case.....it executes all the cases but doesnt execute the default case.
        console.log("default case matched");
        break;
}