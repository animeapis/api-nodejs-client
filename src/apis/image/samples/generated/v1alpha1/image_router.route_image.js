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

function main(host, path) {
  // [START image_v1alpha1_generated_ImageRouter_RouteImage_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The host that received the request.
   */
  // const host = 'abc123'
  /**
   *  The requested path representing an opaque route.
   */
  // const path = 'abc123'

  // Imports the Image library
  const {ImageRouterClient} = require('@animeapis/image').v1alpha1;

  // Instantiates a client
  const imageClient = new ImageRouterClient();

  async function callRouteImage() {
    // Construct request
    const request = {
      host,
      path,
    };

    // Run request
    const response = await imageClient.routeImage(request);
    console.log(response);
  }

  callRouteImage();
  // [END image_v1alpha1_generated_ImageRouter_RouteImage_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
