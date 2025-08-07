import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../utils/ThemeContext';

const SkillsScreen = () => {
  const { theme } = useTheme();

  const skills = [
    { name: 'JavaScript ES6', rating: 4 },
    { name: 'React', rating: 4 },
    { name: 'React Native', rating: 4 },
    { name: 'Node.js', rating: 4 },
    { name: 'Python', rating: 4 },
    { name: 'HTML5', rating: 5 },
    { name: 'CSS3', rating: 5 },
    { name: 'MongoDB', rating: 3 },
    { name: 'PostgreSQL', rating: 3 },
    { name: 'Docker', rating: 3 },
    { name: 'Git', rating: 4 },
    { name: 'Express', rating: 4 },
    { name: 'Flask', rating: 3 },
    { name: 'Django', rating: 3 },
    { name: 'Figma', rating: 3 },
    { name: 'Linux', rating: 4 },
  ];

  const handleWhatsAppPress = () => {
    // Replace with actual WhatsApp number
    Linking.openURL('https://wa.me/353851234567');
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Ionicons
          key={i}
          name={i <= rating ? 'star' : 'star-outline'}
          size={16}
          color={i <= rating ? '#FFD700' : theme.borderColor}
          style={{ marginRight: 2 }}
        />
      );
    }
    return stars;
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      paddingTop: 60,
    },
    header: {
      alignItems: 'center',
      marginBottom: 30,
      paddingHorizontal: 20,
    },
    profileImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: theme.cardBackground,
      borderWidth: 2,
      borderColor: theme.borderColor,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15,
    },
    profileImageText: {
      color: theme.textColor,
      fontSize: 14,
      fontWeight: '500',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.textColor,
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      color: theme.textColor,
      opacity: 0.7,
    },
    skillsContainer: {
      flex: 1,
      paddingHorizontal: 20,
    },
    skillItem: {
      backgroundColor: theme.cardBackground,
      borderRadius: 12,
      padding: 15,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },
    skillHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    skillName: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.textColor,
      flex: 1,
    },
    starsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.textColor,
      marginBottom: 15,
      marginTop: 10,
    },
    contactButton: {
      backgroundColor: '#25D366',
      borderRadius: 12,
      paddingVertical: 15,
      paddingHorizontal: 20,
      margin: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    contactButtonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: '600',
      marginLeft: 10,
    },
    experienceText: {
      fontSize: 14,
      color: theme.textColor,
      opacity: 0.6,
      textAlign: 'center',
      paddingHorizontal: 20,
      marginBottom: 20,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImage}>
          <Text style={styles.profileImageText}>foto sua</Text>
        </View>
        <Text style={styles.title}>Minhas Habilidades</Text>
        <Text style={styles.subtitle}>Full Stack Developer</Text>
      </View>

      <Text style={styles.experienceText}>
        5+ anos de experiência em desenvolvimento • Especialista em tecnologias modernas
      </Text>

      <View style={styles.skillsContainer}>
        <Text style={styles.sectionTitle}>Frontend</Text>
        {skills.filter(skill => 
          ['JavaScript ES6', 'React', 'React Native', 'HTML5', 'CSS3', 'Figma'].includes(skill.name)
        ).map((skill, index) => (
          <View key={index} style={styles.skillItem}>
            <View style={styles.skillHeader}>
              <Text style={styles.skillName}>{skill.name}</Text>
              <View style={styles.starsContainer}>
                {renderStars(skill.rating)}
              </View>
            </View>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Backend</Text>
        {skills.filter(skill => 
          ['Node.js', 'Python', 'Express', 'Flask', 'Django'].includes(skill.name)
        ).map((skill, index) => (
          <View key={index} style={styles.skillItem}>
            <View style={styles.skillHeader}>
              <Text style={styles.skillName}>{skill.name}</Text>
              <View style={styles.starsContainer}>
                {renderStars(skill.rating)}
              </View>
            </View>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Database & DevOps</Text>
        {skills.filter(skill => 
          ['MongoDB', 'PostgreSQL', 'Docker', 'Git', 'Linux'].includes(skill.name)
        ).map((skill, index) => (
          <View key={index} style={styles.skillItem}>
            <View style={styles.skillHeader}>
              <Text style={styles.skillName}>{skill.name}</Text>
              <View style={styles.starsContainer}>
                {renderStars(skill.rating)}
              </View>
            </View>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.contactButton} onPress={handleWhatsAppPress}>
        <Ionicons name="logo-whatsapp" size={24} color="#ffffff" />
        <Text style={styles.contactButtonText}>Fala comigo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SkillsScreen;

