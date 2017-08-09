declare interface ISpfxListStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'spfxListStrings' {
  const strings: ISpfxListStrings;
  export = strings;
}
