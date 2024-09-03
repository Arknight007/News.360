import React, { Component } from 'react';

export default class NewsItem extends Component {
  render() {
    const { title, description, iurl, newsUrl } = this.props;

    const cardStyle = {
      width: '225px',
      height: '245px',
      background: '#313131',
      borderRadius: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      transition: '0.2s ease-in-out',
      position: 'relative',
      overflow: 'hidden',
    };

    const imgStyle = {
      height: '30%',
      position: 'absolute',
      transition: '0.2s ease-in-out',
      zIndex: 1,
      filter: 'blur(0)',
    };

    const textBoxStyle = {
      opacity: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '15px',
      transition: '0.2s ease-in-out',
      zIndex: 2,
      textAlign: 'center',
    };

    const textStyle = {
      fontWeight: 'semi-bold',
    };

    const headStyle = {
      fontSize: '20px',
    };

    const priceStyle = {
      fontSize: '17px',
    };

    const spanStyle = {
      fontSize: '10px',
      color: 'lightgrey',
    };

    const cardHoverStyle = {
      transform: 'scale(1.04) rotate(-1deg)',
    };

    const imgHoverStyle = {
      height: '55%',
      filter: 'blur(7px)',
      animation: 'anim 3s infinite',
    };

    const textBoxHoverStyle = {
      opacity: 1,
    };

    return (
      <div
        className="card"
        style={cardStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = cardHoverStyle.transform;
          e.currentTarget.querySelector('.img').style.height = imgHoverStyle.height;
          e.currentTarget.querySelector('.img').style.filter = imgHoverStyle.filter;
          e.currentTarget.querySelector('.textBox').style.opacity = textBoxHoverStyle.opacity;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1) rotate(0)';
          e.currentTarget.querySelector('.img').style.height = imgStyle.height;
          e.currentTarget.querySelector('.img').style.filter = imgStyle.filter;
          e.currentTarget.querySelector('.textBox').style.opacity = textBoxStyle.opacity;
        }}
      >
        <img
          className="img"
          src={!iurl ? "https://cdn.ndtv.com/common/images/ogndtv.png" : iurl}
          alt="News"
          style={imgStyle}
        />
        <div className="textBox" style={textBoxStyle}>
          <p className="text head" style={{ ...textStyle, ...headStyle }}>{title}</p>
          <span style={spanStyle}>{description}</span>
          <p className="text price" style={{ ...textStyle, ...priceStyle }}>Read more</p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn" style={spanStyle}>Read more</a>
        </div>
      </div>
    );
  }
}
