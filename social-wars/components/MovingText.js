import React from 'react';
import {Animated} from 'react-vr';
import Easing from 'easing';

const textBaseStyle = {
  color: '#FFE81F',
  // textAlign: 'justify', // not supported
  width: 1.255,
};

const textStyle = {
  ...textBaseStyle,
  marginBottom: 0.15,
  marginLeft: 0.11,
};

export default class MovingText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      y: new Animated.Value(-1.5),
      opacity: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.y, {
      duration: 150000,
      toValue: 10,
      delay: 4500,
      easing: Easing.linear,
    }).start();

    Animated.timing(this.state.opacity, {
      duration: 3000,
      toValue: 1,
      delay: 9500,
      easing: Easing.linear,
    }).start();
  }

  render() {
    return (
      <Animated.View
        style={{
          layoutOrigin: [0.5, 0.5],
          opacity: this.state.opacity,
          transform: [{translate: [0, 0, 0]}, {translateY: this.state.y}],
        }}
      >
        <Animated.Text
          style={{...textBaseStyle, textAlign: 'center', marginBottom: 0.01}}
        >
          June 1, 2017 3:05 pm PST
        </Animated.Text>
        <Animated.Text
          style={{
            ...textBaseStyle,
            textAlign: 'center',
            marginBottom: 0.18,
            fontSize: 0.16,
          }}
        >
          Liam Broza
        </Animated.Text>
        <Animated.Text style={textStyle}>
          @LiamBroza May 28 - Great summary of our elegant solution to so many developer issues.
        </Animated.Text>
        <Animated.Text style={textStyle}>
          @LiamBroza May 27 - OAuth 1/2, OpenID, Tokens... Make Auth and APIs Simple with tools by BitScoop Labs.
        </Animated.Text>
        <Animated.Text style={textStyle}>
          @LiamBroza May 26 - Data Science Wizardry. Find relationships in data across API endpoints using the BitScoop Labs API Toolbox.
        </Animated.Text>
        <Animated.Text style={textStyle}>
          @upsidedownconf May 23 - Watching @IndoJacco speak right now at #FUD2017! The Art of Love Making. #startups #entrepreneurship #sales
        </Animated.Text>
        <Animated.Text style={textStyle}>
          @moniquejmorrow May 25 - With  2017 IEEE Medal laureate Prof Martin Vetterli- Congratulations! @EPFL @IEEEAwards
        </Animated.Text>
        <Animated.Text style={textStyle}>
        @postmanclient May 23 - How to automate #API testing using Postman Collections in your continuous integration pipeline: https://bit.ly/sisa
        </Animated.Text>
      </Animated.View>
    );
  }
}
