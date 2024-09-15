"use strict";
var _a;
const e1 = {
    name: 'Sagar',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Sagar', ' Bunty');
console.log(result);
const fetchedUserData = {
    id: 'u1',
    name: 'Sagar',
    job: { title: 'CEO', description: 'My Own Company' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
//# sourceMappingURL=app.js.map