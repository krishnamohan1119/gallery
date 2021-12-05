fetch('./../gallery/navigation.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
    var urlTotal= window.location.href;
    for(var elements=document.getElementsByClassName('active'),i=0,l=elements.length; l>i; i++) {
      elements[0].classList.remove("active");
    }
    if(urlTotal.search("index.html")>0){
        document.getElementsById("index").classList.add('active');
    }else if(urlTotal.search("about.html")>0){
        document.getElementsById("about").classList.add('about');
    }
});

