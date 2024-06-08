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
import { League } from "./League";
import { LeagueCountArgs } from "./LeagueCountArgs";
import { LeagueFindManyArgs } from "./LeagueFindManyArgs";
import { LeagueFindUniqueArgs } from "./LeagueFindUniqueArgs";
import { CreateLeagueArgs } from "./CreateLeagueArgs";
import { UpdateLeagueArgs } from "./UpdateLeagueArgs";
import { DeleteLeagueArgs } from "./DeleteLeagueArgs";
import { LeagueService } from "../league.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => League)
export class LeagueResolverBase {
  constructor(
    protected readonly service: LeagueService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "League",
    action: "read",
    possession: "any",
  })
  async _leaguesMeta(
    @graphql.Args() args: LeagueCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [League])
  @nestAccessControl.UseRoles({
    resource: "League",
    action: "read",
    possession: "any",
  })
  async leagues(@graphql.Args() args: LeagueFindManyArgs): Promise<League[]> {
    return this.service.leagues(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => League, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "League",
    action: "read",
    possession: "own",
  })
  async league(
    @graphql.Args() args: LeagueFindUniqueArgs
  ): Promise<League | null> {
    const result = await this.service.league(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => League)
  @nestAccessControl.UseRoles({
    resource: "League",
    action: "create",
    possession: "any",
  })
  async createLeague(@graphql.Args() args: CreateLeagueArgs): Promise<League> {
    return await this.service.createLeague({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => League)
  @nestAccessControl.UseRoles({
    resource: "League",
    action: "update",
    possession: "any",
  })
  async updateLeague(
    @graphql.Args() args: UpdateLeagueArgs
  ): Promise<League | null> {
    try {
      return await this.service.updateLeague({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => League)
  @nestAccessControl.UseRoles({
    resource: "League",
    action: "delete",
    possession: "any",
  })
  async deleteLeague(
    @graphql.Args() args: DeleteLeagueArgs
  ): Promise<League | null> {
    try {
      return await this.service.deleteLeague(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
