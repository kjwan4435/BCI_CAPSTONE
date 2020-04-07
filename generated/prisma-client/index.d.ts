// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  subject: (where?: SubjectWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  subject: (where: SubjectWhereUniqueInput) => SubjectNullablePromise;
  subjects: (args?: {
    where?: SubjectWhereInput;
    orderBy?: SubjectOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Subject>;
  subjectsConnection: (args?: {
    where?: SubjectWhereInput;
    orderBy?: SubjectOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => SubjectConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createSubject: (data: SubjectCreateInput) => SubjectPromise;
  updateSubject: (args: {
    data: SubjectUpdateInput;
    where: SubjectWhereUniqueInput;
  }) => SubjectPromise;
  updateManySubjects: (args: {
    data: SubjectUpdateManyMutationInput;
    where?: SubjectWhereInput;
  }) => BatchPayloadPromise;
  upsertSubject: (args: {
    where: SubjectWhereUniqueInput;
    create: SubjectCreateInput;
    update: SubjectUpdateInput;
  }) => SubjectPromise;
  deleteSubject: (where: SubjectWhereUniqueInput) => SubjectPromise;
  deleteManySubjects: (where?: SubjectWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  subject: (
    where?: SubjectSubscriptionWhereInput
  ) => SubjectSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type SubjectOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "age_ASC"
  | "age_DESC"
  | "country_ASC"
  | "country_DESC"
  | "education_ASC"
  | "education_DESC"
  | "questions1_ASC"
  | "questions1_DESC"
  | "questions2_ASC"
  | "questions2_DESC";

export type UserOrderByInput = "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type SubjectWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface SubjectWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  age?: Maybe<Int>;
  age_not?: Maybe<Int>;
  age_in?: Maybe<Int[] | Int>;
  age_not_in?: Maybe<Int[] | Int>;
  age_lt?: Maybe<Int>;
  age_lte?: Maybe<Int>;
  age_gt?: Maybe<Int>;
  age_gte?: Maybe<Int>;
  country?: Maybe<String>;
  country_not?: Maybe<String>;
  country_in?: Maybe<String[] | String>;
  country_not_in?: Maybe<String[] | String>;
  country_lt?: Maybe<String>;
  country_lte?: Maybe<String>;
  country_gt?: Maybe<String>;
  country_gte?: Maybe<String>;
  country_contains?: Maybe<String>;
  country_not_contains?: Maybe<String>;
  country_starts_with?: Maybe<String>;
  country_not_starts_with?: Maybe<String>;
  country_ends_with?: Maybe<String>;
  country_not_ends_with?: Maybe<String>;
  education?: Maybe<String>;
  education_not?: Maybe<String>;
  education_in?: Maybe<String[] | String>;
  education_not_in?: Maybe<String[] | String>;
  education_lt?: Maybe<String>;
  education_lte?: Maybe<String>;
  education_gt?: Maybe<String>;
  education_gte?: Maybe<String>;
  education_contains?: Maybe<String>;
  education_not_contains?: Maybe<String>;
  education_starts_with?: Maybe<String>;
  education_not_starts_with?: Maybe<String>;
  education_ends_with?: Maybe<String>;
  education_not_ends_with?: Maybe<String>;
  questions1?: Maybe<String>;
  questions1_not?: Maybe<String>;
  questions1_in?: Maybe<String[] | String>;
  questions1_not_in?: Maybe<String[] | String>;
  questions1_lt?: Maybe<String>;
  questions1_lte?: Maybe<String>;
  questions1_gt?: Maybe<String>;
  questions1_gte?: Maybe<String>;
  questions1_contains?: Maybe<String>;
  questions1_not_contains?: Maybe<String>;
  questions1_starts_with?: Maybe<String>;
  questions1_not_starts_with?: Maybe<String>;
  questions1_ends_with?: Maybe<String>;
  questions1_not_ends_with?: Maybe<String>;
  questions2?: Maybe<String>;
  questions2_not?: Maybe<String>;
  questions2_in?: Maybe<String[] | String>;
  questions2_not_in?: Maybe<String[] | String>;
  questions2_lt?: Maybe<String>;
  questions2_lte?: Maybe<String>;
  questions2_gt?: Maybe<String>;
  questions2_gte?: Maybe<String>;
  questions2_contains?: Maybe<String>;
  questions2_not_contains?: Maybe<String>;
  questions2_starts_with?: Maybe<String>;
  questions2_not_starts_with?: Maybe<String>;
  questions2_ends_with?: Maybe<String>;
  questions2_not_ends_with?: Maybe<String>;
  AND?: Maybe<SubjectWhereInput[] | SubjectWhereInput>;
  OR?: Maybe<SubjectWhereInput[] | SubjectWhereInput>;
  NOT?: Maybe<SubjectWhereInput[] | SubjectWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  name?: Maybe<String>;
}>;

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface SubjectCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  age: Int;
  country: String;
  education: String;
  questions1?: Maybe<String>;
  questions2?: Maybe<String>;
}

export interface SubjectUpdateInput {
  name?: Maybe<String>;
  age?: Maybe<Int>;
  country?: Maybe<String>;
  education?: Maybe<String>;
  questions1?: Maybe<String>;
  questions2?: Maybe<String>;
}

export interface SubjectUpdateManyMutationInput {
  name?: Maybe<String>;
  age?: Maybe<Int>;
  country?: Maybe<String>;
  education?: Maybe<String>;
  questions1?: Maybe<String>;
  questions2?: Maybe<String>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
}

export interface SubjectSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<SubjectWhereInput>;
  AND?: Maybe<SubjectSubscriptionWhereInput[] | SubjectSubscriptionWhereInput>;
  OR?: Maybe<SubjectSubscriptionWhereInput[] | SubjectSubscriptionWhereInput>;
  NOT?: Maybe<SubjectSubscriptionWhereInput[] | SubjectSubscriptionWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Subject {
  id: ID_Output;
  name: String;
  age: Int;
  country: String;
  education: String;
  questions1?: String;
  questions2?: String;
}

export interface SubjectPromise extends Promise<Subject>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  age: () => Promise<Int>;
  country: () => Promise<String>;
  education: () => Promise<String>;
  questions1: () => Promise<String>;
  questions2: () => Promise<String>;
}

export interface SubjectSubscription
  extends Promise<AsyncIterator<Subject>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  age: () => Promise<AsyncIterator<Int>>;
  country: () => Promise<AsyncIterator<String>>;
  education: () => Promise<AsyncIterator<String>>;
  questions1: () => Promise<AsyncIterator<String>>;
  questions2: () => Promise<AsyncIterator<String>>;
}

export interface SubjectNullablePromise
  extends Promise<Subject | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  age: () => Promise<Int>;
  country: () => Promise<String>;
  education: () => Promise<String>;
  questions1: () => Promise<String>;
  questions2: () => Promise<String>;
}

