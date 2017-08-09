import { ISPList } from './SetpfxNewsWebPart';  
  
export default class MockHttpClient {  
    private static _items: ISPList[] = [
        { 
            ID: 1,
            Title: 'Another awesome day in Contoso Company!',
            Created: new Date(),
            Content: "<b>Hello customer!</b>",  
            Author: "John Smith",
            Color: "#18171C",            
            AccentColor: "#EABE3B",
            PhotoUrl: "http://inspirationist.net/wp-content/uploads/2014/08/00-anti-office.jpg" 
         },];  
    public static get(restUrl: string, options?: any): Promise<ISPList[]> {  
      return new Promise<ISPList[]>((resolve) => {  
            resolve(MockHttpClient._items);  
        });  
    }  
}  