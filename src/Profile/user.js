
 const profile = {
     name: 'Seu Nome ',
     githubUserName: '',
     avatar_link: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
     job: 'Sua Profissão',
     description: 'Uma breve descricão sobre você Etiam in laoreet purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis arcu ac ornare dapibus. Phasellus sit amet tellus orci. Suspendisse vehicula lacinia arcu, at congue ipsum lacinia quis. Praesent fringilla',
     email: 'individuo@gmail.com',
     phone_A: '(51)0000-0000',
     phone_B: '(51)0000-0000',
     
    socialMedia: {
        linkedin: 'https://www.linkedin.com/',
        instagran: 'https://www.instagram.com/',
        twitter: 'https://twitter.com/login?lang=pt',
        github: 'https://github.com/',
    },

    addres: {
        city: 'Porto alegre',
        village: 'Viamão',
        uf: 'RS'
    },

    about: {
        qualities:[
            {
                id: 1,
                quality: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget mi faucibus, vulputate turpis at, tempor ante.'
            },
            {
                id: 2,
                quality: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget mi faucibus, vulputate turpis at, tempor ante.'
            },
            {
                id: 3,
                quality: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget mi faucibus, vulputate turpis at, tempor ante.'
            },
            {
                id: 4,
                quality: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget mi faucibus, vulputate turpis at, tempor ante.'
            },    
            
        ],

        technology:[
            {
                language: {
                    id: 1,
                    name: 'Javascript',
                    knowledge: 85,
                }
            },
            {
                language: {
                    id: 2,
                    name: 'html',
                    knowledge:95,
                }
            },
            {
                language: {
                    id: 3,
                    name: 'css',
                    knowledge: 90,
                }
            },
            {
                language: {
                    id: 4,
                    name: 'react js',
                    knowledge: 87,
                }
            },
            {
                language: {
                    id: 5,
                    name: 'Next js',
                    knowledge: 80,
                }
            }
        ],
    },
  
    experience: [
        {
            id: 1,
            company: 'Nome da empresa ou projeto desenvolvido',
            startDate: 'Tempo de empresa ou do projeto',
            jobDescription: 'Descrissão '
        },
        {   
            id: 2,
            company: 'Lorem ipsum',
            startDate: '29 de março de 2020',
            jobDescription: 'Duis pharetra orci vel aliquet luctus. Etiam iaculis justo consectetur varius vestibulum. Quisque eu fermentum erat, sit amet malesuada mauris. Duis tincidunt arcu in elit porta, nec malesuada est scelerisque. '
        },
        {
            id: 3,
            company: 'Lorem ipsum',
            startDate: '01 a 07 de junho de 2020 ',
            jobDescription: 'Duis pharetra orci vel aliquet luctus. Etiam iaculis justo consectetur varius vestibulum. Quisque eu fermentum erat, sit amet malesuada mauris. Duis tincidunt arcu in elit porta, nec malesuada est scelerisque. '
        },
        {
            id: 4,
            company: 'Lorem ipsum',
            startDate: '3 a 9 de Agosto de 2020',
            jobDescription: 'Duis pharetra orci vel aliquet luctus. Etiam iaculis justo consectetur varius vestibulum. Quisque eu fermentum erat, sit amet malesuada mauris. Duis tincidunt arcu in elit porta, nec malesuada est scelerisque. '
        },
       

    ],

    projects:[
        {
            image: 'https://ik.imagekit.io/rqwarktlrc/amostra_ONx-NCnqw.png',
            name: 'Be the hero',
            language: [
                {
                    name: 'React JS'
                },
                {
                    name: 'Node JS'
                },
                {
                    name: 'React Native'
                },
                
            ],
            git: 'https://github.com/AndersonKich-Dev/Be-the-hero',
            app_url: '',
            description: 'Be the Hero é um projeto que visa ajudar as ONGS rapidamente, com apenas alguns cliques você pode se tornar um heroi e ajudar a salvar vidas.'
        },
        {
            image: 'https://ik.imagekit.io/rqwarktlrc/ecoleta_bW5xSuy6a.png',
            name: 'Ecoleta',
            language: [
                {
                    name: 'React JS'
                },
                {
                    name: 'Node JS'
                },
                {
                    name: 'React Native'
                },
                
            ],
            git: 'https://github.com/AndersonKich-Dev/E-coleta-NLW',
            app_url: '',
            description: 'Ecoleta é uma aplicação desenvolvida durante a Next Level Week 1.0 que tem como objetivo facilitar o encontro de coletores de resíduos nas suas proximidades. O Ecoleta serve como um Marketplace, uma conexão entre empresas ou entidade que coletam resíduos, à pessoas que precisam fazer descarte dos resíduos e assim contribuir com um planeta mais saudavel! '
        },
        {
            image: 'https://ik.imagekit.io/rqwarktlrc/pomodoro_rLM4tS9sVK.png',
            name: 'App Pomodoro',
            language: [
                {
                    name: 'React JS'
                },
                {
                    name: 'Next JS'
                },
                {
                    name: 'Typescript'
                },
                
            ],
            git: 'https://github.com/AndersonKich-Dev/app-pomodoro',
            app_url: 'https://lnkd.in/dzh23m6',
            description: 'Com a necessidade de ter mais foco nos estudos e gerenciar melhor o tempo que gasto estudando desenvolvi um app utilizando a técnica do pomodoro, que esta bem popular entre os devs! '
        },
        {
            image: 'https://ik.imagekit.io/rqwarktlrc/FullBooks_xmgD_M9u4.png',
            name: 'Full Books',
            language: [
                {
                    name: 'React JS'
                },
                {
                    name: 'Styled Components'
                },
                
            ],
            git: 'https://github.com/AndersonKich-Dev/Full-Books',
            app_url: 'https://60c3e7202b687d340e67a282--fullbooks.netlify.app/',
            description: 'App criado com a finalidade de consumir dados da api do google books. As funcionalidades incluem a busca de livros pelo nome, seção de favoritos e vizualização de detalhes do livro selecionado.'
        },
        
    ],

    knowledges:[
        {
            id: 1,
            tecnology: 'css',
            knowledgesItens:[
                {
                    id: '01',
                    knowledge: 'Responsividade'  
                },
                {
                    id: '02',
                    knowledge: 'Grid layout'  
                },
                {
                    id: '03',
                    knowledge: 'Sass'  
                },
                {
                    id: '04',
                    knowledge: 'Styled components'  
                },
                {
                    id: '05',
                    knowledge: 'Animation'  
                },
                {
                    id: '06',
                    knowledge: 'cross browser'  
                },
                {
                    id: '05',
                    knowledge: 'Animation'  
                },
                {
                    id: '06',
                    knowledge: 'Cross browser'  
                },
            ]
        },
        {   
            id: 2,
            tecnology: 'html',
            knowledgesItens:[
                {
                    id: '01',
                    knowledge: 'Boa semântica'  
                },
                {
                    id: '02',
                    knowledge: 'HTML simples'  
                },
                {
                    id: '03',
                    knowledge: 'Boa indentação'  
                },
                {
                    id: '04',
                    knowledge: 'Ordem'  
                },
                {
                    id: '05',
                    knowledge: 'Acessibilidade'  
                },
            ]
        },
        {
            id: 3,
            tecnology: 'react',
            knowledgesItens:[
                {
                    id: '01',
                    knowledge: 'Componentizaçaõ'  
                },
                {
                    id: '02',
                    knowledge: 'Hooks'  
                },
                {
                    id: '03',
                    knowledge: 'Routes'  
                },
                {
                    id: '04',
                    knowledge: 'Context Api'  
                },
                {
                    id: '06',
                    knowledge: 'Redux'  
                },
            ]
        },
        {
            id: 4,
            tecnology: 'next js',
            knowledgesItens:[
                {
                    id: '01',
                    knowledge: 'spa'  
                },
                {
                    id: '02',
                    knowledge: 'ssr'  
                },
                {
                    id: '03',
                    knowledge: 'ssg'  
                },
                
            ]
        }
    ] 
    
    

}

 export default profile;







