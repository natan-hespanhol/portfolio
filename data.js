const SITE_DATA = {
    profile: {
        name: 'Natan Hespanhol',
        photo: 'images/profile.svg',
        email: 'natan.hesp@gmail.com',
        linkedin: 'https://www.linkedin.com/in/natan-hespanhol',
        github: 'https://github.com/natan-hespanhol',
        resumeFile: 'resume.pdf'
    },

    stats: [
        { value: 7, suffix: '+', label: { pt: 'Anos de Experiência', en: 'Years of Experience' } },
        { value: 3, suffix: '', label: { pt: 'Empresas & Órgãos', en: 'Companies & Agencies' } },
        { value: 5, suffix: '+', label: { pt: 'Projetos & Iniciativas', en: 'Projects & Initiatives' } }
    ],

    i18n: {
        pt: {
            'nav.about': 'Sobre',
            'nav.experience': 'Experiência',
            'nav.skills': 'Habilidades',
            'nav.certifications': 'Certificações',
            'nav.projects': 'Projetos',
            'nav.contact': 'Contato',

            'hero.greeting': 'Olá, eu sou',
            'hero.title': 'Software QA Engineer',
            'hero.description': 'Engenheiro de qualidade de software na WEX, atuando com sistemas de pagamento de missão crítica. Apaixonado por automação de testes, tecnologia e por garantir que cada entrega seja confiável, segura e de alta qualidade.',
            'hero.btn.resume': 'Baixar Currículo (PDF)',
            'hero.btn.contact': 'Entre em Contato',
            'hero.roles.0': 'Engenheiro de QA',
            'hero.roles.1': 'Automação de Testes',
            'hero.roles.2': 'Especialista em Qualidade',

            'experience.title': 'Experiência',
            'experience.location': 'Local',
            'experience.current': 'Atual',

            'skills.title': 'Habilidades',
            'skills.category.qa': 'Testes & QA',
            'skills.category.dev': 'Desenvolvimento',
            'skills.category.tools': 'Ferramentas & Nuvem',

            'domain.title': 'Especialidades',
            'domain.subtitle': 'Conhecimento de negócio além da stack técnica.',

            'certifications.title': 'Certificações',
            'certifications.view': 'Ver Credencial',

            'projects.title': 'Projetos',
            'projects.view': 'Ver Projeto',

            'beyond.title': 'Além do Código',
            'beyond.subtitle': 'Um pouco sobre mim fora do trabalho.',

            'contact.title': 'Entre em Contato',
            'contact.text': 'Estou sempre aberto a novas oportunidades e colaborações. Vamos trabalhar juntos?',
            'contact.email': 'Email',
            'contact.linkedin': 'LinkedIn',
            'contact.github': 'GitHub',
            'contact.form.name': 'Seu nome',
            'contact.form.email': 'Seu email',
            'contact.form.message': 'Sua mensagem',
            'contact.form.submit': 'Enviar Mensagem',
            'contact.mailto.subject': 'Contato pelo site - Natan Hespanhol',

            'footer.copyright': 'Todos os direitos reservados.'
        },
        en: {
            'nav.about': 'About',
            'nav.experience': 'Experience',
            'nav.skills': 'Skills',
            'nav.certifications': 'Certifications',
            'nav.projects': 'Projects',
            'nav.contact': 'Contact',

            'hero.greeting': "Hello, I'm",
            'hero.title': 'Software QA Engineer',
            'hero.description': "Software QA Engineer at WEX, working on mission-critical payment systems. Passionate about test automation, technology, and making sure every release is reliable, secure and high quality.",
            'hero.btn.resume': 'Download Resume (PDF)',
            'hero.btn.contact': 'Get in Touch',
            'hero.roles.0': 'QA Engineer',
            'hero.roles.1': 'Test Automation',
            'hero.roles.2': 'Quality Advocate',

            'experience.title': 'Experience',
            'experience.location': 'Location',
            'experience.current': 'Current',

            'skills.title': 'Skills',
            'skills.category.qa': 'Testing & QA',
            'skills.category.dev': 'Development',
            'skills.category.tools': 'Tools & Cloud',

            'domain.title': 'Domain Expertise',
            'domain.subtitle': 'Industry knowledge and specializations beyond the tech stack.',

            'certifications.title': 'Certifications',
            'certifications.view': 'View Credential',

            'projects.title': 'Projects',
            'projects.view': 'View Project',

            'beyond.title': 'Beyond the Code',
            'beyond.subtitle': 'A few things about me outside of work.',

            'contact.title': 'Get in Touch',
            'contact.text': "I'm always open to new opportunities and collaborations. Let's work together?",
            'contact.email': 'Email',
            'contact.linkedin': 'LinkedIn',
            'contact.github': 'GitHub',
            'contact.form.name': 'Your name',
            'contact.form.email': 'Your email',
            'contact.form.message': 'Your message',
            'contact.form.submit': 'Send Message',
            'contact.mailto.subject': 'Contact from website - Natan Hespanhol',

            'footer.copyright': 'All rights reserved.'
        }
    },

    skills: [
        {
            category: 'qa',
            items: [
                { pt: 'Automação de Testes', en: 'Test Automation' },
                { pt: 'Testes de API', en: 'API Testing' },
                { pt: 'Testes Manuais', en: 'Manual Testing' },
                { pt: 'Planos de Teste', en: 'Test Planning' },
                { pt: 'Testes de Regressão', en: 'Regression Testing' },
                { pt: 'Análise de Defeitos', en: 'Defect Analysis' }
            ]
        },
        {
            category: 'dev',
            items: [
                { pt: 'Java', en: 'Java' },
                { pt: 'JavaScript', en: 'JavaScript' },
                { pt: 'Node.js', en: 'Node.js' },
                { pt: 'Python', en: 'Python' },
                { pt: 'React', en: 'React' },
                { pt: 'Vue.js', en: 'Vue.js' },
                { pt: 'HTML/CSS', en: 'HTML/CSS' },
                { pt: 'SQL', en: 'SQL' },
                { pt: 'REST APIs', en: 'REST APIs' }
            ]
        },
        {
            category: 'tools',
            items: [
                { pt: 'Git', en: 'Git' },
                { pt: 'Docker', en: 'Docker' },
                { pt: 'AWS', en: 'AWS' },
                { pt: 'CI/CD', en: 'CI/CD' },
                { pt: 'Postman', en: 'Postman' }
            ]
        }
    ],

    experience: [
        {
            title: { pt: 'Software QA Engineer lv. 4', en: 'Software QA Engineer lv. 4' },
            company: { pt: 'Wex Inc.', en: 'Wex Inc.' },
            period: { pt: '2023 - Presente', en: '2023 - Present' },
            current: true,
            description: {
                pt: 'Atuação em qualidade de software para sistemas de pagamento de missão crítica, com automação de testes, testes de API, planejamento de testes e integração contínua.',
                en: 'Working on software quality for mission-critical payment systems, with test automation, API testing, test planning and continuous integration.'
            }
        },
        {
            title: { pt: 'Software QA Engineer', en: 'Software QA Engineer' },
            company: { pt: 'Wex Inc.', en: 'Wex Inc.' },
            period: { pt: '2020 - 2023', en: '2020 - 2023' },
            description: {
                pt: 'Garantia de qualidade em sistemas de pagamento: criação e execução de planos de teste, testes manuais e automatizados e análise de defeitos.',
                en: 'Quality assurance for payment systems: creating and executing test plans, manual and automated testing, and defect analysis.'
            }
        },
        {
            title: { pt: 'Chefe da Divisão de Informática e Estatística', en: 'Head of IT and Statistics Division' },
            company: { pt: 'Prefeitura Municipal de Feira de Santana', en: 'Municipal Government of Feira de Santana' },
            period: { pt: '2018 - 2020', en: '2018 - 2020' },
            description: {
                pt: 'Gestão da divisão de informática e estatística: liderança de equipe, sistemas governamentais, infraestrutura de TI e dados estatísticos municipais.',
                en: 'Managed the IT and statistics division: team leadership, government systems, IT infrastructure and municipal statistical data.'
            }
        }
    ],

    domain: [
        {
            icon: '💳',
            title: { pt: 'Sistemas de Pagamento & FinTech', en: 'Payment Systems & FinTech' },
            description: {
                pt: 'Experiência em qualidade de software para sistemas de pagamento de missão crítica, que processam milhões de transações todos os dias.',
                en: 'Experience in software quality for mission-critical payment systems that process millions of transactions every day.'
            }
        },
        {
            icon: '🧪',
            title: { pt: 'Qualidade de Software & Automação', en: 'Software Quality & Automation' },
            description: {
                pt: 'Estratégias de teste de ponta a ponta: do planejamento à automação de testes de API e regressão em pipelines de CI/CD.',
                en: 'End-to-end testing strategies: from planning to API and regression test automation in CI/CD pipelines.'
            }
        },
        {
            icon: '🏛️',
            title: { pt: 'Tecnologia no Setor Público', en: 'Public Sector Technology' },
            description: {
                pt: 'Gestão de divisão de TI e estatística em órgão público municipal, liderando equipes, sistemas e dados governamentais.',
                en: 'Managed an IT and statistics division in a municipal government, leading teams, systems and government data.'
            }
        },
        {
            icon: '🎓',
            title: { pt: 'Tecnologia Educacional', en: 'Education Technology' },
            description: {
                pt: 'Criação de plataformas que ensinam programação para crianças, tornando a tecnologia acessível e divertida.',
                en: 'Building platforms that teach programming to kids, making technology accessible and fun.'
            }
        }
    ],

    certifications: [
        {
            title: { pt: 'AWS Certified Cloud Practitioner (exemplo)', en: 'AWS Certified Cloud Practitioner (example)' },
            issuer: { pt: 'Amazon Web Services', en: 'Amazon Web Services' },
            description: {
                pt: 'Certificação fundamental de computação em nuvem. SUBSTITUA pelos seus certificados reais.',
                en: 'Foundational cloud computing certification. REPLACE with your real certifications.'
            },
            logo: '',
            link: 'https://example.com'
        },
        {
            title: { pt: 'ISTQB Certified Tester - Foundation Level (exemplo)', en: 'ISTQB Certified Tester - Foundation Level (example)' },
            issuer: { pt: 'ISTQB', en: 'ISTQB' },
            description: {
                pt: 'Certificação internacional em fundamentos de teste de software. SUBSTITUA pelos seus certificados reais.',
                en: 'International certification in software testing fundamentals. REPLACE with your real certifications.'
            },
            logo: '',
            link: 'https://example.com'
        }
    ],

    projects: [
        {
            title: { pt: 'RobotCode: Plataforma de Programação para Crianças', en: 'RobotCode: Programming Platform for Kids' },
            description: {
                pt: 'Plataforma de programação para crianças com interface intuitiva e recursos educativos.',
                en: 'Programming platform for kids with an intuitive interface and educational features.'
            },
            tags: ['React', 'Node.js', 'MongoDB'],
            link: 'https://www.robotcode.com.br/',
            image: '',
            icon: '🤖'
        }
        // Adicione mais projetos copiando este modelo:
        // {
        //     title: { pt: 'Nome do Projeto', en: 'Project Name' },
        //     description: {
        //         pt: 'Descrição do projeto em português.',
        //         en: 'Project description in English.'
        //     },
        //     tags: ['Java', 'AWS', 'CI/CD'],
        //     link: 'https://github.com/natan-hespanhol/projeto',
        //     image: 'images/projects/projeto.png',
        //     icon: '🚀'
        // }
    ],

    beyond: [
        {
            icon: '🎵',
            title: { pt: 'Música', en: 'Music' },
            description: {
                pt: 'Quando não estou trabalhando, gosto de ouvir e explorar novos estilos musicais.',
                en: "When I'm not working, I enjoy listening to and exploring new music styles."
            },
            link: ''
        },
        {
            icon: '✈️',
            title: { pt: 'Viagens', en: 'Travel' },
            description: {
                pt: 'Adoro viajar e conhecer novos lugares, culturas e pessoas.',
                en: 'I love traveling and getting to know new places, cultures and people.'
            },
            link: ''
        },
        {
            icon: '🎮',
            title: { pt: 'Jogos', en: 'Gaming' },
            description: {
                pt: 'No tempo livre, gosto de jogar videogame e acompanhar as novidades de tecnologia.',
                en: 'In my free time, I enjoy playing video games and keeping up with tech news.'
            },
            link: ''
        }
    ],

    contact: {
        methods: [
            {
                key: 'email',
                label: 'Email',
                value: 'natan.hesp@gmail.com',
                href: 'mailto:natan.hesp@gmail.com'
            },
            {
                key: 'linkedin',
                label: 'LinkedIn',
                value: 'linkedin.com/in/natan-hespanhol',
                href: 'https://www.linkedin.com/in/natan-hespanhol'
            },
            {
                key: 'github',
                label: 'GitHub',
                value: 'github.com/natan-hespanhol',
                href: 'https://github.com/natan-hespanhol'
            }
        ]
    }
};

window.SITE_DATA = SITE_DATA;
