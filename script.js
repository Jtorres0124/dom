
var main = document.querySelector("main");


var joke1 = "Why don't scientists trust atoms? Because they make up everything!";
var joke2 = "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.";
var joke3 = "Why don't skeletons fight each other? They don't have the guts.";


var template = `
    <h2>My Jokes</h2>
    <ul>
        <li>${joke1}</li>
        <li>${joke2}</li>
        <li>${joke3}</li>
    </ul>
`;


main.innerHTML = template;


var paragraph = document.createElement("p");


paragraph.textContent = "That's all folks!";


document.body.appendChild(paragraph);
