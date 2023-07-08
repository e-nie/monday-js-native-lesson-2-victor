const students = [{
    name: "Bob",   // "Hi, Bob!"
    age: 22, isMarried: true, scores: 85,
}, {
    name: "Alex", age: 21, isMarried: true, scores: 89
}, {
    name: "Nick", age: 19, isMarried: false, scores: 120
}, {
    name: "John", age: 19, isMarried: false, scores: 100
}];

//map
const getNames = (array) => {
    const result = [];
    const getValueForResult = (el) => el.name; // что делаем с каждым элементом ❗️ЭТО АЛГОРИТМ ПРЕОБРАЗОВАНИЯ КАЖДОГО ЭЛТА МАССИВА
    for (let i = 0; i < array.length; i++) {
        result[i] = getValueForResult(array[i]); // каждый элемент в новом массиве будет содержать имя
    }
    return result;
};

console.log(getNames(students));

// добавляем новое свойство каждому объекту

const getUpdatedStudents = (array) => {
    const result = [];
    const getValueForResult = (el) => ({ ...el, isStudent: true });// вернет копию каждого студента с доп. свойством
    for (let i = 0; i < array.length; i++) {
        result[i] = getValueForResult(array[i]); // каждый оьъект в новом массиве будет содержать новое свойство
    }
    return result;
};

console.log(getUpdatedStudents(students));

//❗️️️️️️️️️️️️️️❗️️️️️️️️️️️️️️❗️️️️️️️️️️️️️️❗️️️️️️️️️️️️️️❗️️️️️️️️️️️️️️❗️️️️️️️️️️️️️️❗️️️️️️️️️️️️️️❗️️️️️️️️️️️️️️❗️️️️️️️️️️️️️️❗️️️️️️️️️️️️️️❗️️️️️️️️️️️️️️РЕФАКТОРИМ, ВЫНОСИМ В ОТДЕЛЬНУЮ ФУНКЦИЮ
//replace 'getValueForResult' with 'func'
//func - это то, что мы хотим сделать с каждым элементом исходного массива

const getMappedArray = (array, func) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i]); // каждый оьъект в новом массиве будет содержать новое свойство
    }
    return result;
};


console.log(getMappedArray(students, (el) => el.name));
console.log(getMappedArray(students, (el) => ({ ...el, isStudent: true })));


//FILTER

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

//concat method

const myConcat = (array, param) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i]);
    }
    if (Array.isArray(param)) {
        for (let j = 0; j < param.length; j++) {
            result.push(param[j]);
        }
    } else {
        result.push(param);
    }
    return result;

};

console.log(myConcat(students, 'gogogogog'));
console.log(myConcat(students, [1, 2, 3]));
console.log(myConcat(students, {}));


//reverse returns the same reference to the array

const myReverse = (array) => {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
};

// console.log(myReverse(students)); //
// console.log(students);// мутировали исходный массив - already changed initial array

//slice - returns new array (shallow copy)

const mySlice = (array, startIndex, endIndex) => {
    const result = [];
    for (let i = startIndex; i < endIndex; i++) {
        result.push(array[i]);
    }
    return result;
};

console.log(mySlice(students, 1, 3));

//includes

const myIncludes = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return true;
        }
    }
    return false
};

console.log(myIncludes(students, 1)); //false


//indexOf

const myIndexOf = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
    return -1
};

console.log(myIndexOf(students, students[0]));

//every

const myEvery = (array, func) => {
    for (let i = 0; i < array.length; i++) {
        if(func(array[i]) === false) {
            return false
        }
    }
    return true
};

console.log(myEvery(students, st=> st.age >= 18)); //true
console.log(myEvery(students, st=> st.isMarried)); //false
