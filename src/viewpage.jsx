// CVBuilderPage.js
import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useParams } from 'react-router-dom';
import { PersonalInfoForm, ExperienceForm, FormationForm, SkillsForm, LanguagesForm, HobbiesForm } from './forms';
import {CVPreviewMinimal, CVPreviewClassic, CVPreviewModern} from './affichage';
import { CVPDFMinimal, CVPDFClassic, CVPDFModern } from './cvpdf'

const CVBuilderPage = () => {
  const { model } = useParams(); // Récupérer le modèle depuis l'URL
  // Initialiser l'état pour l'affichage du formulaire
  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [showForm3, setShowForm3] = useState(false);
  const [showForm4, setShowForm4] = useState(false);
  const [showForm5, setShowForm5] = useState(false);
  const [showForm6, setShowForm6] = useState(false);
  // Fonction pour changer l'état lors du clic sur le bouton
  const showButtonClick1 = () => {
    setShowForm1(!showForm1);
  };
  const showButtonClick2 = () => {
    setShowForm2(!showForm2);
  };
  const showButtonClick3 = () => {
    setShowForm3(!showForm3);
  };
  const showButtonClick4 = () => {
    setShowForm4(!showForm4);
  };
  const showButtonClick5 = () => {
    setShowForm5(!showForm5);
  };
  const showButtonClick6 = () => {
    setShowForm6(!showForm6);
  };
  // États pour stocker les valeurs des champs de formulaire
  const [personalInfo, setPersonalInfo] = useState({ name: '', email: '', phone: '', address: '', poste:'', profil:'' });
  const [experiences, setExperiences] = useState([]);
  const [newExperience, setNewExperience] = useState({ jobTitle: '', company: '', startDate: '', endDate: '', responsibilities: '' });
  const [formations, setFormations] = useState([]);
  const [newFormation, setNewFormation] = useState({ diplome: '', school: '', gradDate: '' });
  const [skills, setSkills] = useState([]);
  const [newSkills, setNewSkills] = useState('');
  const [languages, setLanguages] = useState([]);
  const [newLanguages, setNewLanguages] = useState('');
  const [hobbies, setHobbies] = useState([]);
  const [newHobbies, setNewHobbies] = useState('');
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  // Fonctions pour gérer les changements de formulaire et l'ajout d'éléments
  const onPersonalInfoChange = (e) => setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  const onExperienceChange = (e) => setNewExperience({ ...newExperience, [e.target.name]: e.target.value });
  const addExperience = () => {
    if (newExperience.company && newExperience.endDate && newExperience.jobTitle && newExperience.responsibilities && newExperience.startDate) {
      setExperiences([...experiences, newExperience]);
      setNewExperience({ company: '', endDate: '', jobTitle: '', responsibilities: '', startDate: '' });
    }
  };
  const onFormationChange = (e) => setNewFormation({ ...newFormation, [e.target.name]: e.target.value });
  const addFormation = () => {
    if (newFormation.diplome && newFormation.gradDate && newFormation.school) {
      setFormations([...formations, newFormation]);
      setNewFormation({ diplome: '', gradDate: '', school: '' });
    }
  };
  const addSkills = () => {
    if (newSkills) {
      setSkills([...skills, newSkills]);
      setNewSkills('');
    }
  };
  const addLanguages = () => {
    if (newLanguages) {
      setLanguages([...languages, newLanguages]);
      setNewLanguages('');
    }
  };
  const addHobbies = () => {
    if (newHobbies) {
      setHobbies([...hobbies, newHobbies]);
      setNewHobbies('');
    }
  };
  const removeSkill = (index) => setSkills(skills.filter((skill) => skill !== skills[index]));
  const removeLanguage = (index) => setLanguages(languages.filter((language) => language !== languages[index]));
  const removeHobbie = (index) => setHobbies(hobbies.filter((hobbie) => hobbie !== hobbies[index]));
  const onSkillsChange = (e) => setNewSkills(e.target.value);
  const onLanguagesChange = (e) => setNewLanguages(e.target.value);
  const onHobbiesChange = (e) => setNewHobbies(e.target.value);
  const onImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setUrl(URL.createObjectURL(file));
    }
  };

  // Sélectionnez le composant de prévisualisation basé sur le modèle
  let CVPreviewComponent;
  switch (model) {
    case 'minimal':
      CVPreviewComponent = CVPreviewMinimal;
      break;
    case 'classic':
      CVPreviewComponent = CVPreviewClassic;
      break;
    case 'modern':
      CVPreviewComponent = CVPreviewModern;
      break;
    default:
      CVPreviewComponent = CVPreviewMinimal; // Valeur par défaut si le modèle n'est pas trouvé
  }
  const renderPDFComponent = () => {
    switch (model) {
      case 'minimal':
        return <CVPDFMinimal {...{ personalInfo, experiences, formations, skills, languages, hobbies, image }} />;
      case 'classic':
        return <CVPDFClassic {...{ personalInfo, experiences, formations, skills, languages, hobbies, image }} />;
      case 'modern':
        return <CVPDFModern {...{ personalInfo, experiences, formations, skills, languages, hobbies, image }} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div className="container mt-4">
        <div className="row w-100">
          <div className="col-md-10 col-lg-4 col-xl-5 order-2 order-lg-1">
            <div className="container mt-5 p-4 bg-light rounded">
              <h2 className="text-center text-primary mb-4">Création de CV</h2>
              <PersonalInfoForm 
                personalInfo={personalInfo}
                onPersonalInfoChange={onPersonalInfoChange}
                onImageUpload={onImageUpload}
                onClick={showButtonClick1}
                showForm={showForm1}
              />
              <ExperienceForm 
                newExperience={newExperience}
                onExperienceChange={onExperienceChange}
                onClick={showButtonClick2}
                showForm={showForm2}
                addExperiences={addExperience}
              />
              <FormationForm 
                newFormation={newFormation}
                onFormationChange={onFormationChange}
                onClick={showButtonClick3}
                showForm={showForm3}
                addFormation={addFormation}
              />
              <SkillsForm 
                newSkills={newSkills}
                onSkillsChange={onSkillsChange}
                onClick={showButtonClick4}
                showForm={showForm4}
                addSkills={addSkills}
              />
              <LanguagesForm 
                newLanguages={newLanguages}
                onLanguagesChange={onLanguagesChange}
                onClick={showButtonClick5}
                showForm={showForm5}
                addLanguages={addLanguages}
              />
              <HobbiesForm 
                newHobbies={newHobbies}
                onHobbiesChange={onHobbiesChange}
                onClick={showButtonClick6}
                showForm={showForm6}
                addHobbies={addHobbies}
              />
              <div className="text-center mt-4">
                <PDFDownloadLink
                  document={renderPDFComponent()}
                  fileName="cv.pdf"
                  className="btn btn-success"
                >
                  {({ loading }) => (loading ? 'Génération en cours...' : 'Télécharger en PDF')}
                </PDFDownloadLink>
              </div>
            </div>
          </div>
          <div className="col-md-10 col-lg-8 col-xl-5 order-2 order-lg-1">
            <CVPreviewComponent
              url={url}
              personalInfo={personalInfo}
              experiences={experiences}
              formations={formations}
              skills={skills}
              languages={languages}
              hobbies={hobbies}
              removeSkill={(e) => removeSkill(e.target.id)}
              removeLanguage={(e) => removeLanguage(e.target.id)}
              removeHobbie={(e) => removeHobbie(e.target.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVBuilderPage;
