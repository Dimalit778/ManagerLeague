import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LeagueCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="leagueCode" source="leagueCode" />
        <TextInput label="leagueName" source="leagueName" />
        <div />
        <TextInput label="name" source="name" />
        <div />
      </SimpleForm>
    </Create>
  );
};
