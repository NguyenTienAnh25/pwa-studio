const { Targetables } = require('@magento/pwa-buildpack');
module.exports = targets => {
    const targetables = Targetables.using(targets);
    const peregrineTargets = targets.of('@magento/peregrine');
    const talonsTarget = peregrineTargets.talons;
    targets.of('@magento/venia-ui').routes.tap(routes => {
        routes.push({
            name: 'My Page',
            pattern: '/myblogs.html/:post?',
            path: require.resolve('./src/Page/index.js')
        });
        return routes;
    });
    targets.of('@magento/venia-ui').routes.tap(routes => {
        routes.push({
            name: 'My page 1',
            pattern: '/myblogs/test.html',
            path: require.resolve('./src/Page/index_2.js')
        });
        return routes;
    });
    targets.of('@magento/venia-ui').routes.tap(routes => {
        routes.push({
            name: 'My page 2',
            pattern: '/myblogs/test1.html',
            path: require.resolve('./src/Page/index_3.js')
        });
        return routes;
    });
    targets.of('@magento/venia-ui').routes.tap(routes => {
        routes.push({
            name: 'My page 3',
            pattern: '/myblogs/test2.html',
            path: require.resolve('./src/Page/index.js')
        });
        return routes;
    });
    targets.of('@magento/venia-ui').routes.tap(routes => {
        routes.push({
            name: 'My page 3',
            pattern: '/myblogs/test3.html',
            path: require.resolve('./src/Page/index_2.js')
        });
        return routes;
    });
    targets.of('@magento/venia-ui').routes.tap(routes => {
        routes.push({
            name: 'Call Api',
            pattern: '/myblogs/test4.html',
            path: require.resolve('./src/CallAPI/apidemo.js')
        });
        return routes;
    });
    talonsTarget.tap(talonWrapperConfig => {
        talonWrapperConfig.MegaMenu.useMegaMenu.wrapWith(
            'src/@lib/navbarhomePage/homePage.js'
        );
    });
    targetables.setSpecialFeatures('esModules', 'cssModules');
};
