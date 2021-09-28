import Document, {
	Html, Main, NextScript, Head,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () => originalRenderPage({
				enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
			});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	render() {
		return (
			<Html>
				<Head>
					<meta charSet="utf-8" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link href="https://fonts.googleapis.com/css2?family=Lato&family=Poppins&display=swap" rel="stylesheet" />
				</Head>
				<Main />
				<NextScript />
			</Html>
		);
	}
}