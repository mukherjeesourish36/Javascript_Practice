const getApi = "https://catfact.ninja/facts";
//const paraData = document.querySelector("#para");

const getData = async () => {
     let res = await fetch(getApi);
    // console.log(res);
     let data = await res.json();
     console.log(data);
    console.log(data.data[0].fact);
   // paraData.innerText=data.data[0].fact;

    //console.log(data);
    
};
getData();