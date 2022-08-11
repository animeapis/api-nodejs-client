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
import * as graphModule from '../src';

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

describe('v1alpha1.GraphClient', () => {
    it('has servicePath', () => {
        const servicePath = graphModule.v1alpha1.GraphClient.servicePath;
        assert(servicePath);
    });

    it('has apiEndpoint', () => {
        const apiEndpoint = graphModule.v1alpha1.GraphClient.apiEndpoint;
        assert(apiEndpoint);
    });

    it('has port', () => {
        const port = graphModule.v1alpha1.GraphClient.port;
        assert(port);
        assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
        const client = new graphModule.v1alpha1.GraphClient();
        assert(client);
    });

    it('should create a client with gRPC fallback', () => {
        const client = new graphModule.v1alpha1.GraphClient({
            fallback: true,
        });
        assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
        const client = new graphModule.v1alpha1.GraphClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        assert.strictEqual(client.graphStub, undefined);
        await client.initialize();
        assert(client.graphStub);
    });

    it('has close method for the initialized client', done => {
        const client = new graphModule.v1alpha1.GraphClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.initialize();
        assert(client.graphStub);
        client.close().then(() => {
            done();
        });
    });

    it('has close method for the non-initialized client', done => {
        const client = new graphModule.v1alpha1.GraphClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        assert.strictEqual(client.graphStub, undefined);
        client.close().then(() => {
            done();
        });
    });

    it('has getProjectId method', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new graphModule.v1alpha1.GraphClient({
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
        const client = new graphModule.v1alpha1.GraphClient({
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

    describe('migrateGraph', () => {
        it('invokes migrateGraph without error', async () => {
            const client = new graphModule.v1alpha1.GraphClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.graph.v1alpha1.MigrateGraphRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.protobuf.Empty());
            client.innerApiCalls.migrateGraph = stubSimpleCall(expectedResponse);
            const [response] = await client.migrateGraph(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.migrateGraph as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes migrateGraph without error using callback', async () => {
            const client = new graphModule.v1alpha1.GraphClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.graph.v1alpha1.MigrateGraphRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.protobuf.Empty());
            client.innerApiCalls.migrateGraph = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.migrateGraph(
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
            assert((client.innerApiCalls.migrateGraph as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes migrateGraph with error', async () => {
            const client = new graphModule.v1alpha1.GraphClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.graph.v1alpha1.MigrateGraphRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedError = new Error('expected');
            client.innerApiCalls.migrateGraph = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.migrateGraph(request), expectedError);
            assert((client.innerApiCalls.migrateGraph as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes migrateGraph with closed client', async () => {
            const client = new graphModule.v1alpha1.GraphClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.graph.v1alpha1.MigrateGraphRequest());
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.migrateGraph(request), expectedError);
        });
    });

    describe('deleteGraph', () => {
        it('invokes deleteGraph without error', async () => {
            const client = new graphModule.v1alpha1.GraphClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.graph.v1alpha1.DeleteGraphRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.protobuf.Empty());
            client.innerApiCalls.deleteGraph = stubSimpleCall(expectedResponse);
            const [response] = await client.deleteGraph(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.deleteGraph as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes deleteGraph without error using callback', async () => {
            const client = new graphModule.v1alpha1.GraphClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.graph.v1alpha1.DeleteGraphRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.protobuf.Empty());
            client.innerApiCalls.deleteGraph = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.deleteGraph(
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
            assert((client.innerApiCalls.deleteGraph as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes deleteGraph with error', async () => {
            const client = new graphModule.v1alpha1.GraphClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.graph.v1alpha1.DeleteGraphRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedError = new Error('expected');
            client.innerApiCalls.deleteGraph = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.deleteGraph(request), expectedError);
            assert((client.innerApiCalls.deleteGraph as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes deleteGraph with closed client', async () => {
            const client = new graphModule.v1alpha1.GraphClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.animeshon.graph.v1alpha1.DeleteGraphRequest());
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.deleteGraph(request), expectedError);
        });
    });
});
