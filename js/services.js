let order = [];

document.querySelectorAll(".add-button").forEach((button) => {
    button.addEventListener("click", () => {
        const item = {
            name: button.dataset.name,
            price: Number(button.dataset.price)
        };

        order.push(item);
        updateOrder();
    });
});

function updateOrder() {
    const total = order.reduce((sum, item) => sum + item.price, 0);
    const count = order.length;
    const names = order.map((item) => item.name).join(", ");

    document.querySelector("#cart-count").textContent = `${count} item${count === 1 ? "" : "s"} in your order`;
    document.querySelector("#order-total").textContent = `Total: ₦${total.toLocaleString("en-NG")}`;
    document.querySelector("#order-items").textContent = names || "Add menu items to begin.";
}