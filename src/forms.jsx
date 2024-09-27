export function PersonalInfoForm({personalInfo, onPersonalInfoChange, onImageUpload, onClick, showForm}){
  {/* Section: Informations Personnelles */}
  return<>
  <div className="d-flex">
    <h3 className="text-secondary mb-3">Informations Personnelles</h3>
    <button onClick={onClick}>
        {showForm ? '-' : '+'}
    </button>
  </div>
  {showForm && (
  <>
  <div className="mb-3">
      <input
        className="form-control w-75"
        type="file"
        onChange={onImageUpload}
      />
    </div>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Nom :</label>
    <input
      className="form-control w-75"
      type="text"
      id="name"
      name="name"
      value={personalInfo.name}
      onChange={onPersonalInfoChange}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email :</label>
    <input
      className="form-control w-75"
      type="email"
      id="email"
      name="email"
      value={personalInfo.email}
      onChange={onPersonalInfoChange}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="phone" className="form-label">Téléphone :</label>
    <input
      className="form-control w-75"
      type="tel"
      id="phone"
      name="phone"
      value={personalInfo.phone}
      onChange={onPersonalInfoChange}
    />
  </div>
  <div className="mb-4">
    <label htmlFor="address" className="form-label">Adresse :</label>
    <input
      className="form-control w-75"
      type="text"
      id="address"
      name="address"
      value={personalInfo.address}
      onChange={onPersonalInfoChange}
    />
  </div> 
  <div className="mb-4">
    <label htmlFor="poste" className="form-label">Poste occupé ou recherché :</label>
    <input
      className="form-control w-75"
      type="text"
      id="poste"
      name="poste"
      value={personalInfo.poste}
      onChange={onPersonalInfoChange}
    />
  </div>   
  <div className="mb-4">
    <label htmlFor="profil" className="form-label">Description du profil :</label>
    <textarea
      className="form-control w-75"
      id="profil"
      name="profil"
      rows="3"
      value={personalInfo.profil}
      onChange={onPersonalInfoChange}
    ></textarea>
  </div>
  </>
  )}
  </>
}

export function ExperienceForm({newExperience, onExperienceChange, onClick, showForm, addExperiences}){

  return <>
    {/* Section: Expérience Professionnelle */}
  <div className="d-flex">
    <h3 className="text-secondary mb-3">Expérience Professionnelle</h3>
    <button onClick={onClick}>
          {showForm ? '-' : '+'}
    </button>
  </div>
  {showForm && (
  <>
  <div className="mb-3">
    <label htmlFor="jobTitle" className="form-label">Titre du poste :</label>
    <input
      className="form-control w-75"
      type="text"
      id="jobTitle"
      name="jobTitle"
      value={newExperience.jobTitle}
      onChange={onExperienceChange}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="company" className="form-label">Entreprise :</label>
    <input
      className="form-control w-75"
      type="text"
      id="company"
      name="company"
      value={newExperience.company}
      onChange={onExperienceChange}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="startDate" className="form-label">Date de début :</label>
    <input
      className="form-control w-50"
      type="date"
      id="startDate"
      name="startDate"
      value={newExperience.startDate}
      onChange={onExperienceChange}
    />
  </div>
  <div className="mb-4">
    <label htmlFor="endDate" className="form-label">Date de fin :</label>
    <input
      className="form-control w-50"
      type="date"
      id="endDate"
      name="endDate"
      value={newExperience.endDate}
      onChange={onExperienceChange}
    />
  </div>
  <div className="mb-4">
    <label htmlFor="responsibilities" className="form-label">Responsabilités :</label>
    <textarea
      className="form-control w-75"
      id="responsibilities"
      name="responsibilities"
      rows="3"
      value={newExperience.responsibilities}
      onChange={onExperienceChange}
    ></textarea>
    <button onClick={addExperiences}>Ajouter</button>
  </div>
  </>
  )}
  </>
}

export function FormationForm({newFormation, onFormationChange, onClick, showForm, addFormation}){

  return <>
    
  {/* Section: Formation */}
  <div className="d-flex">
    <h3 className="text-secondary mb-3">Formation</h3>
    <button onClick={onClick}>
          {showForm ? '-' : '+'}
    </button>
  </div>
  {showForm && (
  <>
  <div className="mb-3">
    <label htmlFor="diplome" className="form-label">Diplôme :</label>
    <input
      className="form-control w-75"
      type="text"
      id="diplome"
      name="diplome"
      value={newFormation.diplome}
      onChange={onFormationChange}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="school" className="form-label">École :</label>
    <input
      className="form-control w-75"
      type="text"
      id="school"
      name="school"
      value={newFormation.school}
      onChange={onFormationChange}
    />
  </div>
  <div className="mb-4">
    <label htmlFor="gradDate" className="form-label">Date de fin d'études :</label>
    <input
      className="form-control w-50"
      type="date"
      id="gradDate"
      name="gradDate"
      value={newFormation.gradDate}
      onChange={onFormationChange}
    />
  </div>
  <button onClick={addFormation}>Ajouter</button>
  </>
  )}
  </>
}

export function SkillsForm({newSkills, onSkillsChange, onClick, showForm, addSkills}){

  return <>
    
  {/* Section: Compétences */}
  <div className="d-flex">
    <h3 className="text-secondary mb-3">Compétences</h3>
    <button onClick={onClick}>
      {showForm ? '-' : '+'}
    </button>
  </div>
  {showForm && (
  <>
  <div className="mb-4">
    <label htmlFor="skills" className="form-label">Ajoutez une competence :</label>
    <input
    type="text"
    className="form-control w-75"
    id="skills"
    name="skills"
    value={newSkills}
    onChange={onSkillsChange}
    />
    <button onClick={addSkills}>Ajouter</button>
  </div>
  </>
  )}
  </>
}

export function LanguagesForm({newLanguages, onLanguagesChange, onClick, showForm, addLanguages}){

  return <>
    {/* Section: Langues */}
  <div className="d-flex">
    <h3 className="text-secondary mb-3">Langues</h3>
    <button onClick={onClick}>
      {showForm ? '-' : '+'}
    </button>
  </div>
  {showForm && (
  <>
  <div className="mb-4">
    <label htmlFor="languages" className="form-label">Ajoutez une langues :</label>
    <input
    type="text"
    className="form-control w-75"
    id="languages"
    name="languages"
    value={newLanguages}
    onChange={onLanguagesChange}
    />
    <button onClick={addLanguages}>Ajouter</button>
  </div>
  </>
  )}
  </>
}

export function HobbiesForm({newHobbies, onHobbiesChange, onClick, showForm, addHobbies}){

  return <>
  {/* Section: Loisirs */}
  <div className="d-flex">
    <h3 className="text-secondary mb-3">Loisirs</h3>
    <button onClick={onClick}>
      {showForm ? '-' : '+'}
    </button>
  </div>
  {showForm && (
  <>
  <div className="mb-4">
  <label htmlFor="hobbies" className="form-label">Ajoutez un loisir :</label>
    <input
    type="text"
    className="form-control w-75"
    id="hobbies"
    name="hobbies"
    value={newHobbies}
    onChange={onHobbiesChange}
    />
    <button onClick={addHobbies}>Ajouter</button>
  </div>
  </>
  )}
  </>
}
