const promise = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('End'), 5000)
})

// IIFE - Imediately Invoked Function Expression
(async function(){
    console.log('Begin') 
    const text = await promise
    console.lg(text) 
//or 
console.log(await promise)

try {
    const res = await promise
    setTimeout(() => console.log(res), 5000)
} catch (rej) {
    console.error(rej)
}
})()

