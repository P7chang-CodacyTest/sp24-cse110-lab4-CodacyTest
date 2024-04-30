let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const p in statistics) {
    if (p[0] === 'r' || statistics[p]%2 != 0 ) {
        console.log(statistics[p]);
    }
}