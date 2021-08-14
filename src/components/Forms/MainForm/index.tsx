interface MainFormProps {
  headline: string;
}

const MainForm: React.FC<MainFormProps> = ({ headline, children }) => {
  return (
    <div className="main__form">
      <div className="container">
        {headline && <h2>{headline}</h2>}
        {children}
      </div>
    </div>
  );
};

export default MainForm;
