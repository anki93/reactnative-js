import React from 'react';
import { View, Dimensions, StyleSheet, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '@images/logo.png';
import SearchIcon from '@images/search-icon.png';

// import Hamburger from '@images/hamburger.svg';
// import { Svg, Path } from 'react-native-svg';
import { FONT_FAMILY_BOLD, FONT_FAMILY_REGULAR } from 'src/styles/typography';

const Screen = Dimensions.get('window');

const Header = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#7d93aa', '#bba795']}
      style={styles.linearGradient}>
      <View style={styles.headerTopRow}>
        <View style={styles.logoWrap}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View style={styles.hamburgerWrap}>
          {/* <Svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20">
            <Path id="Union_3" data-name="Union 3" d="M0,20V16H23v4Zm0-8V8H23v4ZM0,4V0H23V4Z" fill="#283137" />
          </Svg> */}
        </View>
      </View>
      <View style={styles.bannerContent}>
        <Text style={styles.queryDesc}> Let 3000 year of wisdom help you to answer questions about your love life, relationships, investments or other life questions. </Text>
        <Text style={styles.queryText}>What question do you want answered?</Text>
        <Text style={styles.queryFocusText}>Concentrate on your question and click the button</Text>
        <Image source={SearchIcon} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    height: Screen.height,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    // justifyContent: "space-around",
  },
  headerTopRow: {
    flexDirection: "row",
    marginBottom: 50
  },
  logoWrap: {
    flex: 1,
    height: 60
  },
  hamburgerWrap: {
    flex: 1,
    height: 60
  },
  logo: {
    width: 138,
    height: 59,
  },

  bannerContent: {
    // flexDirection: "row",
    flex: 1,
    alignItems: 'center',
    flexWrap: "wrap",
    paddingHorizontal: 40
    // flexDirection: "row",
    // justifyContent: "center",
  },
  queryDesc: {
    color: "#374c5e",
    lineHeight: 21,
    fontSize: 14,
    fontFamily: FONT_FAMILY_REGULAR,
    textAlign: 'center',
    paddingBottom: 20,
  },
  queryText: {
    color: "#fff",
    fontSize: 18,
    lineHeight: 25,
    alignItems: 'center',
    fontFamily: FONT_FAMILY_BOLD,
    textAlign: 'center',
    paddingBottom: 20,
  },
  queryFocusText: {
    color: "#374c5e",
    lineHeight: 21,
    fontSize: 16,
    fontFamily: FONT_FAMILY_BOLD,
    textAlign: 'center',
    paddingBottom: 30,
  },
});
export default Header;
