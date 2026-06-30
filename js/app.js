// =====================================
// BuildMate v1.1
// app.js
// =====================================

window.onload = () => {

    setTimeout(() => {

        document.getElementById("loading").style.display = "none";

        document.getElementById("app").classList.remove("hidden");

    },2000);

    initializeFileModule();

    document.getElementById("aboutBtn").onclick = () => {

        alert(`🧱 BuildMate

Version: v1.1

Developer:
GiaHuy + ChatGPT

Status:
🚧 Under Development`);

    };

    document.getElementById("settingsBtn").onclick = () => {

        alert("⚙️ Settings Coming Soon");

    };

};
