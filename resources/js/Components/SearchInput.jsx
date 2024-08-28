import { HiMagnifyingGlass } from "react-icons/hi2";

function SearchInput({ value, onChange, ...props }) {
    return (
        <div className="flex gap-3 items-center border border-gray-300 focus:border-main-500 focus:ring-main-500  px-3">
            <HiMagnifyingGlass className="text-xl" />
            <label htmlFor="searchInput" className="sr-only">
                What do you want to learn
            </label>
            <input
                type="text"
                id="searchInput"
                className="border-none focus:outline-none"
                placeholder="What do you want learn..."
                aria-label="What do you want to learn"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                {...props}
            />
        </div>
    );
}

export default SearchInput;
