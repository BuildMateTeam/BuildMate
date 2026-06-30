// =====================================
// BuildMate v1.0 Rebuild
// ui.js
// =====================================

function setStatus(text, type = "success") {

    const status = document.getElementById("status");

    status.textContent = text;

}

function updateFileInfo(file) {

    document.getElementById("fileName").textContent =
        "📄 " + file.name;

    document.getElementById("fileSize").textContent =
        "📦 " + formatBytes(file.size);

}

function resetFileInfo() {

    document.getElementById("fileName").textContent =
        "No structure loaded";

    document.getElementById("fileSize").textContent =
        "--";

}

function formatBytes(bytes) {

    if(bytes < 1024){

        return bytes + " B";

    }

    if(bytes < 1024 * 1024){

        return (bytes / 1024).toFixed(2) + " KB";

    }

    return (bytes / (1024 * 1024)).toFixed(2) + " MB";

}
