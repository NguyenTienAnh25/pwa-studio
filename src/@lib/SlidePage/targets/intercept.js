module.exports = targets => {
    targets.of('@magento/venia-ui').routes.tap(routes => {
        routes.push({
            name: 'MyGreetingRoute',
            pattern: '/slide/:who?',
            path: require.resolve('../slidePage.js')
        });
        return routes;
    });
};
