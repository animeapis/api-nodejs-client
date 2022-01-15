// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(name, code, state) {
  // [START credentials_v1alpha1_generated_OAuth2_Exchange_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The resorce name of the flow.
   */
  // const name = 'abc123'
  /**
   *  The OAuth 2.0 code returned from the authentication flow.
   */
  // const code = 'abc123'
  /**
   *  The OAuth 2.0 state returned from the authentication flow.
   */
  // const state = 'abc123'

  // Imports the Credentials library
  const {OAuth2Client} = require('@animeapis/credentials').v1alpha1;

  // Instantiates a client
  const credentialsClient = new OAuth2Client();

  async function callExchange() {
    // Construct request
    const request = {
      name,
      code,
      state,
    };

    // Run request
    const response = await credentialsClient.exchange(request);
    console.log(response);
  }

  callExchange();
  // [END credentials_v1alpha1_generated_OAuth2_Exchange_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
