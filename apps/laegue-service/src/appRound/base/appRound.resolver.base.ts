/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AppRound } from "./AppRound";
import { AppRoundCountArgs } from "./AppRoundCountArgs";
import { AppRoundFindManyArgs } from "./AppRoundFindManyArgs";
import { AppRoundFindUniqueArgs } from "./AppRoundFindUniqueArgs";
import { CreateAppRoundArgs } from "./CreateAppRoundArgs";
import { UpdateAppRoundArgs } from "./UpdateAppRoundArgs";
import { DeleteAppRoundArgs } from "./DeleteAppRoundArgs";
import { AppMatchFindManyArgs } from "../../appMatch/base/AppMatchFindManyArgs";
import { AppMatch } from "../../appMatch/base/AppMatch";
import { MatchFindManyArgs } from "../../match/base/MatchFindManyArgs";
import { Match } from "../../match/base/Match";
import { AppLeague } from "../../appLeague/base/AppLeague";
import { AppRoundDto } from "../AppRoundDto";
import { AppRoundService } from "../appRound.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AppRound)
export class AppRoundResolverBase {
  constructor(
    protected readonly service: AppRoundService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AppRound",
    action: "read",
    possession: "any",
  })
  async _appRoundsMeta(
    @graphql.Args() args: AppRoundCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AppRound])
  @nestAccessControl.UseRoles({
    resource: "AppRound",
    action: "read",
    possession: "any",
  })
  async appRounds(
    @graphql.Args() args: AppRoundFindManyArgs
  ): Promise<AppRound[]> {
    return this.service.appRounds(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AppRound, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AppRound",
    action: "read",
    possession: "own",
  })
  async appRound(
    @graphql.Args() args: AppRoundFindUniqueArgs
  ): Promise<AppRound | null> {
    const result = await this.service.appRound(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AppRound)
  @nestAccessControl.UseRoles({
    resource: "AppRound",
    action: "create",
    possession: "any",
  })
  async createAppRound(
    @graphql.Args() args: CreateAppRoundArgs
  ): Promise<AppRound> {
    return await this.service.createAppRound({
      ...args,
      data: {
        ...args.data,

        appLeague: args.data.appLeague
          ? {
              connect: args.data.appLeague,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AppRound)
  @nestAccessControl.UseRoles({
    resource: "AppRound",
    action: "update",
    possession: "any",
  })
  async updateAppRound(
    @graphql.Args() args: UpdateAppRoundArgs
  ): Promise<AppRound | null> {
    try {
      return await this.service.updateAppRound({
        ...args,
        data: {
          ...args.data,

          appLeague: args.data.appLeague
            ? {
                connect: args.data.appLeague,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => AppRound)
  @nestAccessControl.UseRoles({
    resource: "AppRound",
    action: "delete",
    possession: "any",
  })
  async deleteAppRound(
    @graphql.Args() args: DeleteAppRoundArgs
  ): Promise<AppRound | null> {
    try {
      return await this.service.deleteAppRound(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [AppMatch], { name: "appMatches" })
  @nestAccessControl.UseRoles({
    resource: "AppMatch",
    action: "read",
    possession: "any",
  })
  async findAppMatches(
    @graphql.Parent() parent: AppRound,
    @graphql.Args() args: AppMatchFindManyArgs
  ): Promise<AppMatch[]> {
    const results = await this.service.findAppMatches(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Match], { name: "matches" })
  @nestAccessControl.UseRoles({
    resource: "Match",
    action: "read",
    possession: "any",
  })
  async findMatches(
    @graphql.Parent() parent: AppRound,
    @graphql.Args() args: MatchFindManyArgs
  ): Promise<Match[]> {
    const results = await this.service.findMatches(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => AppLeague, {
    nullable: true,
    name: "appLeague",
  })
  @nestAccessControl.UseRoles({
    resource: "AppLeague",
    action: "read",
    possession: "any",
  })
  async getAppLeague(
    @graphql.Parent() parent: AppRound
  ): Promise<AppLeague | null> {
    const result = await this.service.getAppLeague(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Query(() => [AppRoundDto])
  async GetAllRoundsInLeague(
    @graphql.Args()
    args: string
  ): Promise<AppRoundDto[]> {
    return this.service.GetAllRoundsInLeague(args);
  }

  @graphql.Query(() => String)
  async GetRoundsInLeague(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetRoundsInLeague(args);
  }
}
