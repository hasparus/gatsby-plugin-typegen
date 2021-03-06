import type { Store } from 'redux';
import type { GraphQLSchema } from 'gatsby/graphql';

export type GatsbyStore = Store<GatsbyStateKnownShape, GatsbyKnownAction>;

export type GatsbyStateKnownShape = {
  schema: GraphQLSchema,
  lastAction: GatsbyKnownAction,
  program: {
    directory: string,
  },
};

export type GatsbyKnownAction = (
  | GatsbyQueryExtractedAction
  | GatsbyReplaceStaticQueryAction
  | GatsbyQueryExtractionBabelSuccessAction
  | GatsbySetSchemaAction
);

export type GatsbyQueryExtractionBabelSuccessAction = {
  type: 'QUERY_EXTRACTION_BABEL_SUCCESS',
  plugin: unknown,
  traceId: string | undefined,
  payload: {
    componentPath: string,
  },
};

export type GatsbyQueryExtractedAction = {
  type: 'QUERY_EXTRACTED',
  plugin: unknown,
  traceId: string | undefined,
  payload: {
    componentPath: string,
    query: string,
  },
};

export type GatsbyReplaceStaticQueryAction = {
  type: 'REPLACE_STATIC_QUERY',
  plugin: unknown, // null??? why not undefined LOL
  payload: {
    name: string,
    componentPath: string,
    id: string,
    query: string,
    hash: number,
  },
};

export type GatsbySetSchemaAction = {
  type: 'SET_SCHEMA',
  playload: GraphQLSchema,
};

// from https://github.com/gatsbyjs/gatsby/blob/6b4b7f81ec/packages/gatsby/src/schema/print.js#L33-L48
export const gatsbyInternalScalars = [
  'Boolean',
  'Buffer',
  'Date',
  'Float',
  'ID',
  'Int',
  'Internal',
  'InternalInput',
  'JSON',
  'Json',
  'Node',
  'NodeInput',
  'Query',
  'String',
];
