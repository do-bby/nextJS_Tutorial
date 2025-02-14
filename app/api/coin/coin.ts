import { selectSQL } from "@/app/_db/db";
export const getCoinData = async () => {
    const q = 'SELECT * FROM COIN';
    const r = await selectSQL(q);
    console.log(r);
    return selectSQL(q);
}