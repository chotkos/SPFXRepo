export declare class DataRow {
    aborted: number;
    departmentName: string;
    done: number;
    draft: number;
    inProgress: number;
}
export declare class DataRowMock {
    /**
     * getDepartmentName
     * Returns fake department name
     */
    getDepartmentName(): string;
    /**
     * getFakeDataRows
     * Returns n fake dataRows
     */
    getFakeDataRows(count: number): any[];
}
