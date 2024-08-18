console.log(`========== if else statement- Interview Eligible ==========`);
var interview =function student(gradScore,hscScore,sscScore,candidateName){
    if (gradScore>=70 || hscScore>=80 || sscScore>90) {
        console.log(`Congrates ${candidateName} you are eligible for TCS interview.`);
    } else {
        console.log(`Unfortunately you are not eligible for TCS interview.`);
    }
}
interview(80,86,90,"Vaishnavi");
interview(70,65,55,"Geeta");
interview(60,79,88,"Teju");
