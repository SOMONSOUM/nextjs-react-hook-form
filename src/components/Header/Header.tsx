export const Header: React.FC<{ pageTitle?: string }> = ({ pageTitle }) => {
  return (
    <div>
      <h4>{pageTitle}</h4>
    </div>
  );
};
