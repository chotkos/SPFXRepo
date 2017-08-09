export class DataRow {
    public aborted: number;
    public departmentName: string;
    public done: number;
    public draft: number;
    public inProgress: number;
}

export class DataRowMock {

    /**
     * getDepartmentName
     * Returns fake department name
     */
    public getDepartmentName() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    } 

    /**
     * getFakeDataRows
     * Returns n fake dataRows
     */
    public getFakeDataRows(count: number) {
        var result = [];
        for (let i = 0; i < count; i++) {
            let e = new DataRow();
            e.aborted = Math.floor(Math.random() * 100);
            e.departmentName = this.getDepartmentName();
            e.done = Math.floor(Math.random() * 100);
            e.draft = Math.floor(Math.random() * 100);
            e.inProgress = Math.floor(Math.random() * 100);
            result.push(e);
        }
        return result;
    }
}
