import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { UPDATE_USER_DATA } from '../../helpers/actionTypes';

const mapStateToProps = state => ({ ...state.profile });

const mapDispatchToProps = dispatch => ({
  submitProfile: payload =>
    dispatch({ type: UPDATE_USER_DATA, payload }),
});


class Profile extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};
  }

  componentDidMount() {
    this.props.submitProfile("Meis")
  }

  render() {
    const { currentUserName } = this.props;

    return (
        <View style={styles.container}>
          <Text>{currentUserName}</Text> 
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
