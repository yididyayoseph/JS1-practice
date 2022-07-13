//days of the week
let days = '';
//Generating random numbers from 0-6
let randomNumber = Math.floor(Math.random()*7);

switch (randomNumber) {
    case 0:
    days = 'Sunday'
    console.log(days);
    break;
    case 1:
    days = 'Monday'
    console.log(days);
    break;
    case 2:
    days = 'Tuesday'
    console.log(days);
    break;
    case 3:
    days = 'Wednesday'
    console.log(days);
    break;
    case 4:
    days = 'Thursday';
    console.log(days);
    break;
    case 5:
    days = 'Friday'
    console.log(days);
    break;
    case 6:
    days = 'Saturday';
    console.log(days);
    break;
    default:
    console.log('Invalid');
    break;
}