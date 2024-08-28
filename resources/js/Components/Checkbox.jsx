export default function Checkbox({ className = "", ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                " border-gray-300 text-main-600 shadow-sm focus:ring-main-500 " +
                className
            }
        />
    );
}
