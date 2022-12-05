let object = {
    name: "oleg",
    age: 15,
    eyeColor: "blue"
}
console.log("Загрузка")
let promise = new Promise
(function(resolve){
    let jsonData = JSON.stringify(object);
    resolve(jsonData)
}).then(function(res){
    setTimeout(function(){
        console.log("идет обработка данных")
    },1000)
setTimeout(function(){
    let newobject = JSON.parse(res)
    console.log(newobject)
},2000)
}).catch((err)=> {
    console.log("Ошибка")
})

