var ulTemplate = $("<ul id='goodsList'></ul>");
$("#container").append(ulTemplate);

var ulNode = $("#goodsList");

var addGoodsBtn = $("#addBtn");


var addGoodsItem = function (element) {
	var li = $("<li><div>asdasda</div></li>");
	var input = $("#goodsValue");
	if (element) {
		$(li).children().html(input[0].value);
		element.append(li);
	}
};

addGoodsBtn.on("click", function(e) {
	addGoodsItem($("#goodsList"));
});

ulNode.find("div").on("doubleclick", function(){alert("asdasd")};)