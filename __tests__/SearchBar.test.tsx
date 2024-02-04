import SearchBar from "@/components/SearchBar";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

describe("SearchBar Component", () => {
    test("Renders correctly", () => {
        render(<SearchBar onSearch={jest.fn()} />)
        expect(screen.getByLabelText(/city/i)).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /search/i})).toBeInTheDocument();
    })
})