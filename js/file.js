// =====================================
// BuildMate v1.0 Rebuild
// file.js
// =====================================

function initializeFileModule(){

    const openBtn=document.getElementById("openBtn");

    const fileInput=document.getElementById("fileInput");

    openBtn.onclick=function(){

        fileInput.value="";

        fileInput.click();

    };

    fileInput.onchange=function(){

        const file=fileInput.files[0];

        if(!file){

            setStatus("🟡 No file selected");

            resetFileInfo();

            return;

        }

        setStatus("🟡 Reading...");

        updateFileInfo(file);

        const structure=parseStructure(file);

        console.table(structure);

        setTimeout(function(){

            setStatus("🟢 Ready");

        },500);

    };

}
