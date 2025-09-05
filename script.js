document.addEventListener("DOMContentLoaded", () => {
  const carContainer = document.getElementById("carContainer");

  fetch("cars.json")
    .then((response) => response.json())
    .then((cars) => {
      carContainer.innerHTML = "";
      cars.forEach((car) => {
        const carCard = document.createElement("div");
        carCard.classList.add("carDetails");

        const carImage = document.createElement("img");
        carImage.src = car.foto;
        carImage.alt = car.nome;

        const carInfo = document.createElement("div");
        carInfo.classList.add("car-info");

        const carHeader = document.createElement("div");
        carHeader.classList.add("car-header");

        const carName = document.createElement("h3");
        carName.textContent = car.nome;

        const carButton = document.createElement("button");
        carButton.textContent = "Comprar";
        carButton.classList.add("buy-button");

        const carSpecs = document.createElement("div");
        carSpecs.classList.add("car-specs");

        const carColor = document.createElement("p");
        carColor.textContent = `Cor: ${car.cor}`;

        const carPrice = document.createElement("p");
        carPrice.textContent = `Valor: ${car.valor}`;

        carHeader.appendChild(carName);
        carHeader.appendChild(carButton);
        carSpecs.appendChild(carColor);
        carSpecs.appendChild(carPrice);
        carInfo.appendChild(carHeader);
        carInfo.appendChild(carSpecs);
        carCard.appendChild(carImage);
        carCard.appendChild(carInfo);
        carContainer.appendChild(carCard);
      });
    })
    .catch((error) => {
      console.error("Erro ao carrergar os dados dos carros:", error);
      carContainer.textContent =
        "Não foi possível carregar os dados dos veículos, questione o Kremer à respeito, se ele não souber, CORRA!!";
    });
});
