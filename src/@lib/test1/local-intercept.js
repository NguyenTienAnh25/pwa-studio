// module.exports = targets => {
//     targets.of('@magento/venia-ui').routes.tap(routes => {
//         routes.push({
//             name: 'MyGreetingRoute',
//             pattern: '/greeting/:who?',
//             path: require.resolve('../greetingPage.js')
//         });
//         return routes;
//     });
// };

const { Targetables } = require('@magento/pwa-buildpack');
module.exports = targets => {
    const targetables = Targetables.using(targets);
    const MainComponent = targetables.reactComponent(
        '@magento/venia-ui/lib/components/Header/header.js'
    );
    const Test = MainComponent.addImport(
        "import GreetingPage from 'src/@lib/test1/greetingPage.js'"
    );
    MainComponent.appendJSX('<Fragment></Fragment>', `<${Test}/>`);
};
