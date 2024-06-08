import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AppRoundTitle } from "../appRound/AppRoundTitle";

export const MatchEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="appRound.id"
          reference="AppRound"
          label="AppRound"
        >
          <SelectInput optionText={AppRoundTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
