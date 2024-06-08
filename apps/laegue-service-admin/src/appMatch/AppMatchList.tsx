import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { APPROUND_TITLE_FIELD } from "../appRound/AppRoundTitle";

export const AppMatchList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AppMatches"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
