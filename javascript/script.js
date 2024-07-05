// select overlay-btn,overlay
var overlaybtn=document.getElementById("overlay-btn")
var overlay=document.getElementById("overlay")

// select overlay-input,close-btn
var overlayinput=document.getElementById("overlay-input")
var closebtn=document.getElementById("close-btn")

overlaybtn.addEventListener("click",function()
{
    overlay.style.display="block"
    overlayinput.style.display="block"
})

closebtn.addEventListener("click",function()
{
    overlay.style.display="none"
    overlayinput.style.display="none"
})

// select conatiner,book-name,book-author,description,add-btn
var container=document.getElementById("container")
var addbtn=document.getElementById("add-btn")
var bookname=document.getElementById("book-name")
var bookauthor=document.getElementById("book-author")
var description=document.getElementById("description")

addbtn.addEventListener("click",function()
{
    var div=document.createElement("div")
    div.setAttribute("class","container-input")
    div.innerHTML=`<h1>${bookname.value}</h1>
                   <h5>${bookauthor.value}</h5>
                   <p>${description.value}</p>
                   <button onclick="deletediv(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    overlayinput.style.display="none"
})

// select delete-btn,container-input
var deletebtn=document.getElementById("delete-btn")

function deletediv(event)
{
    event.target.parentElement.remove()
}