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
import * as keeperModule from '../src';

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

describe('v1alpha1.KeeperClient', () => {
    it('has servicePath', () => {
        const servicePath = keeperModule.v1alpha1.KeeperClient.servicePath;
        assert(servicePath);
    });

    it('has apiEndpoint', () => {
        const apiEndpoint = keeperModule.v1alpha1.KeeperClient.apiEndpoint;
        assert(apiEndpoint);
    });

    it('has port', () => {
        const port = keeperModule.v1alpha1.KeeperClient.port;
        assert(port);
        assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
        const client = new keeperModule.v1alpha1.KeeperClient();
        assert(client);
    });

    it('should create a client with gRPC fallback', () => {
        const client = new keeperModule.v1alpha1.KeeperClient({
            fallback: true,
        });
        assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
        const client = new keeperModule.v1alpha1.KeeperClient({
            credentials: { client_email: 'bogus', private_key: 'bogus' },
            projectId: 'bogus',
        });
        assert.strictEqual(client.keeperStub, undefined);
        await client.initialize();
        assert(client.keeperStub);
    });

    it('has close method', () => {
        const client = new keeperModule.v1alpha1.KeeperClient({
            credentials: { client_email: 'bogus', private_key: 'bogus' },
            projectId: 'bogus',
        });
        client.close();
    });

    it('has getProjectId method', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new keeperModule.v1alpha1.KeeperClient({
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
        const client = new keeperModule.v1alpha1.KeeperClient({
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

    describe('getCredentials', () => {
        it('invokes getCredentials without error', async () => {
            const client = new keeperModule.v1alpha1.KeeperClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.credentials.v1alpha1.GetCredentialsRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.animeshon.credentials.v1alpha1.Credentials());
            client.innerApiCalls.getCredentials = stubSimpleCall(expectedResponse);
            const [response] = await client.getCredentials(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getCredentials as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes getCredentials without error using callback', async () => {
            const client = new keeperModule.v1alpha1.KeeperClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.credentials.v1alpha1.GetCredentialsRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.animeshon.credentials.v1alpha1.Credentials());
            client.innerApiCalls.getCredentials = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.getCredentials(
                    request,
                    (err?: Error|null, result?: protos.animeshon.credentials.v1alpha1.ICredentials|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getCredentials as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes getCredentials with error', async () => {
            const client = new keeperModule.v1alpha1.KeeperClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.credentials.v1alpha1.GetCredentialsRequest());
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
            client.innerApiCalls.getCredentials = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.getCredentials(request), expectedError);
            assert((client.innerApiCalls.getCredentials as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('createCredentials', () => {
        it('invokes createCredentials without error', async () => {
            const client = new keeperModule.v1alpha1.KeeperClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.credentials.v1alpha1.CreateCredentialsRequest());
            request.credentials = {};
            request.credentials.name = '';
            const expectedHeaderRequestParams = "credentials.name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.animeshon.credentials.v1alpha1.Credentials());
            client.innerApiCalls.createCredentials = stubSimpleCall(expectedResponse);
            const [response] = await client.createCredentials(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.createCredentials as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes createCredentials without error using callback', async () => {
            const client = new keeperModule.v1alpha1.KeeperClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.credentials.v1alpha1.CreateCredentialsRequest());
            request.credentials = {};
            request.credentials.name = '';
            const expectedHeaderRequestParams = "credentials.name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.animeshon.credentials.v1alpha1.Credentials());
            client.innerApiCalls.createCredentials = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.createCredentials(
                    request,
                    (err?: Error|null, result?: protos.animeshon.credentials.v1alpha1.ICredentials|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.createCredentials as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes createCredentials with error', async () => {
            const client = new keeperModule.v1alpha1.KeeperClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.credentials.v1alpha1.CreateCredentialsRequest());
            request.credentials = {};
            request.credentials.name = '';
            const expectedHeaderRequestParams = "credentials.name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.createCredentials = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.createCredentials(request), expectedError);
            assert((client.innerApiCalls.createCredentials as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('deleteCredentials', () => {
        it('invokes deleteCredentials without error', async () => {
            const client = new keeperModule.v1alpha1.KeeperClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.credentials.v1alpha1.DeleteCredentialsRequest());
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
            client.innerApiCalls.deleteCredentials = stubSimpleCall(expectedResponse);
            const [response] = await client.deleteCredentials(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.deleteCredentials as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes deleteCredentials without error using callback', async () => {
            const client = new keeperModule.v1alpha1.KeeperClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.credentials.v1alpha1.DeleteCredentialsRequest());
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
            client.innerApiCalls.deleteCredentials = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.deleteCredentials(
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
            assert((client.innerApiCalls.deleteCredentials as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes deleteCredentials with error', async () => {
            const client = new keeperModule.v1alpha1.KeeperClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.credentials.v1alpha1.DeleteCredentialsRequest());
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
            client.innerApiCalls.deleteCredentials = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.deleteCredentials(request), expectedError);
            assert((client.innerApiCalls.deleteCredentials as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('actAsCredentials', () => {
        it('invokes actAsCredentials without error', async () => {
            const client = new keeperModule.v1alpha1.KeeperClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.credentials.v1alpha1.ActAsCredentialsRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.animeshon.credentials.v1alpha1.ActAsCredentialsResponse());
            client.innerApiCalls.actAsCredentials = stubSimpleCall(expectedResponse);
            const [response] = await client.actAsCredentials(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.actAsCredentials as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes actAsCredentials without error using callback', async () => {
            const client = new keeperModule.v1alpha1.KeeperClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.credentials.v1alpha1.ActAsCredentialsRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.animeshon.credentials.v1alpha1.ActAsCredentialsResponse());
            client.innerApiCalls.actAsCredentials = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.actAsCredentials(
                    request,
                    (err?: Error|null, result?: protos.animeshon.credentials.v1alpha1.IActAsCredentialsResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.actAsCredentials as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes actAsCredentials with error', async () => {
            const client = new keeperModule.v1alpha1.KeeperClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.credentials.v1alpha1.ActAsCredentialsRequest());
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
            client.innerApiCalls.actAsCredentials = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.actAsCredentials(request), expectedError);
            assert((client.innerApiCalls.actAsCredentials as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('listCredentials', () => {
        it('invokes listCredentials without error', async () => {
            const client = new keeperModule.v1alpha1.KeeperClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.credentials.v1alpha1.ListCredentialsRequest());
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
              generateSampleMessage(new protos.animeshon.credentials.v1alpha1.Credentials()),
              generateSampleMessage(new protos.animeshon.credentials.v1alpha1.Credentials()),
              generateSampleMessage(new protos.animeshon.credentials.v1alpha1.Credentials()),
            ];
            client.innerApiCalls.listCredentials = stubSimpleCall(expectedResponse);
            const [response] = await client.listCredentials(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.listCredentials as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes listCredentials without error using callback', async () => {
            const client = new keeperModule.v1alpha1.KeeperClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.credentials.v1alpha1.ListCredentialsRequest());
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
              generateSampleMessage(new protos.animeshon.credentials.v1alpha1.Credentials()),
              generateSampleMessage(new protos.animeshon.credentials.v1alpha1.Credentials()),
              generateSampleMessage(new protos.animeshon.credentials.v1alpha1.Credentials()),
            ];
            client.innerApiCalls.listCredentials = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.listCredentials(
                    request,
                    (err?: Error|null, result?: protos.animeshon.credentials.v1alpha1.ICredentials[]|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.listCredentials as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes listCredentials with error', async () => {
            const client = new keeperModule.v1alpha1.KeeperClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.credentials.v1alpha1.ListCredentialsRequest());
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
            client.innerApiCalls.listCredentials = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.listCredentials(request), expectedError);
            assert((client.innerApiCalls.listCredentials as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes listCredentialsStream without error', async () => {
            const client = new keeperModule.v1alpha1.KeeperClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.credentials.v1alpha1.ListCredentialsRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedResponse = [
              generateSampleMessage(new protos.animeshon.credentials.v1alpha1.Credentials()),
              generateSampleMessage(new protos.animeshon.credentials.v1alpha1.Credentials()),
              generateSampleMessage(new protos.animeshon.credentials.v1alpha1.Credentials()),
            ];
            client.descriptors.page.listCredentials.createStream = stubPageStreamingCall(expectedResponse);
            const stream = client.listCredentialsStream(request);
            const promise = new Promise((resolve, reject) => {
                const responses: protos.animeshon.credentials.v1alpha1.Credentials[] = [];
                stream.on('data', (response: protos.animeshon.credentials.v1alpha1.Credentials) => {
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
            assert((client.descriptors.page.listCredentials.createStream as SinonStub)
                .getCall(0).calledWith(client.innerApiCalls.listCredentials, request));
            assert.strictEqual(
                (client.descriptors.page.listCredentials.createStream as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });

        it('invokes listCredentialsStream with error', async () => {
            const client = new keeperModule.v1alpha1.KeeperClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.credentials.v1alpha1.ListCredentialsRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedError = new Error('expected');
            client.descriptors.page.listCredentials.createStream = stubPageStreamingCall(undefined, expectedError);
            const stream = client.listCredentialsStream(request);
            const promise = new Promise((resolve, reject) => {
                const responses: protos.animeshon.credentials.v1alpha1.Credentials[] = [];
                stream.on('data', (response: protos.animeshon.credentials.v1alpha1.Credentials) => {
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
            assert((client.descriptors.page.listCredentials.createStream as SinonStub)
                .getCall(0).calledWith(client.innerApiCalls.listCredentials, request));
            assert.strictEqual(
                (client.descriptors.page.listCredentials.createStream as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });

        it('uses async iteration with listCredentials without error', async () => {
            const client = new keeperModule.v1alpha1.KeeperClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.credentials.v1alpha1.ListCredentialsRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";const expectedResponse = [
              generateSampleMessage(new protos.animeshon.credentials.v1alpha1.Credentials()),
              generateSampleMessage(new protos.animeshon.credentials.v1alpha1.Credentials()),
              generateSampleMessage(new protos.animeshon.credentials.v1alpha1.Credentials()),
            ];
            client.descriptors.page.listCredentials.asyncIterate = stubAsyncIterationCall(expectedResponse);
            const responses: protos.animeshon.credentials.v1alpha1.ICredentials[] = [];
            const iterable = client.listCredentialsAsync(request);
            for await (const resource of iterable) {
                responses.push(resource!);
            }
            assert.deepStrictEqual(responses, expectedResponse);
            assert.deepStrictEqual(
                (client.descriptors.page.listCredentials.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
            assert.strictEqual(
                (client.descriptors.page.listCredentials.asyncIterate as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });

        it('uses async iteration with listCredentials with error', async () => {
            const client = new keeperModule.v1alpha1.KeeperClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.credentials.v1alpha1.ListCredentialsRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";const expectedError = new Error('expected');
            client.descriptors.page.listCredentials.asyncIterate = stubAsyncIterationCall(undefined, expectedError);
            const iterable = client.listCredentialsAsync(request);
            await assert.rejects(async () => {
                const responses: protos.animeshon.credentials.v1alpha1.ICredentials[] = [];
                for await (const resource of iterable) {
                    responses.push(resource!);
                }
            });
            assert.deepStrictEqual(
                (client.descriptors.page.listCredentials.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
            assert.strictEqual(
                (client.descriptors.page.listCredentials.asyncIterate as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });
    });
});
