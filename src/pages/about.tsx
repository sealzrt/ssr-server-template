import * as React from 'react';

import {
  AboutPageConnected,
  IAboutPageProps,
} from '../shared/components/pages/about';

class NextPage extends React.PureComponent<IAboutPageProps> {
  public static getInitialProps(): IAboutPageProps {
    return {};
  }

  public render() {
    return <AboutPageConnected {...this.props} />;
  }
}

export default NextPage;
