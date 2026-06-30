// =====================================
// BuildMate v1.2
// file.js
// =====================================

function loadStructure(file){

    if(!file){

        resetStructure();
        setStatus("🟡 No File");
        return;

    }

    setStatus("🟡 Loading...");

    setTimeout(()=>{

        showStructureDetails(file);

        setStatus("🟢 Structure Loaded");

    },400);

}

function initializeFileModule(){

    const openBtn=document.getElementById("openBtn");
    const input=document.getElementById("fileInput");

    openBtn.onclick=()=>{

        input.value="";
        input.click();

    };

    input.onchange=()=>{

        loadStructure(input.files[0]);

    };

    // Drag & Drop (Desktop)

    document.body.addEventListener("dragover",(e)=>{

        e.preventDefault();

    });

    document.body.addEventListener("drop",(e)=>{

        e.preventDefault();

        if(e.dataTransfer.files.length){

            loadStructure(e.dataTransfer.files[0]);

        }

    });

}
