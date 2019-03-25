/*va chercher la hauteur de la section désirée (posY)*/ 
var section = document.querySelector("#competences");
var posPage = Math.floor(section.offsetTop);



window.addEventListener("scroll", function(){
	var posDefil = window.scrollY;
	if(posDefil >= posPage){
		jQuery('.skillbar').each(function(){
			jQuery(this).find('.skillbar-bar').animate({
				width:jQuery(this).attr('data-percent')
			},2000);
		});
	}
});