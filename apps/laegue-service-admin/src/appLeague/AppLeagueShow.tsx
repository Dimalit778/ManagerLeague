import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { APPLEAGUE_TITLE_FIELD } from "./AppLeagueTitle";

export const AppLeagueShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="isSelected" source="isSelected" />
        <TextField label="joinCode" source="joinCode" />
        <TextField label="leagueCode" source="leagueCode" />
        <TextField label="leagueName" source="leagueName" />
        <TextField label="members" source="members" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AppRound"
          target="appLeagueId"
          label="AppRounds"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="AppLeague"
              source="appleague.id"
              reference="AppLeague"
            >
              <TextField source={APPLEAGUE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="isFinished" source="isFinished" />
            <TextField label="roundNumber" source="roundNumber" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Round"
          target="appLeagueId"
          label="Rounds"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="AppLeague"
              source="appleague.id"
              reference="AppLeague"
            >
              <TextField source={APPLEAGUE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
