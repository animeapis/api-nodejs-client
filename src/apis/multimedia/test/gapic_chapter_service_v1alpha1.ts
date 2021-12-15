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
import * as chapterserviceModule from '../src';

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

describe('v1alpha1.ChapterServiceClient', () => {
    it('has servicePath', () => {
        const servicePath = chapterserviceModule.v1alpha1.ChapterServiceClient.servicePath;
        assert(servicePath);
    });

    it('has apiEndpoint', () => {
        const apiEndpoint = chapterserviceModule.v1alpha1.ChapterServiceClient.apiEndpoint;
        assert(apiEndpoint);
    });

    it('has port', () => {
        const port = chapterserviceModule.v1alpha1.ChapterServiceClient.port;
        assert(port);
        assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
        const client = new chapterserviceModule.v1alpha1.ChapterServiceClient();
        assert(client);
    });

    it('should create a client with gRPC fallback', () => {
        const client = new chapterserviceModule.v1alpha1.ChapterServiceClient({
            fallback: true,
        });
        assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
        const client = new chapterserviceModule.v1alpha1.ChapterServiceClient({
            credentials: { client_email: 'bogus', private_key: 'bogus' },
            projectId: 'bogus',
        });
        assert.strictEqual(client.chapterServiceStub, undefined);
        await client.initialize();
        assert(client.chapterServiceStub);
    });

    it('has close method', () => {
        const client = new chapterserviceModule.v1alpha1.ChapterServiceClient({
            credentials: { client_email: 'bogus', private_key: 'bogus' },
            projectId: 'bogus',
        });
        client.close();
    });

    it('has getProjectId method', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new chapterserviceModule.v1alpha1.ChapterServiceClient({
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
        const client = new chapterserviceModule.v1alpha1.ChapterServiceClient({
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

    describe('getChapter', () => {
        it('invokes getChapter without error', async () => {
            const client = new chapterserviceModule.v1alpha1.ChapterServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.GetChapterRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Chapter());
            client.innerApiCalls.getChapter = stubSimpleCall(expectedResponse);
            const [response] = await client.getChapter(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getChapter as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes getChapter without error using callback', async () => {
            const client = new chapterserviceModule.v1alpha1.ChapterServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.GetChapterRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Chapter());
            client.innerApiCalls.getChapter = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.getChapter(
                    request,
                    (err?: Error|null, result?: protos.animeshon.multimedia.v1alpha1.IChapter|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getChapter as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes getChapter with error', async () => {
            const client = new chapterserviceModule.v1alpha1.ChapterServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.GetChapterRequest());
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
            client.innerApiCalls.getChapter = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.getChapter(request), expectedError);
            assert((client.innerApiCalls.getChapter as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('createChapter', () => {
        it('invokes createChapter without error', async () => {
            const client = new chapterserviceModule.v1alpha1.ChapterServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.CreateChapterRequest());
            const expectedOptions = {};
            const expectedResponse = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Chapter());
            client.innerApiCalls.createChapter = stubSimpleCall(expectedResponse);
            const [response] = await client.createChapter(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.createChapter as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes createChapter without error using callback', async () => {
            const client = new chapterserviceModule.v1alpha1.ChapterServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.CreateChapterRequest());
            const expectedOptions = {};
            const expectedResponse = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Chapter());
            client.innerApiCalls.createChapter = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.createChapter(
                    request,
                    (err?: Error|null, result?: protos.animeshon.multimedia.v1alpha1.IChapter|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.createChapter as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes createChapter with error', async () => {
            const client = new chapterserviceModule.v1alpha1.ChapterServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.CreateChapterRequest());
            const expectedOptions = {};
            const expectedError = new Error('expected');
            client.innerApiCalls.createChapter = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.createChapter(request), expectedError);
            assert((client.innerApiCalls.createChapter as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('updateChapter', () => {
        it('invokes updateChapter without error', async () => {
            const client = new chapterserviceModule.v1alpha1.ChapterServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.UpdateChapterRequest());
            request.chapter = {};
            request.chapter.name = '';
            const expectedHeaderRequestParams = "chapter.name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Chapter());
            client.innerApiCalls.updateChapter = stubSimpleCall(expectedResponse);
            const [response] = await client.updateChapter(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.updateChapter as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes updateChapter without error using callback', async () => {
            const client = new chapterserviceModule.v1alpha1.ChapterServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.UpdateChapterRequest());
            request.chapter = {};
            request.chapter.name = '';
            const expectedHeaderRequestParams = "chapter.name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Chapter());
            client.innerApiCalls.updateChapter = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.updateChapter(
                    request,
                    (err?: Error|null, result?: protos.animeshon.multimedia.v1alpha1.IChapter|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.updateChapter as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes updateChapter with error', async () => {
            const client = new chapterserviceModule.v1alpha1.ChapterServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.UpdateChapterRequest());
            request.chapter = {};
            request.chapter.name = '';
            const expectedHeaderRequestParams = "chapter.name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.updateChapter = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.updateChapter(request), expectedError);
            assert((client.innerApiCalls.updateChapter as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('deleteChapter', () => {
        it('invokes deleteChapter without error', async () => {
            const client = new chapterserviceModule.v1alpha1.ChapterServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.DeleteChapterRequest());
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
            client.innerApiCalls.deleteChapter = stubSimpleCall(expectedResponse);
            const [response] = await client.deleteChapter(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.deleteChapter as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes deleteChapter without error using callback', async () => {
            const client = new chapterserviceModule.v1alpha1.ChapterServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.DeleteChapterRequest());
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
            client.innerApiCalls.deleteChapter = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.deleteChapter(
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
            assert((client.innerApiCalls.deleteChapter as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes deleteChapter with error', async () => {
            const client = new chapterserviceModule.v1alpha1.ChapterServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.DeleteChapterRequest());
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
            client.innerApiCalls.deleteChapter = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.deleteChapter(request), expectedError);
            assert((client.innerApiCalls.deleteChapter as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('listChapters', () => {
        it('invokes listChapters without error', async () => {
            const client = new chapterserviceModule.v1alpha1.ChapterServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.ListChaptersRequest());
            const expectedOptions = {};
            const expectedResponse = [
              generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Chapter()),
              generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Chapter()),
              generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Chapter()),
            ];
            client.innerApiCalls.listChapters = stubSimpleCall(expectedResponse);
            const [response] = await client.listChapters(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.listChapters as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes listChapters without error using callback', async () => {
            const client = new chapterserviceModule.v1alpha1.ChapterServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.ListChaptersRequest());
            const expectedOptions = {};
            const expectedResponse = [
              generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Chapter()),
              generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Chapter()),
              generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Chapter()),
            ];
            client.innerApiCalls.listChapters = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.listChapters(
                    request,
                    (err?: Error|null, result?: protos.animeshon.multimedia.v1alpha1.IChapter[]|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.listChapters as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes listChapters with error', async () => {
            const client = new chapterserviceModule.v1alpha1.ChapterServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.ListChaptersRequest());
            const expectedOptions = {};
            const expectedError = new Error('expected');
            client.innerApiCalls.listChapters = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.listChapters(request), expectedError);
            assert((client.innerApiCalls.listChapters as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes listChaptersStream without error', async () => {
            const client = new chapterserviceModule.v1alpha1.ChapterServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.ListChaptersRequest());
            const expectedResponse = [
              generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Chapter()),
              generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Chapter()),
              generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Chapter()),
            ];
            client.descriptors.page.listChapters.createStream = stubPageStreamingCall(expectedResponse);
            const stream = client.listChaptersStream(request);
            const promise = new Promise((resolve, reject) => {
                const responses: protos.animeshon.multimedia.v1alpha1.Chapter[] = [];
                stream.on('data', (response: protos.animeshon.multimedia.v1alpha1.Chapter) => {
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
            assert((client.descriptors.page.listChapters.createStream as SinonStub)
                .getCall(0).calledWith(client.innerApiCalls.listChapters, request));
        });

        it('invokes listChaptersStream with error', async () => {
            const client = new chapterserviceModule.v1alpha1.ChapterServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.ListChaptersRequest());
            const expectedError = new Error('expected');
            client.descriptors.page.listChapters.createStream = stubPageStreamingCall(undefined, expectedError);
            const stream = client.listChaptersStream(request);
            const promise = new Promise((resolve, reject) => {
                const responses: protos.animeshon.multimedia.v1alpha1.Chapter[] = [];
                stream.on('data', (response: protos.animeshon.multimedia.v1alpha1.Chapter) => {
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
            assert((client.descriptors.page.listChapters.createStream as SinonStub)
                .getCall(0).calledWith(client.innerApiCalls.listChapters, request));
        });

        it('uses async iteration with listChapters without error', async () => {
            const client = new chapterserviceModule.v1alpha1.ChapterServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.ListChaptersRequest());const expectedResponse = [
              generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Chapter()),
              generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Chapter()),
              generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.Chapter()),
            ];
            client.descriptors.page.listChapters.asyncIterate = stubAsyncIterationCall(expectedResponse);
            const responses: protos.animeshon.multimedia.v1alpha1.IChapter[] = [];
            const iterable = client.listChaptersAsync(request);
            for await (const resource of iterable) {
                responses.push(resource!);
            }
            assert.deepStrictEqual(responses, expectedResponse);
            assert.deepStrictEqual(
                (client.descriptors.page.listChapters.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
        });

        it('uses async iteration with listChapters with error', async () => {
            const client = new chapterserviceModule.v1alpha1.ChapterServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.multimedia.v1alpha1.ListChaptersRequest());const expectedError = new Error('expected');
            client.descriptors.page.listChapters.asyncIterate = stubAsyncIterationCall(undefined, expectedError);
            const iterable = client.listChaptersAsync(request);
            await assert.rejects(async () => {
                const responses: protos.animeshon.multimedia.v1alpha1.IChapter[] = [];
                for await (const resource of iterable) {
                    responses.push(resource!);
                }
            });
            assert.deepStrictEqual(
                (client.descriptors.page.listChapters.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
        });
    });
});
