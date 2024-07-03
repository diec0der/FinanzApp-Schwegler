document.addEventListener("DOMContentLoaded", function() {
    document.body.style.backgroundColor = "#f0f8ff";
    document.querySelector('h1').style.color = "#2c3e50";
    document.querySelector('h1').style.margin = "0";
    document.querySelector('h1').style.flexGrow = "1";
    document.querySelector('h1').style.textAlign = "left";
    
    const header = document.querySelector('header');
    header.style.display = "flex";
    header.style.justifyContent = "space-between";
    header.style.alignItems = "center";
    header.style.padding = "10px";
    header.style.backgroundColor = '#faebd7';
    
    const nav = document.querySelector('nav');
    nav.style.flexGrow = "1";
    nav.style.textAlign = "right";
    
    const ul = document.querySelector('ul');
    ul.style.listStyleType = "none";
    ul.style.display = "flex";
    ul.style.justifyContent = "center";
    ul.style.alignItems = "center";
    ul.style.gap = "20px";


    document.querySelectorAll('li').forEach(li => {
        li.style.display = "inline";
    });

    document.querySelectorAll('a').forEach(a => {
        a.style.textDecoration = "none";
        a.style.color = "#2c3e50";
        a.style.fontWeight = "bold";
    });
    
    document.querySelectorAll('h2').forEach(h2 => {
        h2.style.color = "#2c3e50";
        h2.style.fontSize = "30px";
        h2.style.paddingTop = "10px";
    });
    document.querySelectorAll('button').forEach(button => {
        button.style.backgroundColor = "#3498db";
        button.style.color = "#fff";
        button.style.border = "none";
        button.style.padding = "15px 30px";
        button.style.fontSize = "18px";
        button.style.margin = "10px";
        button.style.borderRadius = "8px";
        button.style.cursor = "pointer";
    });
    document.querySelector('footer').style.backgroundColor = "#2c3e50";
    document.querySelector('footer').style.color = "#fff";
});