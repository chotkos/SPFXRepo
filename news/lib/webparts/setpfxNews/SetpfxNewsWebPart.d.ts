import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import "../../../node_modules/lity/dist/lity.min.js";
import "../../../node_modules/lity/dist/lity.min.css";
import { ISetpfxNewsWebPartProps } from './ISetpfxNewsWebPartProps';
import "./style/lity-fixes.css";
export interface ISPLists {
    value: ISPList[];
}
export interface ISPList {
    ID: number;
    Title: string;
    Created: Date;
    Content: string;
    Author: any;
    Color: string;
    AccentColor: string;
    PhotoUrl: string;
}
export default class SetpfxNewsWebPart extends BaseClientSideWebPart<ISetpfxNewsWebPartProps> {
    private _getMockListData();
    private _getListData();
    private _renderList(items);
    private _renderListAsync();
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
