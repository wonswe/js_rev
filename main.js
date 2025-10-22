// number, string, boolean, null, undefined
// 위 primitive type을 제외한 모든 것이 오브젝트이다

// let number = 2;
// let number2 = number;
// console.log(number);
// console.log(number2);

// number2 = 3;

// console.log(number);
// console.log(number2);

let obj = {
  name: 'juwon',
  age: 10,
};
// obj에는 obj의 주소가 할당이 된다

console.log(obj.name);
// obj가 가리키는 곳의 name이라는 변수

let obj2 = obj;
// obj2 변수에 새로운 메모리 공간이 생기고, obj가 가지고 있는 obj의
// 주소가 복사된다
console.log(obj2);
// {name: 'juwon', age: 10}

console.log(obj.name); // pingu
console.log(obj2.name); // pingu
// 레퍼런스가 가리키고 있는 오브젝트가 동일하기에 둘 중 하나를 통해서
// name으로 업데이트 해도 둘 다 업데이트 된다.
