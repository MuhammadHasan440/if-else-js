var percentage = +prompt("Enter your result");

if (percentage > 100){
    console.log('Correct your percentage');
} else if (percentage > 80 && percentage < 100){
    console.log('A+ grade')
}
else if (percentage >=70  && percentage <=79 ){
    console.log('A grade')
}
else if (percentage >= 60 && percentage <= 69){
    console.log('B grade')
}
else if (percentage >= 50 && percentage <= 59){
    console.log('C grade')
}
else if (percentage >= 40 && percentage <= 49){
    console.log('D grade')
}
else if (percentage >= 30 && percentage <= 39){
    console.log('E grade ')
}
else if (percentage >= 20 && percentage <= 29){
    console.log('F grade')
}
else if (percentage >= 10 && percentage <= 19){
    console.log('G grade')
}
else if (percentage >= 0 && percentage <= 9){
    console.log('H grade')
}
else {
    console.log("percentage")
}
    
 



