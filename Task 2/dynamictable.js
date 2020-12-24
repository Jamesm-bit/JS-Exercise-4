
let i = 0
let v = 0
let divlist = null
let fNameTag = null
let lNameTag = null
let listele = null
let editbutton = null
let delbutton = null
let checkBox = null

function addelement(f, l) {
    i++

    divlist2 = document.createElement("div")
    divlist2.setAttribute("id", "div21")
    divlist2.setAttribute("class","divhold")

    divlist = document.createElement("div")
    divlist.setAttribute("id", "div" + i)
    divlist.setAttribute("class","div")

    checkBox = document.createElement('input')
    checkBox.setAttribute("class","chk")
    checkBox.type = "checkbox"

    fNameTag = document.createElement("p")
    fNameTag.setAttribute("id", "fName" + i)
    fNameTag.setAttribute("class", "inname")
    fNameTag.innerHTML = f

    lNameTag = document.createElement("p")
    lNameTag.setAttribute("id", "lName" + i)
    lNameTag.setAttribute("class", "inname")
    lNameTag.innerHTML = l

    listele = document.getElementById("list")

    editbutton = document.createElement("button")
    editbutton.setAttribute("class", "fNameButton")
    editbutton.textContent = "Edit";
    editbutton.id = ("edit" + i)

    delbutton = document.createElement("button")
    delbutton.setAttribute("class", "lNameButton")
    delbutton.textContent = "Delete";
    delbutton.id = ("del" + i)

    document.getElementById("fname").value = " "
    document.getElementById("lname").value = " "

    divlist2.appendChild(checkBox)
    divlist.appendChild(fNameTag)
    divlist.appendChild(lNameTag)
    divlist.appendChild(editbutton)
    divlist.appendChild(delbutton)
    divlist2.appendChild(divlist)
    listele.appendChild(divlist2)

    document.getElementById("edit" + i).addEventListener("click", editpush.bind(null, i))
    document.getElementById("del" + i).addEventListener("click", del.bind(null, i))
}

function editFinish() {
    let fNameChange = document.getElementById("fname").value
    let lNameChange = document.getElementById("lname").value

    let previousFName = document.getElementById("fName" + v)
    previousFName.innerHTML = fNameChange

    let previousLName = document.getElementById("lName" + v)
    previousLName.innerHTML = lNameChange
    document.getElementById("confirmEdit").style.visibility = "hidden"
    document.getElementById("Add").style.visibility = "visible"
    document.getElementById("fname").value = " "
    document.getElementById("lname").value = " "
}

function editpush(j) {

    let fNameChange = document.getElementById("fName" + j).innerHTML
    let lNameChange = document.getElementById("lName" + j).innerHTML

    document.getElementById("fname").value = fNameChange
    document.getElementById("lname").value = lNameChange
    v = j
    document.getElementById("confirmEdit").style.visibility = "visible"
    document.getElementById("Add").style.visibility = "hidden"

}

function del(z) {
    console.log(z)
    /*
    document.getElementById("fName"+i).remove()
    document.getElementById("lname"+i).remove()
    document.getElementById("edit"+i).remove()
    document.getElementById("del"+i).remove()
    */
    document.getElementById("div" + z).remove()
}

function add() {
    fname = document.getElementById("fname").value
    lname = document.getElementById("lname").value
    addelement (fname,lname)
}

function render() {
    addelement("test1","test")
    addelement("test2","test")
    addelement("test3","test")
    addelement("test4","test")
    addelement("test5","test")
    addelement("test6","test")
    addelement("test7","test")
    addelement("test8","test")
    addelement("test9","test")
    addelement("test10","test")
}
function removechecked() {
    
    let boxes = document.getElementsByClassName("chk")
    let divs = document.getElementsByClassName("div")
    
    for(let x=0; x<boxes.length; x++){
        console.log(x)
        let box = boxes[x]
        let div = divs[x]
        
        if(box.checked){
            box.parentNode.removeChild(box)
            div.parentNode.removeChild(div)
            x = 0
        }
    }
}

function checkall () {
    let boxes = document.getElementsByClassName("chk")
    for(let x=0; x<boxes.length; x++){
        let box = boxes[x]
        box.checked = true
    }
    x=0
}

document.getElementById("checkbx").addEventListener("click", checkall)
document.getElementById("checkdel").addEventListener("click", removechecked)
document.getElementById("render").addEventListener("click", render)
document.getElementById("confirmEdit").addEventListener("click", editFinish.bind(null, v))
document.getElementById("Add").addEventListener("click", add)