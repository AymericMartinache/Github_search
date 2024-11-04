//* --- CSS --
import './App.scss';

//* --- AXIOS --
import axios from 'axios';

//* --- STATES --
import { useState, useEffect } from 'react';

//* --- ROUTER --
import { Routes, Route } from 'react-router-dom';

//* ---SEMANTIC UI
import { Image } from 'semantic-ui-react';

//* --- @TYPES --
import IRepo from '../@Types/Repo';

//* --- COMPONENTS --
import Logo from '../../assets/images/logo-github-v2.png';
import Spinner from '../Loader/Loader';
import SearchBar from '../SearchBar/SearchBar';
import NavMenu from '../NavMenu/NavMenu';
import Message from '../Message/Message';
import ReposResults from '../ReposResults/ReposResults';
import MoreResultsButton from '../MoreResultButton/MoreResultButton';
import RepoDetail from '../RepoDetail/RepoDetail';
import FAQ from '../FAQ/FAQ';
import Page404 from '../Page 404/Page404';

function App() {
    //* --- STATES --
    // --- State 1 ---
    const [reposList, setRepoList] = useState<IRepo[]>([]);

    // --- State 2 --
    // le message, au debut un message initial, si la recherche marche : le nombre de resultat, si la recherche echoue : un message d'erreur
    const [message, setMessage] = useState(
        'Veuillez utiliser le champ de recherche...'
    );

    // --- State 3 --
    // l'etat de loading
    const [isLoading, setIsLoading] = useState(false);

    // --- State 4 --
    // le nombre de resultats total de la recherche en cours
    const [totalCount, setTotalCount] = useState(0);

    // --- State 5 --
    // le numéro de la page à charger
    const [page, setPage] = useState(1);

    // --- State 6 ---
    // l'input de la recherche
    const [inputSearchValue, setInputSearchValue] = useState('');

    //* --- FETCH API --
    // fetch la liste des repo
    const fetchAllRepo = async () => {
        if (inputSearchValue) {
            setIsLoading(true);

            try {
                const result = await axios.get(
                    `https://api.github.com/search/repositories?q=${inputSearchValue}&sort=stars&order=desc&page=${page}&per_page=10`
                );
                // on enregistre le nombre de resulmtats total de la recherche
                setTotalCount(result.data.total_count);

                setRepoList(
                    // si la page=1, on affiche les résultats, sinon on affiche la liste existante et on ajoute les résultats suivants
                    page === 1
                        ? result.data.items
                        : [...reposList, ...result.data.items]
                );

                // on enregistre un message avec le total count dans le state message
                setMessage(
                    `La recherche a donnée ${result.data.total_count} résultats. - Page ${page}`
                );
            } catch (error) {
                // console.log(error);

                // enregistrer dans le state un message d'erreur
                setMessage("Erreur survenue lors de l'appel API");

                // vider les repos de la recherche d'avant
                setRepoList([]);
            }
            setIsLoading(false);
        }
    };

    // nouvelle recherche
    const goToNewSearch = (newValue: string) => {
        // console.log('on change de searchstring');
        setPage(1);
        setInputSearchValue(newValue);
    };

    // aller à la page suivante
    const gotToNextPage = () => {
        setIsLoading(true);
        setPage(page + 1);
        setIsLoading(false);
    };

    //* --- USE EFFECT --
    useEffect(() => {
        // on va pas fetch tout de suite les données, on va programmer un fetch pour dans 1 seconde
        // si jamais l'effet est re declancher avant la fin du timer on l'annule et on en planifie un autre
        // console.log('mise en place du timer');
        const idTimeout = setTimeout(fetchAllRepo, 1000);

        // on prépare une fonction de nettoyage de l'effet et on va la return
        // la fonction qu'on return va etre automatiquement executée par react avant de jouer un nouvel effect
        const cleaningEffectFunction = () => {
            // supprimer le timer
            // console.log('supression du timer');
            clearTimeout(idTimeout);
        };
        return cleaningEffectFunction;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputSearchValue, page]);

    //* --- RETURN --
    return (
        <div className="App">
            <Image centered src={Logo} size="large" />

            <NavMenu />

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <SearchBar
                                goToNewSearch={goToNewSearch}
                                inputSearchValue={inputSearchValue}
                            />
                            <Message message={message} />
                            {isLoading && <Spinner />}
                            <ReposResults RepoList={reposList} />
                            {totalCount > reposList.length && (
                                <MoreResultsButton
                                    gotToNextPage={gotToNextPage}
                                />
                            )}
                        </>
                    }
                />

                <Route
                    path="/detail/:ownerLogin/:repoName"
                    element={
                        <>
                            {isLoading && <Spinner />}
                            <RepoDetail reposList={reposList} />
                        </>
                    }
                />

                <Route path="/FAQ" element={<FAQ />} />

                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default App;
