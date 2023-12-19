"nothing here"


const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve("Hello")
    },2000)
})

const myFunc=async()=>{
    const data=await myPromise;
}

const newwFunc=async()=>{
    try{
let availableTime= await newPromise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Resolved After 2 seconds")
    },2000)
})

}
    
    catch(err)
    {
        throw(err)
    }
}
