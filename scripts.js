// function to asynchronously fetch file contents from path/URL "fromFile" 
// and insert them in the DOM object found with "whereTo" -- note this
// uses document.querySelector, so use CSS notation on "whereTo"

function loadFileInto(fromFile, whereTo) {

	// 1. creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// 2. defines the GET/POST method, the source, and the async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// 3. provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {

		if ((this.readyState == 4) && (this.status == 200)) { // if .readyState is 4, the process is done; and if .status is 200, there were no HTTP errors

			document.querySelector(whereTo).innerHTML = this.responseText; // insert received output directly into the chosen DOM object

		} else if ((this.readyState == 4) && (this.status != 200)) { // if .readyState is 4, the process is done; and if .status is NOT 200, output the error into the console

			console.log("Error: " + this.responseText);

		}

	} // end ajax.onreadystatechange function

	// 4. let's go -- initiate request and process the responses
	ajax.send();

}

window.onload = function() {
  
  loadFileInto("ingredients.html", "#ingredients ul");
  loadFileInto("equipment.html", "#equipment ul");
  loadFileInto("directions.html", "directions ol");
  
  document.querySelector("#titleBanner h1").classList.add("tp");
  
  document.querySelector("#titleBanner h1").onclick = function() {
    
    this.classlist.toggle('black');
  }
  
  document.querySelector("#recipeColumns #ingredients").onclick =function() {
    this.classlist.toggle('tpShow')
  }
  
  document.querySelector("#recipeColumns #equipment").onclick = function(){
    this.classlist.toggle('tpShow')
  }
  
  document.querySelector("recipeColumns #directions").onclick = function(){
    this.classlist.toggle('tpShow')
  }
  setTimeout(function(){
  document.querySelector("#recipeColumns #ingredients ul").innerHTML += "<li>Chips of Divine Beings</li>";
  }, 100)
  
  
}
