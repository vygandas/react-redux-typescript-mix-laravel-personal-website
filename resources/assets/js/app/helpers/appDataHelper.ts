export const appDataHelper = (key: string) => {
    if (typeof (<any>window).appData !== typeof undefined
        && key in (<any>window).appData
        && (<any>window).appData[key] !== '') {
        return (<any>window).appData[key];
    }
    return false;
}