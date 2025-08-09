const StaticFlowers = () => {
    return (
        <div className="w-full max-w-2xl flex justify-start items-center mt-8 mb-8 gap-8">
            {[...Array(12)].map((_, i) => (
                <img
                    key={i}
                    src="/Allium.webp"
                    alt="Purple flower"
                    className="object-contain"
                    style={{
                        width: '28px',
                        height: '32px',
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                    }}
                />
            ))}
        </div>
    );
};

export default StaticFlowers;