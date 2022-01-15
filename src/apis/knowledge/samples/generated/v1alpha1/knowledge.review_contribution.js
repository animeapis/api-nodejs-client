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

function main() {
  // [START knowledge_v1alpha1_generated_Knowledge_ReviewContribution_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Name of the contribution
   */
  // const name = 'abc123'
  /**
   *  Optional comment on the review
   */
  // const comment = 'abc123'
  /**
   *  Changes to the existing contribution
   *  New changes will be added on top of the existing ones
   */
  // const changes = {}
  /**
   *  Changes to discard from the contribution
   *  Discarded changes will be completely removed from the contribution
   */
  // const discards = {}

  // Imports the Knowledge library
  const {KnowledgeClient} = require('@animeapis/knowledge').v1alpha1;

  // Instantiates a client
  const knowledgeClient = new KnowledgeClient();

  async function callReviewContribution() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await knowledgeClient.reviewContribution(request);
    console.log(response);
  }

  callReviewContribution();
  // [END knowledge_v1alpha1_generated_Knowledge_ReviewContribution_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
