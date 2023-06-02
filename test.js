function showRedirectingModal() {
        // Create a modal that will block the page and show a message
        var modal = document.createElement("div");
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100vw";
        modal.style.height = "100vh";
        modal.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        modal.style.zIndex = "999";
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";

        // Create a message to show
        var message = document.createElement("h1");
        message.innerHTML = "Redirecting to cart 🛒 \n Powered Bidnamic";
        message.style.color = "white";
        message.style.textAlign = "center";

        // Add some animation to the message
        modal.style.animationName = "fadein";
        modal.style.animationDuration = "0.5s";
        modal.style.animationFillMode = "forwards";

        // Add the message to the modal
        modal.appendChild(message);

        // Append the modal to the body
        document.body.appendChild(modal);
    }

showRedirectingModal();
