import styled from "styled-components";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../../providers/UserProvider";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

const users = [...Array(10).keys()].map((i) => {
  return {
    id: i,
    image: "https://source.unsplash.com/Mv9hjnEUHR4",
    name: `佐伯${i}`,
    email: "1111@gmail.com",
    phone: "090-111-1111",
    company: {
      name: "●●商事"
    },
    website: "http://hogehoge.com"
  };
});

export const Users = () => {
  const { state } = useLocation();
  const isAdmin = state ? state.isAdmin : false;

  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const onClickSwitch = () => {
    if (userInfo) {
      setUserInfo({ isAdmin: !userInfo.isAdmin });
    }
  };

  return (
    <SContainer>
      <h2>Usersページです</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard isAdmin={isAdmin} user={user} key={user.id} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
