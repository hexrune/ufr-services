import { chromium } from 'playwright';
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
    link: string;
};

export async function scrapForEditals(): Promise<Edital[]> {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto(paths.sei.publicacoesEletronicas.edital);

    const list = await page.evaluate(() => {
        const rows = document.querySelectorAll('#tblPublicacoes tr');
        const items: Edital[] = [];

        if (!rows) throw Error('Could not find the rows');
        const rowsWithCols = Object.values(rows)
            .slice(1, rows.length - 2)
            .map((row) => {
                const cols = row.querySelectorAll('td.tdDados');

                if (!cols) throw Error('Could not find the columns');

                return cols;
            });

        rowsWithCols.forEach((rowWithCols) => {
            const rowWithColsArray = Object.values(rowWithCols);
            let link = '';

            const colValues = rowWithColsArray.slice(0, rowWithColsArray.length - 1).map((col, idx) => {
                if (col.firstElementChild?.tagName === 'A') {
                    if (idx === 0) link = (col.firstElementChild as HTMLAnchorElement).href;

                    return col.firstElementChild.innerHTML.trim().replaceAll('&nbsp;', '');
                }

                return col.innerHTML.trim().replaceAll('&nbsp;', '');
            });

            if (!colValues[0] || colValues[0].length === 0) return;

            items.push({
                protocolo: colValues[0] ?? '',
                descricao: colValues[1] ?? '',
                veiculo: colValues[2] ?? '',
                dataDePublicacao: colValues[3] ?? '',
                unidade: colValues[4] ?? '',
                orgao: colValues[5] ?? '',
                resumo: colValues[6] ?? '',
                imprensaNacional: colValues[7] ?? '',
                link,
            } as Edital);
        });

        return items;
    });

    void browser.close();

    return list;
}
