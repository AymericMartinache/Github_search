//* --- CSS --
import './FAQ.scss';

//* --- SEMANTIC UI --
import { Segment } from 'semantic-ui-react';

function FAQ() {
  return (
    <Segment>
      <div className="FAQ">
        <h1>FAQ</h1>
        <h2>A quoi ça sert ?</h2>
        <p>
          Cette application permet de trouver une liste de dépôts GitHub pour un
          critère donné. 🔎
        </p>
        <h2>Comment faire une recherche ?</h2>
        <p>
          Sur la page recherche, complétez le champ de recherche et valider la
          recherche. ⌨️
        </p>
        <h2>Puis-je chercher n&apos;importe quel terme ?</h2>
        <p>Oui, c&apos;est fou ! 🤪</p>
      </div>
    </Segment>
  );
}

export default FAQ;
