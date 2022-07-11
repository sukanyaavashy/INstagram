import {StyleSheet, Text, View, SafeAreaView,ScrollView} from 'react-native';
import React from 'react';
import Header from '../../components/Home/Header';
import Stories from '../../components/Home/Stories';
// import BottomTabs from '../../components/BottomTabs/BottomTabs';
import Post from '../../components/Home/Post';
import {
    POSTS
} from '../../data/post';

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <Header />
      <Stories />
      <ScrollView >
        {POSTS.map((post, index) => (<Post post = {post} key = {index}/>))}
        </ScrollView>
        {/* <BottomTabs/> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  //  container: {
  //     backgroundColor: 'black',
  //     flex: 1,
  // }
});
export default Home;
