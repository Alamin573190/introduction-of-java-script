const ticketFee = 800 ;
const age = 62 ;

if(age < 12){
    console.log('free');
}
else if((age >= 12) && (age <= 30)){
    // 50% discount
    const discount = ticketFee * 50 / 100;
    const payAmount = ticketFee - discount ;
    console.log(payAmount);
}
else if(age > 60){
    // 30% discount
    const discount = ticketFee * 30 / 100;
    const payAmount = ticketFee - discount ;
    console.log(payAmount);
}
else{
    console.log(ticketFee);
}
