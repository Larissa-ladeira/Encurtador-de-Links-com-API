function encurtar(){
    let url = document.getElementById('input-url').value;
    if(!url) {
        alert("É preciso enserir uma URL para encurtar");
        return;
    }



fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`)
        .then(response => {
            if (!response.ok) throw new Error("Erro ao conectar com o serviço.");
            return response.text(); // O TinyURL retorna apenas o texto do link, não um JSON
        })
        .then(shortUrl => {
            let inputUrl = document.getElementById("input-url");
            inputUrl.value = shortUrl;
        })
        .catch(error => {
            console.error(error);
            alert("Houve um erro: " + error.message);
        });
}
function copiar() {
    let inputUrl = document.getElementById("input-url");

    if (inputUrl.value === "" || inputUrl.value.includes("Coloque aqui")) {
        alert("Não há nada para copiar!");
        return;
    }

    inputUrl.select();
    inputUrl.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputUrl.value);

    alert(`URL Copiada: ${inputUrl.value}`);
}