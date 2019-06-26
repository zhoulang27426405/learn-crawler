const React = require('react')

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/public/index.css" />
        </head>
        <body>{this.props.children}</body>
      </html>
    )
  }
}

module.exports = DefaultLayout
