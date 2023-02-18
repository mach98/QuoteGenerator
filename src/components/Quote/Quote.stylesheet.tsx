import {StyleSheet} from 'react-native';
import {MAIN_COLOR} from '../../Constants/COLORS';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '90%',
    padding: 20,
  },
  quoteHeaderText: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  quoteText: {
    color: '#000',
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: 1.1,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 30,
  },
  newQuoteButton: {
    backgroundColor: MAIN_COLOR,
    borderRadius: 10,
    padding: 20,
    marginTop: 10,
  },
  newQuoteButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
  },
  authorNameText: {
    textAlign: 'right',
    fontWeight: '300',
    fontStyle: 'italic',
    fontSize: 16,
    color: '#000',
    marginRight: 2,
  },
  fontAwesomeRightQuote: {
    textAlign: 'right',
    marginTop: -20,
    marginBottom: 20,
  },
  fontAwesomeLeftQuote: {
    marginBottom: -12,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
  },
  volumeUpIcon: {
    borderWidth: 2,
    borderColor: MAIN_COLOR,
    borderRadius: 50,
    padding: 15,
  },
});

export default styles;
