export const Card = ({ className = "", ...props }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-md ${className}`} {...props} />
  );
};

export const CardContent = ({ className = "", ...props }) => {
  return (
    <div className={`px-6 pb-6 ${className}`} {...props} />
  );
};

export const CardHeader = ({ className = "", ...props }) => {
  return <div className={`p-6 ${className}`} {...props} />;
}

export const CardTitle = ({ className = "", ...props }) => {
  return <h3 className={`text-lg font-semibold ${className}`} {...props} />;
}