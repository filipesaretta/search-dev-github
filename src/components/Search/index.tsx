import axios from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import { AiOutlineLink, AiOutlineTwitter } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';

import search from '../../assets/search.svg';
import {
  Card,
  CardContainer,
  CardDetails,
  CardLinks,
  CardMain,
  CardUserImage,
  Container,
} from './styles';

interface userProps {
  name: string;
  avatar_url: string;
  bio?: string;
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
    setGetUser('');
  }

  function handleFindUser(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
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
          value={getUser}
        />
        <button type="submit" onClick={handleSearchUser}>
          Search
        </button>
      </Container>

      {user && (
        <CardContainer>
          <CardUserImage>
            <img src={user.avatar_url} alt="Some user from github" />
          </CardUserImage>
          <CardMain>
            <h3>{user?.name}</h3>
            <a href={user.html_url}>@{user?.login}</a>
            <p>{user?.bio ? user?.bio : 'This profile has no bio'}</p>
          </CardMain>
          <Card>
            <CardDetails>
              <div>
                <p>Public Repos </p>
                <p className="card-numbers">{user?.public_repos}</p>
              </div>
              <div>
                <p>Followers</p>
                <p className="card-numbers"> {user?.followers}</p>
              </div>
              <div>
                <p>Following </p>
                <p className="card-numbers">{user?.following}</p>
              </div>
            </CardDetails>
            <CardLinks>
              <p className="location">
                <span>
                  <ImLocation />
                </span>
                {user.location}
              </p>
              <a href={user.html_url} className="main-link">
                <span>
                  <AiOutlineLink />
                </span>
                Site
              </a>
              {user.twitter_username !== null ? (
                <a href={`https://twitter.com/${user.twitter_username}`}>
                  <span>
                    <AiOutlineTwitter />
                  </span>
                  {user.twitter_username}
                </a>
              ) : (
                <p>
                  <span>
                    <AiOutlineTwitter />
                  </span>
                  Not Available
                </p>
              )}
            </CardLinks>
          </Card>
        </CardContainer>
      )}
    </>
  );
}
