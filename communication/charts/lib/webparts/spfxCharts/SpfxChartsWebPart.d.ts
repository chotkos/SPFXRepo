import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import { ISpfxChartsWebPartProps } from './ISpfxChartsWebPartProps';
import "./style/style.css";
export default class SpfxChartsWebPart extends BaseClientSideWebPart<ISpfxChartsWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
