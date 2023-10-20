import NewProjectDialog from "./NewProjectDialog";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("NewProjectDialog", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<NewProjectDialog />);
    }).not.toThrow();
  });
});
