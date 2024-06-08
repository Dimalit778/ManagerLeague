import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { LeagueList } from "./league/LeagueList";
import { LeagueCreate } from "./league/LeagueCreate";
import { LeagueEdit } from "./league/LeagueEdit";
import { LeagueShow } from "./league/LeagueShow";
import { RoundList } from "./round/RoundList";
import { RoundCreate } from "./round/RoundCreate";
import { RoundEdit } from "./round/RoundEdit";
import { RoundShow } from "./round/RoundShow";
import { MatchList } from "./match/MatchList";
import { MatchCreate } from "./match/MatchCreate";
import { MatchEdit } from "./match/MatchEdit";
import { MatchShow } from "./match/MatchShow";
import { AppUserList } from "./appUser/AppUserList";
import { AppUserCreate } from "./appUser/AppUserCreate";
import { AppUserEdit } from "./appUser/AppUserEdit";
import { AppUserShow } from "./appUser/AppUserShow";
import { AppLeagueList } from "./appLeague/AppLeagueList";
import { AppLeagueCreate } from "./appLeague/AppLeagueCreate";
import { AppLeagueEdit } from "./appLeague/AppLeagueEdit";
import { AppLeagueShow } from "./appLeague/AppLeagueShow";
import { AppMatchList } from "./appMatch/AppMatchList";
import { AppMatchCreate } from "./appMatch/AppMatchCreate";
import { AppMatchEdit } from "./appMatch/AppMatchEdit";
import { AppMatchShow } from "./appMatch/AppMatchShow";
import { AppRoundList } from "./appRound/AppRoundList";
import { AppRoundCreate } from "./appRound/AppRoundCreate";
import { AppRoundEdit } from "./appRound/AppRoundEdit";
import { AppRoundShow } from "./appRound/AppRoundShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"laegue service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="League"
          list={LeagueList}
          edit={LeagueEdit}
          create={LeagueCreate}
          show={LeagueShow}
        />
        <Resource
          name="Round"
          list={RoundList}
          edit={RoundEdit}
          create={RoundCreate}
          show={RoundShow}
        />
        <Resource
          name="Match"
          list={MatchList}
          edit={MatchEdit}
          create={MatchCreate}
          show={MatchShow}
        />
        <Resource
          name="AppUser"
          list={AppUserList}
          edit={AppUserEdit}
          create={AppUserCreate}
          show={AppUserShow}
        />
        <Resource
          name="AppLeague"
          list={AppLeagueList}
          edit={AppLeagueEdit}
          create={AppLeagueCreate}
          show={AppLeagueShow}
        />
        <Resource
          name="AppMatch"
          list={AppMatchList}
          edit={AppMatchEdit}
          create={AppMatchCreate}
          show={AppMatchShow}
        />
        <Resource
          name="AppRound"
          list={AppRoundList}
          edit={AppRoundEdit}
          create={AppRoundCreate}
          show={AppRoundShow}
        />
      </Admin>
    </div>
  );
};

export default App;
