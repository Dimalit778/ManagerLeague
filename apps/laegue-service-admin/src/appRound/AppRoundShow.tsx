import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { APPROUND_TITLE_FIELD } from "./AppRoundTitle";
import { APPLEAGUE_TITLE_FIELD } from "../appLeague/AppLeagueTitle";

export const AppRoundShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="AppMatch"
          target="appRoundId"
          label="AppMatches"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="AppRound"
              source="appround.id"
              reference="AppRound"
            >
              <TextField source={APPROUND_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="awayScore" source="awayScore" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="homeScore" source="homeScore" />
            <TextField label="ID" source="id" />
            <BooleanField label="isFinished" source="isFinished" />
            <TextField label="matchPoints" source="matchPoints" />
            <TextField label="result" source="result" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Match"
          target="appRoundId"
          label="Matches"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="AppRound"
              source="appround.id"
              reference="AppRound"
            >
              <TextField source={APPROUND_TITLE_FIELD} />
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
