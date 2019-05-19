import * as React from 'react';

import { AboutPageConnected } from '../shared/components/pages/about/connected';
import { IAboutPageProps } from '../shared/components/pages/about/types';

class NextPage extends React.PureComponent<IAboutPageProps> {
  public static getInitialProps(): IAboutPageProps {
    return {};
  }

  public render() {
    return <AboutPageConnected {...this.props} />;
  }
}

export default NextPage;
