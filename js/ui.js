// =====================================
// BuildMate v1.3
// ui.js
// =====================================

function setStatus(text){

    document.getElementById("status").textContent=text;

}

function formatBytes(bytes){

    if(bytes<1024)return bytes+" B";

    if(bytes<1024*1024)
        return (bytes/1024).toFixed(2)+" KB";

    return (bytes/1024/1024).toFixed(2)+" MB";

}

function showStructureDetails(file){

    localStorage.setItem("lastFile",file.name);

    document.getElementById("fileName").innerHTML=`

<b>📄 ${file.name}</b><br>

📦 ${formatBytes(file.size)}<br>

📑 ${file.name.split(".").pop()}<br>

🟢 Ready

`;

}

function resetStructure(){

    const last=localStorage.getItem("lastFile");

    document.getElementById("fileName").innerHTML=last?

`Last Opened:<br><b>${last}</b>`:

`No structure loaded`;

}
