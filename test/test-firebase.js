import React from 'react'
import test from 'ava'
import { Firebase, FirebaseContext } from '../src/index'

// const axios = new AxiosAgent({ baseURL: API_URI, headers }, RETRY_LIMIT, NO_RETRY_CODE)

test('Successful axios call', t => {
  
  console.log(Firebase)
  console.log(FirebaseContext)
  t.is(200, 200)
})

