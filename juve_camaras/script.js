document.addEventListener('DOMContentLoaded', function () {
	fetch('https://sheetdb.io/api/v1/2gdcb6wiv7t6v?sheet=Precifica%C3%A7%C3%A3o%20-%20Camaras')	
		.then(response => response.json())
		.then(data => {
			const container = document.getElementById('data-container');
			data.forEach(item => {
				const img = item.Imagem;
				const codigo = item.Codigo;
				const descricao = item.Descrição;
				const valorFinal = item["Valor final\n"];

				const dataDiv = document.createElement('div');
				dataDiv.classList.add('produto')
				dataDiv.innerHTML = `
									<div class="img"><img src="${img}" alt="" srcset=""></div>
									<div class="cod"><p>${codigo}</p></div>
									<div class="desc"><p>${descricao}</p></div>
									<div class="valor"><p>${valorFinal}</p></div>
						`;
				container.appendChild(dataDiv);
				linesColor()
			});
		})
		.catch(error => console.error('Erro ao buscar dados:', error));
});

function linesColor() {
	let lines = document.querySelectorAll(".product")
	lines.forEach((i, index) => {
			if(!Number.isInteger(index/2)) {
					i.style.backgroundColor = '#dfdfdf'
			} 
	})
}