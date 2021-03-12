document.querySelector("#sendBtn")
    .addEventListener("click",
        () => {
            fetch("/postWord", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({word:document.querySelector("#wordInput").value})
            })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
        })


document.querySelector("#getBtn")
        .addEventListener("click",
        ()=> {
            fetch("/getWord")
                .then(data=>data.json())
                .then(data=>document.querySelector(".word").textContent=data.word)
        }
        
        
        
        
        
        )