// Copyright 2022 Google LLC
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
import * as archiveModule from '../src';

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

describe('v1alpha1.ArchiveClient', () => {
    it('has servicePath', () => {
        const servicePath = archiveModule.v1alpha1.ArchiveClient.servicePath;
        assert(servicePath);
    });

    it('has apiEndpoint', () => {
        const apiEndpoint = archiveModule.v1alpha1.ArchiveClient.apiEndpoint;
        assert(apiEndpoint);
    });

    it('has port', () => {
        const port = archiveModule.v1alpha1.ArchiveClient.port;
        assert(port);
        assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
        const client = new archiveModule.v1alpha1.ArchiveClient();
        assert(client);
    });

    it('should create a client with gRPC fallback', () => {
        const client = new archiveModule.v1alpha1.ArchiveClient({
            fallback: true,
        });
        assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
        const client = new archiveModule.v1alpha1.ArchiveClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        assert.strictEqual(client.archiveStub, undefined);
        await client.initialize();
        assert(client.archiveStub);
    });

    it('has close method', () => {
        const client = new archiveModule.v1alpha1.ArchiveClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.close();
    });

    it('has getProjectId method', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new archiveModule.v1alpha1.ArchiveClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
        const result = await client.getProjectId();
        assert.strictEqual(result, fakeProjectId);
        assert((client.auth.getProjectId as SinonStub).calledWithExactly());
    });

    it('has getProjectId method with callback', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new archiveModule.v1alpha1.ArchiveClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
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

    describe('getPage', () => {
        it('invokes getPage without error', async () => {
            const client = new archiveModule.v1alpha1.ArchiveClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.webpage.v1alpha1.GetPageRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.animeshon.webpage.v1alpha1.Page());
            client.innerApiCalls.getPage = stubSimpleCall(expectedResponse);
            const [response] = await client.getPage(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getPage as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes getPage without error using callback', async () => {
            const client = new archiveModule.v1alpha1.ArchiveClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.webpage.v1alpha1.GetPageRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.animeshon.webpage.v1alpha1.Page());
            client.innerApiCalls.getPage = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.getPage(
                    request,
                    (err?: Error|null, result?: protos.animeshon.webpage.v1alpha1.IPage|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getPage as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes getPage with error', async () => {
            const client = new archiveModule.v1alpha1.ArchiveClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.webpage.v1alpha1.GetPageRequest());
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
            client.innerApiCalls.getPage = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.getPage(request), expectedError);
            assert((client.innerApiCalls.getPage as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('importPage', () => {
        it('invokes importPage without error', async () => {
            const client = new archiveModule.v1alpha1.ArchiveClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.webpage.v1alpha1.ImportPageRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.animeshon.webpage.v1alpha1.ImportPageResponse());
            client.innerApiCalls.importPage = stubSimpleCall(expectedResponse);
            const [response] = await client.importPage(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.importPage as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes importPage without error using callback', async () => {
            const client = new archiveModule.v1alpha1.ArchiveClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.webpage.v1alpha1.ImportPageRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.animeshon.webpage.v1alpha1.ImportPageResponse());
            client.innerApiCalls.importPage = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.importPage(
                    request,
                    (err?: Error|null, result?: protos.animeshon.webpage.v1alpha1.IImportPageResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.importPage as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes importPage with error', async () => {
            const client = new archiveModule.v1alpha1.ArchiveClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.webpage.v1alpha1.ImportPageRequest());
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
            client.innerApiCalls.importPage = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.importPage(request), expectedError);
            assert((client.innerApiCalls.importPage as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('createPage', () => {
        it('invokes createPage without error', async () => {
            const client = new archiveModule.v1alpha1.ArchiveClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.webpage.v1alpha1.CreatePageRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.animeshon.webpage.v1alpha1.Page());
            client.innerApiCalls.createPage = stubSimpleCall(expectedResponse);
            const [response] = await client.createPage(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.createPage as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes createPage without error using callback', async () => {
            const client = new archiveModule.v1alpha1.ArchiveClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.webpage.v1alpha1.CreatePageRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.animeshon.webpage.v1alpha1.Page());
            client.innerApiCalls.createPage = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.createPage(
                    request,
                    (err?: Error|null, result?: protos.animeshon.webpage.v1alpha1.IPage|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.createPage as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes createPage with error', async () => {
            const client = new archiveModule.v1alpha1.ArchiveClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.webpage.v1alpha1.CreatePageRequest());
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
            client.innerApiCalls.createPage = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.createPage(request), expectedError);
            assert((client.innerApiCalls.createPage as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('deletePage', () => {
        it('invokes deletePage without error', async () => {
            const client = new archiveModule.v1alpha1.ArchiveClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.webpage.v1alpha1.DeletePageRequest());
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
            client.innerApiCalls.deletePage = stubSimpleCall(expectedResponse);
            const [response] = await client.deletePage(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.deletePage as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes deletePage without error using callback', async () => {
            const client = new archiveModule.v1alpha1.ArchiveClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.webpage.v1alpha1.DeletePageRequest());
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
            client.innerApiCalls.deletePage = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.deletePage(
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
            assert((client.innerApiCalls.deletePage as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes deletePage with error', async () => {
            const client = new archiveModule.v1alpha1.ArchiveClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.webpage.v1alpha1.DeletePageRequest());
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
            client.innerApiCalls.deletePage = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.deletePage(request), expectedError);
            assert((client.innerApiCalls.deletePage as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('listPages', () => {
        it('invokes listPages without error', async () => {
            const client = new archiveModule.v1alpha1.ArchiveClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.webpage.v1alpha1.ListPagesRequest());
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
              generateSampleMessage(new protos.animeshon.webpage.v1alpha1.Page()),
              generateSampleMessage(new protos.animeshon.webpage.v1alpha1.Page()),
              generateSampleMessage(new protos.animeshon.webpage.v1alpha1.Page()),
            ];
            client.innerApiCalls.listPages = stubSimpleCall(expectedResponse);
            const [response] = await client.listPages(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.listPages as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes listPages without error using callback', async () => {
            const client = new archiveModule.v1alpha1.ArchiveClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.webpage.v1alpha1.ListPagesRequest());
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
              generateSampleMessage(new protos.animeshon.webpage.v1alpha1.Page()),
              generateSampleMessage(new protos.animeshon.webpage.v1alpha1.Page()),
              generateSampleMessage(new protos.animeshon.webpage.v1alpha1.Page()),
            ];
            client.innerApiCalls.listPages = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.listPages(
                    request,
                    (err?: Error|null, result?: protos.animeshon.webpage.v1alpha1.IPage[]|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.listPages as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes listPages with error', async () => {
            const client = new archiveModule.v1alpha1.ArchiveClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.webpage.v1alpha1.ListPagesRequest());
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
            client.innerApiCalls.listPages = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.listPages(request), expectedError);
            assert((client.innerApiCalls.listPages as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes listPagesStream without error', async () => {
            const client = new archiveModule.v1alpha1.ArchiveClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.webpage.v1alpha1.ListPagesRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedResponse = [
              generateSampleMessage(new protos.animeshon.webpage.v1alpha1.Page()),
              generateSampleMessage(new protos.animeshon.webpage.v1alpha1.Page()),
              generateSampleMessage(new protos.animeshon.webpage.v1alpha1.Page()),
            ];
            client.descriptors.page.listPages.createStream = stubPageStreamingCall(expectedResponse);
            const stream = client.listPagesStream(request);
            const promise = new Promise((resolve, reject) => {
                const responses: protos.animeshon.webpage.v1alpha1.Page[] = [];
                stream.on('data', (response: protos.animeshon.webpage.v1alpha1.Page) => {
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
            assert((client.descriptors.page.listPages.createStream as SinonStub)
                .getCall(0).calledWith(client.innerApiCalls.listPages, request));
            assert.strictEqual(
                (client.descriptors.page.listPages.createStream as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });

        it('invokes listPagesStream with error', async () => {
            const client = new archiveModule.v1alpha1.ArchiveClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.webpage.v1alpha1.ListPagesRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedError = new Error('expected');
            client.descriptors.page.listPages.createStream = stubPageStreamingCall(undefined, expectedError);
            const stream = client.listPagesStream(request);
            const promise = new Promise((resolve, reject) => {
                const responses: protos.animeshon.webpage.v1alpha1.Page[] = [];
                stream.on('data', (response: protos.animeshon.webpage.v1alpha1.Page) => {
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
            assert((client.descriptors.page.listPages.createStream as SinonStub)
                .getCall(0).calledWith(client.innerApiCalls.listPages, request));
            assert.strictEqual(
                (client.descriptors.page.listPages.createStream as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });

        it('uses async iteration with listPages without error', async () => {
            const client = new archiveModule.v1alpha1.ArchiveClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.webpage.v1alpha1.ListPagesRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedResponse = [
              generateSampleMessage(new protos.animeshon.webpage.v1alpha1.Page()),
              generateSampleMessage(new protos.animeshon.webpage.v1alpha1.Page()),
              generateSampleMessage(new protos.animeshon.webpage.v1alpha1.Page()),
            ];
            client.descriptors.page.listPages.asyncIterate = stubAsyncIterationCall(expectedResponse);
            const responses: protos.animeshon.webpage.v1alpha1.IPage[] = [];
            const iterable = client.listPagesAsync(request);
            for await (const resource of iterable) {
                responses.push(resource!);
            }
            assert.deepStrictEqual(responses, expectedResponse);
            assert.deepStrictEqual(
                (client.descriptors.page.listPages.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
            assert.strictEqual(
                (client.descriptors.page.listPages.asyncIterate as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });

        it('uses async iteration with listPages with error', async () => {
            const client = new archiveModule.v1alpha1.ArchiveClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.webpage.v1alpha1.ListPagesRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";const expectedError = new Error('expected');
            client.descriptors.page.listPages.asyncIterate = stubAsyncIterationCall(undefined, expectedError);
            const iterable = client.listPagesAsync(request);
            await assert.rejects(async () => {
                const responses: protos.animeshon.webpage.v1alpha1.IPage[] = [];
                for await (const resource of iterable) {
                    responses.push(resource!);
                }
            });
            assert.deepStrictEqual(
                (client.descriptors.page.listPages.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
            assert.strictEqual(
                (client.descriptors.page.listPages.asyncIterate as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });
    });
});
