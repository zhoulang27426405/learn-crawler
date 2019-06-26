const React = require('react')
const DefaultLayout = require('./layout')

class HelloMessage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <ul className="news-wrap">
          {this.props.news.map((item, i) => {
            return (
              <li key={i}>
                <div className="info-row_title">
                  <a target="_blank" href={item.node.originalUrl}>{item.node.title}</a>
                </div>
                <div className="info-row_like">
                  <a className="info-row_like-btn" target="_blank" href={item.node.originalUrl}>
                    <img src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg" className="icon" />
                    <span className="count">{item.node.likeCount}</span>
                  </a>
                </div>
              </li>
            )
          })}
        </ul>
      </DefaultLayout>
    )
  }
}

module.exports = HelloMessage
