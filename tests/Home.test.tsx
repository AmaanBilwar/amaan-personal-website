import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../app/page";

describe("Home Page", () => {
  it("renders the title from site.md", () => {
    render(<Home />);
    expect(screen.getByText("hi, im Amaan")).toBeInTheDocument();
  });

  it("renders the currently section label", () => {
    render(<Home />);
    expect(screen.getByText("currently")).toBeInTheDocument();
  });

  it("renders curated writing titles on the home page", () => {
    render(<Home />);
    expect(screen.getByText("life lately")).toBeInTheDocument();
  });
});
