import { gql } from '@apollo/client';

export const GET_BUILDINGS = gql`
query GetBuildingsList($params: BuildingQueryParams) {
  getBuildingsList(params: $params) {
    data {
      buildingsData {
        _id
        refNo
        name
        image
        address
        testRegime
        createdAt
        updatedAt
        createdBy
        updatedBy
        client {
          _id
          name
        }
        clientRepresentative {
          _id
          name
        }
        facilityManager {
          _id
          name
        }
        assets
        defects
      }
      paginationData {
        pageNum
        totalPages
        totalRecords
      }
    }
    statusCode
    message
  }
}
`;
