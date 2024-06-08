import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { AppLeagueTitle } from "../appLeague/AppLeagueTitle";
import { AppMatchTitle } from "../appMatch/AppMatchTitle";
import { MatchTitle } from "../match/MatchTitle";

export const AppRoundCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="appLeague.id"
          reference="AppLeague"
          label="AppLeague"
        >
          <SelectInput optionText={AppLeagueTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="appMatches"
          reference="AppMatch"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppMatchTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="isFinished" source="isFinished" />
        <ReferenceArrayInput
          source="matches"
          reference="Match"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MatchTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="roundNumber" source="roundNumber" />
      </SimpleForm>
    </Create>
  );
};
