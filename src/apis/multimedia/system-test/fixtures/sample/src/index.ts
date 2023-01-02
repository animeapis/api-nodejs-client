// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import {AnimeServiceClient, ChapterServiceClient, EpisodeServiceClient, GraphicNovelServiceClient, LightNovelServiceClient, VisualNovelServiceClient} from '@animeapis/multimedia';

// check that the client class type name can be used
function doStuffWithAnimeServiceClient(client: AnimeServiceClient) {
  client.close();
}
function doStuffWithChapterServiceClient(client: ChapterServiceClient) {
  client.close();
}
function doStuffWithEpisodeServiceClient(client: EpisodeServiceClient) {
  client.close();
}
function doStuffWithGraphicNovelServiceClient(client: GraphicNovelServiceClient) {
  client.close();
}
function doStuffWithLightNovelServiceClient(client: LightNovelServiceClient) {
  client.close();
}
function doStuffWithVisualNovelServiceClient(client: VisualNovelServiceClient) {
  client.close();
}

function main() {
  // check that the client instance can be created
  const animeServiceClient = new AnimeServiceClient();
  doStuffWithAnimeServiceClient(animeServiceClient);
  // check that the client instance can be created
  const chapterServiceClient = new ChapterServiceClient();
  doStuffWithChapterServiceClient(chapterServiceClient);
  // check that the client instance can be created
  const episodeServiceClient = new EpisodeServiceClient();
  doStuffWithEpisodeServiceClient(episodeServiceClient);
  // check that the client instance can be created
  const graphicNovelServiceClient = new GraphicNovelServiceClient();
  doStuffWithGraphicNovelServiceClient(graphicNovelServiceClient);
  // check that the client instance can be created
  const lightNovelServiceClient = new LightNovelServiceClient();
  doStuffWithLightNovelServiceClient(lightNovelServiceClient);
  // check that the client instance can be created
  const visualNovelServiceClient = new VisualNovelServiceClient();
  doStuffWithVisualNovelServiceClient(visualNovelServiceClient);
}

main();
