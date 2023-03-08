const couseList = [{code: "ACIT 1630", name: "Database Systems"}, {code: "ACIT 1420", name: "Intro to Systems Admin"}, {code: "ORGB 1100", name: "Organizational Behaviour"}];
let valid = true;
while (valid) {
    let course = prompt("Enter a 4-digit course code: ");
    if (toString(course).legnth == 5) or (typeof(course) == "number")
    {
        valid = false;
    }
}

