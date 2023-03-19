//the code prompts the user to enter the score then later prints the out regarding to the score the user entered

let score = prompt("Enter student mark ): ")

if (mark > 79){
    console.log("Student grade is A");
}

else if (mark >= 60 && mark <= 79){
    console.log("Student grade is B");
}

else if (mark >= 50 && mark <= 59){
    console.log("Student grade is C");
}

else if (mark >= 40 && mark <= 49){
    console.log("Student grade is D");
}

else{
    console.log("Student grade is E");
}
