// The program then checks if the speed is less than or equal to 70. 
//If it is, it prints "Ok". If the speed is greater than 70, it calculates the number of demerit points based on how much the speed is over the limit (70).
// For every 5 km/s over the limit, one demerit point is given. The calculation is done using integer division (//) to ensure that the result is an integer.

//If the number of demerit points is greater than 12, the program prints "License suspended". Otherwise, it prints the number of demerit points.


let speed =("enter speed")

if (speed <= 70){
    console.log ("Ok");
}

else if (speed - 70) // 5 {
    console.log("demerit_points");


else if (demerit_points > 12){
        console.log("License suspended");
}        

 else{
        console.log("Points:", demerit_points);
}