// Import
import { StyleSheet } from 'react-native';

// Style
export const styles = StyleSheet.create({ 
  tabsContainer: { 
    position: 'absolute',
    width: '100%',
    height: 33,
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10, 
  }, 
  tab_login: { 
    position: 'absolute',
    left: 0,
    width: '50%',
    height: 33,
    borderTopLeftRadius: 10, 
    backgroundColor: '#333333', 
  },   
  tab_signup: { 
    position: 'absolute',
    right: 0,
    width: '50%',
    height: 33, 
    borderTopRightRadius: 10, 
    backgroundColor: '#333333', 
  }, 
  tabText: { 
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: 'bold', 
    textAlign: 'center', 
    padding: 5,
    color: '#666666', 
  }, 
  selectedTab_login: { 
    backgroundColor: '#fed90f', 
  }, 
  dark_selectedTab_login: { 
    backgroundColor: '#001020', 
  },   
  selectedTab_signup: { 
    backgroundColor: '#fed90f', 
  },  
  dark_selectedTab_signup: { 
    backgroundColor: '#001020', 
  }, 
  selectedTabText: { 
    color: '#001020', 
  },
  dark_selectedTabText: { 
    color: '#fed90f', 
  },
  signAsPsngrButton: {
    position: 'absolute',
    top: '23%',
  }, 
  land_signAsPsngrButton: {  
    top: '27%',
    left: '45%',
  }, 
  asPsngrImage: {
    position: 'absolute',
    right: 55, 
    width: 110,
    height: 110,  
  }, 
  asPsngrText: {
    top: '50%',
    left: 33,
    fontSize: 25, 
    fontWeight: 'bold', 
    color: '#001020', 
  },
  dark_asPsngrText: {
    color: '#fed90f', 
  },
  signAsDrvrButton: {
    position: 'absolute',
    top: '56.7%',
    left: '33%',
  }, 
  land_signAsDrvrButton: {  
    top: '38%',
    left: '83%',
  }, 
  asDrvrImage: {
    position: 'absolute',
    top: 2, 
    right: 10, 
    width: 39,
    height: 39,  
  },
  asDrvrText: {
    top: '50%',
    left: 33,
    fontSize: 15, 
    fontWeight: 'bold', 
    color: '#001020', 
  },
  dark_asDrvrText: {
    color: '#fed90f', 
  },
  loginImage: {
    position: 'absolute',
    alignSelf: 'center',
    top: '13.73%',
    width: 79,
    height: 79, 
  },
  land_loginImage: {
    top: '28.4%',
    right: '5%',
    width: 99,
    height: 99,  
  },
  inputSignup21: {
    position: 'absolute',
    top: '36%',
    left: '9%',
    width: '90%',
  },
  land_inputSignup21: {
    top: '21.3%',
    left: '27%',
    width: '50%',
  },
  inputSignup22: {
    position: 'absolute',
    top: '50%',
    left: '9%',
    width: '90%',
  },
  land_inputSignup22: {
    top: '42.8%',
    left: '27%',
    width: '50%',
  },
  inputLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#001020'
  },
  dark_inputLabel: {
    color: '#fed90f'
  },
  inputFieldLog: {
    marginLeft: 10,
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#ffffff',
  },
  dark_inputFieldLog: {
    backgroundColor: '#cccccc',
  },

  forgotButton: {
    position: 'absolute',
    left: '33%',
    bottom: '46.23%',
  },
  dark_forgotButton: {
  }, 
  land_forgotButton: {
    left: '37.73%',
    bottom: '51.15%',
  }, 
  forgotText: {
    color: '#001020',
    fontSize: 13,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  }, 
  dark_forgotText: {
    color: '#fed90f'
  }, 

  agreeButton: {  
    position: 'absolute', 
    alignSelf: 'center',
    bottom: '21%',
    width: '80%', 
    height: 50,  
    borderRadius: 5, 
    padding: 10,
    shadowColor: '#999999', 
    shadowOffset: { width: 1, height: 2 }, 
    shadowOpacity: 0.5, 
    shadowRadius: 5, 
    elevation: 5, 
    alignItems: 'center',
    backgroundColor: '#001020',
  },
  dark_agreeButton: {
    backgroundColor: '#fed90f',
  }, 
  land_agreeButton: {  
    bottom: 33,
  }, 
  agreeText: {  
    fontSize: 20, 
    fontWeight: 'bold',  
    color: '#fed90f', 
  }, 
  dark_agreeText: {  
    color: '#001020', 
  }, 

}); 