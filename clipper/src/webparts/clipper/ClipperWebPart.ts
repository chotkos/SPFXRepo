import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './Clipper.module.scss';
import * as strings from 'clipperStrings';
import { IClipperWebPartProps } from './IClipperWebPartProps';
import * as $ from "jquery";

export default class ClipperWebPart extends BaseClientSideWebPart<IClipperWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.helloWorld}">
        <div class="${styles.container}">
          <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">
            <div class="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
              <span class="ms-font-xl ms-fontColor-white">Mr.Clipper Control Panel</span>  
              <br/><br/>
              <a id="showBtn" href="#" class="${styles.button}">
                <span class="${styles.label}">Show Mr.Clipper</span>
              </a>
              <a id="hideBtn" href="#" class="${styles.button}">
                <span class="${styles.label}">Hide Mr.Clipper</span>
              </a>
            </div>
          </div>
        </div>
      </div>`;

      this.addClipper();
      this.setButtonsHandling();
  }

  private addClipper():void {
    var el = document.createElement("div");
    el.className = styles.mrClipper;

    document.body.appendChild(el);

  }

  private setButtonsHandling():void {
    $('#showBtn').click(function(){
      $('.' + styles.mrClipper).fadeIn();
    });
    $('#hideBtn').click(function(){
      $('.' + styles.mrClipper).fadeOut(); 
    });
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
