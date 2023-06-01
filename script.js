let typing = new Typed(".animate", {
    strings: [
     
      "Date Science"
             
    ],
    typeSpeed: 120,
    backSpeed: 70,
    loop: true,
  });

  
  /*botao retorno ao topo */
  let btn = document.querySelector("#back-to-top");
  
  btn.addEventListener("click", function () {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  });