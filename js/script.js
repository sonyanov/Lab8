function openid(id){
	var openid = document.getElementById(id)
	openid.style.display = "block"
}

function closeid(id){
	var closeid = document.getElementById(id)
	closeid.style.display = "none"
}

function parse_catalog(path){

var tmpl = document.getElementById("catalog_tmpl").content.children[0];
var catalog = document.getElementById("grid-catalog")

$.getJSON(path)
	.done(function(data){
		data["products"].forEach(element => {
			var catalog_card = tmpl.cloneNode(true);
			catalog_card.children[0].src = element["img"]
			catalog_card.children[1].textContent = element["title"]
			catalog_card.children[2].textContent = element["name"]
			catalog_card.children[3].textContent = element["price"]
			catalog_card.children[3].onclick = () => {
				window.location.href = element["button"]
			}

			catalog.appendChild(catalog_card)
		});
	});
}

parse_catalog("../js/catalog.json")
