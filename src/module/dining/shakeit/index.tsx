import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import RNShake from 'react-native-shake';

const ShakeIt = () => {
  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      // Your code...
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return(
    <View>
<Text>Shake your device to unlock a daily dining surprise</Text>
    </View>
    
)
};



export default ShakeIt;