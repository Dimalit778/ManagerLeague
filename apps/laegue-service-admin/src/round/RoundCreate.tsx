import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AppLeagueTitle } from "../appLeague/AppLeagueTitle";

export const RoundCreate = (props: CreateProps): React.ReactElement => {
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
      </SimpleForm>
    </Create>
  );
};
