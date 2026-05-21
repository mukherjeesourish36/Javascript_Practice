const getApi = "https://isro.vercel.app/api/spacecrafts";

const getData = async () => {
     let res = await fetch(getApi);
      console.log(res);
    //  let data = await res.json();
    //  console.log(data);

    console.log(await res.json());
    
};

getData();