export interface SubjectConnection {
  pageInfo: PageInfo;
  edges: SubjectEdge[];
}

export interface SubjectConnectionPromise
  extends Promise<SubjectConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<SubjectEdge>>() => T;
  aggregate: <T = AggregateSubjectPromise>() => T;
}

export interface SubjectConnectionSubscription
  extends Promise<AsyncIterator<SubjectConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<SubjectEdgeSubscription>>>() => T;
  aggregate: <T = AggregateSubjectSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface SubjectEdge {
  node: Subject;
  cursor: String;
}

export interface SubjectEdgePromise extends Promise<SubjectEdge>, Fragmentable {
  node: <T = SubjectPromise>() => T;
  cursor: () => Promise<String>;
}

export interface SubjectEdgeSubscription
  extends Promise<AsyncIterator<SubjectEdge>>,
    Fragmentable {
  node: <T = SubjectSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateSubject {
  count: Int;
}

export interface AggregateSubjectPromise
  extends Promise<AggregateSubject>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateSubjectSubscription
  extends Promise<AsyncIterator<AggregateSubject>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: ID_Output;
  name: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface SubjectSubscriptionPayload {
  mutation: MutationType;
  node: Subject;
  updatedFields: String[];
  previousValues: SubjectPreviousValues;
}

export interface SubjectSubscriptionPayloadPromise
  extends Promise<SubjectSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = SubjectPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = SubjectPreviousValuesPromise>() => T;
}

export interface SubjectSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<SubjectSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = SubjectSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = SubjectPreviousValuesSubscription>() => T;
}

export interface SubjectPreviousValues {
  id: ID_Output;
  name: String;
  age: Int;
  country: String;
  education: String;
  questions1?: String;
  questions2?: String;
}

export interface SubjectPreviousValuesPromise
  extends Promise<SubjectPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  age: () => Promise<Int>;
  country: () => Promise<String>;
  education: () => Promise<String>;
  questions1: () => Promise<String>;
  questions2: () => Promise<String>;
}

export interface SubjectPreviousValuesSubscription
  extends Promise<AsyncIterator<SubjectPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  age: () => Promise<AsyncIterator<Int>>;
  country: () => Promise<AsyncIterator<String>>;
  education: () => Promise<AsyncIterator<String>>;
  questions1: () => Promise<AsyncIterator<String>>;
  questions2: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Subject",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;