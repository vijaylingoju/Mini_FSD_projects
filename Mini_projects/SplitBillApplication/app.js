
split = () =>{
    let amount = document.getElementById("amount").value
    let persons = document.getElementById("persons").value
    let k = amount/persons
    let rs = Math.floor(k)
    let result = document.getElementById("result")
    result.innerHTML = "$"+rs
    result.style.color = "orange"
    result.style.fontSize = "100px"
}


