// =====================================
// BuildMate v1.4
// history.js
// =====================================

const MAX_HISTORY = 5;

function getHistory() {
    return JSON.parse(localStorage.getItem("history") || "[]");
}

function saveHistory(file) {

    let history = getHistory();

    history = history.filter(item => item.name !== file.name);

    history.unshift({
        name: file.name,
        size: file.size,
        time: new Date().toLocaleString()
    });

    if (history.length > MAX_HISTORY) {
        history = history.slice(0, MAX_HISTORY);
    }

    localStorage.setItem("history", JSON.stringify(history));

}

function renderHistory() {

    const container = document.getElementById("historyList");

    if (!container) return;

    const history = getHistory();

    if (history.length === 0) {

        container.innerHTML = "<p>No recent files.</p>";
        return;

    }

    container.innerHTML = history.map(file => `
        <div class="history-item">
            <b>📄 ${file.name}</b><br>
            📦 ${(file.size / 1024).toFixed(2)} KB<br>
            🕒 ${file.time}
        </div>
    `).join("");

}
