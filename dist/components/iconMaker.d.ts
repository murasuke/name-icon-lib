/**
 * 名前アイコン作成
 * ・スペースで区切った先頭2文字で丸アイコンを作成する
 * ・「日本 太郎」=>「日太」
 * ・「Mike Davis」=>「MD」
 */
export type IconOption = {
    size?: number;
    foreColor?: string;
    backColor?: string;
    fontScale?: number;
    fontFamily?: string;
};
/**
 * アイコン用画像作成
 * @param name アイコンにする名前
 * @param option IconOption
 * @returns
 */
declare const iconMaker: (name: string, option?: IconOption) => Promise<string>;
export default iconMaker;
