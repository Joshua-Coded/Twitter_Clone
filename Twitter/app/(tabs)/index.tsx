import { Image, StyleSheet } from 'react-native';


import { Text, View } from '@/components/Themed';
import tweets from '../../assets/data/tweets';


const tweet = tweets[0];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
        <Image src={tweet.user.image}  style={{width: 50, height:50 }}/>
        <Text> {tweet.content} </Text>
    </View>      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
