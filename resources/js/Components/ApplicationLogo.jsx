const colors = {
    gray: "text-gray-900",
    red: "text-red-500",
    green: "text-green-500",
    blue: "text-blue-500",
    indigo: "text-indigo-500",
    purple: "text-purple-500",
    pink: "text-pink-500",
    white: "text-white",
};

const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-20 h-20",
};

export default function ApplicationLogo({
    displayName = false,
    color = "gray",
    size = "md",
    ...props
}) {
    return (
        <div className="flex items-center gap-3">
            <svg
                className={sizes[size]}
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1.74414 15L20.4941 5L39.2441 15L20.4941 25L1.74414 15Z"
                    stroke="#FF6636"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M29.8691 37.5V20L20.4941 15"
                    stroke="#FF6636"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M34.8691 17.3333V25.8522C34.8697 26.1219 34.7825 26.3844 34.6208 26.6002C33.5682 28.0008 29.1274 33.125 20.4941 33.125C11.8609 33.125 7.42011 28.0008 6.3675 26.6002C6.20579 26.3844 6.11863 26.1219 6.11914 25.8522V17.3333"
                    stroke="#FF6636"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            {displayName && (
                <h1 className={`text-3xl font-semibold ${colors[color]}`}>
                    E-tutor
                </h1>
            )}
        </div>
    );
}
