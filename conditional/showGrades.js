function showGrades(marksObtained){
    if(marksObtained > 100 || marksObtained < 0 || isNaN(marksObtained) ){
        return 'Invalid input'
    }
    else if(marksObtained > 80 && marksObtained <=100){
        return 'A+'
    }
    else if(marksObtained > 75 && marksObtained <= 80){
        return 'A'
    }
    else if(marksObtained > 70 && marksObtained <= 75){
        return 'B+'
    }
    else if(marksObtained > 60 && marksObtained <= 70){
        return 'B'
    }
    else if(marksObtained <= 60){
        return 'C'
    }
}
var marksObtained = process.argv[2]
console.log(showGrades(marksObtained))