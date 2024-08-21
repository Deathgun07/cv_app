import { useState } from 'react'
import Form from './forms';
import CVPreview from './affichage';

function App() {
  // États pour stocker les valeurs des champs de formulaire
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [experience, setExperience] = useState({
    jobTitle: '',
    company: '',
    startDate: '',
    endDate: '',
    responsibilities: '',
  });

  const [formation, setFormation] = useState({
    diplome: '',
    school: '',
    gradDate: '',
  });

  const [skills, setSkills] = useState('');
  const [languages, setLanguages] = useState('');
  const [hobbies, setHobbies] = useState('');

  //  mettre à jour les états
  const onPersonalInfoChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  const onExperienceChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const onFormationChange = (e) => {
    setFormation({...formation, [e.target.name]: e.target.value})
  };

  const onSkillsChange = (e) => setSkills(e.target.value);
  const onLanguagesChange = (e) => setLanguages(e.target.value);
  const onHobbiesChange = (e) => setHobbies(e.target.value);

  return (
    <div className="App">
      <div className="container mt-4">
        <div className="row justify-content-center w-100">
          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
          <Form
          personalInfo={personalInfo}
          experience={experience}
          formation={formation}
          skills={skills}
          languages={languages}
          hobbies={hobbies}
          onPersonalInfoChange={onPersonalInfoChange}
          onExperienceChange={onExperienceChange}
          onFormationChange={onFormationChange}
          onSkillsChange={onSkillsChange}
          onLanguagesChange={onLanguagesChange}
          onHobbiesChange={onHobbiesChange}
          />
        </div>
        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
          <CVPreview
          personalInfo={personalInfo}
          experience={experience}
          formation={formation}
          skills={skills}
          languages={languages}
          hobbies={hobbies}
          />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;

