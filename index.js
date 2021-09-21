// Code your solution in this file!

function distanceFromHqInBlocks(street) {
    return Math.abs(42 - street);
}

function distanceFromHqInFeet(block) {
    return Math.abs((42 - block) * 264);
}

function distanceTravelledInFeet(street1, street2) {
    return Math.abs((street1 - street2) * 264);
}

function calculatesFarePrice(start, destination) {
    let distance = Math.abs((start - destination) * 264);
    let fair = 0;
    if (distance <= 400) {
        fair = 0;
    }
    else if (distance <= 2000) {
        fair = ((distance - 400) * 0.02);
    }
    else if (distance > 2500) {
        fair = 'cannot travel that far';
    }
    else {
        fair = 25.00;
    }
    return fair;
}