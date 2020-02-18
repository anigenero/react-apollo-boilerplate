/**
 * Gets the environment. We use this as a function because webpack will superimpose
 * the JSON object over every "environment" instance in the code
 *
 * @returns {Configuration}
 * @private
 */
const _getEnvironment = (): Configuration => (configuration);

/**
 * Gets the Google Analytics ID
 */
export const getGoogleAnalyticsId = (): string => _getEnvironment().googleAnalyticsId;

/**
 * Returns the GraphQL endpoint
 * @returns {string}
 */
export const getGraphQLEndpoint = (): string => _getEnvironment().graphqlEndpoint;
