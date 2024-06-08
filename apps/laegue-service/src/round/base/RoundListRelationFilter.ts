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
import { RoundWhereInput } from "./RoundWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RoundListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RoundWhereInput,
  })
  @ValidateNested()
  @Type(() => RoundWhereInput)
  @IsOptional()
  @Field(() => RoundWhereInput, {
    nullable: true,
  })
  every?: RoundWhereInput;

  @ApiProperty({
    required: false,
    type: () => RoundWhereInput,
  })
  @ValidateNested()
  @Type(() => RoundWhereInput)
  @IsOptional()
  @Field(() => RoundWhereInput, {
    nullable: true,
  })
  some?: RoundWhereInput;

  @ApiProperty({
    required: false,
    type: () => RoundWhereInput,
  })
  @ValidateNested()
  @Type(() => RoundWhereInput)
  @IsOptional()
  @Field(() => RoundWhereInput, {
    nullable: true,
  })
  none?: RoundWhereInput;
}
export { RoundListRelationFilter as RoundListRelationFilter };