abstract class Department {

    static fiscalYear = 2020;
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string){
        // this.id = id;
        // this.name = n;
    }

    static createEmployee(name: string) {
        return { name: name }
    }

    abstract describe(this :  Department): void;

    addEmployee(employes: string){
        this.employees.push(employes);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }

}

class ITDepartment extends Department{
    admins : string[];
    constructor(id:string, admins: string[]){
        super(id,'IT');
        this.admins = admins;

    }

    describe(){
        console.log('IT Department - ID: ', this.id)
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;


    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error('No report found.')
    }

    set mostRecentReport(value: string){
        if(!value){
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }

    private constructor(id:string, private reports: string[]){
        super(id,'Account');
        this.lastReport = reports[0];
    }

    static getInstance(){
        if(AccountingDepartment.instance){
            return this.instance
        }
        this.instance = new AccountingDepartment('d2',[]);
        return this.instance
    }

    describe(){
        console.log('Accounting Department - ID: ', this.id);
    }

    addEmployee(name: string) {
        if(name === 'Tanu'){
            return
        }

        this.employees.push(name);

    }

    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports(){
        console.log(this.reports)
    }

}

const employee1 = Department.createEmployee('Tanu11');
console.log(employee1, Department.fiscalYear);


// const accounting = new Department('D1', 'Accounting');
const it = new ITDepartment('D1',['Max']);

it.addEmployee('Tanu');
it.addEmployee('Risha');
// it.employees[2] = 'Hiranya';

it.describe();
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment('d2',[]);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting,accounting2);

accounting.mostRecentReport = 'Year end report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Tanu');
accounting.addEmployee('Pintu');


// accounting.printReports();
// accounting.printEmployeeInformation();

accounting.describe();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }

// accountingCopy.describe();
