"use strict";
var DataRow = (function () {
    function DataRow() {
    }
    return DataRow;
}());
exports.DataRow = DataRow;
var DataRowMock = (function () {
    function DataRowMock() {
    }
    /**
     * getDepartmentName
     * Returns fake department name
     */
    DataRowMock.prototype.getDepartmentName = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    /**
     * getFakeDataRows
     * Returns n fake dataRows
     */
    DataRowMock.prototype.getFakeDataRows = function (count) {
        var result = [];
        for (var i = 0; i < count; i++) {
            var e = new DataRow();
            e.aborted = Math.floor(Math.random() * 100);
            e.departmentName = this.getDepartmentName();
            e.done = Math.floor(Math.random() * 100);
            e.draft = Math.floor(Math.random() * 100);
            e.inProgress = Math.floor(Math.random() * 100);
            result.push(e);
        }
        return result;
    };
    return DataRowMock;
}());
exports.DataRowMock = DataRowMock;

//# sourceMappingURL=DataRow.js.map
