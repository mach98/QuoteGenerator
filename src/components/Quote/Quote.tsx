import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './Quote.stylesheet';
import {MAIN_COLOR} from '../../Constants/COLORS';

import Tts from 'react-native-tts';

Tts.setDefaultLanguage('en-GB');
Tts.setDefaultVoice('com.apple.ttsbundle.Samantha-compact');
Tts.setDefaultRate(0.5);
Tts.setDefaultPitch(1.2);

const Quote = () => {
  const [Quote, setQuote] = useState('Loading...');
  const [Author, setAuthor] = useState('Loading...');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const newQuote = () => {
    setIsLoading(true);
    fetch('https://api.quotable.io/random')
      .then(res => res.json())
      .then(result => {
        setQuote(result.content);
        setAuthor(result.author);
        setIsLoading(false);
      });
  };

  const speakNow = () => {
    Tts.stop();
    Tts.speak(Quote + ' by ' + Author);
    Tts.addEventListener('tts-start', event => setIsSpeaking(true));
    Tts.addEventListener('tts-finish', event => setIsSpeaking(false));
  };

  useEffect(() => {
    newQuote();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.quoteHeaderText}>Quote of the day</Text>
      <FontAwesome5
        name="quote-left"
        color={'#000'}
        size={20}
        style={styles.fontAwesomeLeftQuote}
      />
      <Text style={styles.quoteText}>{Quote}</Text>
      <FontAwesome5
        name="quote-right"
        color={'#000'}
        size={20}
        style={styles.fontAwesomeRightQuote}
      />
      <Text style={styles.authorNameText}>-- {Author}</Text>

      <TouchableOpacity
        style={{...styles.newQuoteButton, opacity: isLoading ? 0.7 : 1}}
        onPress={newQuote}>
        <Text style={styles.newQuoteButtonText}>
          {isLoading ? 'Loading' : 'New Quote'}
        </Text>
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity
          onPress={speakNow}
          style={{
            ...styles.volumeUpIcon,
            backgroundColor: isSpeaking ? MAIN_COLOR : '#fff',
          }}>
          <FontAwesome
            name="volume-up"
            size={22}
            color={isSpeaking ? '#fff' : MAIN_COLOR}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.volumeUpIcon}>
          <FontAwesome5 name="copy" size={22} color={MAIN_COLOR} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.volumeUpIcon}>
          <FontAwesome name="share" size={22} color={MAIN_COLOR} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quote;
