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
    let longest = array.reduce(
      (previous, next) => previous.name.length > next.name.length ? previous : next
    );
    return longest;
}


