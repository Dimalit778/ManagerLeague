/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RoundWhereUniqueInput } from "./RoundWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteRoundArgs {
  @ApiProperty({
    required: true,
    type: () => RoundWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RoundWhereUniqueInput)
  @Field(() => RoundWhereUniqueInput, { nullable: false })
  where!: RoundWhereUniqueInput;
}

export { DeleteRoundArgs as DeleteRoundArgs };
