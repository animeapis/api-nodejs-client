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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as webcacheModule from '../src';

import {PassThrough} from 'stream';

import {protobuf} from 'google-gax';

// Dynamically loaded proto JSON is needed to get the type information
// to fill in default values for request objects
const root = protobuf.Root.fromJSON(require('../protos/protos.json')).resolveAll();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTypeDefaultValue(typeName: string, fields: string[]) {
    let type = root.lookupType(typeName) as protobuf.Type;
    for (const field of fields.slice(0, -1)) {
        type = type.fields[field]?.resolvedType as protobuf.Type;
    }
    return type.fields[fields[fields.length - 1]]?.defaultValue;
}

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

describe('v1alpha1.WebCacheClient', () => {
    describe('Common methods', () => {
        it('has servicePath', () => {
            const servicePath = webcacheModule.v1alpha1.WebCacheClient.servicePath;
            assert(servicePath);
        });

        it('has apiEndpoint', () => {
            const apiEndpoint = webcacheModule.v1alpha1.WebCacheClient.apiEndpoint;
            assert(apiEndpoint);
        });

        it('has port', () => {
            const port = webcacheModule.v1alpha1.WebCacheClient.port;
            assert(port);
            assert(typeof port === 'number');
        });

        it('should create a client with no option', () => {
            const client = new webcacheModule.v1alpha1.WebCacheClient();
            assert(client);
        });

        it('should create a client with gRPC fallback', () => {
            const client = new webcacheModule.v1alpha1.WebCacheClient({
                fallback: true,
            });
            assert(client);
        });

        it('has initialize method and supports deferred initialization', async () => {
            const client = new webcacheModule.v1alpha1.WebCacheClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.webCacheStub, undefined);
            await client.initialize();
            assert(client.webCacheStub);
        });

        it('has close method for the initialized client', done => {
            const client = new webcacheModule.v1alpha1.WebCacheClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            assert(client.webCacheStub);
            client.close().then(() => {
                done();
            });
        });

        it('has close method for the non-initialized client', done => {
            const client = new webcacheModule.v1alpha1.WebCacheClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.webCacheStub, undefined);
            client.close().then(() => {
                done();
            });
        });

        it('has getProjectId method', async () => {
            const fakeProjectId = 'fake-project-id';
            const client = new webcacheModule.v1alpha1.WebCacheClient({
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
            const client = new webcacheModule.v1alpha1.WebCacheClient({
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
    });

    describe('createCache', () => {
        it('invokes createCache without error', async () => {
            const client = new webcacheModule.v1alpha1.WebCacheClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.animeshon.webcache.v1alpha1.CreateCacheRequest()
            );
            const expectedResponse = generateSampleMessage(
              new protos.animeshon.webcache.v1alpha1.Cache()
            );
            client.innerApiCalls.createCache = stubSimpleCall(expectedResponse);
            const [response] = await client.createCache(request);
            assert.deepStrictEqual(response, expectedResponse);
        });

        it('invokes createCache without error using callback', async () => {
            const client = new webcacheModule.v1alpha1.WebCacheClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.animeshon.webcache.v1alpha1.CreateCacheRequest()
            );
            const expectedResponse = generateSampleMessage(
              new protos.animeshon.webcache.v1alpha1.Cache()
            );
            client.innerApiCalls.createCache = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.createCache(
                    request,
                    (err?: Error|null, result?: protos.animeshon.webcache.v1alpha1.ICache|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
        });

        it('invokes createCache with error', async () => {
            const client = new webcacheModule.v1alpha1.WebCacheClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.animeshon.webcache.v1alpha1.CreateCacheRequest()
            );
            const expectedError = new Error('expected');
            client.innerApiCalls.createCache = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.createCache(request), expectedError);
        });

        it('invokes createCache with closed client', async () => {
            const client = new webcacheModule.v1alpha1.WebCacheClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.animeshon.webcache.v1alpha1.CreateCacheRequest()
            );
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.createCache(request), expectedError);
        });
    });

    describe('getCache', () => {
        it('invokes getCache without error', async () => {
            const client = new webcacheModule.v1alpha1.WebCacheClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.animeshon.webcache.v1alpha1.GetCacheRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.animeshon.webcache.v1alpha1.GetCacheRequest', ['name']);
            request.name = defaultValue1;
            const expectedHeaderRequestParams = `name=${defaultValue1}`;
            const expectedResponse = generateSampleMessage(
              new protos.animeshon.webcache.v1alpha1.Cache()
            );
            client.innerApiCalls.getCache = stubSimpleCall(expectedResponse);
            const [response] = await client.getCache(request);
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.getCache as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.getCache as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes getCache without error using callback', async () => {
            const client = new webcacheModule.v1alpha1.WebCacheClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.animeshon.webcache.v1alpha1.GetCacheRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.animeshon.webcache.v1alpha1.GetCacheRequest', ['name']);
            request.name = defaultValue1;
            const expectedHeaderRequestParams = `name=${defaultValue1}`;
            const expectedResponse = generateSampleMessage(
              new protos.animeshon.webcache.v1alpha1.Cache()
            );
            client.innerApiCalls.getCache = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.getCache(
                    request,
                    (err?: Error|null, result?: protos.animeshon.webcache.v1alpha1.ICache|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.getCache as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.getCache as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes getCache with error', async () => {
            const client = new webcacheModule.v1alpha1.WebCacheClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.animeshon.webcache.v1alpha1.GetCacheRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.animeshon.webcache.v1alpha1.GetCacheRequest', ['name']);
            request.name = defaultValue1;
            const expectedHeaderRequestParams = `name=${defaultValue1}`;
            const expectedError = new Error('expected');
            client.innerApiCalls.getCache = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.getCache(request), expectedError);
            const actualRequest = (client.innerApiCalls.getCache as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.getCache as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes getCache with closed client', async () => {
            const client = new webcacheModule.v1alpha1.WebCacheClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.animeshon.webcache.v1alpha1.GetCacheRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.animeshon.webcache.v1alpha1.GetCacheRequest', ['name']);
            request.name = defaultValue1;
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.getCache(request), expectedError);
        });
    });

    describe('deleteCache', () => {
        it('invokes deleteCache without error', async () => {
            const client = new webcacheModule.v1alpha1.WebCacheClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.animeshon.webcache.v1alpha1.DeleteCacheRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.animeshon.webcache.v1alpha1.DeleteCacheRequest', ['name']);
            request.name = defaultValue1;
            const expectedHeaderRequestParams = `name=${defaultValue1}`;
            const expectedResponse = generateSampleMessage(
              new protos.google.protobuf.Empty()
            );
            client.innerApiCalls.deleteCache = stubSimpleCall(expectedResponse);
            const [response] = await client.deleteCache(request);
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.deleteCache as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.deleteCache as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes deleteCache without error using callback', async () => {
            const client = new webcacheModule.v1alpha1.WebCacheClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.animeshon.webcache.v1alpha1.DeleteCacheRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.animeshon.webcache.v1alpha1.DeleteCacheRequest', ['name']);
            request.name = defaultValue1;
            const expectedHeaderRequestParams = `name=${defaultValue1}`;
            const expectedResponse = generateSampleMessage(
              new protos.google.protobuf.Empty()
            );
            client.innerApiCalls.deleteCache = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.deleteCache(
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
            const actualRequest = (client.innerApiCalls.deleteCache as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.deleteCache as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes deleteCache with error', async () => {
            const client = new webcacheModule.v1alpha1.WebCacheClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.animeshon.webcache.v1alpha1.DeleteCacheRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.animeshon.webcache.v1alpha1.DeleteCacheRequest', ['name']);
            request.name = defaultValue1;
            const expectedHeaderRequestParams = `name=${defaultValue1}`;
            const expectedError = new Error('expected');
            client.innerApiCalls.deleteCache = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.deleteCache(request), expectedError);
            const actualRequest = (client.innerApiCalls.deleteCache as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.deleteCache as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes deleteCache with closed client', async () => {
            const client = new webcacheModule.v1alpha1.WebCacheClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.animeshon.webcache.v1alpha1.DeleteCacheRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.animeshon.webcache.v1alpha1.DeleteCacheRequest', ['name']);
            request.name = defaultValue1;
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.deleteCache(request), expectedError);
        });
    });

    describe('listCaches', () => {
        it('invokes listCaches without error', async () => {
            const client = new webcacheModule.v1alpha1.WebCacheClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.animeshon.webcache.v1alpha1.ListCachesRequest()
            );const expectedResponse = [
              generateSampleMessage(new protos.animeshon.webcache.v1alpha1.Cache()),
              generateSampleMessage(new protos.animeshon.webcache.v1alpha1.Cache()),
              generateSampleMessage(new protos.animeshon.webcache.v1alpha1.Cache()),
            ];
            client.innerApiCalls.listCaches = stubSimpleCall(expectedResponse);
            const [response] = await client.listCaches(request);
            assert.deepStrictEqual(response, expectedResponse);
        });

        it('invokes listCaches without error using callback', async () => {
            const client = new webcacheModule.v1alpha1.WebCacheClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.animeshon.webcache.v1alpha1.ListCachesRequest()
            );const expectedResponse = [
              generateSampleMessage(new protos.animeshon.webcache.v1alpha1.Cache()),
              generateSampleMessage(new protos.animeshon.webcache.v1alpha1.Cache()),
              generateSampleMessage(new protos.animeshon.webcache.v1alpha1.Cache()),
            ];
            client.innerApiCalls.listCaches = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.listCaches(
                    request,
                    (err?: Error|null, result?: protos.animeshon.webcache.v1alpha1.ICache[]|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
        });

        it('invokes listCaches with error', async () => {
            const client = new webcacheModule.v1alpha1.WebCacheClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.animeshon.webcache.v1alpha1.ListCachesRequest()
            );
            const expectedError = new Error('expected');
            client.innerApiCalls.listCaches = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.listCaches(request), expectedError);
        });

        it('invokes listCachesStream without error', async () => {
            const client = new webcacheModule.v1alpha1.WebCacheClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.animeshon.webcache.v1alpha1.ListCachesRequest()
            );
            const expectedResponse = [
              generateSampleMessage(new protos.animeshon.webcache.v1alpha1.Cache()),
              generateSampleMessage(new protos.animeshon.webcache.v1alpha1.Cache()),
              generateSampleMessage(new protos.animeshon.webcache.v1alpha1.Cache()),
            ];
            client.descriptors.page.listCaches.createStream = stubPageStreamingCall(expectedResponse);
            const stream = client.listCachesStream(request);
            const promise = new Promise((resolve, reject) => {
                const responses: protos.animeshon.webcache.v1alpha1.Cache[] = [];
                stream.on('data', (response: protos.animeshon.webcache.v1alpha1.Cache) => {
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
            assert((client.descriptors.page.listCaches.createStream as SinonStub)
                .getCall(0).calledWith(client.innerApiCalls.listCaches, request));
        });

        it('invokes listCachesStream with error', async () => {
            const client = new webcacheModule.v1alpha1.WebCacheClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.animeshon.webcache.v1alpha1.ListCachesRequest()
            );
            const expectedError = new Error('expected');
            client.descriptors.page.listCaches.createStream = stubPageStreamingCall(undefined, expectedError);
            const stream = client.listCachesStream(request);
            const promise = new Promise((resolve, reject) => {
                const responses: protos.animeshon.webcache.v1alpha1.Cache[] = [];
                stream.on('data', (response: protos.animeshon.webcache.v1alpha1.Cache) => {
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
            assert((client.descriptors.page.listCaches.createStream as SinonStub)
                .getCall(0).calledWith(client.innerApiCalls.listCaches, request));
        });

        it('uses async iteration with listCaches without error', async () => {
            const client = new webcacheModule.v1alpha1.WebCacheClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.animeshon.webcache.v1alpha1.ListCachesRequest()
            );
            const expectedResponse = [
              generateSampleMessage(new protos.animeshon.webcache.v1alpha1.Cache()),
              generateSampleMessage(new protos.animeshon.webcache.v1alpha1.Cache()),
              generateSampleMessage(new protos.animeshon.webcache.v1alpha1.Cache()),
            ];
            client.descriptors.page.listCaches.asyncIterate = stubAsyncIterationCall(expectedResponse);
            const responses: protos.animeshon.webcache.v1alpha1.ICache[] = [];
            const iterable = client.listCachesAsync(request);
            for await (const resource of iterable) {
                responses.push(resource!);
            }
            assert.deepStrictEqual(responses, expectedResponse);
            assert.deepStrictEqual(
                (client.descriptors.page.listCaches.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
        });

        it('uses async iteration with listCaches with error', async () => {
            const client = new webcacheModule.v1alpha1.WebCacheClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.animeshon.webcache.v1alpha1.ListCachesRequest()
            );
            const expectedError = new Error('expected');
            client.descriptors.page.listCaches.asyncIterate = stubAsyncIterationCall(undefined, expectedError);
            const iterable = client.listCachesAsync(request);
            await assert.rejects(async () => {
                const responses: protos.animeshon.webcache.v1alpha1.ICache[] = [];
                for await (const resource of iterable) {
                    responses.push(resource!);
                }
            });
            assert.deepStrictEqual(
                (client.descriptors.page.listCaches.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
        });
    });
});
