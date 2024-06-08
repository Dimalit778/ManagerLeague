import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const LeagueShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="leagueCode" source="leagueCode" />
        <TextField label="leagueName" source="leagueName" />
        <TextField label="members" source="members" />
        <TextField label="name" source="name" />
        <TextField label="rounds" source="rounds" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
