const wrapUseMegaMenu = original => {
    return function useMegaMenu(props, ...restArgs) {
        const { megaMenuData, ...defaultReturnData } = original(
            props,
            ...restArgs
        );
        const newChildren = [
            ...megaMenuData.children,
            {
                __typename: 'CategoryTree',
                url_path: 'myblogs',
                id: 99,
                include_in_menu: 1,
                isActive: false,
                name: 'My Blogs',
                children: [],
                path: [99],
                position: 7,
                children: [
                    {
                        __typename: 'CategoryTree',
                        url_path: 'myblogs/test',
                        id: 98,
                        include_in_menu: 1,
                        isActive: false,
                        name: 'Test Sub Menu My Blog',
                        children: [],
                        path: [98, 99],
                        position: 1
                    },
                    {
                        __typename: 'CategoryTree',
                        url_path: 'myblogs/test1',
                        id: 98,
                        include_in_menu: 2,
                        isActive: false,
                        name: 'Page 2',
                        children: [],
                        path: [98, 99],
                        position: 1
                    },
                    {
                        __typename: 'CategoryTree',
                        url_path: 'myblogs/test4',
                        id: 98,
                        include_in_menu: 2,
                        isActive: false,
                        name: 'CALL API',
                        children: [],
                        path: [98, 99],
                        position: 1
                    },
                    {
                        __typename: 'CategoryTree',
                        url_path: 'myblogs/test2',
                        id: 98,
                        include_in_menu: 2,
                        isActive: false,
                        name: 'Page3',
                        children: [
                            {
                                __typename: 'CategoryTree',
                                url_path: 'myblogs/test3',
                                id: 98,
                                include_in_menu: 3,
                                isActive: false,
                                name: 'Page ....demo',
                                children: [],
                                path: [98, 99],
                                position: 1
                            }
                        ],
                        path: [98, 99],
                        position: 1
                    }
                ]
            }
        ];
        return {
            ...defaultReturnData,
            megaMenuData: {
                ...megaMenuData,
                children: newChildren
            }
        };
    };
};
export default wrapUseMegaMenu;
