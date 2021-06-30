showNotes();
 

 let addbtn = document.getElementById("addbtn");
 addbtn.addEventListener("click", function(e){
     let addtxt = document.getElementById("addtxt");
     let notes = localStorage.getItem("notes");//notes se jo bhi hai vo dedo
     
     if(notes == null){
          notesObj = [];
          
     }
     else{
         notesObj = JSON.parse(notes);//notes ko array mai rkhenge
     }
     notesObj.push(addtxt.value);
     localStorage.setItem("notes", JSON.stringify(notesObj));//localstorage mai string mai store hota hai
     addtxt.value="";
     console.log(notesObj);
     showNotes();

 });

 function showNotes(){
     let notes = localStorage.getItem("notes");
     if(notes == null){
        notesObj = [];
        
   }
   else{
       notesObj = JSON.parse(notes);//notes ko array mai rkhenge
   }
   let html = "";
   notesObj.forEach(function(element, index){
html += `<div class="noteCard mx-2 my-2 card" style="width: 18rem;">

<div class="card-body">
    <h5 class="card-title">Notes ${index + 1}</h5>
    <p class="card-text">${element}</p>
    <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
</div>
</div>`;
   });
   let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}
function deleteNote(index) {
    //   console.log("I am deleting", index);
    
      let notes = localStorage.getItem("notes");
      if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
      console.log(notesObj[0]);
      notesObj.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      showNotes();
    }
    
    
    let search = document.getElementById('searchtxt');
    search.addEventListener("input", function(){
    
        let inputVal = search.value.toLowerCase();
        // console.log('Input event fired!', inputVal);
        let noteCards = document.getElementsByClassName('noteCard');
        Array.from(noteCards).forEach(function(element){
            let cardTxt = element.getElementsByTagName("p")[0].innerText;
            if(cardTxt.includes(inputVal)){
                element.style.display = "block";
            }
            else{
                element.style.display = "none";
            }
            // console.log(cardTxt);
        })
    })


