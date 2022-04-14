import soap from 'soap';
import { baseSeiParams, createSoapSeiClient } from '../../soap';

export async function getEditals2() {
    const soapClient = await createSoapSeiClient();

    return new Promise((resolve, reject) => {
        const params = {
            ...baseSeiParams,

            DataInicial: '2022-01-01',
            DataFinal: '2022-12-12',
        };

        soapClient.listarFeriados(params, (err, result) => {
            if (err) reject(err);

            resolve(result);
        });
    });
}

export async function getEditals() {
    const argsSip = {
        ChaveAcesso: '0cacc8f435db555178c328c8bf7688eb3483203b2ba670bbc604db8a56af01dc40795d73',
        IdSistema: '100000101',
    };

    return new Promise((resolve) => {
        soap.createClient('http://localhost/sip/controlador_ws.php?servico=sip', function (err, client) {
            console.log(err);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line no-shadow
            client.carregarUsuarios(argsSip, function (err, result) {
                if (err) throw new Error(err);
                resolve(result);
            });
        });
    });
}
