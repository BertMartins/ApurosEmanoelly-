const processButton = document.getElementById("processButton");
const corrigirButton = document.getElementById("corrigirButton");

processButton.addEventListener("click", processText);
corrigirButton.addEventListener("click", corrigirOutput);

function processText() {
    const inputText = document.getElementById("inputText").value;
    const lines = inputText.split("\n");
    const formattedLines = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line) {
            formattedLines.push(line);
        } else if (i > 0 && i < lines.length - 1) {
            // Adicione uma quebra de linha apenas se não for a primeira ou última linha vazia
            formattedLines.push("\n");
        }
    }

    const output = formattedLines.join(" ; ");
    document.getElementById("output").textContent = output;
}
