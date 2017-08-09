"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var SpfxCharts_module_scss_1 = require("./SpfxCharts.module.scss");
var strings = require("spfxChartsStrings");
var c3 = require("c3");
require("./style/style.css");
var SpfxChartsWebPart = (function (_super) {
    __extends(SpfxChartsWebPart, _super);
    function SpfxChartsWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpfxChartsWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + SpfxCharts_module_scss_1.default.helloWorld + "\">\n        <div class=\"" + SpfxCharts_module_scss_1.default.container + "\">\n          <div class=\"ms-Grid-row  " + SpfxCharts_module_scss_1.default.row + "\">\n            <div class=\"ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1\"> \n              <div id=\"chart-container\"></div>\n            </div>\n          </div>\n        </div>\n      </div>";
        document.addEventListener('selectedDepartmentChanged', function (e) {
            var e2 = e;
            var chart = c3.generate({
                bindto: '#chart-container',
                data: {
                    columns: [
                        ['Done', e2.detail.done],
                        ['In progress', e2.detail.inProgress],
                        ['Draft', e2.detail.draft],
                        ['Aborted', e2.detail.aborted],
                    ],
                    type: 'pie',
                }
            });
        }, false);
    };
    Object.defineProperty(SpfxChartsWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    SpfxChartsWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    return SpfxChartsWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SpfxChartsWebPart;

//# sourceMappingURL=SpfxChartsWebPart.js.map
