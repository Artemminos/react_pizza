const asyncFN = async () => {
    if (Math.random() === 3){
        return {obj:'art',dsa:'a'}
    }
    return {name:'art',city:'a'}
}
asyncFN().then((elem)=>{
    console.log(elem.name)
}).then((elem)=>{
    console.log(elem)
}).catch((e)=>{
    console.log('error:',e)
}).finally(()=>{

})