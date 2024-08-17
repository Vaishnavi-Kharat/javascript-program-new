console.log("============= Ternary Operator =============");

function interviewCheck(gradScore, hscScore, sscScore, candidateName) {
    var result = gradScore>= 70 || hscScore>= 80 || sscScore> 90 
                 ?`Congrats ${candidateName} You are eligible for TCS interview.`
                 : `Unfortunately ${candidateName} you are not eligible for interview.`;
    console.log(result);
}
interviewCheck(80,86,90,"Vaishnavi");
interviewCheck(70,65,55,"Suraj");
interviewCheck(60,79,88,"Priya");