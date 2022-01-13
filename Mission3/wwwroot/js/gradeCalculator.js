//Jacob Donaldson JS file Mission 2
//Hilton 413 1/4/2021

$("#gradeCalcSubmit").click(function () {
    //sets new totalperc var equal to all form values and applies weighting math so that that values add up correctly
    var totalperc = (($("#assign").val()/100) * 55) +
        (($("#group").val()/100) * 5) +
        (($("#quiz").val()/100) * 10) +
        (($("#exam").val()/100) * 20) +
        (($("#intex").val()/100) * 10);
    //each statement will compare the value to determine what the letter grade will be.
    //gradeletter is the letter grade output
    if (totalperc >= 94) {
        //A+
        $("#output").val("A+ " + totalperc + "%")
        
    }
    else if (totalperc >= 90) {
        //A-
        $("#output").val("A- " + totalperc + "%")
    }
    else if (totalperc >= 87) {
        //B+
        $("#output").val("B+ " + totalperc + "%")
    }
    else if (totalperc >= 84) {
        //B
        $("#output").val("B " + totalperc + "%")
    }
    else if (totalperc >= 80) {
        //B-
        $("#output").val("B- " + totalperc + "%")
    }
    else if (totalperc >= 77) {
        //C+
        $("#output").val("C+ " + totalperc + "%")
    }
    else if (totalperc >= 74) {
        //C
        $("#output").val("C+ " + totalperc + "%")
    }
    else if (totalperc >= 70) {
        //C-
        $("#output").val("C- " + totalperc + "%")
    }
    else if (totalperc >= 67) {
        //D+
        $("#output").val("D+ " + totalperc + "%")
    }
    else if (totalperc >= 64) {
        //D
        $("#output").val("D " + totalperc + "%")
    }
    else if (totalperc >= 60) {
        //D-
        $("#output").val("D- " + totalperc + "%")
    }
    else {
        //E
        $("#output").val("E " + totalperc + "%")
    }  
})

/* 
Grade info from syllabus
Assignments 55 %
Group Project 5 %
Quizzes 10 %
Exams 20 %
INTEX 10 %
*/