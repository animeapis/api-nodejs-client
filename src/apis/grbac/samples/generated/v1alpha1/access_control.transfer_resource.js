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

function main(name, targetParent) {
  // [START 127_v1alpha1_generated_AccessControl_TransferResource_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The full resource name that identifies the resource.
   */
  // const name = 'abc123'
  /**
   *  The full resource name that identifies the new parent resource.
   */
  // const targetParent = 'abc123'
  /**
   *  The map of substitutions to apply to the full resource name and all of its
   *  children.
   *  As an example, it might be required to change the parent of a resource from
   *  "users/123" to "users/678", the substitutions would then look like this:
   *  substitutions = {"users/123": "users/456789"}
   *  and the expected result would then be the following:
   *  from : //abc.animeapis.com/users/123/resources/210
   *  to   : //abc.animeapis.com/users/456789/resources/210
   *  The same applies if we need to transfer a resource between two parents of
   *  different type:
   *  substitutions = {"users/123": "organizations/678/teams/987"}
   *  and the expected result would then be the following:
   *  from : //abc.animeapis.com/users/123/resources/210
   *  to   : //abc.animeapis.com/organizations/678/teams/987/resources/210
   *  It is possible to apply multiple substitutions simultaneously.
   */
  // const substitutions = 1234

  // Imports the Grbac library
  const {AccessControlClient} = require('@animeapis/grbac').v1alpha1;

  // Instantiates a client
  const grbacClient = new AccessControlClient();

  async function callTransferResource() {
    // Construct request
    const request = {
      name,
      targetParent,
    };

    // Run request
    const response = await grbacClient.transferResource(request);
    console.log(response);
  }

  callTransferResource();
  // [END 127_v1alpha1_generated_AccessControl_TransferResource_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
