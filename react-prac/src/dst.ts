const dst = {
  Main: [
    {
      component: "Flex",
      attribute: [{ flexDirection: "column" }],
      children: [
        { component: "Header", attribute: [{ ratio: "100px" }] },
        {
          component: "Flex",
          attribute: [{ flexDirection: "row" }],
          children: [
            {
              component: "SideBar",
              attribute: [{ ratio: 20, max: "300px" }],
            },
          ],
        },
      ],
    },
  ],
};

export default dst;
