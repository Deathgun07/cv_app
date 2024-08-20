function Form({ personalInfo, experience, formation, skills, languages, hobbies, onPersonalInfoChange, onExperienceChange, onFormationChange, onSkillsChange, onLanguagesChange, onHobbiesChange }) {
  return (
    <div>
      {/* Section: Informations Personnelles */}
      <h3>Informations Personnelles</h3>
      <div>
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={personalInfo.name}
          onChange={onPersonalInfoChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={personalInfo.email}
          onChange={onPersonalInfoChange}
        />
      </div>
      <div>
        <label htmlFor="phone">Téléphone :</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={personalInfo.phone}
          onChange={onPersonalInfoChange}
        />
      </div>
      <div>
        <label htmlFor="address">Adresse :</label>
        <input
          type="text"
          id="address"
          name="address"
          value={personalInfo.address}
          onChange={onPersonalInfoChange}
        />
      </div>

      {/* Section: Expérience Professionnelle */}
      <h3>Expérience Professionnelle</h3>
      <div>
        <label htmlFor="jobTitle">Titre du poste :</label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={experience.jobTitle}
          onChange={onExperienceChange}
        />
      </div>
      <div>
        <label htmlFor="company">Entreprise :</label>
        <input
          type="text"
          id="company"
          name="company"
          value={experience.company}
          onChange={onExperienceChange}
        />
      </div>
      <div>
        <label htmlFor="startDate">Date de début :</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={experience.startDate}
          onChange={onExperienceChange}
        />
      </div>
      <div>
        <label htmlFor="endDate">Date de fin :</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={experience.endDate}
          onChange={onExperienceChange}
        />
      </div>
      <div>
        <label htmlFor="responsibilities">Responsabilités :</label>
        <textarea
          id="responsibilities"
          name="responsibilities"
          value={experience.responsibilities}
          onChange={onExperienceChange}
        ></textarea>
      </div>

      {/* Section: Formation */}
      <h3>Formation</h3>
      <div>
        <label htmlFor="degree">Diplôme :</label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={formation.degree}
          onChange={onFormationChange}
        />
      </div>
      <div>
        <label htmlFor="school">École :</label>
        <input
          type="text"
          id="school"
          name="school"
          value={formation.school}
          onChange={onFormationChange}
        />
      </div>
      <div>
        <label htmlFor="gradDate">Date de fin d'études :</label>
        <input
          type="date"
          id="gradDate"
          name="gradDate"
          value={formation.gradDate}
          onChange={onFormationChange}
        />
      </div>

      {/* Section: Compétences */}
      <h3>Compétences</h3>
      <div>
        <label htmlFor="skills">Liste de compétences :</label>
        <textarea
          id="skills"
          name="skills"
          value={skills}
          onChange={onSkillsChange}
        ></textarea>
      </div>

      {/* Section: Langues */}
      <h3>Langues</h3>
      <div>
        <label htmlFor="languages">Langues parlées :</label>
        <textarea
          id="languages"
          name="languages"
          value={languages}
          onChange={onLanguagesChange}
        ></textarea>
      </div>

      {/* Section: Loisirs */}
      <h3>Loisirs</h3>
      <div>
        <label htmlFor="hobbies">Liste de loisirs :</label>
        <textarea
          id="hobbies"
          name="hobbies"
          value={hobbies}
          onChange={onHobbiesChange}
        ></textarea>
      </div>

      {/* Bouton pour soumettre le formulaire complet */}
      <div>
        <button type="submit">Créer le CV</button>
      </div>
    </div>
  );
}

export default Form;
