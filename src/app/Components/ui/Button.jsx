 

const Buttons = ({ 
    width = '12.5rem',      // Default 200px converted to rem
    height = '3.125rem',    // Default 50px converted to rem
    fontSize = '2rem',      // Default 32px converted to rem
    children,
    onClick = () => {},     // Default empty function
    className = '',
    ...props 
}) => {
    return (
        <button
            onClick={onClick}
            className={`
                bg-[rgba(252,182,7,1)]
                text-black 
                font-semibold 
                rounded-full
                border-none 
                cursor-pointer 
                transition-all 
                duration-200 
                hover:bg-yellow-500 
                active:transform 
                active:scale-95
                flex 
                items-center 
                justify-center
                ${className}
            `}
            style={{
                width: width,
                height: height,
                fontSize: fontSize,
                fontFamily: 'Archivo, sans-serif',
                fontWeight: 600,
                fontStyle: 'normal',
                lineHeight: '1.40625', // 45px/32px = 1.40625 ratio
                letterSpacing: '0.05em', // 5% letter spacing
                verticalAlign: 'middle'
            }}
            {...props}
        >
            {children}
        </button>
    );
};

export default Buttons;