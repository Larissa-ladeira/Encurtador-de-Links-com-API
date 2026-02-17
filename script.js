function encurtar() {
    let urlInput = document.getElementById('input-url');
    let url = urlInput.value.trim();

    // 1. Validação básica
    if (!url || url.includes("Coloque aqui")) {
        alert("Por favor, insira uma URL válida!");
        return;
    }

    // 2. Adiciona o protocolo se não existir
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }

    // 3. Chamada à API
    fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`)
        .then(response => {
            if (!response.ok) throw new Error("Erro na rede");
            return response.text();
        })
        .then(shortUrl => {
            // Coloca o resultado de volta no input
            urlInput.value = shortUrl;
            alert("URL encurtada com sucesso!");
        })
        .catch(error => {
            alert("Ops! Algo deu errado: " + error.message);
        });
}

// 4. Função de copiar separada
function copiar() {
    let inputUrl = document.getElementById("input-url");

    if (inputUrl.value === "" || inputUrl.value.includes("Coloque aqui")) {
        alert("Não há nada para copiar!");
        return;
    }

    inputUrl.select();
    inputUrl.setSelectionRange(0, 99999); // Para dispositivos móveis
    navigator.clipboard.writeText(inputUrl.value);

    alert(`URL Copiada: ${inputUrl.value}`);
}