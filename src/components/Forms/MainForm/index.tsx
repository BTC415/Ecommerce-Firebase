interface MainFormProps {
  headline: string;
}
//main form component
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
