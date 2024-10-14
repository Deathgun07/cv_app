import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faUpload } from '@fortawesome/free-solid-svg-icons';

export function PersonalInfoForm({ personalInfo, onPersonalInfoChange, onImageUpload, onClick, showForm }) {
  return (
    <div className="card mb-4">
      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h3 className="mb-0">Informations Personnelles</h3>
        <button className="btn btn-light btn-sm" onClick={onClick}>
          <FontAwesomeIcon icon={showForm ? faMinus : faPlus} />
        </button>
      </div>
      {showForm && (
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="image-upload" className="form-label">
              <FontAwesomeIcon icon={faUpload} className="me-2" />
              Télécharger une image
            </label>
            <input
              className="form-control"
              type="file"
              id="image-upload"
              onChange={onImageUpload}
            />
          </div>
          {['name', 'email', 'phone', 'address', 'poste'].map((field) => (
            <div className="mb-3" key={field}>
              <label htmlFor={field} className="form-label">
                {field.charAt(0).toUpperCase() + field.slice(1)} :
              </label>
              <input
                className="form-control"
                type={field === 'email' ? 'email' : 'text'}
                id={field}
                name={field}
                value={personalInfo[field]}
                onChange={onPersonalInfoChange}
              />
            </div>
          ))}
          <div className="mb-3">
            <label htmlFor="profil" className="form-label">Description du profil :</label>
            <textarea
              className="form-control"
              id="profil"
              name="profil"
              rows="3"
              value={personalInfo.profil}
              onChange={onPersonalInfoChange}
            ></textarea>
          </div>
        </div>
      )}
    </div>
  );
}

export function ExperienceForm({ newExperience, onExperienceChange, onClick, showForm, addExperiences }) {
  return (
    <div className="card mb-4">
      <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
        <h3 className="mb-0">Expérience Professionnelle</h3>
        <button className="btn btn-light btn-sm" onClick={onClick}>
          <FontAwesomeIcon icon={showForm ? faMinus : faPlus} />
        </button>
      </div>
      {showForm && (
        <div className="card-body">
          {['jobTitle', 'company'].map((field) => (
            <div className="mb-3" key={field}>
              <label htmlFor={field} className="form-label">
                {field === 'jobTitle' ? 'Titre du poste' : 'Entreprise'} :
              </label>
              <input
                className="form-control"
                type="text"
                id={field}
                name={field}
                value={newExperience[field]}
                onChange={onExperienceChange}
              />
            </div>
          ))}
          <div className="row">
            {['startDate', 'endDate'].map((field) => (
              <div className="col-md-6 mb-3" key={field}>
                <label htmlFor={field} className="form-label">
                  {field === 'startDate' ? 'Date de début' : 'Date de fin'} :
                </label>
                <input
                  className="form-control"
                  type="date"
                  id={field}
                  name={field}
                  value={newExperience[field]}
                  onChange={onExperienceChange}
                />
              </div>
            ))}
          </div>
          <div className="mb-3">
            <label htmlFor="responsibilities" className="form-label">Responsabilités :</label>
            <textarea
              className="form-control"
              id="responsibilities"
              name="responsibilities"
              rows="3"
              value={newExperience.responsibilities}
              onChange={onExperienceChange}
            ></textarea>
          </div>
          <button className="btn btn-primary" onClick={addExperiences}>Ajouter</button>
        </div>
      )}
    </div>
  );
}

export function FormationForm({ newFormation, onFormationChange, onClick, showForm, addFormation }) {
  return (
    <div className="card mb-4">
      <div className="card-header bg-info text-white d-flex justify-content-between align-items-center">
        <h3 className="mb-0">Formation</h3>
        <button className="btn btn-light btn-sm" onClick={onClick}>
          <FontAwesomeIcon icon={showForm ? faMinus : faPlus} />
        </button>
      </div>
      {showForm && (
        <div className="card-body">
          {['diplome', 'school'].map((field) => (
            <div className="mb-3" key={field}>
              <label htmlFor={field} className="form-label">
                {field === 'diplome' ? 'Diplôme' : 'École'} :
              </label>
              <input
                className="form-control"
                type="text"
                id={field}
                name={field}
                value={newFormation[field]}
                onChange={onFormationChange}
              />
            </div>
          ))}
          <div className="mb-3">
            <label htmlFor="gradDate" className="form-label">Date de fin d'études :</label>
            <input
              className="form-control"
              type="date"
              id="gradDate"
              name="gradDate"
              value={newFormation.gradDate}
              onChange={onFormationChange}
            />
          </div>
          <button className="btn btn-primary" onClick={addFormation}>Ajouter</button>
        </div>
      )}
    </div>
  );
}

export function SkillsForm({ newSkills, onSkillsChange, onClick, showForm, addSkills }) {
  return (
    <div className="card mb-4">
      <div className="card-header bg-warning text-dark d-flex justify-content-between align-items-center">
        <h3 className="mb-0">Compétences</h3>
        <button className="btn btn-light btn-sm" onClick={onClick}>
          <FontAwesomeIcon icon={showForm ? faMinus : faPlus} />
        </button>
      </div>
      {showForm && (
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="skills" className="form-label">Ajoutez une compétence :</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="skills"
                name="skills"
                value={newSkills}
                onChange={onSkillsChange}
              />
              <button className="btn btn-primary" onClick={addSkills}>Ajouter</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function LanguagesForm({ newLanguages, onLanguagesChange, onClick, showForm, addLanguages }) {
  return (
    <div className="card mb-4">
      <div className="card-header bg-danger text-white d-flex justify-content-between align-items-center">
        <h3 className="mb-0">Langues</h3>
        <button className="btn btn-light btn-sm" onClick={onClick}>
          <FontAwesomeIcon icon={showForm ? faMinus : faPlus} />
        </button>
      </div>
      {showForm && (
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="languages" className="form-label">Ajoutez une langue :</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="languages"
                name="languages"
                value={newLanguages}
                onChange={onLanguagesChange}
              />
              <button className="btn btn-primary" onClick={addLanguages}>Ajouter</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function HobbiesForm({ newHobbies, onHobbiesChange, onClick, showForm, addHobbies }) {
  return (
    <div className="card mb-4">
      <div className="card-header bg-secondary text-white d-flex justify-content-between align-items-center">
        <h3 className="mb-0">Loisirs</h3>
        <button className="btn btn-light btn-sm" onClick={onClick}>
          <FontAwesomeIcon icon={showForm ? faMinus : faPlus} />
        </button>
      </div>
      {showForm && (
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="hobbies" className="form-label">Ajoutez un loisir :</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="hobbies"
                name="hobbies"
                value={newHobbies}
                onChange={onHobbiesChange}
              />
              <button className="btn btn-primary" onClick={addHobbies}>Ajouter</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
