// =====================================
// BuildMate v1.0 Rebuild
// parser.js
// =====================================

function parseStructure(file){

    return{

        name:file.name,

        size:file.size,

        type:file.type || "Unknown",

        extension:file.name.split(".").pop(),

        loaded:true,

        width:"?",

        height:"?",

        length:"?",

        blocks:"?",

        palette:"?",

        version:"v1.0"

    };

}
