import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: "Query";
  jobs: Array<Job>;
};

export type Job = {
  __typename?: "Job";
  id: Scalars["ID"];
  recruiterName: Scalars["String"];
  title: Scalars["String"];
};

export type DataForPageAFragment = { __typename?: "Job" } & Pick<Job, "id"> &
  JobSimpleRecruiterDataFragment;

export type DataForPageBFragment = { __typename?: "Job" } & Pick<Job, "title"> &
  JobSimpleRecruiterDataFragment;

export type GetJobsQueryVariables = Exact<{ [key: string]: never }>;

export type GetJobsQuery = { __typename?: "Query" } & {
  jobs: Array<
    { __typename?: "Job" } & DataForPageAFragment & DataForPageBFragment
  >;
};

export type JobSimpleRecruiterDataFragment = { __typename?: "Job" } & Pick<
  Job,
  "recruiterName"
>;

export const JobSimpleRecruiterDataFragmentDoc: DocumentNode<
  JobSimpleRecruiterDataFragment,
  unknown
> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "JobSimpleRecruiterData" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Job" },
      },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "recruiterName" },
            arguments: [],
            directives: [],
          },
        ],
      },
    },
  ],
};
export const DataForPageAFragmentDoc: DocumentNode<
  DataForPageAFragment,
  unknown
> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DataForPageA" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Job" },
      },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "id" },
            arguments: [],
            directives: [],
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "JobSimpleRecruiterData" },
            directives: [],
          },
        ],
      },
    },
    ...JobSimpleRecruiterDataFragmentDoc.definitions,
  ],
};
export const DataForPageBFragmentDoc: DocumentNode<
  DataForPageBFragment,
  unknown
> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DataForPageB" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Job" },
      },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "title" },
            arguments: [],
            directives: [],
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "JobSimpleRecruiterData" },
            directives: [],
          },
        ],
      },
    },
    ...JobSimpleRecruiterDataFragmentDoc.definitions,
  ],
};
export const GetJobsDocument: DocumentNode<
  GetJobsQuery,
  GetJobsQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetJobs" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "jobs" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "DataForPageA" },
                  directives: [],
                },
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "DataForPageB" },
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
    ...DataForPageAFragmentDoc.definitions,
    ...DataForPageBFragmentDoc.definitions,
  ],
};

console.log({
  ...GetJobsDocument,
  // @ts-ignore
  definitions: GetJobsDocument.definitions.map((def) => def.name.value),
});
