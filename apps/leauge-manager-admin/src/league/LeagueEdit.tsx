import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const LeagueEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="leagueCode" source="leagueCode" />
        <TextInput label="leagueName" source="leagueName" />
        <div />
        <TextInput label="name" source="name" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
