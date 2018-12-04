import React, { Component } from 'react';
import Profile from "../components/Profile"
import Home from "../components/Home"
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

const RootNavigator = createBottomTabNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			title: "Home",
			tabBarIcon: ({ tintColor, focused }) => (<Icon name="home" size={25} color={tintColor}/>)
		}
	},
	Profile: {
		screen: Profile,
		navigationOptions: {
			title: "Profile Tb",
			tabBarIcon: ({ tintColor, focused }) => (<Icon name="user" size={25} color={tintColor}/>)
		}
	},
}, {
	tabBarOptions: {
		activeTintColor: "orange"
	}
})

export default createAppContainer(RootNavigator)