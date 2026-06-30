// =====================================
// BuildMate v1.1
// file.js
// =====================================

function initializeFileModule() {

    const openBtn = document.getElementById("openBtn");
    const input = document.getElementById("fileInput");

    openBtn.onclick = () => {

        input.value = "";
        input.click();

    };

    input.onchange = () => {

        const file = input.files[0];

        if (!file) {

            resetStructure();
            setStatus("🟡 No File");

            return;

        }

        setStatus("🟡 Loading...");

        setTimeout(() => {

            showStructureDetails(file);

            setStatus("🟢 Structure Loaded");

        },400);

    };

}
