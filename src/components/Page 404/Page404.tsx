//* --- CSS --
import { Link } from 'react-router-dom';
import './Page404.scss';

//* --- SEMANTIC UI --
import { Segment, Image } from 'semantic-ui-react';

function Page404() {
  return (
    <Segment textAlign="center">
      <div className="page404">
        <h1>
          <span className="emoji">🤖</span> Oops, cette page n&apos;existe pas !{' '}
          <span className="emoji">🤖</span>
        </h1>
        <p>
          La page que vous recherchez est introuvable. Peut-être a-t-elle été
          supprimée ou déplacée <span className="emoji">🗺️</span>.
        </p>
        <p>
          Vous pouvez{' '}
          <Link to="/Home">retourner à la page d&apos;accueil </Link>
          ou rechercher un autre dépôt.<span className="emoji">😢</span>
        </p>
        <Image src="src/assets/images/404.jpeg" size="big" bordered centered />
      </div>
    </Segment>
  );
}
export default Page404;
