var addGoodsBtn = $("#addBtn");


var addGoodsItem = function (element) {
	var div = $("<div id='listLine'><input type='checkbox' id='check'><img src='img/close.png'></div>");
	var input = $("#goodsValue");
	if (element) {
		$(div)[0].innerHTML += input[0].value;
		element.append(div);
		
		if((div.prev().length > 0) && (div.prev()[0].id==="listLine")) {
			div.css("border-top", "none");
		}

		div.on("mouseover", function(){
			$(this).find("img").css("visibility", "visible");
		});

		div.on("mouseout", function(){
			$(this).find("img").css("visibility", "hidden");
		});

		div.on("dblclick", function(e){
			if(e.target.nodeName === "DIV") {
				$(this).find("input").css("display" , "none");
				$(this).attr("contenteditable", "true");
			}
		});

		div.on("blur", function(){
			$(this).removeAttr("contenteditable");
			$(this).find("input").css("display", "inline-block");
		});


		div.find("input").change(function(e){
			var parentNode = $(this).parent();
			$(this).is(":checked") ? parentNode.addClass("strikeoutItem") : parentNode.removeClass("strikeoutItem");
		});

		div.find("img").on("click", function(){
			$(this).parent().slideUp("fast" , function(){
				$(this).remove();
			});
		});


	}
};

addGoodsBtn.on("click", function(e) {
	addGoodsItem($("#listContainer"));
});

var goodsValueEl = $("#goodsValue");
goodsValueEl.on("keypress", function(e){
	if(e.keyCode === 13) {
		addGoodsItem($("#listContainer"));
	}
});

var selectAllBtn = $("#selectAll");

selectAllBtn.on("click", function(){
	var listLineArr = $("#listLine");
	$("input").each(function(i){
		if(this.id === "check"){
			$(this).attr("checked", "checked");
		}
	})
});


var deleteAllBtn = $("#deleteAll");

deleteAllBtn.on("click", function(){
	$("#listLine").each(function(){
		$(this).remove();
	})
})

