import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { AppRoundTitle } from "../appRound/AppRoundTitle";

export const AppMatchCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="appRound.id"
          reference="AppRound"
          label="AppRound"
        >
          <SelectInput optionText={AppRoundTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="awayScore" source="awayScore" />
        <NumberInput step={1} label="homeScore" source="homeScore" />
        <BooleanInput label="isFinished" source="isFinished" />
        <NumberInput step={1} label="matchPoints" source="matchPoints" />
        <TextInput label="result" source="result" />
      </SimpleForm>
    </Create>
  );
};
