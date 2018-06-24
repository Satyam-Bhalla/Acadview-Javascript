var arr = ['a','b','c','d','e']

arr.forEach(iterate)

function iterate(e,i,self){
    console.log('element is:',e,'index is ',i)
    console.log(self)
}