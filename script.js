function addTask() {
    var todoApp=document.getElementById('taskInput')
    var todoValue=todoApp.value
    // console.log(todoValue);
    if (todoValue.trim()==="") {
        alert('please enter your Task')
    }
    var todoData=document.getElementById('todo_ul')
    var listItem=document.createElement('li')
    var listData=document.createTextNode(todoValue)
    listItem.appendChild(listData)
    // or 
    // listItem.textContent=todoValue
    todoData.append(listItem)
    // console.log(listItem);
        todoApp.value=""

        // delete btn 
    var deletebtn=document.createElement('button')
    var deleteText=document.createTextNode('Delete')
    deletebtn.appendChild(deleteText)
    // console.log(deletebtn);

    listItem.appendChild(deletebtn)
    deletebtn.setAttribute('class','detelebtn')

    deletebtn.onclick=function(){
        todoData.removeChild(listItem)
    }
        
    // edit btn 
    var editbtn=document.createElement('button')
    var editText =document.createTextNode('Edit')
    // console.log(listItem.childNodes[0].nodeValue,todoValue);
    
     editbtn.onclick=function(){
        var updateValue=prompt(listItem.childNodes[0].nodeValue,todoValue)
        listItem.childNodes[0].nodeValue=updateValue

    }
    editbtn.appendChild(editText)
    // console.log(editbtn);
    listItem.appendChild(editbtn)

    editbtn.setAttribute('class','editbtns')

}


function detAll() {
    var todoData=document.getElementById('todo_ul')
    todoData.innerHTML=''
    
}