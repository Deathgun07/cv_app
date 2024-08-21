function CVPreview({ personalInfo, experience, formation, skills, languages, hobbies }) {
  return (
    <div className="container mt-5">
  <h2 className="text-center text-primary mb-4">Aperçu du CV</h2>
  
  <div className="card shadow-sm mb-4">
    <div className="card-body bg-light rounded">
      <div className="row">
        <div className="col-md-12 text-center mb-4">
          <h3 className="card-title text-secondary">{personalInfo.name}</h3>
          <p className="card-text"><strong>Email :</strong> {personalInfo.email}</p>
          <p className="card-text"><strong>Téléphone :</strong> {personalInfo.phone}</p>
          <p className="card-text"><strong>Adresse :</strong> {personalInfo.address}</p>
        </div>
      </div>
    </div>
  </div>
  
  <div className="card shadow-sm mb-4">
    <div className="card-body bg-light rounded">
      <div className="row">
        <div className="col-md-12">
          <h3 className="card-title text-secondary">Expérience Professionnelle</h3>
          <p className="card-text"><strong>Poste :</strong> {experience.jobTitle} chez {experience.company}</p>
          <p className="card-text"><strong>Période :</strong> {experience.startDate} - {experience.endDate}</p>
          <p className="card-text"><strong>Responsabilités :</strong> {experience.responsibilities}</p>
        </div>
      </div>
    </div>
  </div>
  
  <div className="card shadow-sm mb-4">
    <div className="card-body bg-light rounded">
      <div className="row">
        <div className="col-md-12">
          <h3 className="card-title text-secondary">Formation</h3>
          <p className="card-text"><strong>Diplôme :</strong> {formation.diplome} à {formation.school}</p>
          <p className="card-text"><strong>Date de fin :</strong> {formation.gradDate}</p>
        </div>
      </div>
    </div>
  </div>
  
  <div className="card shadow-sm mb-4">
    <div className="card-body bg-light rounded">
      <div className="row">
        <div className="col-md-12">
          <h3 className="card-title text-secondary">Compétences</h3>
          <p className="card-text">{skills}</p>
        </div>
      </div>
    </div>
  </div>
  
  <div className="card shadow-sm mb-4">
    <div className="card-body bg-light rounded">
      <div className="row">
        <div className="col-md-12">
          <h3 className="card-title text-secondary">Langues</h3>
          <p className="card-text">{languages}</p>
        </div>
      </div>
    </div>
  </div>
  
  <div className="card shadow-sm mb-4">
    <div className="card-body bg-light rounded">
      <div className="row">
        <div className="col-md-12">
          <h3 className="card-title text-secondary">Loisirs</h3>
          <p className="card-text">{hobbies}</p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default CVPreview;
