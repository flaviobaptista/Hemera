// Arquivo JavaScript para funcionalidades do site

document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica para o Toggle de Tema (Dark/Light Mode)
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Função para aplicar o tema
    const applyTheme = (theme) => {
        body.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
        // Atualiza o ícone
        if (themeToggle) {
            themeToggle.classList.remove('bi-sun-fill', 'bi-moon-fill');
            themeToggle.classList.add(theme === 'dark' ? 'bi-sun-fill' : 'bi-moon-fill');
        }
    };

    // Verifica o tema salvo no localStorage ou usa 'dark' como padrão
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    // Adiciona o listener de clique no botão de toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
        });
    }

});


// Seleciona o link, o modal do Bootstrap e o conteúdo interno do modal
    const linkDownload = document.getElementById('linkDownload');
    const loadingModal = new bootstrap.Modal(document.getElementById('loadingModal'));
    const modalContent = document.getElementById('modalContent');
    const arquivoURL = linkDownload.getAttribute('href');

    linkDownload.addEventListener('click', function(event) {
        // 1. Previne a ação padrão do link (abrir o arquivo diretamente)
        event.preventDefault();

        // 2. Reseta o conteúdo do modal para o spinner
        modalContent.innerHTML = `
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Carregando...</span>
            </div>
            <p class="mt-3 fs-5">Carregando...</p>
        `;

        // 3. Exibe o Modal (Popup)
        loadingModal.show();

        // 4. Inicia o Download forçado
        // Cria um link temporário para forçar o download.
        const tempLink = document.createElement('a');
        tempLink.href = arquivoURL;
        tempLink.setAttribute('download', 'arquivo_baixado.pdf'); // Adiciona o 'download' aqui
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
        
        // 5. Simula o tempo de download e atualiza o modal
        // O valor (em milissegundos) é uma estimativa razoável para a maioria dos downloads
        // até o navegador começar a salvá-lo (ex: 3 a 5 segundos).
        const delaySimulacao = 4000; // 4 segundos

        setTimeout(() => {
            // 6. Atualiza o conteúdo do modal para a mensagem final
            modalContent.innerHTML = `
               <i class="bi bi-check-circle-fill text-success" style="font-size: 3rem;"></i> 
                <p class="mt-3 fs-5 fw-bold text-success">Download Feito!</p>
                <p class="text-secondary small">Cheque se o download foi concluído no seu navegador. Você já pode fechar esse aviso!</p>
                
                <button type="button" class="btn btn-secondary mt-3" data-bs-dismiss="modal">Fechar</button>
            `;

            // 7. Configura o modal para fechar automaticamente após mais 3 segundos
       

        }, delaySimulacao);
    });

