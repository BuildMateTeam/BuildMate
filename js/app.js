// =====================================
// BuildMate v1.0 Rebuild
// app.js
// =====================================

window.addEventListener("load", function () {

    const loading = document.getElementById("loading");
    const app = document.getElementById("app");

    setTimeout(function () {

        loading.style.display = "none";
        app.classList.remove("hidden");

    }, 2000);

    initializeFileModule();

    document.getElementById("aboutBtn").onclick = function () {

        alert(
`🧱 BuildMate

Version: v1.0 Rebuild

Developer:
GiaHuy + ChatGPT

Status:
🚧 Under Development`
        );

    };

    document.getElementById("settingsBtn").onclick = function () {

        alert("⚙️ Settings sẽ có trong BuildMate v1.1");

    };

});
