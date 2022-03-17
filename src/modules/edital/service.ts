import playwright from 'playwright';
import { paths } from '../../utils/paths';

export type Edital = {
    protocolo: string;
    descricao: string;
    veiculo: string;
    dataDePublicacao: string;
    unidade: string;
    orgao: string;
    resumo: string;
    imprensaNacional: string;
};

export const scrapForEditals = async (): Promise<Edital[]> => {
    const browser = await playwright.chromium.launch();
    const page = await browser.newPage();

    await page.goto(paths.publicacoesEletronicas.edital);

    const list = await page.evaluate(() => {
        const rows = document.querySelectorAll('#tblPublicacoes tr');

        if (!rows) throw Error('Could not find the rows');
        const rowsWithCols = Object.values(rows)
            .slice(1, rows.length - 2)
            .map((row) => {
                const cols = row.querySelectorAll('td.tdDados');

                if (!cols) throw Error('Could not find the columns');

                return cols;
            });

        return rowsWithCols.map((rowWithCols) => {
            const rowWithColsArray = Object.values(rowWithCols);

            const colValues = rowWithColsArray.slice(0, rowWithColsArray.length - 1).map((col) => {
                const content =
                    col.firstElementChild?.tagName === 'A' ? col.firstElementChild.innerHTML : col.innerHTML;

                return content.trim().replaceAll('&nbsp;', '');
            });

            return {
                protocolo: colValues[0],
                descricao: colValues[1],
                veiculo: colValues[2],
                dataDePublicacao: colValues[3],
                unidade: colValues[4],
                orgao: colValues[5],
                resumo: colValues[6],
                imprensaNacional: colValues[7],
            } as Edital;
        });
    });

    void browser.close();

    return list;
};
