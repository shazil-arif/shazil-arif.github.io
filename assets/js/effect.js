$(document).ready(()=>{
    $("#one").fadeIn(3000,()=>{
        $("#two").fadeIn(3000,()=>{
            $("#three").fadeIn(3000)
        });
    });
});