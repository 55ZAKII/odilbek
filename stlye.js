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
// const {age} = user
// console.log(age);

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
//
//   window.addEventListener('load',function(){
//     localStorage.setItem('black',JSON.stringify(dataBase))
// });
// res =localStorage.getItem('black') 
// console.log(res,'res');
//
// login('muhammadali',1234,(usr) => {
//     console.log(usr);
//     console.log('finished');
// })
//
// ////////////////////////////////////////////////////////////////////////////////

// function divide(a, b) {
//     try{
//         if (b === 0) {
//             throw new Error("Nolga bo'lish mumkin emas")
//         }
//         return a / b;
//     }catch (error) {
//         console.error("xatolik yuzaga keldi", error.message);
//         return null;
//     }
// }


// const result1 = divide(7454353423,4545234); //Bo'lish natijasi: 4
// const result2 = divide(100,2); //Bo'lish natijasi: null

// console.log("natija 1:", result1);
// console.log("natija 2:", result2);

///////////////////////////////////////////////////////////////////

// console.log('loding...');
// function delayGeeting(deley, isHappy) {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             if (isHappy) {
//                 resolve('Xush kelibsiz😊')
//             }else{
//                 reject('salom👋')
//             }
//         }, deley)
//     });
// }

// delayGeeting(2000, false)
//     .then(massege =>{
//         console.log(massege); //'Xush kelibsiz😊'
//     })
//     .catch(massege =>{
//         console.log(massege);//'salom👋'
//     })

/////////////////////////////////////////////////////////////////////

// const studentList =document.getElementById("studentList");
// const studentListPlus = document.getElementById('studentList')
// const studentUL = document.getElementById("studentUL");
// const studentInput = document.getElementById("newstudent");
// const addstudentButton = document.getElementById("addstudentButton");

// const stdunth2 = document.getElementsByTagName('h2')
// console.log(stdunth2, 'h2');
// stdunth2[0].style.color = 'red'
// stdunth2[0].style.fontSize = '50px'

// const InputOne =document.querySelector('#one')

// //yangi talabani qoshish

// addstudentButton.addEventListener("click",function () {
//     const newStudentName = InputOne.value;
//     console.log(newStudent,'newStudent');
//     if (newStudentName) {
//     const li =document.createElement("li")
//     li.textContent = newStudentName;
//     studentUL.appendChild(li);
//     newStudentInput.value = "";
//     }
// });

//////////////////////////////////////////////////////////////////////

const a =[4354,[5435435345,543534545345454]]

const arrey =(a) => {
    return a
}

console.log(arrey(a));

///////////////////////////////////////////////////////////////////////

