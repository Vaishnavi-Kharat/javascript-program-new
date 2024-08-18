console.log(`=============== if else - Vote Eligibility Checking ================`);

var voteEligible = function (age) {
    if ( age == 0 || age < 0 || age > 130) {
        console.log(`Invalid data - ${age}`);
    } else {
        console.log(`#)Valid data - ${age}`);
        if (age>18) {
            console.log(`You are eligible for vote`);
        } else {
            console.log(`You are NOT eligible for vote`);
        }
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);