
fetch('bd2.json')
    .then(response => response.json())
    .then(data => {
        // Seleciona o container principal
        const principalContainer = document.querySelector('.principal-container');

        // Itera pelos dados
        data.person.forEach(entry => {
            // Cria a estrutura da notícia
            const principal = document.createElement('div');
            principal.classList.add('principal');

            const img = document.createElement('img');
            img.src = "./Corujao.png";
            img.alt = "imagem 1";
            principal.appendChild(img);

            const noticiaDiv = document.createElement('div');
            noticiaDiv.classList.add('noticia');

            const h2 = document.createElement('h2');
            h2.textContent = entry.titulo;
            noticiaDiv.appendChild(h2);

            const h3Data = document.createElement('h3');
            h3Data.textContent = "Data: " + entry.data;
            noticiaDiv.appendChild(h3Data);

            const p = document.createElement('p');
            p.textContent = entry.noticia;
            noticiaDiv.appendChild(p);

            const h3Url = document.createElement('h3');
            const a = document.createElement('a');
            a.href = entry.url;
            a.textContent = entry.url;
            a.target = "_blank";
            h3Url.textContent = "URL: ";
            h3Url.appendChild(a);
            noticiaDiv.appendChild(h3Url);

            principal.appendChild(noticiaDiv);
            
            // Adiciona a notícia ao container principal
            principalContainer.appendChild(principal);
        });
    })
    .catch(error => console.error('Erro ao buscar o arquivo JSON:', error));

