////////////////////////////////////////////////////////////

// function testjackpot(arr) {
//   return arr.every((element) => element === arr[0]);
// }
// console.log(testjackpot(["abc", "abc", "abc", "abc"]));
// console.log(testjackpot(["&&", "&", "&&&", "&&&&"]));

// const d = (arr) => +arr;
// console.log(d("00111"));
 
////////////////////////////////////////////////////////////  

// const s =(a,b ='malumot topilmadi') =>{

//   return `${a} ${b}`

// }
// console.log(s(3.1400, ));

///////////////////////////////////////////////////////////

// const arr =['olma','nok']

// console.log(...arr,'tarvuz');

// const [a,b] = arr

// console.log(arr);

////////////////////////////////////////////////////////////

// const user = {
//   name:'xasan',
//   age: 22,
// }
// const {name} = user
// console.log(name);

///////////////////////////////////////////////////////////

// const data = {
//     id: 1,
//     name: "odilbek",
// }

// window.addEventListener('load',function(){
//     localStorage.setItem('datas',JSON.stringify(data))
// });
// res =localStorage.getItem('datas') 
// console.log(res,'res');

/////////////////////////////////////////////////////////////
// const data = {
//     id: 1,
//     name: 'hasan',
//     password: '1234'
//   };
  
//     setTimeout((data) => {
//     if (data.password === '1234' && data.name === 'hasan') {
//       console.log('hush kilibsiz');
//     } else {
//       console.log('parol notgri');
//     }
//   }, 1000, data);

//   window.addEventListener('load',function(){
//     localStorage.setItem('datas',JSON.stringify(data))
// });
// res =localStorage.getItem('datas') 
// console.log(res,'res');
  
//   console.log('loading...');
  
//////////////////////////////////////////////////////////////

// const dataBase ={
//     muhammad:{
//         login:'muhammad',
//         password: 1234,
//         fullName: 'muhammad saikov'
//     }
// }

// console.log('staeted');

// const login =(lg, ps, call)=>{
//     setTimeout(() =>{
//     if (dataBase.muhammad.login === lg && dataBase.muhammad.password ==ps) {
//         return call('welcome to $(dataBase.Muhammad.fullName)')
//     }
//     else{
//         return call(`Malumot Nogri kiritilgan`);
//     }
//      },'1000')
// }
// login('muhammadali',1234,(usr) => {
//     console.log(usr);
//     console.log('finished');
// })

// ////////////////////////////////////////////////////////////////////////////////

function divide(a, b) {
    try{
        if (b === 0) {
            throw new Error("Nolga bo'lish mumkin emas")
        }
        return a / b;
    }catch (error) {
        console.error("xatolik yuzaga keldi", error.message);
        return null;
    }
}

const result1 = divide(,2); //Bo'lish natijasi: 4
const result2 = divide(100,2); //Bo'lish natijasi: null

console.log("natija 1:", result1);
console.log("natija 2:", result2);