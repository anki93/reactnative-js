import React, { Fragment } from "react";
import { SafeAreaView, ScrollView, View, Image, ImageBackground, Text, StyleSheet } from "react-native"
import { FONT_FAMILY_REGULAR } from '@styles/typography';
import { FONT_FAMILY_BOLD } from '@styles/typography';
import CapMan from "@images/cap-man.jpg";
import Hexagram from "@images/hexagram.png"
import BinaryCode from '@images/binary-code.png';
import Kabbalah from "@images/kabbalah.png";
import OldMan from "@images/old-man.png"
import Header from "@components/Header";

const QuestionUI = ({ question, content }) => {
  return (<Fragment>
    <Text style={styles.InnerContentHeading}>{question}</Text>
    <Text style={styles.InnerContent}>{content}</Text>
  </Fragment>)
}

const QuestionContents = () => (
  <View style={{ flex: 1, alignItems: 'center', paddingBottom: 20 }}>
    {QuestionList.map((question, index) => (
      <QuestionUI
        key={`question-${index}`}
        question={question.question}
        content={question.content}
      />))}
  </View>
)

const QuestionList = [{
  question: "What is the I Ching?",
  content: "The I Ching is an oracle: it answers questions. It is the oldest Oracle that is still in use today. The I Ching is about 3.000 years old and originated in China, but is now regularly consulted by people all around the world. The I Ching has been able to stand the test of time which comes to show its real value."
}, {
  question: "What can the I Ching do for me?",
  content: "See the I Ching as a tool. A tool that helps you connect to your unconscious, intuition, or higher self. Ultimately to make wiser decisions and understand yourself and the world better. The tool, like any other tool, is something you need to learn to use. But not to worry, we created this site so that it becomes easy to build up your knowledge along the way."
}, {
  question: "Why FreeIChing.com?",
  content: "We try to keep it practical. Make sure that you can apply ancient wisdom directly in your life. You can keep track of your readings in a journal or share your readings with friends. Last but not least, we care about your privacy and don't spam or bother you with advertisements. Join us, it’s 100% free."
}]

const BoxLayout = ({ content: { heading, contents }, name, bgColor, full, top, bottom, children, style }) => (
  <View style={[styles.boxLayout, !full && styles.boxStyle2, { backgroundColor: bgColor || "#fff" }, style]}>
    {top && children}
    <Text style={[styles.fontBold, styles.boxLayoutHeading]}>{heading}</Text>
    {contents.map((content, index) => (
      <Text key={`${name}-${index}`} style={[styles.fontRegular, styles.boxLayoutContent]}>{content}</Text>
    ))}
    {bottom && children}
  </View>
)

const ConsultIChing = {
  heading: "How to consult the I Ching",
  contents: [
    "To use the I Ching as a divination tool, the most important thing you need is your pure intention, concentration, and attention to your question when you consult the I Ching.",
    "You must be in some way personally connected to the question. The more you are emotionally involved with the problem, the more precise the I Ching answer will be."
  ]
}
const ConsultMethod = {
  heading: "What method to use? Coins or Oneline?",
  contents: [
    "We use two different methodologies to randomly create the reading answer (the Hexagrams and moving lines). It is up to you as a member to select the method of your liking. Some options might only be available after creating your own account."
  ]
}
const ConsultConcept = {
  heading: `The concept of "Yin" and "Yang"`,
  contents: [
    `A hexagram consist of 6 lines, the lines either have the quality of "Yin, when the line is broken" or "Yang, when the line is solid". To get a better understandig of the meaning of the concepts of "Yin" or "Yang", let's take a look at what the I Ching have to say about the hexagrams that only have "Yang" lines and "Yin" lines.`
  ]
}

const footerLinks = [
  { link: "", text: "Become member?" },
  { link: "", text: "Give feedback?" },
  { link: "", text: "Lao Naixuan" },
  { link: "", text: "Richard Wilhelm" },
  { link: "", text: "Oneline or Coins" },
  { link: "", text: "Example Readings" },
  { link: "", text: "What is I Ching?" },
  { link: "", text: "Can I Ching help?" },
  { link: "", text: "I Ching and science" },
  { link: "", text: "W. Pauli" },
  { link: "", text: "Book of Changes" },
  { link: "", text: "Support our app" }
];

const FooterLinks = () => {
  return (
    <View style={styles.footer}>
      {footerLinks.map((item, index) => (
        <Text key={`footer-link-${index}`} style={styles.footerText}>{item.text}</Text>
      ))}
    </View>
  )
}

