function downloadCV(){
    
    let link=document.createElement("m");
    link.href="cv.pdf";
    link.download ="Mayank_CV.pdf";
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link);
}
function downloadCV(){
    window.location.href="cv.pdf"
}

function whatsapp(){
    window.open("https://wa.me/916388077651", "_blank")
}





emailjs.init("LFkwmKv19EhBGLxro");
document.getElementById("contact-form")
.addEventListener("submit",
    function(e){
    e.preventDefault();
    emailjs.sendForm(
        "service_tgii3ru",
        "template_paqofdo",
        this

    )
    .then(function(){
        alert("Message send succussfully at Mishraji");
        document.getElementById("contact-form").reset();


        
    },
    function(error){
        alert("failed to send");
        console.log(error)
    });
});