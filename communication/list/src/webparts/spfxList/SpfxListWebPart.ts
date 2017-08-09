import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './SpfxList.module.scss';
import * as strings from 'spfxListStrings';
import { ISpfxListWebPartProps } from './ISpfxListWebPartProps';


import { DataRow, DataRowMock } from './DataRow';
import * as $ from "jquery";

export default class SpfxListWebPart extends BaseClientSideWebPart<ISpfxListWebPartProps> {
  public rows: any;

  public render(): void {
    var mock = new DataRowMock();
    this.rows = mock.getFakeDataRows(10);

    this.domElement.innerHTML = `
      <div class="${styles.helloWorld}">
        <div class="${styles.container}">
          <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">
            <div class="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
              <span class="ms-font-xl ms-fontColor-white">Departments efficiency:</span><br/> 
              <table id="spfxContentTable" class="${styles.mainTable}">
                <tr>
                  <th class="${styles.thCell}">Name</th>
                  <th class="${styles.thCell}">Done</th>
                  <th class="${styles.thCell}">In progress</th>
                  <th class="${styles.thCell}">Draft</th>
                  <th class="${styles.thCell}">Aborted</th>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>`;

    for (let i = 0; i < this.rows.length; i++) {
      let e = this.rows[i] as DataRow;
      var oldHtml = $('#spfxContentTable').html();
      var rowHtml = `<tr genRow="${i}">
                        <td class='${styles.tdCell}'>${e.departmentName}</td>
                        <td class='${styles.tdCell}'>${e.done}</td>
                        <td class='${styles.tdCell}'>${e.inProgress}</td>
                        <td class='${styles.tdCell}'>${e.draft}</td>
                        <td class='${styles.tdCell}'>${e.aborted}</td>
                      </tr>`;
      $('#spfxContentTable').html(oldHtml + rowHtml);
    }

    $('tr').mouseenter((e) => {
      var index = parseInt($(e.currentTarget).attr('genRow'));
      var event = new CustomEvent('selectedDepartmentChanged', { detail: this.rows[index] });
      event.initEvent('selectedDepartmentChanged', true, true);
      document.dispatchEvent(event);
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
