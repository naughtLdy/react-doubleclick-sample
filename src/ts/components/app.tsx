import * as React from 'react';

interface IAppProps {
}
interface IAppState {
}

export class App extends React.Component<IAppProps, IAppState> {

  private clickCount: number;

  constructor(props: IAppProps) {
    super(props);

    this.clickCount = 0;

    this.state= {};
  }

  /**
   * Single Click
   */
  handleOnSingleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log('Single Click');
  }

  /**
   * Double Click
   */
  handleOnDoubleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log('Double Click');
  }

  /**
   * Single and Double Click
   */
  handleOnSingleOrDoubleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    this.clickCount++;

    if (this.clickCount < 2) {
      setTimeout(() => {
        if (this.clickCount > 1) {
          console.log('Double Click');
        } else {
          console.log('Single Click');
        }
        this.clickCount = 0;
      }, 200);
    }
  }

  render() {
    return (
      <div>
        <a href="javascript:void(0)"
          onClick={(e) => this.handleOnSingleClick(e)}>
          Single Click
        </a>
        <br />
        <a href="javascript:void(0)"
          onDoubleClick={(e) => this.handleOnDoubleClick(e)}>
          Double Click
        </a>
        <br />
        <a href="javascript:void(0)"
          onClick={(e) => this.handleOnSingleClick(e)}
          onDoubleClick={(e) => this.handleOnDoubleClick(e)}>
          Single Click and Double Click
        </a>
        <br />
        <a href="javascript:void(0)"
          onClick={(e) => this.handleOnSingleOrDoubleClick(e)}>
          Single Click or Double Click
        </a>
      </div>
    );
  }
}