const hexagramContent = {
  heading: "I Ching Hexagram",
  contents: ["I Ching is one of the oldest books of Ancient China. It contains 64 hexagrams and texts on how to understand them in the case of divination. Find links to all of the hexagrams and their divinatory text."]
}
const binaryContent = {
  heading: "I Ching and Binary Code",
  contents: [`A binary code represents data using a two-symbol system. The core elements of the I Ching binary code are known as 'Yin' and 'Yang.’ Your computer uses another famous two-symbol system, the binary number system, which doesn't use 'yin' and 'yang' but uses "0" and "1".`]
}
const kabbalahContent = {
  heading: "I Ching & Kabbalah, a curious link.",
  contents: [`The I Ching and the Kabbalah's (Jewish Mysticism) school of thought come from different parts of the world and very different cultural backgrounds. Still, you can notice some fascinating similarities within those schools of thought.`]
}

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ backgroundColor: "#fff" }}>
        <Header />
        <QuestionContents />
        <BoxLayout bgColor="#bba795" content={ConsultIChing} name="consult" />
        <BoxLayout bgColor="#bba795" content={ConsultMethod} name="method" />
        <ImageBackground source={CapMan} resizeMode="cover">
          <View style={styles.CapManContent}>
            <Text style={styles.CapMapText}>Lao Naixuan (1843-1921)</Text>
            <Text style={styles.CapMapText}>'Lao Naixuan, he first opened my mind to the wonders of the Book of Changes.' Richard Wilhelm</Text>
          </View>
        </ImageBackground>
        <BoxLayout bgColor="#d7d7d7" top content={hexagramContent} style={{ marginTop: 15 }} name="hexagram">
          <View style={{ alignItems: "center", paddingBottom: 15 }}>
            <Image source={Hexagram} />
          </View>
        </BoxLayout>
        <BoxLayout bgColor="#7d93aa" bottom full content={binaryContent} name="binary">
          <Image source={BinaryCode} style={styles.binaryImage} resizeMode="contain" />
        </BoxLayout>
        <BoxLayout bgColor="#d7d7d7" top full content={kabbalahContent} name="kabbalah" >
          <Image style={styles.greyBoxImage} source={Kabbalah} resizeMode="contain" />
        </BoxLayout>
        <BoxLayout bgColor="#bba795" content={ConsultConcept} style={{ marginTop: 15 }} name="concept" />
        <View style={styles.OldManWrapper}>
          <ImageBackground source={OldMan} resizeMode="cover">
            <View style={styles.OldManWrap}>
              <Text style={styles.OldManText}>Carl Jung often consulted</Text>
              <Text style={styles.OldManText}>the I Ching himself</Text>
            </View>
          </ImageBackground>
        </View>
        <FooterLinks />
      </ScrollView>
    </SafeAreaView >)
}


const styles = StyleSheet.create({
  InnerContentHeading: {
    fontFamily: FONT_FAMILY_BOLD,
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 14,
    paddingHorizontal: 20
  },
  InnerContent: {
    fontFamily: FONT_FAMILY_REGULAR,
    textAlign: 'center',
    fontSize: 14,
    paddingHorizontal: 20
  },
  CapManContent: {
    backgroundColor: "#696e63",
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: "45%",
    marginHorizontal: 30,
    marginVertical: 60,
    borderRadius: 10,
  },
  CapMapText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
  },
  binaryImage: {
    width: "100%",
    marginBottom: 30
  },
  boxLayout: {
    padding: 15
  },
  boxStyle2: {
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 15
  },
  fontRegular: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  fontBold: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: FONT_FAMILY_BOLD,
  },
  boxLayoutHeading: {
    fontSize: 14,
    color: "#374c5e",
    fontFamily: FONT_FAMILY_BOLD,
  },
  boxLayoutContent: {
    marginTop: 25,
    color: "#374c5e"
  },
  greyBoxImage: {
    width: "100%"
  },
  OldManWrap: {
    paddingVertical: 100,
    paddingHorizontal: 20
  },
  OldManText: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 14,
    fontFamily: FONT_FAMILY_REGULAR
  },
  footer: {
    backgroundColor: "#374c5e",
    padding: 20,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  footerText: {
    color: "#fff",
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 14,
    lineHeight: 30,
    width: "50%",
    alignSelf: "flex-start",
  }
});

export default Home;