import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { PrimayButton } from "./components/atoms/button/PrimayButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";

import { DefaultLayout } from "./components/templates/DefaultLayout";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  const user = {
    image: "https://source.unsplash.com/Mv9hjnEUHR4",
    name: "佐伯",
    email: "1111@gmail.com",
    phone: "090-111-1111",
    company: {
      name: "●●商事"
    },
    website: "http://hogehoge.com"
  };

  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
    // <BrowserRouter>
    //   <DefaultLayout>
    //     <PrimayButton>プライマリボタン</PrimayButton>
    //     <SecondaryButton>セカンダリボタン</SecondaryButton>
    //     <SearchInput />
    //     <UserCard user={user} />
    //   </DefaultLayout>
    // </BrowserRouter>
  );
}
