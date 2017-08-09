/// <reference types="es6-promise" />
import { ISPList } from './SetpfxNewsWebPart';
export default class MockHttpClient {
    private static _items;
    static get(restUrl: string, options?: any): Promise<ISPList[]>;
}
