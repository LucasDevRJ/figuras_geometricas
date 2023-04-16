function desenhaFiguraGeometrica() {
	var figurasGeometricas = document.getElementsByName("figura-geometrica");
	var campoTamanho = document.getElementById("tamanho");
	var campoDesenho = document.getElementById("campo-desenho");

	var tamanho = parseInt(campoTamanho.value);
	var desenho;
	var br;

	campoDesenho = document.body;

	console.log(campoDesenho);

	for (var i = 0; i < figurasGeometricas.length; i++) {
		if (figurasGeometricas[i].checked) {
			if (figurasGeometricas[i].value == "quadrado") {
				for (var linha = 0; linha < tamanho; linha++) {
					for (var coluna = 0; coluna < tamanho; coluna++) {
						desenho  = document.createTextNode("*");
						campoDesenho.appendChild(desenho);
					}
					br = document.createElement('br');
					campoDesenho.appendChild(br);
				}
			} else {
				console.log("triangulo")
				for (var linha = 0; linha < tamanho; linha++) {
					for (var coluna = 0; coluna < tamanho; coluna++) {
						if (coluna < linha) {
							desenho  = document.createTextNode("*");
							campoDesenho.appendChild(desenho);
						}
					}
					br = document.createElement('br');
					campoDesenho.appendChild(br);
				}
			}
		} else {
			console.log("Escolha alguma figura");
		} 
	} 
}