const drinks = [
    {
        image: "latte.png",
        name: "Latte",
        prep: "8 minutes",
        ingredients: ["warm water", "instant coffee powder", "milk", "sugar"],
        instructions: ["Add warm water and instant coffee to a bowl", "Froth together the warm water and coffee powder", "Add ice", "Add milk to your desire"]
    },
    {
        image: "matcha.png",
        name: "Matcha Latte",
        prep: "10 minutes",
        ingredients: ["warm water", "matcha powder", "milk", "ice"],
        instructions: ["Add warm water and matcha powder to a bowl", "Froth together the warm water and matcha powder", "Add ice", "Add milk to your desire"]
    },
    {
        image: "lemonade.png",
        name: "Lemonade",
        prep: "10 minutes",
        ingredients: ["water", "lemon juice", "sugar", "ice"],
        instructions: ["Combine water, lemon juice, and sugar", "Add ice", "Serve cold"]
    },
    {
        image: "icedtea.png",
        name: "Iced Tea",
        prep: "8 minutes",
        ingredients: ["tea bag", "hot water", "ice"],
        instructions: ["Heat water", "Pour hot water into cup", "Place tea bag in the cup for 5 minutes", "Remove the tea bag", "Add ice"]
    }
]
const clickSound = new Audio("click.mp3");

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".drinks-nav");
    const card = document.querySelector(".info-card");

    drinks.forEach((drink) => {
        const btn = document.createElement("button");
        btn.className = "drink-btn";

        const img = document.createElement("img");
        img.src = drink.image;
        img.alt = drink.name;
        img.className = "btn-img";
        btn.appendChild(img);

        btn.addEventListener("click", () => {
            card.innerHTML = `
            <h2>${drink.name}</h2>
            <img src="${drink.image}">
            <p><strong>Prep time: </strong>${drink.prep}</p>
            <p><strong>Ingredients:</strong></p>
            <ul>
  ${drink.ingredients.map(item => `<li>${item}</li>`).join("")}
</ul>
<p>Steps:</p>
    <ol>
      ${drink.instructions.map(step => `<li>${step}</li>`).join("")}
    </ol>
            `;
            clickSound.play();
            card.style.display = "block";
        })
        nav.appendChild(btn);
    });
});
