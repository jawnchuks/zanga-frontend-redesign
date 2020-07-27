import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  postedProperties: PropertyPage;
  sharedProperties: PropertyPointPage;
  properties: PropertyPage;
  property?: Maybe<Property>;
  featuredProperties: PropertyPage;
};


export type QueryPostedPropertiesArgs = {
  input?: Maybe<PaginationInput>;
};


export type QuerySharedPropertiesArgs = {
  input?: Maybe<PaginationInput>;
};


export type QueryPropertiesArgs = {
  input: PropertiesInput;
};


export type QueryPropertyArgs = {
  slug: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  type: UserType;
};

export enum UserType {
  Agency = 'Agency',
  Individual = 'Individual',
  Unassigned = 'Unassigned'
}

export type PaginationInput = {
  cursor?: Maybe<Scalars['String']>;
};

export type PropertyPage = {
  __typename?: 'PropertyPage';
  properties?: Maybe<Array<Property>>;
  pageInfo: PageInfo;
};

export type Property = {
  __typename?: 'Property';
  id: Scalars['String'];
  bounty?: Maybe<Scalars['Float']>;
  expense?: Maybe<Scalars['Float']>;
  remainingExpense?: Maybe<Scalars['Float']>;
  title: Scalars['String'];
  city?: Maybe<Scalars['String']>;
  visits: Scalars['Int'];
  state?: Maybe<Scalars['String']>;
  costValue: Scalars['Int'];
  costType: CostType;
  owner: User;
  images?: Maybe<Array<Image>>;
  description?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  slug: Scalars['String'];
};

export enum CostType {
  Rent = 'Rent',
  Sale = 'Sale'
}

