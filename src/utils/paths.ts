const sei = process.env.NODE_ENV === 'production' ? 'https://sei.ufr.edu.br/sei' : 'http://localhost/sei';

export const paths = {
    sei: {
        root: sei,

        wsdl: `${sei}/controlador_ws.php?servico=sei`,

        publicacoesEletronicas: {
            edital: `${sei}/publicacoes/controlador_publicacoes.php?acao=publicacao_pesquisar&acao_origem=publicacao_pesquisar&id_orgao_publicacao=0&id_serie=68&rdo_data_publicacao=I`,
        },
    },
};
