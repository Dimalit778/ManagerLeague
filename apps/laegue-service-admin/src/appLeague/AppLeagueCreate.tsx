import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { AppRoundTitle } from "../appRound/AppRoundTitle";
import { RoundTitle } from "../round/RoundTitle";

export const AppLeagueCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="appRounds"
          reference="AppRound"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppRoundTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="isSelected" source="isSelected" />
        <TextInput label="joinCode" source="joinCode" />
        <TextInput label="leagueCode" source="leagueCode" />
        <TextInput label="leagueName" source="leagueName" />
        <TextInput label="members" source="members" />
        <ReferenceArrayInput
          source="rounds"
          reference="Round"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RoundTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
