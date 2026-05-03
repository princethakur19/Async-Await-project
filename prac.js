function getData(dataId, getNextData){

    setTimeout(()=>{
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    },2000)
}

getData(7,()=>{
    getData(7,()=>{
        getData(7,()=>{
            getData(8,()=>{
            })
        })
    })
})