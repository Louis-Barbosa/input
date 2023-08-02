
let titleInput = document.getElementById("title_input");
let mainTitle = document.getElementById("main_title");
let button = document.getElementById("submit_button");
let noun = document.getElementById("noun");
let verb = document.getElementById("verb");
let adj = document.getElementById("adjective");
let storyResult = document.getElementById("story_result");
let formContainer = document.querySelector(".form_container");


titleInput.addEventListener("keyup", function() {
  mainTitle.innerText = titleInput.value;
});


button.addEventListener("click", function(event) {
  event.preventDefault(); 

  
  let isFormValid = titleInput.value.length > 0 && noun.value.length > 0 && verb.value.length > 0 && adj.value.length > 0;

  if (isFormValid) {
    
    let adLib = "Last night I ate a " + noun.value + ", and today I just had to " + verb.value + ". What a " + adj.value + " day!";
    
    
    storyResult.innerText = adLib;

    
    formContainer.style.display = "none";
  } else {
    
    alert("Please enter text into all fields");
  }
});
