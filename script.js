document.addEventListener('DOMContentLoaded', function() {

    const secoes = document.querySelectorAll('section[id]');

    const linksMenu = document.querySelectorAll('.navbar a');

    function atualizaMenuAtivo() {
        
        let scrollAtual = window.scrollY + 100;

        secoes.forEach(secao => {
            let topoSecao = secao.offsetTop;
            let alturaSecao = secao.offsetHeight;
            let idSecao = secao.getAttribute('id');

            if (scrollAtual >= topoSecao && scrollAtual < (topoSecao + alturaSecao)) {
                
                linksMenu.forEach(link => {

                    link.classList.remove('ativo');
                    
                    if (link.getAttribute('href') === '#' + idSecao) {
                        link.classList.add('ativo');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', atualizaMenuAtivo);

});