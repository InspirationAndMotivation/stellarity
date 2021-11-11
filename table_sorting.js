class User {
    constructor(id, name, type) {
        this.id = id;
        this.name = name;
        this.type = type;
    }
}

function sorting (firstArray, secondArray) {
    let result = firstArray.filter(item => secondArray.includes(item) && item.type === 'admin')
        .sort(compare); 
    return result;
}

function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

function getLongestName(array) {
    array.filter()
    return longest;
}

// Test

let firstCompany = [];
let secondCompany = [];

let Ivan = new User(2, 'Ivan', 'admin');
let Kate = new User(3, 'Kate', 'admin');
let Slava = new User(8, 'Slava', 'admin');
let Ihor = new User(12, 'Ihor', 'surfer');

firstCompany.push(new User(1, 'John', 'admin'));
firstCompany.push(Ivan);
secondCompany.push(Kate);
secondCompany.push(Ivan);
firstCompany.push(new User(4, 'Marek', 'surfer'));
firstCompany.push(new User(5, 'Alex', 'surfer'));
firstCompany.push(Kate);
secondCompany.push(new User(6, 'Vito', 'surfer'));
firstCompany.push(Slava);
secondCompany.push(Ihor);
secondCompany.push(Slava);
firstCompany.push(Ihor);


let result = sorting(firstCompany, secondCompany);
console.log(getLongestName(result));
