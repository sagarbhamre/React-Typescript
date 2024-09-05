"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employes) {
        this.employees.push(employes);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('D1', 'Accounting');
accounting.addEmployee('Tanu');
accounting.addEmployee('Risha');
accounting.describe();
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map