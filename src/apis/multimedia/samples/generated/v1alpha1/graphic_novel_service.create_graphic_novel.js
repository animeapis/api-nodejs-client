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

function main(graphicNovel) {
  // [START multimedia_v1alpha1_generated_GraphicNovelService_CreateGraphicNovel_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The graphic novel to create.
   */
  // const graphicNovel = {}
  /**
   *  An idempotent identifier to be used as static resource id.
   */
  // const idempotentResourceId = 1234

  // Imports the Multimedia library
  const {GraphicNovelServiceClient} = require('@animeapis/multimedia').v1alpha1;

  // Instantiates a client
  const multimediaClient = new GraphicNovelServiceClient();

  async function callCreateGraphicNovel() {
    // Construct request
    const request = {
      graphicNovel,
    };

    // Run request
    const response = await multimediaClient.createGraphicNovel(request);
    console.log(response);
  }

  callCreateGraphicNovel();
  // [END multimedia_v1alpha1_generated_GraphicNovelService_CreateGraphicNovel_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
