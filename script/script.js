const couseList = [{code: "ACIT 1630", name: "Database Systems"}, {code: "ACIT 1420", name: "Intro to Systems Admin"}, {code: "ORGB 1100", name: "Organizational Behaviour"}];

do {
    courseCode = prompt("Enter a 4-digit course code: ");
    console.log(courseCode);
    console.log(typeof(courseCode));
    if ((courseCode >= 0) && (courseCode <= 9999)) { break;}
} while (true)

