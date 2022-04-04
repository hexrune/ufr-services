type linkList = [string, { title: string; link: string }[]][];

export function getLinks(): linkList {
    return [
        [
            'Pró-Reitorias',
            [
                {
                    title: 'Pró-Reitoria de Ensino de Graduação',
                    link: 'https://www.ufr.edu.br/proeg',
                },
                {
                    title: 'Pró-Reitoria de Planejamento e Administração',
                    link: 'https://www.ufr.edu.br/proplad',
                },
                {
                    title: 'Pró-Reitoria de Extensão, Cultura e Assuntos Estudantis',
                    link: 'https://www.ufr.edu.br/proece',
                },
                {
                    title: 'Pró-Reitoria de Tecnologia da Informação e Comunicação',
                    link: 'https://www.ufr.edu.br/protic',
                },
                {
                    title: 'Pró-Reitoria de Gestão de Pessoas',
                    link: 'https://www.ufr.edu.br/progep',
                },
                {
                    title: 'Pró-Reitoria de Ensino de Pós-Graduação e Pesquisa',
                    link: 'https://www.ufr.edu.br/propgp',
                },
            ],
        ],

        [
            'Secretarias',
            [
                {
                    title: 'Secretaria de Relações Internacionais',
                    link: 'https://www.ufr.edu.br/secri',
                },
                {
                    title: 'Secretaria de Infraestrutura',
                    link: 'https://www.ufr.edu.br/sinfra',
                },
                {
                    title: 'Secretaria de Inovação e Empreendedorismo',
                    link: 'https://ufr.edu.br/sie/',
                },
            ],
        ],

        [
            'Unidades Acadêmicas',
            [
                {
                    title: 'Instituto de Ciências Humanas e Sociais',
                    link: 'https://www.ufr.edu.br/ichs',
                },
                {
                    title: 'Instituto de Ciências Exatas e Naturais',
                    link: 'https://www.ufr.edu.br/icen',
                },
                {
                    title: 'Instituto de Ciências Agrárias e Tecnológicas',
                    link: 'https://www.ufr.edu.br/icat',
                },
                {
                    title: 'Faculdade de Ciências Aplicadas e Políticas',
                    link: 'https://www.ufr.edu.br/facap',
                },
                {
                    title: 'Faculdade de Ciências da Saúde',
                    link: 'https://ufr.edu.br/fcs/',
                },
            ],
        ],

        [
            'Links de Interesse',
            [
                {
                    title: 'CAPES',
                    link: 'http://www.capes.gov.br/',
                },
                {
                    title: 'CNPq',
                    link: 'http://www.cnpq.br/',
                },
                {
                    title: 'Periódicos',
                    link: 'http://www.periodicos.capes.gov.br/',
                },
                {
                    title: 'Ouvidoria',
                    link: 'https://www1.ufmt.br/ufmt/un/ouvidoria',
                },
                {
                    title: 'Revista SEA',
                    link: 'http://sea.ufr.edu.br/',
                },
            ],
        ],

        [
            'Sobre o Site',
            [
                {
                    title: 'Acessibilidade',
                    link: 'https://ufr.edu.br/informacao/acessibilidade/',
                },
                {
                    title: 'Mapa do site',
                    link: 'https://ufr.edu.br/mapa-site/',
                },
                {
                    title: 'Versión en Español',
                    link: 'https://ufr.edu.br/?t=es',
                },
                {
                    title: 'English version',
                    link: 'https://ufr.edu.br/?t=en',
                },
            ],
        ],
    ];
}
