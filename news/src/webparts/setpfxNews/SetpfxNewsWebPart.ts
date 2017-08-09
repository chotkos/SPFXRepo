import MockHttpClient from './MockHttpClient';   
import {  
  SPHttpClient  
} from '@microsoft/sp-http'; 
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base'; 
import * as $ from "jquery";
import "../../../node_modules/lity/dist/lity.min.js";
import "../../../node_modules/lity/dist/lity.min.css";
import { escape } from '@microsoft/sp-lodash-subset';
import {  
  Environment,  
  EnvironmentType  
} from '@microsoft/sp-core-library';   
import styles from './SetpfxNews.module.scss';
import * as strings from 'setpfxNewsStrings';
import { ISetpfxNewsWebPartProps } from './ISetpfxNewsWebPartProps';
import "./style/lity-fixes.css";


export interface ISPLists {  
  value: ISPList[];  
}  

export interface ISPList {  
  ID: number,
  Title: string;  
  Created: Date;  
  Content: string;  
  Author: any;  
  Color: string;  
  AccentColor: string;
  PhotoUrl: string; 
}    

export default class SetpfxNewsWebPart extends BaseClientSideWebPart<ISetpfxNewsWebPartProps> {


  private _getMockListData(): Promise<ISPLists> {  
      return MockHttpClient.get(this.context.pageContext.web.absoluteUrl).then(() => { 
          var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus massa, luctus in tempus vel, fringilla pulvinar lectus. Maecenas in lorem lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet mattis risus, et iaculis ex. Phasellus varius dolor nec auctor facilisis. Vivamus pulvinar turpis quis iaculis egestas. Nulla eu semper quam, a pretium risus. Fusce porttitor tortor mollis porttitor pretium. Donec metus ligula, ullamcorper in lacus nec, porta posuere nulla. Sed vitae urna a urna dictum viverra. Vestibulum sapien orci, volutpat a hendrerit in, commodo nec odio. Donec pretium dictum lacinia. Aenean vitae enim tempus, eleifend diam eu, imperdiet sapien. Quisque iaculis sapien quam, non laoreet magna faucibus et. In facilisis metus mi, ut imperdiet lorem hendrerit sit amet.';
          lorem+=lorem+lorem+lorem+lorem;
          const listData: ISPLists = {  
              value:  
              [  
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
                    },{
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
      }) as Promise<ISPLists>;  
  }    
  private _getListData(): Promise<ISPLists> {  
    return this.context
            .spHttpClient
            .get(this.context.pageContext.web.absoluteUrl + `/_api/web/lists/GetByTitle('NewsList')/Items`, SPHttpClient.configurations.v1)  
            .then((response: any) => {    
              return response.json();  
            }
    );  
  }

  private _renderList(items: ISPList[]): void {  
    let html: string = '';  
    html += ``;  
    var news = 0;
    var page = 0;
    var activePage = 1;
    items.forEach((item: ISPList) => {  
      news++;
      if(news%5 === 0){
        page++;
      }
      console.log("item", item); 

      html += `  
      <a href="#lightbox-lity-${item.ID}" data-lity class="page`+page+`" style='overflow: scroll; display:none;'>
          <div class='${styles.newsContainer}  fadeIn1'>                         
              <div class='${styles.greyImage}' style='background-image:url(${item.PhotoUrl});
              -webkit-filter: grayscale(100%); filter: gray;'></div>           
              <div class='${styles.colorLayer}' style='background-color:${item.Color};'></div>                     
              <div class='${styles.textLayer} fadeIn2'>              
                <h1 class='${styles.noInterline}' style='color:${item.AccentColor}'>${(item.Title.substring(0,20)+'...')}</h1>
                <h2 class='${styles.noInterline}' style='color:${item.AccentColor}'>${(new Date(item.Created)).toISOString().slice(0,10).replace(/-/g,"-")}</h2>  
                <h4 class='${styles.noInterline}' style='color:${item.AccentColor}'>${item.Author}</h4> 
              </div>            
          </div>  
        </a> 
        <div id="lightbox-lity-${item.ID}" class="lity-hide no-scrollbars" style='height:100%; background-color: ${item.Color};'>
          <div class='${styles.newsContainerArticle}  fadeIn1 no-scrollbars'>                                             
              <div class='image-normal' style='background-image:url(${item.PhotoUrl});'></div>                        
              <div class='${styles.textLayerArticle} fadeIn2 no-scrollbars'>              
                <h1 class='${styles.noInterline}' style='color:${item.AccentColor}'>${item.Title}</h1>
                <h2 class='${styles.noInterline}' style='color:${item.AccentColor}'>${(new Date(item.Created)).toISOString().slice(0,10).replace(/-/g,"-")}</h2>  
                <h4 class='${styles.noInterline}' style='color:${item.AccentColor}'>${item.Author}</h4> 
                <div class='article-content-${item.ID}' style="margin-left:70px;color: ${item.AccentColor};">
                  ${item.Content}
                </div>
              </div>
          </div>
        </div>
          `;  
    });   
    const listContainer: Element = this.domElement.querySelector('#spListContainer');  
    listContainer.innerHTML = html;   

    $('.page0').fadeIn(1000);
    if(page>0){ 
      console.log('page>0');
      $("."+styles.moreBtn).fadeIn(1000);
      
  
      var openPage = function(pageNumber){ 
          $('.page'+pageNumber).fadeIn(1000); 
      };

      $('.'+styles.moreBtn).click(function(){
        openPage(activePage);
        activePage++;
      });


    }    
  }    

  private _renderListAsync(): void {  
      if (Environment.type === EnvironmentType.Local) {  
        this._getMockListData().then((response) => {  
          this._renderList(response.value);  
        });  
      }  
      else {  
        this._getListData()  
        .then((response) => {  
          this._renderList(response.value);  
        });  
    }  
  }    

  public render(): void {
    this.domElement.innerHTML = `  
     <div style='bacground-color:transparent;border:none;'>        
        <div id="spListContainer"></div>   
        <h2 class="${styles.moreBtn}">More...</h2>
    </div>`;  
    this._renderListAsync();   
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
