// =====================================
// BuildMate v1.1
// ui.js
// =====================================

function setStatus(text) {
    document.getElementById("status").textContent = text;
}

function formatBytes(bytes) {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024)
        return (bytes / 1024).toFixed(2) + " KB";

    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

function showStructureDetails(file) {

    document.getElementById("fileName").innerHTML = `
<b>📄 ${file.name}</b><br>
📦 ${formatBytes(file.size)}<br>
📑 ${file.name.split(".").pop()}<br>
🟢 Ready
`;

}

function resetStructure() {

    document.getElementById("fileName").innerHTML =
`No structure loaded<br>--`;

}
