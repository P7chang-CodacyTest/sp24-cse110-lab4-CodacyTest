function toRepeat() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(toRepeat, 1000);