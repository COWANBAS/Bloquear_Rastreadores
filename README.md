O UserScript que visa melhorar a privacidade do usuário ao bloquear rastreadores de dados pessoais enquanto navega na internet. Ele atua removendo elementos e scripts que geralmente são usados por empresas para coletar informações sobre sua navegação, como cookies, scripts de rastreamento e iframes. 

*Limpeza de Cookies*

Logo no início, o script limpa todos os cookies armazenados no navegador. Os cookies são pequenos arquivos de dados que os sites armazenam para rastrear o comportamento dos usuários ao longo do tempo. Eles podem ser usados para identificar e criar um perfil sobre você, o que é um risco para a privacidade. O script percorre todos os cookies disponíveis e os exclui, impedindo que informações sobre sua navegação sejam usadas para rastreamento futuro.

![image](https://github.com/user-attachments/assets/1d12e766-adc3-4369-bc60-3e298b3ab233)

*Bloqueio de Scripts de Rastreadores*

O script identifica e bloqueia scripts de terceiros que estão carregando informações de rastreamento. Alguns exemplos de rastreadores populares incluem o Google Analytics, utilizado para monitorar o comportamento dos usuários em sites, e o DoubleClick, uma plataforma de publicidade. O script verifica todos os scripts carregados pela página e, caso algum deles seja de um desses rastreadores conhecidos, ele é removido. Isso impede que esses scripts coletem dados sobre suas atividades online.

![image](https://github.com/user-attachments/assets/afa3533a-cd7b-4ff8-a2bb-b067fee2ba82)

*Execução Após o Carregamento da Página*

Após a página ser carregada, o script executa a função de bloqueio de scripts de rastreamento. Isso é feito para garantir que, mesmo que algum rastreador seja inserido após o carregamento inicial da página, ele será imediatamente bloqueado. Assim, a coleta de dados é interrompida assim que possível.

![image](https://github.com/user-attachments/assets/ba5f7e90-c721-40d9-aa60-3b105f36d749)

*Bloqueio de Iframes de Rastreadores*

Além de bloquear scripts, o script também remove iframes que são usados para carregar conteúdo de rastreadores, como vídeos ou anúncios. Iframes são pequenos "frames" dentro de uma página que podem carregar conteúdo de outras fontes, como o YouTube ou o Google. Esses iframes podem ser usados para coletar dados sobre o usuário sem o seu consentimento. O script verifica todos os iframes na página e remove aqueles que contêm conteúdo de rastreadores conhecidos. No entanto, ele faz uma exceção para os iframes usados para mostrar resultados de pesquisa do Google, permitindo o uso dessa funcionalidade.

![image](https://github.com/user-attachments/assets/a253d338-a665-4837-9ac5-a5add17868cc)

*Pesquisar no google*

O script quando bloqueia o "GoogleAnalytics" ele simplesmente trava o iframe de pesquisa do google, alterei o script para que ele reconhece-se este iframe não bloquease ele, O "GoogleAnalytics" Ainda continuara sendo bloqueado em outros sites mas o iframe de pesquisa funcionara normalmente.

![image](https://github.com/user-attachments/assets/918fabbb-5e0d-4f19-a177-e02fa158df12)

*Execução Imediata do Bloqueio de Iframes*

O script também é configurado para bloquear iframes imediatamente após sua execução, sem esperar que a página seja totalmente carregada. Isso garante que qualquer iframe de rastreamento seja removido antes mesmo de ser exibido para o usuário, prevenindo a coleta de dados desde o início da navegação.

![image](https://github.com/user-attachments/assets/dfdc8038-bcc4-4ceb-8dfd-5b5d65d4afaf)

Em resumo, esse script tem como objetivo proteger sua privacidade ao impedir que seu comportamento online seja rastreado por terceiros. Ele limpa os cookies armazenados no navegador, bloqueia scripts de rastreadores conhecidos (como Google Analytics e DoubleClick) e remove iframes que possam carregar conteúdo de rastreadores. Ao fazer isso, ele oferece uma experiência de navegação mais privada e segura, sem comprometer funcionalidades essenciais como a pesquisa no Google.
