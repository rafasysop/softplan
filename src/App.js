import React, { useEffect } from 'react'

import { client } from './config/client-graphql';
import { gql } from '@apollo/client'

function App() {
  useEffect(() => {
    initial();
  }, [])

  const initial = () => {
    client.query({
      query: gql`
        query {
          Country {
            name
            capital
            flag {
              emoji
              emojiUnicode
              svgFile
            }
          }
        }
      `
    }).then(resp => console.log(resp.data))
  }

  return (
    <div>
      App
    </div>
  )
}

export default App;
