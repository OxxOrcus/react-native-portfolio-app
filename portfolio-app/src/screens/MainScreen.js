import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
  ScrollView,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../utils/ThemeContext';

const MainScreen = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme();

  const handleLinkPress = (url, type) => {
    if (type === 'email') {
      Linking.openURL(`mailto:${url}`);
    } else if (type === 'whatsapp') {
      // WhatsApp link format
      Linking.openURL(`https://wa.me/353851234567`); // Replace with actual number
    } else {
      Linking.openURL(url);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      paddingTop: 60,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginBottom: 30,
    },
    themeToggle: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    themeText: {
      color: theme.textColor,
      marginRight: 10,
      fontSize: 14,
    },
    content: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 30,
    },
    profileContainer: {
      alignItems: 'center',
      marginBottom: 40,
    },
    profileImage: {
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: theme.cardBackground,
      borderWidth: 3,
      borderColor: theme.borderColor,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    profileImageText: {
      color: theme.textColor,
      fontSize: 16,
      fontWeight: '500',
    },
    name: {
      fontSize: 28,
      fontWeight: 'bold',
      color: theme.textColor,
      marginBottom: 5,
    },
    title: {
      fontSize: 18,
      color: theme.textColor,
      opacity: 0.7,
      marginBottom: 10,
    },
    location: {
      fontSize: 16,
      color: theme.textColor,
      opacity: 0.6,
    },
    buttonsContainer: {
      width: '100%',
      paddingHorizontal: 20,
    },
    button: {
      backgroundColor: theme.cardBackground,
      borderWidth: 2,
      borderColor: theme.borderColor,
      borderRadius: 12,
      paddingVertical: 15,
      paddingHorizontal: 20,
      marginBottom: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: theme.textColor,
      fontSize: 16,
      fontWeight: '600',
      marginLeft: 10,
    },
    footer: {
      padding: 20,
      alignItems: 'center',
    },
    footerText: {
      color: theme.textColor,
      opacity: 0.5,
      fontSize: 12,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.name, { fontSize: 20 }]}>Portfolio</Text>
        <View style={styles.themeToggle}>
          <Text style={styles.themeText}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkMode ? '#007AFF' : '#f4f3f4'}
          />
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImage}>
            <Text style={styles.profileImageText}>foto sua</Text>
          </View>
          <Text style={styles.name}>Paulo Brocco</Text>
          <Text style={styles.title}>Dev_Oxx.orcus</Text>
          <Text style={styles.location}>Cork, Ireland</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleLinkPress('https://www.linkedin.com/in/paulo-brocco/', 'linkedin')}
          >
            <Ionicons name="logo-linkedin" size={24} color="#0077B5" />
            <Text style={styles.buttonText}>LINKEDIN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleLinkPress('https://github.com/OxxOrcus', 'github')}
          >
            <Ionicons name="logo-github" size={24} color={theme.textColor} />
            <Text style={styles.buttonText}>GITHUB</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleLinkPress('paulobroccooxx@gmail.com', 'email')}
          >
            <Ionicons name="mail" size={24} color="#FF6B35" />
            <Text style={styles.buttonText}>E-MAIL</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleLinkPress('', 'whatsapp')}
          >
            <Ionicons name="logo-whatsapp" size={24} color="#25D366" />
            <Text style={styles.buttonText}>WHATSAPP</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Full Stack Developer • React Native Portfolio</Text>
      </View>
    </ScrollView>
  );
};

export default MainScreen;

