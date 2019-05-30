import * as React from 'react';
import Document, {
  Head,
  Main,
  NextDocumentContext,
  NextScript,
} from 'next/document';
import flush from 'styled-jsx/server';
import { IPageContext } from '../shared/types';

export default class SSRThemedDocument extends Document {
  public static async getInitialProps(context: NextDocumentContext) {
    let pageContext = {} as IPageContext;

    const page = context.renderPage(Component => {
      return props => {
        pageContext = props.pageContext;

        return <Component {...props} />;
      };
    });

    return {
      ...(await Document.getInitialProps(context)),
      ...page,
      styles: [
        <React.Fragment key='core'>
          <style
            id='jss-server-side'
            dangerouslySetInnerHTML={{
              __html: pageContext.sheetsRegistry.toString(),
            }}
          />
          {flush() || null}
        </React.Fragment>,
      ],
    };
  }

  public render() {
    const viewportMetaValue =
      'user-scalable=0, initial-scale=1, ' +
      'minimum-scale=1, width=device-width, height=device-height';

    return (
      <html lang='en' dir='ltr'>
      <Head>
        <meta name='viewport' content={viewportMetaValue}/>
        <meta charSet='utf-8'/>

        <link rel='icon' href='/static/images/favicon.ico' type='image/x-icon'/>
      </Head>

      <body>
      <Main/>
      <NextScript/>
      </body>
      </html>
    );
  }
}
