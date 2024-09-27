export function CVPreviewMinimal({url, personalInfo, experiences, formations, skills, languages, hobbies, removeSkill, removeLanguage, removeHobbie }) {
  return (
  <>
    <h2 className="text-center text-primary mb-4">Aperçu du CV</h2>
  <div className="container mt-5 d-flex shadow-sm border">
    <div className="col-md-8">
      <div className="card  mb-4 border-0">
          <div className="card-body ">
            <div className="d-flex flex-column align-items-center">
              <img src={url} alt="" className=" mb-3" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
              <p className="card-text mb-1"><strong>Email :</strong> {personalInfo.email}</p>
              <p className="card-text mb-1"><strong>Téléphone :</strong> {personalInfo.phone}</p>
              <p className="card-text"><strong>Adresse :</strong> {personalInfo.address}</p>
            </div>
          </div>
        </div>

        {/* Compétences */}
      <div className="card  mb-4 border-0">
        <div className="card-body bg-white ">
          <h3 className="card-title text-secondary">Compétences</h3>
          <ul className="list-group">
            {skills.map((skill, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {skill}
                <button id={index} onClick={removeSkill} className="btn btn-sm btn-outline-danger">Supprimer</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Langues */}
      <div className="card  mb-4 border-0">
        <div className="card-body bg-white ">
          <h3 className="card-title text-secondary">Langues</h3>
          <ul className="list-group">
            {languages.map((language, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {language}
                <button id={index} onClick={removeLanguage} className="btn btn-sm btn-outline-danger">Supprimer</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Loisirs */}
      <div className="card  mb-4 border-0">
        <div className="card-body bg-white ">
          <h3 className="card-title text-secondary">Loisirs</h3>
          <ul className="list-group">
            {hobbies.map((hobbie, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {hobbie}
                <button id={index} onClick={removeHobbie} className="btn btn-sm btn-outline-danger">Supprimer</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="col-md-12 bg-info px-4 pt-3">
        <h3 className="card-title text-black mb-5">{personalInfo.name}</h3>
        {/* Expérience Professionnelle */}
      <div className="card  mb-4 mt-5 border-0">
        <div className="card-body bg-white ">
          <h3 className="card-title text-secondary">Expérience Professionnelle</h3>
          {experiences.map((experience, index) => (
            <div className="col-md-12 mb-4" key={index}>
              <p className="card-text"><strong>Poste :</strong> {experience.jobTitle} chez {experience.company}</p>
              <p className="card-text"><strong>Période :</strong> {experience.startDate} - {experience.endDate}</p>
              <p className="card-text"><strong>Responsabilités :</strong> {experience.responsibilities}</p>
              
            </div>
          ))}
        </div>
      </div>
      {/* Formation */}
      <div className="card  mb-4 border-0">
        <div className="card-body bg-white rounded">
          <h3 className="card-title text-secondary">Formation</h3>
          {formations.map((formation, index) => (
            <div className="col-md-12 mb-4" key={index}>
              <p className="card-text"><strong>Diplôme :</strong> {formation.diplome} à {formation.school}</p>
              <p className="card-text"><strong>Date de fin :</strong> {formation.gradDate}</p>
              
            </div>
          ))}
        </div>
      </div>

      
    </div>
      
  </div>
  </>
  );
}


export function CVPreviewClassic({url, personalInfo, experiences, formations, skills, languages, hobbies, removeSkill, removeLanguage, removeHobbie }) {
  return (
    <>
    <h2 className="text-center text-primary mb-4">Aperçu du CV</h2>
    <div className="container mt-5">
      <div className="d-flex">
        <div className="col-md-8 text-white p-4" style={{background:'#0047AB'}}>
          <div className="">
            <div className="text-center mb-3">
            <img
                src={url}
                alt="profile"
                className="img-thumbnail rounded-circle"
              />
            </div>
            <h3 className="text-center mb-3">{personalInfo.name}</h3>
            <p className="text-center">{personalInfo.poste}</p>
            <hr className="mb-3"/>
            <h4 className="my-3">Profil</h4>
            <p style={{ boxSizing: 'border-box', width: "300px"}}>{personalInfo.profil}</p>
            <h4 className="my-3">Contact</h4>
            <div>
              <p className="card-text mb-1"><strong>Email :</strong> {personalInfo.email}</p>
              <p className="card-text mb-1"><strong>Téléphone :</strong> {personalInfo.phone}</p>
              <p className="card-text"><strong>Adresse :</strong> {personalInfo.address}</p>
            </div>
            <h4 className="my-3">Compétences</h4>
            <ul className="">
            {skills.map((skill, index) => (
              <li key={index} className=" d-flex justify-content-between align-items-center">
                {skill}
                <button id={index} onClick={removeSkill} className="btn btn-sm btn-outline-danger">Supprimer</button>
              </li>
            ))}
          </ul>
            <h4 className="my-3">Centres d'Intérêt</h4>
            <ul className="">
              {hobbies.map((hobbie, index) => (
                <li key={index} className=" d-flex justify-content-between align-items-center">
                  {hobbie}
                  <button id={index} onClick={removeHobbie} className="btn btn-sm btn-outline-danger">Supprimer</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-12">
          <div className="bg-white p-3">
            <h3>Expérience professionnelle</h3>
            <hr className="mb-5"/>
            {experiences.map((experience, index) => (
            <div className=" mb-5" key={index}>
              <p className=""><strong>Poste :</strong> {experience.jobTitle} chez {experience.company}</p>
              <p className=""><strong>Période :</strong> {experience.startDate} - {experience.endDate}</p>
              <p className=""><strong>Responsabilités :</strong> {experience.responsibilities}</p>
              
            </div>
          ))}
            <h3 className="mt-5">Formation</h3>
            <hr className="mb-5"/>
            {formations.map((formation, index) => (
            <div className="mb-5" key={index}>
              <p className=""><strong>Diplôme :</strong> {formation.diplome} à {formation.school}</p>
              <p className=""><strong>Date de fin :</strong> {formation.gradDate}</p>
              
            </div>
          ))}

            <h3 className="mt-5">Langues</h3>
            <hr className="mb-5"/>
            <ul className="">
            {languages.map((language, index) => (
              <li key={index} className=" d-flex justify-content-between align-items-center">
                {language}
                <button id={index} onClick={removeLanguage} className="btn btn-sm btn-outline-danger">Supprimer</button>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export function CVPreviewModern({url, personalInfo, experiences, formations, skills, languages, hobbies, removeSkill, removeLanguage, removeHobbie }) {
  return (
    <div className="container mt-5">
      <div className="d-flex">
        <div className="col-md-8 text-white" style={{ backgroundColor: '#f8b400' }}>
          <div className="p-3">
            <div className="text-center mb-3">
              <img
                src={url}
                alt="profile"
                className="rounded-circle"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
            </div>
            <h3 className="text-center mb-3">{personalInfo.nom}</h3>
            <p className="text-center">{personalInfo.poste}</p>
            <hr />
            <h4>Profil</h4>
            <p>{personalInfo.profil}</p>
            <h4>Contact</h4>
            <p>📍 Adresse : {personalInfo.address}</p>
            <p>📞 Téléphone : {personalInfo.phone}</p>
            <p>📧 Email : {personalInfo.email}</p>
            <h4>Compétences</h4>
            <ul className="">
            {skills.map((skill, index) => (
              <li key={index} className=" d-flex justify-content-between align-items-center">
                {skill}
                <button id={index} onClick={removeSkill} className="btn btn-sm btn-outline-danger">Supprimer</button>
              </li>
            ))}
          </ul>
            <h4>Logiciels</h4>
            <p>Excel, PowerPoint, Photoshop</p>
            <h4>Centres d'Intérêts</h4>
            <ul className="">
              {hobbies.map((hobbie, index) => (
                <li key={index} className=" d-flex justify-content-between align-items-center">
                  {hobbie}
                  <button id={index} onClick={removeHobbie} className="btn btn-sm btn-outline-danger">Supprimer</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-12 p-3" style={{ backgroundColor: '#e1e1e1' }}>
          <div>
            <h3>Formation</h3>
            {formations.map((formation, index) => (
            <div className="mb-5" key={index}>
              <p className=""><strong>Diplôme :</strong> {formation.diplome} à {formation.school}</p>
              <p className=""><strong>Date de fin :</strong> {formation.gradDate}</p>
              
            </div>
          ))}
            <h3>Expérience Professionnelle</h3>
            {experiences.map((experience, index) => (
            <div className=" mb-5" key={index}>
              <p className=""><strong>Poste :</strong> {experience.jobTitle} chez {experience.company}</p>
              <p className=""><strong>Période :</strong> {experience.startDate} - {experience.endDate}</p>
              <p className=""><strong>Responsabilités :</strong> {experience.responsibilities}</p>
              
            </div>
          ))}
            {/* Répétez pour chaque expérience */}
            <h3>Langues</h3>
            <ul className="">
            {languages.map((language, index) => (
              <li key={index} className=" d-flex justify-content-between align-items-center">
                {language}
                <button id={index} onClick={removeLanguage} className="btn btn-sm btn-outline-danger">Supprimer</button>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
