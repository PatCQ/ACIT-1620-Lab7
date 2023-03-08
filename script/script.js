const courseList = [{code: "ACIT 1630", name: "Database Systems"}, {code: "ACIT 1420", name: "Intro to Systems Admin"}, {code: "ORGB 1100", name: "Organizational Behaviour"}];

do {
    courseCode = prompt("Enter a 4-digit course code: ");
    if ((courseCode >= 0) && (courseCode <= 9999)) { break;}
} while (true)

for (let course of courseList) {
    str = course['code'].slice(5)
    if (courseCode == str) {
        console.log(`Yes I am taking the course: ${course.code} - ${course.name}`);
        break;
    }
    else {
        len = courseList.length();
        courseList.push(courseList[len])
    }
}