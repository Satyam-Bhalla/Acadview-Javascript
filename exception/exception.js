// console.log(typeof eval('2+9*3'))






try{
    console.log(eval('abcd'))
    console.log('hello')
}
catch(err){
    console.log(err.name,err.value)
}
finally{
    
}