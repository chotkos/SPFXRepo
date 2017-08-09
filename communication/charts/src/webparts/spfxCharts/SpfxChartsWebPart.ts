import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './SpfxCharts.module.scss';
import * as strings from 'spfxChartsStrings';
import { ISpfxChartsWebPartProps } from './ISpfxChartsWebPartProps';

import * as $ from "jquery";

import * as c3 from "c3";

import "./style/style.css";

import { DataRow } from './DataRow';

export default class SpfxChartsWebPart extends BaseClientSideWebPart<ISpfxChartsWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.helloWorld}">
        <div class="${styles.container}">
          <div class="ms-Grid-row  ${styles.row}">
            <div class="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1"> 
              <div id="chart-container"></div>
            </div>
          </div>
        </div>
      </div>`;

    document.addEventListener('selectedDepartmentChanged',
      function (e) { 
        let e2 = e as any;
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
