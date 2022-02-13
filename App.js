
import React from 'react';
import {Text, View} from 'react-native';
import {Header} from './Header';
import {heading} from './Typography';

const WelcomeScreen = () => (
  <View>
    <Header title="Job Search"/>
    <Text style={heading}>Step One</Text>
    <Text>
      Free & Open Source Job Posting App to fit local requirement!
    </Text>
   </View>
);
  
