document.addEventListener('DOMContentLoaded', function () {
	fetch('https://sheetdb.io/api/v1/2gdcb6wiv7t6v?sheet=Precifica%C3%A7%C3%A3o%20-%20Camaras')
		.then(response => response.json())
		.then(data => {
			const container = document.querySelector('.container');
			data.forEach(item => {
				const img = item.img;
				const valor = item.Venda;

				const dataDiv = document.createElement('div');
				dataDiv.classList.add('product')
				dataDiv.innerHTML = `
									<div class="product-details">
										<img src="${img}" alt="">
										// <p class="price">PREÇO <span>${valor}</span></p>
										</div>
										`;
				// <p class="price">PARA VALORES CONSULTE O SEU REPRESENTANTE</p>
				container.appendChild(dataDiv);
				linesColor()
			});
		})
		.catch(error => console.error('Erro ao buscar dados:', error));
});

function linesColor() {
	let lines = document.querySelectorAll(".product")
	lines.forEach((i, index) => {
		if (!Number.isInteger(index / 2)) {
			i.style.backgroundColor = '#dfdfdf'
		}
	})
}