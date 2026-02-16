function encurtar() {
    // Pega o valor do input e remove espaços extras
    let url = document.getElementById('input-url').value.trim();

    // Verifica se está vazio
    if (!url) {
        alert("Por favor, cole uma URL válida!");
        return; // Para a função aqui
    }

    // Se não tiver http ou https, adiciona https:// (simples e comum)
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }

    // Chama a API do TinyURL
    fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`)
        .then(response => {
            // Verifica se deu certo
            if (!response.ok) {
                throw new Error("Erro ao encurtar. Tente novamente!");
            }
            return response.text(); // Retorna o texto (o link curto)
        })
        .then(shortUrl => {
            // Coloca o link curto no input
            document.getElementById('input-url').value = shortUrl;

            // Mensagem simples de sucesso!
            alert("Sucesso! Sua URL foi encurtada:\n" + shortUrl + "\n\nAgora clique em 'Copiar' para usar!");
        })
        .catch(error => {
            // Mostra erro de forma simples
            alert("Ops! Algo deu errado: " + error.message);
        });
}
function encurtar() {
    // Pega o valor do input e remove espaços extras
    let url = document.getElementById('input-url').value.trim();

    // Verifica se está vazio
    if (!url) {
        alert("Por favor, cole uma URL válida!");
        return; // Para a função aqui
    }

    // Se não tiver http ou https, adiciona https:// (simples e comum)
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }

    // Chama a API do TinyURL
    fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`)
        .then(response => {
            // Verifica se deu certo
            if (!response.ok) {
                throw new Error("Erro ao encurtar. Tente novamente!");
            }
            return response.text(); // Retorna o texto (o link curto)
        })
        .then(shortUrl => {
            // Coloca o link curto no input
            document.getElementById('input-url').value = shortUrl;

            // Mensagem simples de sucesso!
            alert("Sucesso! Sua URL foi encurtada:\n" + shortUrl + "\n\nAgora clique em 'Copiar' para usar!");
        })
        .catch(error => {
            // Mostra erro de forma simples
            alert("Ops! Algo deu errado: " + error.message);
        });
}    let inputUrl = document.getElementById("input-url");

    if (inputUrl.value === "" || inputUrl.value.includes("Coloque aqui")) {
        alert("Não há nada para copiar!");
        return;
    }

    inputUrl.select();
    inputUrl.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputUrl.value);

    alert(`URL Copiada: ${inputUrl.value}`);
}