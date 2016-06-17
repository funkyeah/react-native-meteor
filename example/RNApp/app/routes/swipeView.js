import React, {
  StyleSheet,
  Text,
  View,
  Component,
} from 'react-native';

import SwipeableViews from 'react-swipeable-views/lib/index.native.animated';
// There is another version. I'm unsure which one give the best UX.
// import SwipeableViews from 'react-swipeable-views/lib/index.native.scroll';


const styles = StyleSheet.create({
  slideContainer: {
    height: 100,
  },
  slide: {
    padding: 15,
    height: 100,
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

class SwipeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      direction: "unswiped"
    }
  }

  handleChangeIndex = (newindex, fromindex) => {
    getDirection = (newIndex, oldIndex) => {
      if (oldIndex > newindex) {
        return "right"
      } else if (oldIndex < newindex) {
        return "left"
      } else {
        return "unchanged"
      }
    };
    const direction = getDirection(newindex, this.state.index);
    this.setState({
      direction: direction,
      index: newindex,
    });
  };

  render () {
    return (
      <SwipeableViews 
        onChangeIndex={this.handleChangeIndex}
        containerStyle={styles.slideContainer} 
        resistance={true}
      >
        <View style={[styles.slide, styles.slide1]}>
          <Text style={styles.text}>
            Swiped {this.state.direction}
          </Text>
        </View>
        <View style={[styles.slide, styles.slide2]}>
          <Text style={styles.text}>
            Swiped {this.state.direction}
          </Text>
        </View>
      </SwipeableViews>
    )
  };
}

export default SwipeView;