const students = [
    {
        name: "Bob",   // "Hi, Bob!"
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 10,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];
const getNames = (array) => {
    const result = [];
    const getValueForResult = (el) => el.name;
    for (let i = 0; i < array.length; i++) {
        result[i] = getValueForResult(array[i]);
    }
    return result;
};

console.log(getNames(students));

const getUpdatedStudents = (array) => {
    const result = [];
    const getValueForResult = (el) => ({ ...el, isStudent: true });
    for (let i = 0; i < array.length; i++) {
        result[i] = getValueForResult(array[i]);
    }
    return result;
};

console.log(getUpdatedStudents(students));

const getMappedArray = (array, func) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i]);
    }
    return result;
};

console.log(getMappedArray(students, (el) => el.name));
console.log(getMappedArray(students, (el) => ({ ...el, isStudent: true })));

const getFilteredArray = (array, func) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]) === true) {
            result.push(array[i]);
        }
    }
    return result;
};

console.log(getFilteredArray(students, st => st.age >= 21));
console.log(students.filter(st => st.age >= 21));


const myConcat = (array, param) => {
    const result = [];
    if (Array.isArray(param)) {
        for (let i = 0; i < array.length; i++) {
            result.push(array[i]);
        }
        for (let i = 0; i < array.length; i++) {
            result.push(array[i]);
        }

    }

};
const myReverse = (array) => {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
};

// console.log(myReverse(students));
console.log(students);


const mySlice = (array, startIndex, endIndex) => {
    const result = [];
    for (let i = startIndex; i < endIndex; i++) {
        result.push(array[i]);
    }
    return result;
};
console.log(mySlice(students, 1, 3));

const myInclude = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return true;
        }
        return false;
    }
};

console.log(myInclude(students, 1));


const myIndexOf = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
    return -1;
};
console.log(myIndexOf(students, students[0]));

const myEvery = (array, func) => {
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]) === false) {
            return false;
        }
    }
    return true;
};
console.log(myEvery(students, st => st.isMarried));


// const myFlat = (array, level = 1) => {
//     const result = [];
//
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//             if (level > 0) {
//                 for (let j = 0; j < array[i].length; j++) {
//                     result.push(array[i][j]);
//                 }
//                 level -= 1;
//             }
//         } else {
//             result.push(array[i]);
//         }
//     }
//     return result;
// };
//
// console.log(myFlat([1, 2, [3, [4, 5]]], 2))


const bigFlat = (array, level = 1) => {
    let bigResult = array;
    while (level > 0) {
        bigResult = simpleFlat(bigResult)
        level = level - 1
    }

    function simpleFlat (array) {
        const result = []
        for (let i = 0; i < array.length; i++) {
            if(Array.isArray(array[i])){
                for (let j = 0; j < array[i].length; j++) {
                    result.push(array[i][j])
                }
            } else {
                result.push(array[i])
            }
        }
        return result
    }
    return bigResult
}

console.log(bigFlat([1, 2, [3, [4,[7], 5]]], 3));
