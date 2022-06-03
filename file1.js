console.log('First Commit');

console.log('Second Commit');

console.log('Second Commit');

console.log('Fourth Commit');

{
    repository(owner:"v-shinde", name:"committest") {
      refs(first: 100, refPrefix: "refs/heads/") {
          totalCount
        edges {
          node {
            name
            target {
              ... on Commit {
                id
                history(first: 1) {
                  pageInfo{
                    hasNextPage
                    startCursor
                    endCursor
                  }
                  totalCount
                  nodes {
                    oid
                    message
                    additions
                    deletions
                    changedFiles
                  }
                }
              }
            }
          }
        }
      }
    }
  }`