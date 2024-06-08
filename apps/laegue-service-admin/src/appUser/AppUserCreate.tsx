import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { LeagueTitle } from "../league/LeagueTitle";

export const AppUserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="leagues"
          reference="League"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LeagueTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <div />
        <NumberInput step={1} label="totalPoint" source="totalPoint" />
      </SimpleForm>
    </Create>
  );
};