export type Image = {
  __typename?: 'Image';
  url: Scalars['String'];
  previewUrl: Scalars['String'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type PropertyPointPage = {
  __typename?: 'PropertyPointPage';
  points?: Maybe<Array<PropertyPoint>>;
  pageInfo: PageInfo;
};

export type PropertyPoint = {
  __typename?: 'PropertyPoint';
  propertySlug: Scalars['String'];
  propertyTitle: Scalars['String'];
  impressions: Scalars['Int'];
  profit: Scalars['Float'];
};

export type PropertiesInput = {
  type: CostType;
  state: Scalars['String'];
  budget?: Maybe<Scalars['Float']>;
  cursor?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createProperty: Scalars['ID'];
  deleteProperty: Scalars['Boolean'];
  incrementPropertyView?: Maybe<Scalars['Boolean']>;
  updateUser: Scalars['Boolean'];
  assignBounty: Scalars['Boolean'];
};


export type MutationCreatePropertyArgs = {
  input: CreatePropertyInput;
};


export type MutationDeletePropertyArgs = {
  id: Scalars['ID'];
};


export type MutationIncrementPropertyViewArgs = {
  input: PropertyViewInput;
};


export type MutationUpdateUserArgs = {
  input: UserInput;
};


export type MutationAssignBountyArgs = {
  input: BountyInput;
};

export type CreatePropertyInput = {
  title: Scalars['String'];
  location: LocationInput;
  costValue: Scalars['Int'];
  costType: CostType;
  featured: Scalars['Boolean'];
  images: Array<ImageInput>;
  description: Scalars['String'];
};

export type LocationInput = {
  city: Scalars['String'];
  state: Scalars['String'];
};

export type ImageInput = {
  url: Scalars['String'];
  previewUrl: Scalars['String'];
};

export type PropertyViewInput = {
  referrerId?: Maybe<Scalars['ID']>;
  propertyId: Scalars['ID'];
};

export type UserInput = {
  type?: Maybe<UserType>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type BountyInput = {
  propertyId: Scalars['ID'];
  expense: Scalars['Float'];
  bounty: Scalars['Float'];
};

export type Owner = {
  __typename?: 'Owner';
  phone: Scalars['String'];
  name: Scalars['String'];
};

export type Location = {
  __typename?: 'Location';
  city: Scalars['String'];
  state: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type PropertyDetailsFragment = (
  { __typename?: 'Property' }
  & Pick<Property, 'id' | 'bounty' | 'expense' | 'remainingExpense' | 'title' | 'visits' | 'state' | 'city' | 'costValue' | 'costType' | 'description' | 'slug'>
  & { owner: (
    { __typename?: 'User' }
    & Pick<User, 'name' | 'phone'>
  ), images?: Maybe<Array<(
    { __typename?: 'Image' }
    & Pick<Image, 'url' | 'previewUrl'>
  )>> }
);

export type IncrementPropertyViewMutationVariables = Exact<{
  referrerId?: Maybe<Scalars['ID']>;
  propertyId: Scalars['ID'];
}>;


export type IncrementPropertyViewMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'incrementPropertyView'>
);

export type FeaturedPropertiesQueryVariables = Exact<{ [key: string]: never; }>;


export type FeaturedPropertiesQuery = (
  { __typename?: 'Query' }
  & { featuredProperties: (
    { __typename?: 'PropertyPage' }
    & { properties?: Maybe<Array<(
      { __typename?: 'Property' }
      & PropertyDetailsFragment
    )>> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'type' | 'name'>
  )> }
);

export type PropertiesQueryVariables = Exact<{
  input: PropertiesInput;
}>;


export type PropertiesQuery = (
  { __typename?: 'Query' }
  & { properties: (
    { __typename?: 'PropertyPage' }
    & { properties?: Maybe<Array<(
      { __typename?: 'Property' }
      & PropertyDetailsFragment
    )>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage'>
    ) }
  ) }
);

export type PropertyQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type PropertyQuery = (
  { __typename?: 'Query' }
  & { property?: Maybe<(
    { __typename?: 'Property' }
    & PropertyDetailsFragment
  )> }
);

export const PropertyDetailsFragmentDoc = gql`
    fragment PropertyDetails on Property {
  id
  bounty
  expense
  remainingExpense
  title
  visits
  state
  city
  costValue
  costType
  owner {
    name
    phone
  }
  images {
    url
    previewUrl
  }
  description
  slug
}
    `;
export const IncrementPropertyViewDocument = gql`
    mutation incrementPropertyView($referrerId: ID, $propertyId: ID!) {
  incrementPropertyView(input: {referrerId: $referrerId, propertyId: $propertyId})
}
    `;
export const FeaturedPropertiesDocument = gql`
    query featuredProperties {
  featuredProperties {
    properties {
      ...PropertyDetails
    }
  }
}
    ${PropertyDetailsFragmentDoc}`;
export const MeDocument = gql`
    query me {
  me {
    id
    email
    type
    name
  }
}
    `;
export const PropertiesDocument = gql`
    query properties($input: PropertiesInput!) {
  properties(input: $input) {
    properties {
      ...PropertyDetails
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
  }
}
    ${PropertyDetailsFragmentDoc}`;
export const PropertyDocument = gql`
    query property($slug: String!) {
  property(slug: $slug) {
    ...PropertyDetails
  }
}
    ${PropertyDetailsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    incrementPropertyView(variables: IncrementPropertyViewMutationVariables): Promise<IncrementPropertyViewMutation> {
      return withWrapper(() => client.request<IncrementPropertyViewMutation>(print(IncrementPropertyViewDocument), variables));
    },
    featuredProperties(variables?: FeaturedPropertiesQueryVariables): Promise<FeaturedPropertiesQuery> {
      return withWrapper(() => client.request<FeaturedPropertiesQuery>(print(FeaturedPropertiesDocument), variables));
    },
    me(variables?: MeQueryVariables): Promise<MeQuery> {
      return withWrapper(() => client.request<MeQuery>(print(MeDocument), variables));
    },
    properties(variables: PropertiesQueryVariables): Promise<PropertiesQuery> {
      return withWrapper(() => client.request<PropertiesQuery>(print(PropertiesDocument), variables));
    },
    property(variables: PropertyQueryVariables): Promise<PropertyQuery> {
      return withWrapper(() => client.request<PropertyQuery>(print(PropertyDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;