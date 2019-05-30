import * as React from 'react';

import {
  MainPageConnected,
  IMainPageProps,
} from '../shared/components/pages/main';

class NextPage extends React.PureComponent<IMainPageProps> {
  public static getInitialProps(): IMainPageProps {
    return {};
  }

  public render() {
    return <MainPageConnected {...this.props} />;
  }
}

export default NextPage;
