fetch('./../gallery/navigation.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
});
let listItems = document.querySelectorAll('#nav a');

listItems.forEach((item, index) => {
  item.addEventListener('click', (event) => {
	 for(var elements=document.getElementsByClassName('active'),i=0,l=elements.length; l>i; i++) {
		  elements[0].classList.remove("active");
		}
	 var selected = event.currentTarget;
	 selected.classList.add('active');
	 
  });
});
