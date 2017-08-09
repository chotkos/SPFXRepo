"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var Clipper_module_scss_1 = require("./Clipper.module.scss");
var strings = require("clipperStrings");
var $ = require("jquery");
var ClipperWebPart = (function (_super) {
    __extends(ClipperWebPart, _super);
    function ClipperWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClipperWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + Clipper_module_scss_1.default.helloWorld + "\">\n        <div class=\"" + Clipper_module_scss_1.default.container + "\">\n          <div class=\"ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + Clipper_module_scss_1.default.row + "\">\n            <div class=\"ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1\">\n              <span class=\"ms-font-xl ms-fontColor-white\">Mr.Clipper Control Panel</span>  \n              <br/><br/>\n              <a id=\"showBtn\" href=\"#\" class=\"" + Clipper_module_scss_1.default.button + "\">\n                <span class=\"" + Clipper_module_scss_1.default.label + "\">Show Mr.Clipper</span>\n              </a>\n              <a id=\"hideBtn\" href=\"#\" class=\"" + Clipper_module_scss_1.default.button + "\">\n                <span class=\"" + Clipper_module_scss_1.default.label + "\">Hide Mr.Clipper</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>";
        this.addClipper();
        this.setButtonsHandling();
    };
    ClipperWebPart.prototype.addClipper = function () {
        var el = document.createElement("div");
        el.className = Clipper_module_scss_1.default.mrClipper;
        document.body.appendChild(el);
    };
    ClipperWebPart.prototype.setButtonsHandling = function () {
        $('#showBtn').click(function () {
            $('.' + Clipper_module_scss_1.default.mrClipper).fadeIn();
        });
        $('#hideBtn').click(function () {
            $('.' + Clipper_module_scss_1.default.mrClipper).fadeOut();
        });
    };
    Object.defineProperty(ClipperWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    ClipperWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    return ClipperWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ClipperWebPart;

//# sourceMappingURL=ClipperWebPart.js.map
