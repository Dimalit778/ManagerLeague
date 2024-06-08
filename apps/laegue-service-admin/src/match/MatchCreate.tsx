import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AppRoundTitle } from "../appRound/AppRoundTitle";

export const MatchCreate = (props: CreateProps): React.ReactElement => {
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
      </SimpleForm>
    </Create>
  );
};
