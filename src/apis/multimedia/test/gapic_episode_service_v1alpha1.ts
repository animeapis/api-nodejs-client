// Copyright 2021 Google LLC
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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import { describe, it } from 'mocha';
import * as episodeserviceModule from '../src';

import {PassThrough} from 'stream';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
    const filledObject = (instance.constructor as typeof protobuf.Message)
        .toObject(instance as protobuf.Message<T>, {defaults: true});
    return (instance.constructor as typeof protobuf.Message).fromObject(filledObject) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().rejects(error) : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().callsArgWith(2, error) : sinon.stub().callsArgWith(2, null, response);
}

function stubPageStreamingCall<ResponseType>(responses?: ResponseType[], error?: Error) {
    const pagingStub = sinon.stub();
    if (responses) {
        for (let i = 0; i < responses.length; ++i) {
            pagingStub.onCall(i).callsArgWith(2, null, responses[i]);
        }
    }
    const transformStub = error ? sinon.stub().callsArgWith(2, error) : pagingStub;
    const mockStream = new PassThrough({
        objectMode: true,
        transform: transformStub,
    });
    // trigger as many responses as needed
    if (responses) {
        for (let i = 0; i < responses.length; ++i) {
            setImmediate(() => { mockStream.write({}); });
        }
        setImmediate(() => { mockStream.end(); });
    } else {
        setImmediate(() => { mockStream.write({}); });
        setImmediate(() => { mockStream.end(); });
    }
    return sinon.stub().returns(mockStream);
}

function stubAsyncIterationCall<ResponseType>(responses?: ResponseType[], error?: Error) {
    let counter = 0;
    const asyncIterable = {
        [Symbol.asyncIterator]() {
            return {
                async next() {
                    if (error) {
                        return Promise.reject(error);
                    }
                    if (counter >= responses!.length) {
                        return Promise.resolve({done: true, value: undefined});
                    }
                    return Promise.resolve({done: false, value: responses![counter++]});
                }
            };
        }
    };
    return sinon.stub().returns(asyncIterable);
}

