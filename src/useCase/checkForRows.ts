import { Query } from "mysql2/promise";

export function checkForRows(rows: any) {
    if (!rows) {
        return { message: "unlucky" };
    }
    return rows;
}
