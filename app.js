document.addEventListener('DOMContentLoaded', function() {
    // Animação suave ao carregar a página
    const sections = document.querySelectorAll('section');
    setTimeout(() => {
        sections.forEach(section => {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        });
    }, 200);
    
    // Detectar preferência de tema (claro/escuro)
    function detectColorScheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.setAttribute('data-color-scheme', 'dark');
        } else {
            document.body.setAttribute('data-color-scheme', 'light');
        }
    }
    
    // Inicializar a detecção de tema
    detectColorScheme();
    
    // Ouvir mudanças na preferência de tema do sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectColorScheme);
    
    // Animação nos botões ao passar o mouse
    const resourceButtons = document.querySelectorAll('.resource-btn');
    resourceButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transition = 'all 0.3s var(--ease-standard)';
        });
    });
    
    // Adicionar efeito de ondulação aos botões quando clicados
    const allButtons = document.querySelectorAll('.resource-btn, .example-btn, .btn');
    allButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Criar o elemento de efeito de ondulação
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            
            // Posicionar o efeito onde o usuário clicou
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            // Adicionar o efeito ao botão
            this.appendChild(ripple);
            
            // Remover o efeito após a animação
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Garantir que os links externos abram em uma nova aba
    document.querySelectorAll('a').forEach(link => {
        if (link.hostname !== window.location.hostname) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
    
    // Animação suave ao rolar para seções
    function smoothScroll() {
        const sections = document.querySelectorAll('section');
        
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 300;
                const sectionHeight = section.offsetHeight;
                const sectionBottom = sectionTop + sectionHeight;
                
                if (scrollY > sectionTop && scrollY < sectionBottom) {
                    if (!section.classList.contains('visible')) {
                        section.classList.add('visible');
                        section.style.opacity = 1;
                        section.style.transform = 'translateY(0)';
                    }
                }
            });
        });
    }
    
    // Inicializar scroll suave
    smoothScroll();
    
    // Animação especial para os placeholders de imagem
    const imagePlaceholders = document.querySelectorAll('.image-placeholder');
    imagePlaceholders.forEach((placeholder, index) => {
        // Adicionar uma animação de entrada escalonada
        setTimeout(() => {
            placeholder.style.opacity = '1';
            placeholder.style.transform = 'translateY(0) scale(1)';
        }, 300 + (index * 150));
        
        // Efeito de hover especial
        placeholder.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        placeholder.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Adicionar contador de cliques para estatísticas (simulado)
    let clickCount = 0;
    document.querySelectorAll('.resource-btn, .example-btn').forEach(button => {
        button.addEventListener('click', function() {
            clickCount++;
            // Podia ser usado para enviar estatísticas para um servidor
            console.log(`Recurso acessado: ${this.textContent.trim()} (Total de cliques: ${clickCount})`);
        });
    });
    
    // Adicionar indicador de loading para links externos
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function() {
            const originalText = this.textContent;
            this.style.opacity = '0.7';
            
            // Restaurar após um tempo
            setTimeout(() => {
                this.style.opacity = '1';
            }, 1000);
        });
    });
    
    // Adicionar estilos para o efeito de ondulação e animações via JavaScript
    const style = document.createElement('style');
    style.textContent = `
        .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.4);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
            width: 100px;
            height: 100px;
        }
        
        section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        section.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .image-placeholder {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
            transition: all 0.4s ease-out;
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .resource-btn {
            animation: fadeInUp 0.6s ease-out;
        }
        
        .resource-btn:nth-child(1) { animation-delay: 0.1s; }
        .resource-btn:nth-child(2) { animation-delay: 0.2s; }
        .resource-btn:nth-child(3) { animation-delay: 0.3s; }
        .resource-btn:nth-child(4) { animation-delay: 0.4s; }
        .resource-btn:nth-child(5) { animation-delay: 0.5s; }
        .resource-btn:nth-child(6) { animation-delay: 0.6s; }
        .resource-btn:nth-child(7) { animation-delay: 0.7s; }
        .resource-btn:nth-child(8) { animation-delay: 0.8s; }
        .resource-btn:nth-child(9) { animation-delay: 0.9s; }
        .resource-btn:nth-child(10) { animation-delay: 1.0s; }
        .resource-btn:nth-child(11) { animation-delay: 1.1s; }
        .resource-btn:nth-child(12) { animation-delay: 1.2s; }
        
        /* Animação para cards de relatório */
        .report-image-card {
            animation: fadeInUp 0.8s ease-out;
        }
        
        .report-image-card:nth-child(1) { animation-delay: 0.2s; }
        .report-image-card:nth-child(2) { animation-delay: 0.4s; }
        .report-image-card:nth-child(3) { animation-delay: 0.6s; }
        
        /* Animação para botões de exemplo */
        .example-btn {
            animation: fadeInUp 0.6s ease-out;
        }
        
        .example-btn:nth-child(1) { animation-delay: 0.2s; }
        .example-btn:nth-child(2) { animation-delay: 0.4s; }
    `;
    document.head.appendChild(style);
    
    // Adicionar efeito de parallax suave no cabeçalho
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            header.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Função para destacar seção ativa no scroll
    function highlightActiveSection() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                section.classList.add('active-section');
            } else {
                section.classList.remove('active-section');
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveSection);
    
    // Adicionar funcionalidade de acessibilidade melhorada
    document.addEventListener('keydown', function(e) {
        // Navegação por teclas para botões
        if (e.key === 'Tab') {
            const focusableElements = document.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
            const currentIndex = Array.from(focusableElements).indexOf(document.activeElement);
            
            if (e.shiftKey) {
                // Tab reverso
                if (currentIndex > 0) {
                    focusableElements[currentIndex - 1].focus();
                }
            } else {
                // Tab normal
                if (currentIndex < focusableElements.length - 1) {
                    focusableElements[currentIndex + 1].focus();
                }
            }
        }
        
        // Enter para ativar links focados
        if (e.key === 'Enter' && document.activeElement.tagName === 'A') {
            document.activeElement.click();
        }
    });
    
    console.log('🎓 Aplicação IA no Ensino Superior carregada com sucesso!');
    console.log('📊 Sistema de relatórios iniciado');
    console.log('🔗 Links externos configurados para nova aba');
    console.log('✨ Animações e interações ativadas');
    console.log('🎨 Botão EXPERIÊNCIA MUSEU adicionado com sucesso!');
});