import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import { ISpfxListWebPartProps } from './ISpfxListWebPartProps';
export default class SpfxListWebPart extends BaseClientSideWebPart<ISpfxListWebPartProps> {
    rows: any;
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
