async function example() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 2000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    alert(result); // "done!"
  }
  
  //example();



   function getUser (){
      const result = fetch("https://randomuser.me/api/?results=5");
      result
        .then(result=> result.json())
        .then(data=> console.log(data));

  }



  //getUser();



  async function getUserAwait() {
    const result = fetch("https://randomuser.me/api/?results=5");
    const obj = await result;

    console.log(obj.json());

  }
