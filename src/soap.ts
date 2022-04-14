import soap from 'soap';
import { paths } from './utils/paths';
import { SeiClient } from './types/soap';

if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

// @TODO change these to env variables
export const baseSeiParams = Object.freeze({
    SiglaSistema: 'WEB',
    IdentificacaoServico: 'main',
    IdUnidade: '110000001',
    IdOrgao: '0',
    IdSistema: '8',
    ChaveAcesso: '1ad5be0d73c1f5227c7c20743d8a5610fe6803f899a1b3615e29dda91895aa3945af0ddb',
});

export async function createSoapSeiClient(): Promise<SeiClient> {
    return new Promise((resolve, reject) => {
        soap.createClient(paths.sei.wsdl, (err, client) => {
            if (err) reject(err);

            resolve(client as unknown as SeiClient);
        });
    });
}
