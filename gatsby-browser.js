/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import Amplify, { Analytics } from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);
Analytics.record();