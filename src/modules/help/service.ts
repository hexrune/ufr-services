export async function getRouteHelp() {
    return {
        hello: 'Use uma das rotas para obter os dados desejados.',
        routes: {
            'Lista de Editais do SEI': 'GET /editais',
            'Links do Rodape dos Sites': 'GET /footer-links',
        },
    };
}
