module.exports = targets => {
    const { Targetables } = require('@magento/pwa-buildpack');

    const targetables = Targetables.using(targets);
    // Create a React component targetable linked to the productFullDetail.js file
    const MainComponent = targetables.reactComponent(
        '@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.js'
    );
    targetables.setSpecialFeatures('esModules', 'cssModules');
    const Test = MainComponent.addImport(
        "import Test2 from 'src/@lib/test2/test2.js'"
    );
    MainComponent.surroundJSX('FormError', `<${Test}/>`);
};
