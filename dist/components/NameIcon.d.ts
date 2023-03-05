import { FC } from 'react';
import { IconOption } from './iconMaker';
/**
 * Suspenceを使い、Canvasで生成した画像を表示するコンポーネント
 * canvas.convertToBlob()が非同期関数のため、描画した画像をそのまま埋め込むことができない
 */
type IconMakerFC = FC<{
    userName: string;
    option?: IconOption;
}>;
declare const NameIcon: IconMakerFC;
export default NameIcon;