describe('v1alpha1.EpisodeServiceClient', () => {
    it('has servicePath', () => {
        const servicePath = episodeserviceModule.v1alpha1.EpisodeServiceClient.servicePath;
        assert(servicePath);
    });

    it('has apiEndpoint', () => {
        const apiEndpoint = episodeserviceModule.v1alpha1.EpisodeServiceClient.apiEndpoint;
        assert(apiEndpoint);
    });

    it('has port', () => {
        const port = episodeserviceModule.v1alpha1.EpisodeServiceClient.port;
        assert(port);
        assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
        const client = new episodeserviceModule.v1alpha1.EpisodeServiceClient();
        assert(client);
    });

    it('should create a client with gRPC fallback', () => {
        const client = new episodeserviceModule.v1alpha1.EpisodeServiceClient({
            fallback: true,
        });
        assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
        const client = new episodeserviceModule.v1alpha1.EpisodeServiceClient({
            credentials: { client_email: 'bogus', private_key: 'bogus' },
            projectId: 'bogus',
        });
        assert.strictEqual(client.episodeServiceStub, undefined);
        await client.initialize();
        assert(client.episodeServiceStub);
    });

    it('has close method', () => {
        const client = new episodeserviceModule.v1alpha1.EpisodeServiceClient({
            credentials: { client_email: 'bogus', private_key: 'bogus' },
            projectId: 'bogus',
        });
        client.close();
    });

    it('has getProjectId method', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new episodeserviceModule.v1alpha1.EpisodeServiceClient({
            credentials: { client_email: 'bogus', private_key: 'bogus' },
            projectId: 'bogus',
        });
        client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
        const result = await client.getProjectId();
        assert.strictEqual(result, fakeProjectId);
        assert((client.auth.getProjectId as SinonStub).calledWithExactly());
    });

    it('has getProjectId method with callback', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new episodeserviceModule.v1alpha1.EpisodeServiceClient({
            credentials: { client_email: 'bogus', private_key: 'bogus' },
            projectId: 'bogus',
        });
        client.auth.getProjectId = sinon.stub().callsArgWith(0, null, fakeProjectId);
        const promise = new Promise((resolve, reject) => {
            client.getProjectId((err?: Error|null, projectId?: string|null) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(projectId);
                }
            });
        });
        const result = await promise;
        assert.strictEqual(result, fakeProjectId);
    });

    describe('getEpisode', () => {
        it('invokes getEpisode without error', async () => {
            const client = new episodeserviceModule.v1alpha1.EpisodeServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.GetEpisodeRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Episode());
            client.innerApiCalls.getEpisode = stubSimpleCall(expectedResponse);
            const [response] = await client.getEpisode(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getEpisode as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes getEpisode without error using callback', async () => {
            const client = new episodeserviceModule.v1alpha1.EpisodeServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.GetEpisodeRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Episode());
            client.innerApiCalls.getEpisode = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.getEpisode(
                    request,
                    (err?: Error|null, result?: protos.animeshon.multimedia.v1alpha1.IEpisode|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getEpisode as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes getEpisode with error', async () => {
            const client = new episodeserviceModule.v1alpha1.EpisodeServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.GetEpisodeRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.getEpisode = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.getEpisode(request), expectedError);
            assert((client.innerApiCalls.getEpisode as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('createEpisode', () => {
        it('invokes createEpisode without error', async () => {
            const client = new episodeserviceModule.v1alpha1.EpisodeServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.CreateEpisodeRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Episode());
            client.innerApiCalls.createEpisode = stubSimpleCall(expectedResponse);
            const [response] = await client.createEpisode(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.createEpisode as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes createEpisode without error using callback', async () => {
            const client = new episodeserviceModule.v1alpha1.EpisodeServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.CreateEpisodeRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Episode());
            client.innerApiCalls.createEpisode = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.createEpisode(
                    request,
                    (err?: Error|null, result?: protos.animeshon.multimedia.v1alpha1.IEpisode|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.createEpisode as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes createEpisode with error', async () => {
            const client = new episodeserviceModule.v1alpha1.EpisodeServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.CreateEpisodeRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.createEpisode = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.createEpisode(request), expectedError);
            assert((client.innerApiCalls.createEpisode as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('updateEpisode', () => {
        it('invokes updateEpisode without error', async () => {
            const client = new episodeserviceModule.v1alpha1.EpisodeServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.UpdateEpisodeRequest());
            request.episode = {};
            request.episode.name = '';
            const expectedHeaderRequestParams = "episode.name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Episode());
            client.innerApiCalls.updateEpisode = stubSimpleCall(expectedResponse);
            const [response] = await client.updateEpisode(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.updateEpisode as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes updateEpisode without error using callback', async () => {
            const client = new episodeserviceModule.v1alpha1.EpisodeServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.UpdateEpisodeRequest());
            request.episode = {};
            request.episode.name = '';
            const expectedHeaderRequestParams = "episode.name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Episode());
            client.innerApiCalls.updateEpisode = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.updateEpisode(
                    request,
                    (err?: Error|null, result?: protos.animeshon.multimedia.v1alpha1.IEpisode|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.updateEpisode as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes updateEpisode with error', async () => {
            const client = new episodeserviceModule.v1alpha1.EpisodeServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.UpdateEpisodeRequest());
            request.episode = {};
            request.episode.name = '';
            const expectedHeaderRequestParams = "episode.name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.updateEpisode = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.updateEpisode(request), expectedError);
            assert((client.innerApiCalls.updateEpisode as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('deleteEpisode', () => {
        it('invokes deleteEpisode without error', async () => {
            const client = new episodeserviceModule.v1alpha1.EpisodeServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.DeleteEpisodeRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.protobuf.Empty());
            client.innerApiCalls.deleteEpisode = stubSimpleCall(expectedResponse);
            const [response] = await client.deleteEpisode(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.deleteEpisode as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes deleteEpisode without error using callback', async () => {
            const client = new episodeserviceModule.v1alpha1.EpisodeServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.DeleteEpisodeRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.protobuf.Empty());
            client.innerApiCalls.deleteEpisode = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.deleteEpisode(
                    request,
                    (err?: Error|null, result?: protos.google.protobuf.IEmpty|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.deleteEpisode as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes deleteEpisode with error', async () => {
            const client = new episodeserviceModule.v1alpha1.EpisodeServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.DeleteEpisodeRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.deleteEpisode = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.deleteEpisode(request), expectedError);
            assert((client.innerApiCalls.deleteEpisode as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('listEpisodes', () => {
        it('invokes listEpisodes without error', async () => {
            const client = new episodeserviceModule.v1alpha1.EpisodeServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.ListEpisodesRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = [
              generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Episode()),
              generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Episode()),
              generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Episode()),
            ];
            client.innerApiCalls.listEpisodes = stubSimpleCall(expectedResponse);
            const [response] = await client.listEpisodes(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.listEpisodes as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes listEpisodes without error using callback', async () => {
            const client = new episodeserviceModule.v1alpha1.EpisodeServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.ListEpisodesRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = [
              generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Episode()),
              generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Episode()),
              generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Episode()),
            ];
            client.innerApiCalls.listEpisodes = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.listEpisodes(
                    request,
                    (err?: Error|null, result?: protos.animeshon.multimedia.v1alpha1.IEpisode[]|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.listEpisodes as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes listEpisodes with error', async () => {
            const client = new episodeserviceModule.v1alpha1.EpisodeServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.ListEpisodesRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.listEpisodes = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.listEpisodes(request), expectedError);
            assert((client.innerApiCalls.listEpisodes as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes listEpisodesStream without error', async () => {
            const client = new episodeserviceModule.v1alpha1.EpisodeServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.ListEpisodesRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedResponse = [
              generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Episode()),
              generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Episode()),
              generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Episode()),
            ];
            client.descriptors.page.listEpisodes.createStream = stubPageStreamingCall(expectedResponse);
            const stream = client.listEpisodesStream(request);
            const promise = new Promise((resolve, reject) => {
                const responses: protos.animeshon.multimedia.v1alpha1.Episode[] = [];
                stream.on('data', (response: protos.animeshon.multimedia.v1alpha1.Episode) => {
                    responses.push(response);
                });
                stream.on('end', () => {
                    resolve(responses);
                });
                stream.on('error', (err: Error) => {
                    reject(err);
                });
            });
            const responses = await promise;
            assert.deepStrictEqual(responses, expectedResponse);
            assert((client.descriptors.page.listEpisodes.createStream as SinonStub)
                .getCall(0).calledWith(client.innerApiCalls.listEpisodes, request));
            assert.strictEqual(
                (client.descriptors.page.listEpisodes.createStream as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });

        it('invokes listEpisodesStream with error', async () => {
            const client = new episodeserviceModule.v1alpha1.EpisodeServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.ListEpisodesRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedError = new Error('expected');
            client.descriptors.page.listEpisodes.createStream = stubPageStreamingCall(undefined, expectedError);
            const stream = client.listEpisodesStream(request);
            const promise = new Promise((resolve, reject) => {
                const responses: protos.animeshon.multimedia.v1alpha1.Episode[] = [];
                stream.on('data', (response: protos.animeshon.multimedia.v1alpha1.Episode) => {
                    responses.push(response);
                });
                stream.on('end', () => {
                    resolve(responses);
                });
                stream.on('error', (err: Error) => {
                    reject(err);
                });
            });
            await assert.rejects(promise, expectedError);
            assert((client.descriptors.page.listEpisodes.createStream as SinonStub)
                .getCall(0).calledWith(client.innerApiCalls.listEpisodes, request));
            assert.strictEqual(
                (client.descriptors.page.listEpisodes.createStream as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });

        it('uses async iteration with listEpisodes without error', async () => {
            const client = new episodeserviceModule.v1alpha1.EpisodeServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.ListEpisodesRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";const expectedResponse = [
              generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Episode()),
              generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Episode()),
              generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Episode()),
            ];
            client.descriptors.page.listEpisodes.asyncIterate = stubAsyncIterationCall(expectedResponse);
            const responses: protos.animeshon.multimedia.v1alpha1.IEpisode[] = [];
            const iterable = client.listEpisodesAsync(request);
            for await (const resource of iterable) {
                responses.push(resource!);
            }
            assert.deepStrictEqual(responses, expectedResponse);
            assert.deepStrictEqual(
                (client.descriptors.page.listEpisodes.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
            assert.strictEqual(
                (client.descriptors.page.listEpisodes.asyncIterate as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });

        it('uses async iteration with listEpisodes with error', async () => {
            const client = new episodeserviceModule.v1alpha1.EpisodeServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.ListEpisodesRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";const expectedError = new Error('expected');
            client.descriptors.page.listEpisodes.asyncIterate = stubAsyncIterationCall(undefined, expectedError);
            const iterable = client.listEpisodesAsync(request);
            await assert.rejects(async () => {
                const responses: protos.animeshon.multimedia.v1alpha1.IEpisode[] = [];
                for await (const resource of iterable) {
                    responses.push(resource!);
                }
            });
            assert.deepStrictEqual(
                (client.descriptors.page.listEpisodes.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
            assert.strictEqual(
                (client.descriptors.page.listEpisodes.asyncIterate as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });
    });
});