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
        document.getElementById("indexitem").classList.add('active');
        document.getElementById("indexmenu").classList.add('active');
    }else if(urlTotal.search("about.html")>0){
        document.getElementById("aboutitem").classList.add('active');
        document.getElementById("aboutmenu").classList.add('active');
    }else if(urlTotal.search("news.html")>0){
        document.getElementById("newsitem").classList.add('active');
        document.getElementById("newsmenu").classList.add('active');
    }else if(urlTotal.search("exhibitions.html")>0){
        document.getElementById("exhibitionsitem").classList.add('active');
        document.getElementById("exhibitionsmenu").classList.add('active');
    }else if(urlTotal.search("artists.html")>0){
        document.getElementById("artistsitem").classList.add('active');
        document.getElementById("artistsmenu").classList.add('active');
    }
});

