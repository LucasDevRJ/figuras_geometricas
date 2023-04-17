function desenhaFiguraGeometrica() {
	var figurasGeometricas = document.getElementsByName("figura-geometrica");
	var campoTamanho = document.getElementById("tamanho");
	var campoDesenho = document.getElementById("campo-desenho");

	// Criar elemento
	var p = document.createElement('p');
	p.style.color = "#FFFFFF";
	p.style.display = "flex";
	p.style.alignItems = "center";
	p.style.justifyContent = "center";
	p.style.backgroundColor = "#000000";
	p.style.padding = "30px 50px";

	var tamanho = parseInt(campoTamanho.value);

	for (var i = 0; i < figurasGeometricas.length; i++) {
		if (figurasGeometricas[i].checked) {
			if (figurasGeometricas[i].value == "quadrado") {
				for (var linha = 0; linha < tamanho; linha++) {
					for (var coluna = 0; coluna < tamanho; coluna++) {
						var desenho  = document.createTextNode("*");
						p.appendChild(desenho);
						campoDesenho.appendChild(p);
					}
					var br = document.createElement('br');
					p.appendChild(br);
				}
			} else {
				console.log("triangulo")
				for (var linha = 0; linha < tamanho; linha++) {
					for (var coluna = 0; coluna < tamanho; coluna++) {
						if (coluna < linha) {
							var desenho  = document.createTextNode("*");
							p.appendChild(desenho);
							campoDesenho.appendChild(p);
						}
					}
					var br = document.createElement('br');
					p.appendChild(br);
				}
			}
		} else {
			console.log("Escolha alguma figura");
		} 
	} 
}