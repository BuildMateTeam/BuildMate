// =====================================
// BuildMate v1.3
// app.js
// =====================================

window.onload=()=>{

    setTimeout(()=>{

        document.getElementById("loading").style.display="none";

        document.getElementById("app").classList.remove("hidden");

        resetStructure();

    },2000);

    initializeFileModule();

    document.getElementById("aboutBtn").onclick=()=>{

        alert(`🧱 BuildMate

Version: v1.3

Developer:
GiaHuy + ChatGPT

🚧 In Development`);

    };

    document.getElementById("settingsBtn").onclick=()=>{

        alert("⚙️ Settings Coming Soon");

    };

};
