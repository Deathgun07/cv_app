// ModelSelectionPage.js
import { Link } from 'react-router-dom';

const ModelSelectionPage = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Choisissez un modèle de CV</h2>
      <div className="row">
        <div className="col-md-4">
          <Link to="/cv-view/minimal" className="btn btn-outline-primary w-100 mb-3">
            Modèle Minimal
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/cv-view/classic" className="btn btn-outline-primary w-100 mb-3">
            Modèle Classique
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/cv-view/modern" className="btn btn-outline-primary w-100 mb-3">
            Modèle Moderne
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModelSelectionPage;
