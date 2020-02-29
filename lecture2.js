
let vary = 0;

for(var x=1; x <= 5; x++) {
    vary+=x;
}
console.log(vary);



var i=1;
var sum = 0;

while( i <=100 ) {
    if(i%3 == 0 && i%5 == 0){
        sum+=i;
    }
    i++
}

document.write(sum);


var i =0;

do{
    document.write('NH Ridoy');
    i++;
}while(i <= 10);


for(i=1; i <= 100; i++) {
    if(i%2 == 0){
        continue;
    }
    document.write(" " + i);
}

let arr = new Array(5);

arr[0] = 'NH ridoy';
arr[1] = 'Tanvir Hossain';
arr[2] = 'Hasan Mahmud Mahim';
arr[3] = 'Imran hossain';
arr[4] = 'Saidi Islam Nadim';

for(i=0; i <= arr.length; i++) {
    console.log(arr[i]);
}


arr.filter((ele) => {
    console.log(ele); 
});

const newArr = ['Bangladesh', 'India','Pakistan'];
const newArr2 = ['USA','England'];

const out = newArr.concat(newArr2);
console.log(out);


// Student details 


function Student (name ,age , cgpa, lang) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.print = function () {
        console.log(`Name: ${name} Age: ${age} Cgpa: ${cgpa} Language: ${lang}`);
    }
}

let obj = new Student('Anisul Islam', 27, 3.91, ['English','Bangla','Hindi']);
obj.print();

let obj1 = new Student('Nayeem Islam', 20, 3.86, ['portuguese', 'English',]);
obj.print();


console.table(obj);

console.log('Hi source dev tools');

