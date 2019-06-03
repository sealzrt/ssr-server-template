export interface IGetInitialPropsError {
  title?: string;
}

/**
 * An error to throw during page getInitialProps lifecycle stage to handle
 * error properly.
 */
export class GetInitialPropsError
  extends Error
  implements IGetInitialPropsError {
  public title?: string;

  constructor(props: IGetInitialPropsError) {
    super();

    this.title = props.title;
  }
}
