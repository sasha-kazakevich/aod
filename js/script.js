$(document).ready(function(){
	$("#menu").on("click","a",function(event){
		event.preventDefault();
		var id = $(this).attr("href"),
			top = $(id).offset().top;
		$("body,html").animate({scrollTop: top},800);
	});
	$(window).scroll(function(){
		if($(this).scrollTop() > 50){
			$("#button-up").fadeIn();
		}else $("#button-up").fadeOut();
	});
	$("#button-up").click(function(){
		$("html,body").animate({ scrollTop: 0}, 600);
		return false;
	});
});

(function(){
var timer,
	twitt = {
	mesage : {
		name : ["Vintage Bikes RI @vintagebike<span> / 13 min</span>",
				"AOD New York  @aod<span> / 35 min<span>",
				"Bike New York @bikenewyork<span> / 5 min</span>"],

		twit : ["We're making NYC streets safer for their fellow cyclists",
				"Cycling is a smart decision if you want to keep making smart decisions.",
				"It's so beautiful in New York now! Why not go for a bike."]
	},
	elements : {
		name: document.getElementById("name"),
		twitter : document.getElementById("twitter"),
		swetch : document.getElementById("switch"),
		circle : document.getElementsByClassName("circle")
	},
	func : function(i){
			Array.prototype.forEach.call(this.elements.circle,function(elem){
				elem.style.background = "none";
			});
			this.elements.name.innerHTML = this.mesage.name[i];
			this.elements.twitter.innerHTML = this.mesage.twit[i];
			this.elements.swetch.children[i].style.background = "#a9afb3";
	},
	inter : function(i){
			timer = setInterval(function(){
			twitt.func(i);
			i++;
			if (i === 3) i = 0;
			},10000);
	},
	clear : function (k){
		clearInterval(timer);
		twitt.func(k);
		twitt.inter(k);
	}
}
twitt.inter(0);

twitt.elements.swetch.addEventListener("click", function(e){
	twitt.clear(e.target.getAttribute("data-num"));
});

})();

(function(){
var shop = document.getElementById("shop"),
	shopDis = document.getElementById("shop-dis"),
	exit = document.getElementById("exit");

shop.addEventListener("click", function(e){
	if (e.target.getAttribute("data-name")) shopDis.style.display = "block";
});
exit.addEventListener("click", function(){
	shopDis.style.display = "none";
});
})();