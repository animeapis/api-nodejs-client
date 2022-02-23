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

function main(lightNovel) {
  // [START multimedia_v1alpha1_generated_LightNovelService_CreateLightNovel_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The light novel to create.
   */
  // const lightNovel = {}
  /**
   *  An idempotent identifier to be used as static resource id.
   */
  // const idempotentResourceId = 1234

  // Imports the Multimedia library
  const {LightNovelServiceClient} = require('@animeapis/multimedia').v1alpha1;

  // Instantiates a client
  const multimediaClient = new LightNovelServiceClient();

  async function callCreateLightNovel() {
    // Construct request
    const request = {
      lightNovel,
    };

    // Run request
    const response = await multimediaClient.createLightNovel(request);
    console.log(response);
  }

  callCreateLightNovel();
  // [END multimedia_v1alpha1_generated_LightNovelService_CreateLightNovel_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
