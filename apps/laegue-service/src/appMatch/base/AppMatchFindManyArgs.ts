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
import { AppMatchWhereInput } from "./AppMatchWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AppMatchOrderByInput } from "./AppMatchOrderByInput";

@ArgsType()
class AppMatchFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AppMatchWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AppMatchWhereInput, { nullable: true })
  @Type(() => AppMatchWhereInput)
  where?: AppMatchWhereInput;

  @ApiProperty({
    required: false,
    type: [AppMatchOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AppMatchOrderByInput], { nullable: true })
  @Type(() => AppMatchOrderByInput)
  orderBy?: Array<AppMatchOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AppMatchFindManyArgs as AppMatchFindManyArgs };