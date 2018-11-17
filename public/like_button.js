'use strict';
const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'h1',
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

ReactDOM.render(
  React.createElement(Hello, {toWhat: 'World'}, null),
  document.getElementById('root')
);
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);