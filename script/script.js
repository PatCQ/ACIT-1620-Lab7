const courseList = [{code: "ACIT 1630", name: "Database Systems"}, {code: "ACIT 1420", name: "Intro to Systems Admin"}, {code: "ORGB 1100", name: "Organizational Behaviour"}];

do {
    courseCode = prompt("Enter a 4-digit course code: ");
    if ((courseCode >= 0) && (courseCode <= 9999)) { break;}
} while (true)

let found = false;
for (let course of courseList) {
    str = course['code'].slice(5)
    if (courseCode == str) {
        console.log(`Yes I am taking the course: ${course.code} - ${course.name}`);
        found = true;
        break;
        found = false;
    }
}
if (!found) {
    courseList.push(
        {
            code: courseCode,
            name: null
        }
    );
    console.log(`I am not taking the course that was entered but I have entered it into the array: ${courseList[(courseList.length)-1].code} - ${courseList[(courseList.length)-1].name}`)
}
