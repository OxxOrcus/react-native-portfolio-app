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

const ProjectsScreen = () => {
  const { theme } = useTheme();

  const projects = [
    {
      name: 'Portfolio',
      description: 'Personal portfolio website showcasing my work and skills',
      tech: ['React', 'CSS3', 'JavaScript'],
      type: 'Web Development',
      icon: 'person-circle',
    },
    {
      name: 'BroccoRealtors',
      description: 'Real estate website prototype with modern design',
      tech: ['React', 'Node.js', 'MongoDB'],
      type: 'Full Stack',
      icon: 'home',
    },
    {
      name: 'Clone TabNews',
      description: 'Front-end learning project cloning TabNews interface',
      tech: ['React', 'CSS3', 'JavaScript'],
      type: 'Frontend',
      icon: 'newspaper',
    },
    {
      name: 'Machine Learning',
      description: 'ML learning journey with various algorithms and models',
      tech: ['Python', 'TensorFlow', 'Pandas'],
      type: 'AI/ML',
      icon: 'brain',
    },
    {
      name: 'Student Projects Platform',
      description: 'Platform for showcasing student projects and collaborations',
      tech: ['React', 'Node.js', 'Express'],
      type: 'Full Stack',
      icon: 'school',
    },
    {
      name: 'Website Design System',
      description: 'Comprehensive design system for consistent web interfaces',
      tech: ['CSS3', 'HTML5', 'Figma'],
      type: 'Design System',
      icon: 'color-palette',
    },
    {
      name: 'C Programming Projects',
      description: 'Various C projects and exercises from 42 London Piscine',
      tech: ['C', 'Linux', 'Git'],
      type: 'Systems Programming',
      icon: 'terminal',
    },
    {
      name: '42 London Experience',
      description: 'Intensive programming bootcamp experience and projects',
      tech: ['C', 'Unix', 'Git'],
      type: 'Education',
      icon: 'library',
    },
  ];

  const handleProjectPress = (projectName) => {
    // Open GitHub repository
    const repoName = projectName.toLowerCase().replace(/\s+/g, '-');
    Linking.openURL(`https://github.com/OxxOrcus/${repoName}`);
  };

  const handleGitHubPress = () => {
    Linking.openURL('https://github.com/OxxOrcus');
  };

  const getTypeColor = (type) => {
    const colors = {
      'Web Development': '#007AFF',
      'Full Stack': '#34C759',
      'Frontend': '#FF9500',
      'AI/ML': '#AF52DE',
      'Design System': '#FF2D92',
      'Systems Programming': '#FF3B30',
      'Education': '#5AC8FA',
    };
    return colors[type] || '#8E8E93';
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
      textAlign: 'center',
    },
    projectsContainer: {
      flex: 1,
      paddingHorizontal: 20,
    },
    projectCard: {
      backgroundColor: theme.cardBackground,
      borderRadius: 12,
      padding: 20,
      marginBottom: 15,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },
    projectHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    projectIcon: {
      marginRight: 12,
    },
    projectName: {
      fontSize: 18,
      fontWeight: '600',
      color: theme.textColor,
      flex: 1,
    },
    projectType: {
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 6,
      alignSelf: 'flex-start',
    },
    projectTypeText: {
      fontSize: 12,
      fontWeight: '500',
      color: '#ffffff',
    },
    projectDescription: {
      fontSize: 14,
      color: theme.textColor,
      opacity: 0.8,
      marginBottom: 12,
      lineHeight: 20,
    },
    techContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 10,
    },
    techTag: {
      backgroundColor: theme.borderColor,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 6,
      marginRight: 6,
      marginBottom: 6,
    },
    techText: {
      fontSize: 12,
      color: theme.textColor,
      fontWeight: '500',
    },
    viewButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 8,
    },
    viewButtonText: {
      fontSize: 14,
      color: '#007AFF',
      fontWeight: '500',
      marginLeft: 4,
    },
    githubButton: {
      backgroundColor: theme.cardBackground,
      borderWidth: 2,
      borderColor: theme.borderColor,
      borderRadius: 12,
      paddingVertical: 15,
      paddingHorizontal: 20,
      margin: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    githubButtonText: {
      color: theme.textColor,
      fontSize: 16,
      fontWeight: '600',
      marginLeft: 10,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meus Projetos</Text>
        <Text style={styles.subtitle}>
          Explore meus projetos e contribuições no GitHub
        </Text>
      </View>

      <View style={styles.projectsContainer}>
        {projects.map((project, index) => (
          <TouchableOpacity
            key={index}
            style={styles.projectCard}
            onPress={() => handleProjectPress(project.name)}
          >
            <View style={styles.projectHeader}>
              <Ionicons
                name={project.icon}
                size={24}
                color={getTypeColor(project.type)}
                style={styles.projectIcon}
              />
              <Text style={styles.projectName}>{project.name}</Text>
              <View style={[styles.projectType, { backgroundColor: getTypeColor(project.type) }]}>
                <Text style={styles.projectTypeText}>{project.type}</Text>
              </View>
            </View>
            
            <Text style={styles.projectDescription}>{project.description}</Text>
            
            <View style={styles.techContainer}>
              {project.tech.map((tech, techIndex) => (
                <View key={techIndex} style={styles.techTag}>
                  <Text style={styles.techText}>{tech}</Text>
                </View>
              ))}
            </View>
            
            <View style={styles.viewButton}>
              <Ionicons name="logo-github" size={16} color="#007AFF" />
              <Text style={styles.viewButtonText}>Ver no GitHub</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.githubButton} onPress={handleGitHubPress}>
        <Ionicons name="logo-github" size={24} color={theme.textColor} />
        <Text style={styles.githubButtonText}>Ver todos os projetos</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProjectsScreen;

