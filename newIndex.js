"nothing here"


const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve("Hello")
    },2000)
})

const myFunc=async()=>{
    const data=await myPromise;
}