document.addEventListener("DOMContentLoaded", function() {
    document.body.style.backgroundColor = "#f0f8ff";
    document.querySelector('h1').style.color = "#2c3e50";
    document.querySelector('h2').style.color = "#2c3e50";
    document.querySelector('h2').style.fontSize = "30px";
    document.querySelector('h2').style.paddingTop = "10px";
    document.querySelectorAll('button').forEach(button => {
        button.style.backgroundColor = "#3498db";
        button.style.color = "#fff";
        button.style.border = "none";
        button.style.padding = "10px 20px";
        button.style.fontSize = "16px";
        button.style.margin = "10px";
        button.style.borderRadius = "5px";
        button.style.cursor = "pointer";
    });
    document.querySelector('footer').style.backgroundColor = "#2c3e50";
    document.querySelector('footer').style.color = "#fff";
});

