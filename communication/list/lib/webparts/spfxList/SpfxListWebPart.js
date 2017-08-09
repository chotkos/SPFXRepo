"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var SpfxList_module_scss_1 = require("./SpfxList.module.scss");
var strings = require("spfxListStrings");
var DataRow_1 = require("./DataRow");
var $ = require("jquery");
var SpfxListWebPart = (function (_super) {
    __extends(SpfxListWebPart, _super);
    function SpfxListWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpfxListWebPart.prototype.render = function () {
        var _this = this;
        var mock = new DataRow_1.DataRowMock();
        this.rows = mock.getFakeDataRows(10);
        this.domElement.innerHTML = "\n      <div class=\"" + SpfxList_module_scss_1.default.helloWorld + "\">\n        <div class=\"" + SpfxList_module_scss_1.default.container + "\">\n          <div class=\"ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + SpfxList_module_scss_1.default.row + "\">\n            <div class=\"ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1\">\n              <span class=\"ms-font-xl ms-fontColor-white\">Departments efficiency:</span><br/> \n              <table id=\"spfxContentTable\" class=\"" + SpfxList_module_scss_1.default.mainTable + "\">\n                <tr>\n                  <th class=\"" + SpfxList_module_scss_1.default.thCell + "\">Name</th>\n                  <th class=\"" + SpfxList_module_scss_1.default.thCell + "\">Done</th>\n                  <th class=\"" + SpfxList_module_scss_1.default.thCell + "\">In progress</th>\n                  <th class=\"" + SpfxList_module_scss_1.default.thCell + "\">Draft</th>\n                  <th class=\"" + SpfxList_module_scss_1.default.thCell + "\">Aborted</th>\n                </tr>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>";
        for (var i = 0; i < this.rows.length; i++) {
            var e = this.rows[i];
            var oldHtml = $('#spfxContentTable').html();
            var rowHtml = "<tr genRow=\"" + i + "\">\n                        <td class='" + SpfxList_module_scss_1.default.tdCell + "'>" + e.departmentName + "</td>\n                        <td class='" + SpfxList_module_scss_1.default.tdCell + "'>" + e.done + "</td>\n                        <td class='" + SpfxList_module_scss_1.default.tdCell + "'>" + e.inProgress + "</td>\n                        <td class='" + SpfxList_module_scss_1.default.tdCell + "'>" + e.draft + "</td>\n                        <td class='" + SpfxList_module_scss_1.default.tdCell + "'>" + e.aborted + "</td>\n                      </tr>";
            $('#spfxContentTable').html(oldHtml + rowHtml);
        }
        $('tr').mouseenter(function (e) {
            var index = parseInt($(e.currentTarget).attr('genRow'));
            var event = new CustomEvent('selectedDepartmentChanged', { detail: _this.rows[index] });
            event.initEvent('selectedDepartmentChanged', true, true);
            document.dispatchEvent(event);
        });
    };
    Object.defineProperty(SpfxListWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    SpfxListWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return SpfxListWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SpfxListWebPart;

//# sourceMappingURL=SpfxListWebPart.js.map
