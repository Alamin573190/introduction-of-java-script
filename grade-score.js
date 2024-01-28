let score = 70 ;
switch(true) {
    case((score <= 100) && (score >= 80)):
    console.log('you got : A+')
    break;
    case((score <=79) && (score >= 70)):
    console.log('you got : A')
    break;
    case((score <= 69) && (score >= 60)):
    console.log('you got : B')
    break;
    case((score <= 59) && (score >= 50)):
    console.log('you got : C')
    break;
    case((score <= 49) && (score >= 40)):
    console.log('you got : D')
    break;
    case((score <= 39) && (score >= 0)):
    console.log('you got : F')
    break;
    default:
        console.log('invalid mark')
}