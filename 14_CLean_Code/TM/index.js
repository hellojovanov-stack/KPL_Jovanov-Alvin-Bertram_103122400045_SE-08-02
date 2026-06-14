async function fetchOrder(orderId, token) {
    const response = await fetch(`https://example.com/api/orders/${orderId}`, {
        headers: {
            Authorization: token
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch order details");
    }

    return response.json();
}

function renderOrderDetails(order, detailsDiv) {
    detailsDiv.innerHTML = "";

    const header = document.createElement("h3");
    header.textContent = `Order ID: ${order.id}`;

    const status = document.createElement("p");
    status.textContent = `Status: ${order.status}`;

    detailsDiv.appendChild(header);
    detailsDiv.appendChild(status);
}

function showModal(modal) {
    modal.style.display = "block";
}

function setupCloseButton(modal) {
    const closeBtn = modal.querySelector(".close");

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

function setupConfirmButton(modal, order, token) {
    const confirmBtn = modal.querySelector("#confirmOrderBtn");

    if (order.status === "Delivered") {
        confirmBtn.style.display = "none";
        return;
    }

    confirmBtn.addEventListener("click", () => {
        confirmOrder(order.id, token);
    });
}

async function fetchOrderDetails(orderId, token) {
    try {
        const order = await fetchOrder(orderId, token);

        const modal = document.getElementById("orderModal");
        const detailsDiv = modal.querySelector("#orderDetails");

        renderOrderDetails(order, detailsDiv);
        setupCloseButton(modal);
        setupConfirmButton(modal, order, token);

        showModal(modal);
    } catch (error) {
        console.error(error);
    }
}