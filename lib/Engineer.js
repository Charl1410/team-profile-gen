//all classes that aren't employee extend and inherit from the employee class and add the specific information for that class
//the constructor call adds the OG stuff and the new stuff 
//call the super which is all the params for the base class

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email)
        this.github = github;
    }

    getGitHub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;