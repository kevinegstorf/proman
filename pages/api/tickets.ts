export default (_req: any, res: any) => {
  res.statusCode = 200;
  res.json({
    tickets: [
      {
        id: 1,
        title: "first issue",
        description: "",
        state: "pending",
        estimate: "",
        creator: "",
      },
    ],
  });
};
