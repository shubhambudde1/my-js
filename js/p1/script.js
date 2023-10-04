let myLead = [" what is your", "name", "and my name is ", "budde shubham suresh "];
const inputEl = document.getElementById("inpit-el")
let inputbtn = document.getElementById("input-btn")
const ulel = document.getElementById("ul-el")

inputbtn.addEventListener("click", function() {
    myLead.push(inputEl.value)
    console.log(myLead)
})

for (let i=0; i<myLead.length;i++) {
    ulel.innerHTML += "<li>" + myLead[i] + "</li>"
}
  