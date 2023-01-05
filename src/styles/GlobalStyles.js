import { createGlobalStyle } from 'styled-components';
import styled, { css } from 'styled-components';

// 設定基礎值
const fontSizeBase = '1';
const defaultSpacer = '1';

const theme = {
	spacers: [0, defaultSpacer * 0.25, defaultSpacer * 0.75, defaultSpacer * 1, defaultSpacer * 1.2, defaultSpacer * 1.5],
	fonts: [0, fontSizeBase * 0.25, fontSizeBase * 0.75, fontSizeBase * 1, fontSizeBase * 1.2, fontSizeBase * 1.5],
};

//預期會生成 fz-0 ,fz-1,fz-2....

const GlobalStyles = createGlobalStyle`
    a{
        text-decoration: none;
    }
    ${theme.fonts.map(
		(font, fontKey) => css`
			.fz-${fontKey} {
				//一樣為了蓋過bootstrap的某一些樣式所以加上important
				font-size: ${font}rem !important;
			}
		`
	)}
    ${theme.spacers.map(
		(spacer, spacerKey) => css`
			${['top', 'right', 'bottom', 'left'].map(
				(dir) => css`
            .m${dir[0]}-${spacerKey}{
                margin-${dir}: ${spacer}rem
            }}
        `
			)}
		`
	)}
`;

export default GlobalStyles;
