import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  contentFullHome: {
    flex: 1,
  },
  containerTwo: {
    backgroundColor: '#B8C2FA',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  containerOne: {
    backgroundColor: '#B8C2FA',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap:80
  },
  logo: {
    height: 120,
    width: 120,
    margin: 3,
  },
  logoForm: {
    height: 60,
    width: 60,
  },
  pressText: {
    backgroundColor: 'black',
    fontSize: 22,
    fontWeight: '700',
    color: '#B8C2FA',
    margin: 3,
    padding: 7,
    borderRadius: 8,
  },
  input1: {
    backgroundColor: '#8D78A2',

    height: 40,
    borderRadius: 8,
    padding: 8,
    
    width: '100%',
  },
  input2: {
    backgroundColor: '#8D78A2',
    height: 90,
    borderRadius: 8,
    padding: 8,
    width: '100%',
    marginVertical: 10,
  },
  divLogForm: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-start',
    marginLeft: 35,
  },
  divInput: {
    
    width: '80%',
    marginVertical: 10,
  },
});
