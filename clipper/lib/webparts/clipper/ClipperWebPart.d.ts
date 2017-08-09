import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import { IClipperWebPartProps } from './IClipperWebPartProps';
export default class ClipperWebPart extends BaseClientSideWebPart<IClipperWebPartProps> {
    render(): void;
    private addClipper();
    private setButtonsHandling();
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
