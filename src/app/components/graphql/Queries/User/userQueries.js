import { gql } from '@apollo/client';

export const USER_LOGIN = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    data {
    user {
      _id
      refNo
      name
      image
      email
      password
      phoneNumber
      roleId 
      isArchived
      createdAt
      updatedAt
      createdBy
      updatedBy
    roleDetails {
      name
      key
    }
}
    token
    permissions {
      _id
      moduleId
      view
      edit
      createdAt
      updatedAt
      createdBy
      updatedBy
      moduleDetails {
        _id
        name
        isSubModule
        parentModuleId
        moduleKey
        link
        sequence
        icon
        createdAt
        updatedAt
        createdBy
        updatedBy
      }
    }
  }
    statusCode
    message
  }
}   
`;



export const ALL_USER_LIST = gql`
query GetUserDetails {
    getUsersList {
    data
    statusCode
    message
    }
  }
`;

export const USER_FORGOT_PASSWORD = gql`
mutation ForgotPassword($email: String!){
  forgotPassword(email:$email){
    data
    statusCode
    message
  }
}
`;

export const USER_RESET_PASSWORD = gql`
mutation ResetPassword($token: String!,$newPassword:String!){
  resetPassword(token:$token,newPassword:$newPassword){
    data
    statusCode
    message
  }
}
`;

export const GET_ROLE_LIST = gql`
query getRoleList{
    getRolesList {
    data {
        _id
        name
    }
    statusCode
    message
  }
}
`;
