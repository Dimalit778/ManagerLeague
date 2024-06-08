import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AppLeagueTitle } from "../appLeague/AppLeagueTitle";

export const RoundEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="appLeague.id"
          reference="AppLeague"
          label="AppLeague"
        >
          <SelectInput optionText={AppLeagueTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
