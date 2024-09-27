import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Styles du modèle Minimal
const minimalStyles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF'
  },
  leftColumn: {
    backgroundColor: '#FFFFFF',
    width: '40%',
    padding: 20
  },
  rightColumn: {
    backgroundColor: '#30D5C8', // Couleur turquoise
    width: '60%',
    padding: 20
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  header: {
    fontSize: 14,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
  },
  section: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    padding: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 5
  }

});

// Styles du modèle Classique
const classicStyles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#FFFFFF'
    },
    leftSection: {
      backgroundColor: '#0047AB', // Bleu foncé
      color: 'white',
      padding: 20,
      width: '35%'
    },
    rightSection: {
      padding: 20,
      width: '65%'
    },
    title: {
      fontSize: 18,
      marginBottom: 10,
    },
    subTitle: {
      fontSize: 14,
      marginBottom: 5,
    },
    text: {
      fontSize: 12,
      marginBottom: 5,
    },
    image: {
      width: 120,
      height: 120,
      borderRadius: 60,
      alignSelf: 'center',
      marginVertical: 20,
    },
});

// Styles du modèle Moderne
const modernStyles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  leftSection: {
    backgroundColor: '#F8B400', // Orange
    color: 'white',
    padding: 20,
    width: '30%'
  },
  rightSection: {
    padding: 20,
    width: '70%',
    backgroundColor: '#F0F0F0', // Gris clair
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 14,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginVertical: 20,
  },
});

// Composant PDF pour le modèle Minimal
export const CVPDFMinimal = ({ personalInfo, experiences, formations, skills, languages, hobbies, image }) => (
  <Document>
    <Page size="A4" style={minimalStyles.page}>
      <View style={minimalStyles.leftColumn}>
      {image && <Image src={image} style={minimalStyles.image}/>}
        <Text style={minimalStyles.header}>Email: {personalInfo.email}</Text>
        <Text style={minimalStyles.header}>Téléphone: {personalInfo.phone}</Text>
        <Text style={minimalStyles.header}>Adresse: {personalInfo.address}</Text>
        <Text style={minimalStyles.header}>Compétences</Text>
        {/* Liste des Competences */}
        {skills.map((skill, index) => (
          <View key={index}>
            <Text style={minimalStyles.text}>{skill}</Text>
          </View>
        ))}
        <Text style={minimalStyles.header}>Langues</Text>
        {/* Liste des langues */}
        {languages.map((langues, index) => (
          <View key={index}>
            <Text style={minimalStyles.text}>{langues}</Text>
          </View>
        ))}
        <Text style={minimalStyles.header}>Loisirs</Text>
        {/* Liste des Centre d'interêt */}
        {hobbies.map((skill, index) => (
          <View key={index}>
            <Text style={minimalStyles.text}>{skill}</Text>
          </View>
        ))}
      </View>
      <View style={minimalStyles.rightColumn}>
        <Text style={minimalStyles.section}>Expérience Professionnelle</Text>
        {/* Liste des expériences professionnelles */}
        {experiences.map((exp, index) => (
          <View key={index}>
            <Text style={minimalStyles.subTitle}>{exp.jobTitle} - {exp.company}</Text>
            <Text style={minimalStyles.text}>{exp.startDate} - {exp.endDate}</Text>
            <Text style={minimalStyles.text}>Responsabilités: {exp.responsibilities}</Text>
          </View>
        ))}
        <Text style={minimalStyles.section}>Formation</Text>
        {/* Liste des formations */}
        {formations.map((form, index) => (
          <View key={index}>
            <Text style={minimalStyles.subTitle}>{form.diplome} - {form.school}</Text>
            <Text style={minimalStyles.text}>Date de Graduation: {form.gradDate}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

// Composant PDF pour le modèle Classique
export const CVPDFClassic = ({ personalInfo, experiences, formations, skills, languages, hobbies, image }) => (
  <Document>
    <Page size="A4" style={classicStyles.page}>
      <View style={classicStyles.leftSection}>
        {image && <Image src={image} style={classicStyles.image}/>}
        <Text style={classicStyles.title}>Profil</Text>
        <Text style={classicStyles.text}>{personalInfo.Profil}</Text>
        <Text style={classicStyles.title}>Contact</Text>
        <Text style={classicStyles.text}>Email: {personalInfo.email}</Text>
        <Text style={classicStyles.text}>Téléphone: {personalInfo.phone}</Text>
        <Text style={classicStyles.text}>Adresse: {personalInfo.address}</Text>

        <Text style={classicStyles.title}>Competences</Text>
        {/* Liste des Competences */}
        {skills.map((skill, index) => (
          <View key={index}>
            <Text style={classicStyles.text}>{skill}</Text>
          </View>
        ))}

        <Text style={classicStyles.title}>Centre d&aposinterêt</Text>
        {/* Liste des Centre d'interêt */}
        {hobbies.map((skill, index) => (
          <View key={index}>
            <Text style={classicStyles.text}>{skill}</Text>
          </View>
        ))}
      </View>
      <View style={classicStyles.rightSection}>
      <Text style={classicStyles.title}>Expérience Professionnelle</Text>
        {/* Liste des expériences professionnelles */}
        {experiences.map((exp, index) => (
          <View key={index}>
            <Text style={classicStyles.subTitle}>{exp.jobTitle} - {exp.company}</Text>
            <Text style={classicStyles.text}>{exp.startDate} - {exp.endDate}</Text>
            <Text style={classicStyles.text}>Responsabilités: {exp.responsibilities}</Text>
          </View>
        ))}

        <Text style={classicStyles.title}>Formation</Text>
        {/* Liste des formations */}
        {formations.map((form, index) => (
          <View key={index}>
            <Text style={classicStyles.subTitle}>{form.diplome} - {form.school}</Text>
            <Text style={classicStyles.text}>Date de Graduation: {form.gradDate}</Text>
          </View>
        ))}

        <Text style={classicStyles.title}>Langues</Text>
        {/* Liste des langues */}
        {languages.map((langues, index) => (
          <View key={index}>
            <Text style={classicStyles.text}>{langues}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

// Composant PDF pour le modèle Moderne
export const CVPDFModern = ({ personalInfo, experiences, formations, skills, languages, hobbies, image }) => (
  <Document>
    <Page size="A4" style={modernStyles.page}>
      <View style={modernStyles.leftSection}>
        <Image src="path_to_image.jpg" style={modernStyles.image}/>
        <Text style={modernStyles.title}>Profil</Text>
        <Text style={modernStyles.text}>Description du profil ici...</Text>
        <Text style={modernStyles.title}>Contact</Text>
        <Text style={modernStyles.text}>Téléphone: 06 06 06 06 06</Text>
        <Text style={modernStyles.text}>Email: prenom.nom@gmail.com</Text>
      </View>
      <View style={modernStyles.rightSection}>
        <Text style={modernStyles.title}>Expérience Professionnelle</Text>
        {/* Liste des expériences professionnelles */}
        <Text style={modernStyles.subTitle}>Nom de l'entreprise</Text>
        <Text style={modernStyles.text}>Poste occupé, Ville</Text>
        <Text style={modernStyles.text}>Description des tâches...</Text>
      </View>
    </Page>
  </Document>
);
