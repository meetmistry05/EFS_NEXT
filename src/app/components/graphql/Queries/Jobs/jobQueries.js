import { gql } from '@apollo/client';

export const GET_JOBS = gql`
query GetJobsList($params: JobQueryParams) {
  getJobsList(params: $params) {
    data {
      jobsData {
        _id
        refNo
        type
        certificateReference
        building {
          _id
          name
        }
        facilityManager {
           _id
          name
        }
        profile {
           _id
          name
        }
        operatives {
          _id
          name
        }
        status 
        createdAt
        updatedAt
        createdBy
        updatedBy
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
