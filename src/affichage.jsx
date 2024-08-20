function CVPreview({ personalInfo, experience, formation, skills, languages, hobbies }) {
  return (
    <div>
      <h2>Apercu du CV</h2>
      <div>
        <h3>{personalInfo.name}</h3>
        <p>Email : {personalInfo.email}</p>
        <p>Téléphone : {personalInfo.phone}</p>
        <p>Adresse : {personalInfo.address}</p>
      </div>
      <hr />
      <div>
        <h3>Expérience Professionnelle</h3>
        <p>{experience.jobTitle} chez {experience.company}</p>
        <p>{experience.startDate} - {experience.endDate}</p>
        <p>{experience.responsibilities}</p>
      </div>
      <hr />
      <div>
        <h3>Formation</h3>
        <p>{formation.degree} à {formation.school}</p>
        <p>Date de fin : {formation.gradDate}</p>
      </div>
      <hr />
      <div>
        <h3>Compétences</h3>
        <p>{skills}</p>
      </div>
      <hr />
      <div>
        <h3>Langues</h3>
        <p>{languages}</p>
      </div>
      <hr />
      <div>
        <h3>Loisirs</h3>
        <p>{hobbies}</p>
      </div>
    </div>
  );
}

export default CVPreview;
