//* --- SEMANTIC UI --
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta,
  Icon,
  Image,
} from 'semantic-ui-react';

//* --- AXIOS --
import axios from 'axios';

//* --- STATES --
import { useCallback, useEffect, useState } from 'react';

//* --- ROUTER --
import { useParams, Navigate, Link } from 'react-router-dom';

//* --- @TYPES --
import IRepo from '../@Types/Repo';

//* --- COMPONENTS --
import Spinner from '../Loader/Loader';

interface FullRepoPorps {
  reposList: IRepo[];
}

function FullRepo({ reposList }: FullRepoPorps) {
  const [isLoading, setIsLoading] = useState(true);
  const [repoToDisplay, setRepoToDisplay] = useState<IRepo | null>(null);
  const [isError, setIsError] = useState(false);

  // on veut les infos du repo dont le owner login et le name sont dans l'url
  const { ownerLogin, repoName } = useParams();

  const fetchDetailOfRepo = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await axios.get(
        `https://api.github.com/repos/${ownerLogin}/${repoName}`
      );
      // console.log('repos trouvé du back', result.data);
      setRepoToDisplay(result.data);
    } catch (error) {
      // console.error('Erreur lors de la récupération des détails du repo');
      setIsError(true);
    }
    setIsLoading(false);
  }, [ownerLogin, repoName]);

  useEffect(() => {
    // on cherche dans le state de App
    const repoFounded = reposList.find(
      (repoData) =>
        repoData.owner.login === ownerLogin && repoData.name === repoName
    );
    if (repoFounded) {
      // console.log('repo trouvé dans le state de App');
      setRepoToDisplay(repoFounded);
      setIsLoading(false);
    } else {
      fetchDetailOfRepo();
    }
  }, [fetchDetailOfRepo, ownerLogin, repoName, reposList]);

  if (isError) {
    return <Navigate to="/error" />;
  }
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <Card
          as={Link}
          to={`${repoToDisplay?.html_url}`}
          target="blank"
          color="orange"
          centered
          raised
        >
          <Image src={repoToDisplay?.owner.avatar_url} size="large" centered />
          <CardContent>
            <CardHeader textAlign="center">{repoToDisplay?.name}</CardHeader>
            <CardMeta>{repoToDisplay?.owner.login}</CardMeta>
            {repoToDisplay?.description ? (
              <CardDescription>{`${repoToDisplay.description}...`}</CardDescription>
            ) : (
              `Pas de description...`
            )}
          </CardContent>
          <CardContent extra>
            {/* <Icon name="star" />
            {repoToDisplay?.score} */}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default FullRepo;
