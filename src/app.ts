class Department {
    // private readonly id: string;
    // private name: string;
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string){
        // this.id = id;
        // this.name = n;
    }

    describe(this :  Department){
        console.log(`Department (${this.id}): ${this.name}`)
    }

    addEmployee(employes: string){
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
// accounting.employees[2] = 'Hiranya';

accounting.describe();
accounting.printEmployeeInformation();

//console.log(accounting);


// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }

// accountingCopy.describe();
