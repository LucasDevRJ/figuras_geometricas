function desenhaFiguraGeometrica() {
	var figurasGeometricas = document.getElementsByName("figura-geometrica");
	var campoTamanho = document.getElementById("tamanho");
	var campoDesenho = document.getElementById("desenho");
	var tamanho = campoTamanho.value;

	for (var i = 0; i < figurasGeometricas.length; i++) {
		if (figurasGeometricas[i].checked) {
			if (figurasGeometricas[i].value == "triangulo") {
				for (var linha = 0; linha < tamanho; linha++) {
					for (var coluna = 0; coluna < tamanho; coluna++) {

					}
				}
			} 
		}  
	} 
}