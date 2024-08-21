function Form({ image, personalInfo, experience, formation, skills, languages, hobbies, onPersonalInfoChange, onExperienceChange, onFormationChange, onSkillsChange, onLanguagesChange, onHobbiesChange, onImageUpload }) {
  return (
    <div className="container mt-5 p-4 bg-light rounded">
  <h2 className="text-center text-primary mb-4">Création de CV</h2>
  
  {/* Section: Informations Personnelles */}
  <h3 className="text-secondary mb-3">Informations Personnelles</h3>
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

  {/* Section: Expérience Professionnelle */}
  <h3 className="text-secondary mb-3">Expérience Professionnelle</h3>
  <div className="mb-3">
    <label htmlFor="jobTitle" className="form-label">Titre du poste :</label>
    <input
      className="form-control w-75"
      type="text"
      id="jobTitle"
      name="jobTitle"
      value={experience.jobTitle}
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
      value={experience.company}
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
      value={experience.startDate}
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
      value={experience.endDate}
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
      value={experience.responsibilities}
      onChange={onExperienceChange}
    ></textarea>
  </div>

  {/* Section: Formation */}
  <h3 className="text-secondary mb-3">Formation</h3>
  <div className="mb-3">
    <label htmlFor="diplome" className="form-label">Diplôme :</label>
    <input
      className="form-control w-75"
      type="text"
      id="diplome"
      name="diplome"
      value={formation.diplome}
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
      value={formation.school}
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
      value={formation.gradDate}
      onChange={onFormationChange}
    />
  </div>

  {/* Section: Compétences */}
  <h3 className="text-secondary mb-3">Compétences</h3>
  <div className="mb-4">
    <label htmlFor="skills" className="form-label">Liste de compétences :</label>
    <textarea
      className="form-control w-75"
      id="skills"
      name="skills"
      rows="3"
      value={skills}
      onChange={onSkillsChange}
    ></textarea>
  </div>

  {/* Section: Langues */}
  <h3 className="text-secondary mb-3">Langues</h3>
  <div className="mb-4">
    <label htmlFor="languages" className="form-label">Langues parlées :</label>
    <textarea
      className="form-control w-75"
      id="languages"
      name="languages"
      rows="3"
      value={languages}
      onChange={onLanguagesChange}
    ></textarea>
  </div>

  {/* Section: Loisirs */}
  <h3 className="text-secondary mb-3">Loisirs</h3>
  <div className="mb-4">
    <label htmlFor="hobbies" className="form-label">Liste de loisirs :</label>
    <textarea
      className="form-control w-75"
      id="hobbies"
      name="hobbies"
      rows="3"
      value={hobbies}
      onChange={onHobbiesChange}
    ></textarea>
  </div>

  {/* Bouton pour soumettre le formulaire complet */}
  <div className="text-center mt-4">
    <button className="btn btn-primary w-50" type="submit">Créer le CV</button>
  </div>
</div>

  );
}

export default Form;
