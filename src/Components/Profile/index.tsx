import { Image, Text, TouchableOpacity, View, StyleSheet, Linking } from 'react-native'

export function Profile() {
  const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/giovane-bolsoni/');
  };

  const openGitHub = () => {
    Linking.openURL('https://github.com/g-bolsoni');
  };

  const sendEmail = () => {
    Linking.openURL('mailto:giovane.essado@gmail.com');
  };
  return (
    <View style={styles.container} >
      <View style={styles.profileContainer}>
        <Image
          source={require('../../../assets/profile.jpg')} // Replace with your profile image URI
          style={styles.profileImage}
        />
        <Text style={styles.name}>Giovane Bolsoni</Text>
        <TouchableOpacity style={styles.button} onPress={openLinkedIn}>
          <Text style={styles.buttonText}>LINKEDIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={openGitHub}>
          <Text style={styles.buttonText}>GITHUB</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={sendEmail}>
          <Text style={styles.buttonText}>E-MAIL</Text>
        </TouchableOpacity>
      </View>
    </View >
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#2c2c2c"
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    width: '100%',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    marginBottom: 20,
    color: '#FFF',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
});
