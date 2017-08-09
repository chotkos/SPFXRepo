"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MockHttpClient_1 = require("./MockHttpClient");
var sp_http_1 = require("@microsoft/sp-http");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var $ = require("jquery");
require("../../../node_modules/lity/dist/lity.min.js");
require("../../../node_modules/lity/dist/lity.min.css");
var sp_core_library_2 = require("@microsoft/sp-core-library");
var SetpfxNews_module_scss_1 = require("./SetpfxNews.module.scss");
var strings = require("setpfxNewsStrings");
require("./style/lity-fixes.css");
var SetpfxNewsWebPart = (function (_super) {
    __extends(SetpfxNewsWebPart, _super);
    function SetpfxNewsWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SetpfxNewsWebPart.prototype._getMockListData = function () {
        return MockHttpClient_1.default.get(this.context.pageContext.web.absoluteUrl).then(function () {
            var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus massa, luctus in tempus vel, fringilla pulvinar lectus. Maecenas in lorem lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet mattis risus, et iaculis ex. Phasellus varius dolor nec auctor facilisis. Vivamus pulvinar turpis quis iaculis egestas. Nulla eu semper quam, a pretium risus. Fusce porttitor tortor mollis porttitor pretium. Donec metus ligula, ullamcorper in lacus nec, porta posuere nulla. Sed vitae urna a urna dictum viverra. Vestibulum sapien orci, volutpat a hendrerit in, commodo nec odio. Donec pretium dictum lacinia. Aenean vitae enim tempus, eleifend diam eu, imperdiet sapien. Quisque iaculis sapien quam, non laoreet magna faucibus et. In facilisis metus mi, ut imperdiet lorem hendrerit sit amet.';
            lorem += lorem + lorem + lorem + lorem;
            var listData = {
                value: [
                    {
                        ID: 1,
                        Title: 'Another awesome day in Contoso Company!',
                        Created: new Date(),
                        Content: lorem,
                        Author: "John Smith",
                        Color: "#18171C",
                        AccentColor: "#EABE3B",
                        PhotoUrl: "https://source.unsplash.com/random?v=1"
                    }, {
                        ID: 2,
                        Title: 'Another awesome day in Contoso Company!',
                        Created: new Date(),
                        Content: lorem,
                        Author: "Adam Nowak",
                        Color: "#802143",
                        AccentColor: "#EABE3B",
                        PhotoUrl: "https://source.unsplash.com/random?v=1"
                    }, {
                        ID: 3,
                        Title: 'Another awesome day in Contoso Company!',
                        Created: new Date(),
                        Content: lorem,
                        Author: "John Malkovich",
                        Color: "#488273",
                        AccentColor: "#F1F1F1",
                        PhotoUrl: "https://source.unsplash.com/random?v=1"
                    }, {
                        ID: 4,
                        Title: 'Another awesome day in Contoso Company!',
                        Created: new Date(),
                        Content: lorem,
                        Author: "John Smith",
                        Color: "#18171C",
                        AccentColor: "#EABE3B",
                        PhotoUrl: "https://source.unsplash.com/random?v=1"
                    }, {
                        ID: 5,
                        Title: 'Another awesome day in Contoso Company!',
                        Created: new Date(),
                        Content: lorem,
                        Author: "Adam Nowak",
                        Color: "#802143",
                        AccentColor: "#EABE3B",
                        PhotoUrl: "https://source.unsplash.com/random?v=1"
                    }, {
                        ID: 6,
                        Title: 'Another awesome day in Contoso Company!',
                        Created: new Date(),
                        Content: lorem,
                        Author: "John Malkovich",
                        Color: "#488273",
                        AccentColor: "#F1F1F1",
                        PhotoUrl: "https://source.unsplash.com/random?v=1"
                    }
                ]
            };
            return listData;
        });
    };
    SetpfxNewsWebPart.prototype._getListData = function () {
        return this.context
            .spHttpClient
            .get(this.context.pageContext.web.absoluteUrl + "/_api/web/lists/GetByTitle('NewsList')/Items", sp_http_1.SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    SetpfxNewsWebPart.prototype._renderList = function (items) {
        var html = '';
        html += "";
        var news = 0;
        var page = 0;
        var activePage = 1;
        items.forEach(function (item) {
            news++;
            if (news % 5 === 0) {
                page++;
            }
            console.log("item", item);
            html += "  \n      <a href=\"#lightbox-lity-" + item.ID + "\" data-lity class=\"page" + page + ("\" style='overflow: scroll; display:none;'>\n          <div class='" + SetpfxNews_module_scss_1.default.newsContainer + "  fadeIn1'>                         \n              <div class='" + SetpfxNews_module_scss_1.default.greyImage + "' style='background-image:url(" + item.PhotoUrl + ");\n              -webkit-filter: grayscale(100%); filter: gray;'></div>           \n              <div class='" + SetpfxNews_module_scss_1.default.colorLayer + "' style='background-color:" + item.Color + ";'></div>                     \n              <div class='" + SetpfxNews_module_scss_1.default.textLayer + " fadeIn2'>              \n                <h1 class='" + SetpfxNews_module_scss_1.default.noInterline + "' style='color:" + item.AccentColor + "'>" + (item.Title.substring(0, 20) + '...') + "</h1>\n                <h2 class='" + SetpfxNews_module_scss_1.default.noInterline + "' style='color:" + item.AccentColor + "'>" + (new Date(item.Created)).toISOString().slice(0, 10).replace(/-/g, "-") + "</h2>  \n                <h4 class='" + SetpfxNews_module_scss_1.default.noInterline + "' style='color:" + item.AccentColor + "'>" + item.Author + "</h4> \n              </div>            \n          </div>  \n        </a> \n        <div id=\"lightbox-lity-" + item.ID + "\" class=\"lity-hide no-scrollbars\" style='height:100%; background-color: " + item.Color + ";'>\n          <div class='" + SetpfxNews_module_scss_1.default.newsContainerArticle + "  fadeIn1 no-scrollbars'>                                             \n              <div class='image-normal' style='background-image:url(" + item.PhotoUrl + ");'></div>                        \n              <div class='" + SetpfxNews_module_scss_1.default.textLayerArticle + " fadeIn2 no-scrollbars'>              \n                <h1 class='" + SetpfxNews_module_scss_1.default.noInterline + "' style='color:" + item.AccentColor + "'>" + item.Title + "</h1>\n                <h2 class='" + SetpfxNews_module_scss_1.default.noInterline + "' style='color:" + item.AccentColor + "'>" + (new Date(item.Created)).toISOString().slice(0, 10).replace(/-/g, "-") + "</h2>  \n                <h4 class='" + SetpfxNews_module_scss_1.default.noInterline + "' style='color:" + item.AccentColor + "'>" + item.Author + "</h4> \n                <div class='article-content-" + item.ID + "' style=\"margin-left:70px;color: " + item.AccentColor + ";\">\n                  " + item.Content + "\n                </div>\n              </div>\n          </div>\n        </div>\n          ");
        });
        var listContainer = this.domElement.querySelector('#spListContainer');
        listContainer.innerHTML = html;
        $('.page0').fadeIn(1000);
        if (page > 0) {
            console.log('page>0');
            $("." + SetpfxNews_module_scss_1.default.moreBtn).fadeIn(1000);
            var openPage = function (pageNumber) {
                $('.page' + pageNumber).fadeIn(1000);
            };
            $('.' + SetpfxNews_module_scss_1.default.moreBtn).click(function () {
                openPage(activePage);
                activePage++;
            });
        }
    };
    SetpfxNewsWebPart.prototype._renderListAsync = function () {
        var _this = this;
        if (sp_core_library_2.Environment.type === sp_core_library_2.EnvironmentType.Local) {
            this._getMockListData().then(function (response) {
                _this._renderList(response.value);
            });
        }
        else {
            this._getListData()
                .then(function (response) {
                _this._renderList(response.value);
            });
        }
    };
    SetpfxNewsWebPart.prototype.render = function () {
        this.domElement.innerHTML = "  \n     <div style='bacground-color:transparent;border:none;'>        \n        <div id=\"spListContainer\"></div>   \n        <h2 class=\"" + SetpfxNews_module_scss_1.default.moreBtn + "\">More...</h2>\n    </div>";
        this._renderListAsync();
    };
    Object.defineProperty(SetpfxNewsWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    SetpfxNewsWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    return SetpfxNewsWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SetpfxNewsWebPart;

//# sourceMappingURL=SetpfxNewsWebPart.js.map
