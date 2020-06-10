let counter = 0;
//this is our variable

$("#IncBtn").click(() => {
    counter = counter + 1;
    $("#counter").text(counter);
});



$("#DecBtn").click(() => {
    counter = counter - 1;
    $("#counter").text(counter);
});


console.log("Last line of the code")
