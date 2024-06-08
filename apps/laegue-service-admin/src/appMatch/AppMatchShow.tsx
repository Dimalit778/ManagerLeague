import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import { APPROUND_TITLE_FIELD } from "../appRound/AppRoundTitle";

export const AppMatchShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
