import { Connection, Transport } from '@opensearch-project/opensearch';
import * as AWS from 'aws-sdk';

export type Connector = {
  Connection: typeof Connection;
  Transport: typeof Transport;
};

export function ConnectorFactory(awsConfig: AWS.Config): Connector;

export default ConnectorFactory;
