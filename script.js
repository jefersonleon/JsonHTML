/*$('#filtro').keyup(function () {
    var yourtext = $(this).val();
    if (yourtext.length > 0) {
        var abc = $("section").filter(function () {
            var str = $(this).text();
            var re = new RegExp(yourtext, "i");
            var result = re.test(str);
            if (!result) {
                return $(this);
            }
        }).hide();
    } else {
        $("section").show();
    }
});*/

fetch('bd.json')
    .then(response => response.json())
    .then(data => {
        // Seleciona o tbody
        const tbody = document.querySelector('tbody');

        // Itera pelos dados
        data.person.forEach(entry => {
            // Cria uma nova linha
            const tr = document.createElement('tr');

            // Cria e adiciona cada célula (td) na linha
            const tdAuthor = document.createElement('td');
            tdAuthor.textContent = entry.author;
            tr.appendChild(tdAuthor);

            const tdTitle = document.createElement('td');
            tdTitle.textContent = entry.title;
            tr.appendChild(tdTitle);

            const tdUrl = document.createElement('td');
            const a = document.createElement('a');
            a.href = entry.url;
            a.textContent = entry.url;
            a.target = "_blank"; // Abre o link em uma nova aba
            tdUrl.appendChild(a);
            tr.appendChild(tdUrl);

            const tdUpvotes = document.createElement('td');
            tdUpvotes.textContent = entry.upvotes;
            tr.appendChild(tdUpvotes);

            // Adiciona a linha completa ao tbody
            tbody.appendChild(tr);
        });
    })
    .catch(error => console.error('Erro ao buscar o arquivo JSON:', error));

