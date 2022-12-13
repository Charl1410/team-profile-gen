const Employee = require("./Employee");

class intern extends Employee {

    constructor(id, name, email, school) {

    super(id, name, email);
    
    this.school = school;

}

getschool() {
    return this.school;
}

getRole(){
    return "Intern"
}
}

module.exports = intern;