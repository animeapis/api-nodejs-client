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

function main(visualNovel) {
  // [START multimedia_v1alpha1_generated_VisualNovelService_CreateVisualNovel_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The visual novel to create.
   */
  // const visualNovel = {}

  // Imports the Multimedia library
  const {VisualNovelServiceClient} = require('@animeapis/multimedia').v1alpha1;

  // Instantiates a client
  const multimediaClient = new VisualNovelServiceClient();

  async function callCreateVisualNovel() {
    // Construct request
    const request = {
      visualNovel,
    };

    // Run request
    const response = await multimediaClient.createVisualNovel(request);
    console.log(response);
  }

  callCreateVisualNovel();
  // [END multimedia_v1alpha1_generated_VisualNovelService_CreateVisualNovel_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
