/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AppRoundWhereInput } from "./AppRoundWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AppRoundListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AppRoundWhereInput,
  })
  @ValidateNested()
  @Type(() => AppRoundWhereInput)
  @IsOptional()
  @Field(() => AppRoundWhereInput, {
    nullable: true,
  })
  every?: AppRoundWhereInput;

  @ApiProperty({
    required: false,
    type: () => AppRoundWhereInput,
  })
  @ValidateNested()
  @Type(() => AppRoundWhereInput)
  @IsOptional()
  @Field(() => AppRoundWhereInput, {
    nullable: true,
  })
  some?: AppRoundWhereInput;

  @ApiProperty({
    required: false,
    type: () => AppRoundWhereInput,
  })
  @ValidateNested()
  @Type(() => AppRoundWhereInput)
  @IsOptional()
  @Field(() => AppRoundWhereInput, {
    nullable: true,
  })
  none?: AppRoundWhereInput;
}
export { AppRoundListRelationFilter as AppRoundListRelationFilter };