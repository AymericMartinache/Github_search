//* --- CSS --
import './RepoResults.scss';

//* --- ROUTER --
import { Link } from 'react-router-dom';

//* --- SEMANTIC UI --
import {
  Card,
  CardContent,
  CardDescription,
  CardGroup,
  CardHeader,
  CardMeta,
  Icon,
  Image,
} from 'semantic-ui-react';

//* --- @TYPES --
import IRepo from '../@Types/Repo';

interface ReposResultsProps {
  RepoList: IRepo[];
}

function ReposResults({ RepoList }: ReposResultsProps) {
  // console.log(RepoList);

  return (
    <CardGroup className="card-group-container">
      {RepoList.map((repo) => (
        <Card key={repo.id} color="grey" className="card-item">
          <Image
            className="card-item-img"
            a
            src={repo.owner.avatar_url}
            centered
            as={Link}
            to={`/detail/${repo.owner.login}/${repo.name}`}
          />
          <div className="divider" />
          <CardContent>
            <CardHeader className="card-item-name">
              {repo.owner.login}
            </CardHeader>
            <CardMeta className="card-item-repo">{repo.name}</CardMeta>
            {repo.description ? (
              <CardDescription className="card-item-description">{`${repo.description?.slice(
                0,
                40
              )}...`}</CardDescription>
            ) : (
              `Pas de description...`
            )}
          </CardContent>
          <CardContent extra className="card-item-watcher">
            <Icon name="eye" color="blue" size="large" />
            {`${repo.watchers} watchers`}
          </CardContent>
        </Card>
      ))}
    </CardGroup>
  );
}

export default ReposResults;
// <Card
//   as={Link}
//   to={`/detail/${repo.owner.login}/${repo.name}`}
//   key={repo.id}
//   style={{ wordBreak: 'break-all' }}
//   image={repo.owner.avatar_url}
//   header={repo.name}
//   meta={repo.owner.login}
//   description={`${repo.description?.slice(0, 40)}...`}
//   raised
//   color="orange"
// />
