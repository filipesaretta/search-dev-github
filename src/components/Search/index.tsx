import axios from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import search from '../../assets/search.svg';
import { Card, CardDetails, Container } from './styles';

interface userProps {
  name: string;
  avatar_url: string;
  bio?: string;
  created_at: string;
  email?: string;
  following: number;
  gravatar_id: string;
  hireable: true;
  html_url: string;
  id: number;
  location?: string;
  login?: string;
  public_repos?: number;
  repos_url?: string;
  twitter_username?: string;
  followers?: string;
}

export function Search() {
  const [user, setUser] = useState<userProps | null>(null);
  const [getUser, setGetUser] = useState('');
  const [searchUser, setSearchUser] = useState('');

  useEffect(() => {
    if (searchUser) {
      axios
        .get(`https://api.github.com/users/${searchUser}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [searchUser]);

  function handleSearchUser() {
    setSearchUser(getUser);
  }

  function handleFindUser(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target as HTMLInputElement;
    setGetUser(value);
  }

  return (
    <>
      <Container>
        <img src={search} alt="search icon" />
        <input
          name="user"
          id="userSearch"
          type="text"
          placeholder="Search a GitHub username..."
          onChange={handleFindUser}
        />
        <button type="submit" onClick={handleSearchUser}>
          Search
        </button>
      </Container>

      {user && (
        <Card>
          <h3>{user?.name}</h3>
          <p>{user?.login}</p>
          <p>{user?.bio ? user?.bio : 'This profile has no bio'}</p>
          <CardDetails>
            <div>
              <p>Public Repos </p>
              <p>{user?.public_repos}</p>
            </div>
            <div>
              <p>Followers</p> <p> {user?.followers}</p>
            </div>
            <div>
              <p>Following </p> <p>{user?.following}</p>
            </div>
          </CardDetails>
        </Card>
      )}
    </>
  );
}
