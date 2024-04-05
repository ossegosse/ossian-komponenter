import Tabs from "../tabs/Tabs";


const ImageTabs = () => {
  const tabs = [
    { label: 'Flik 1', content: <img src="https://rb.gy/mi13km" />, },
    { label: 'Flik 2', content: <img src="https://rb.gy/fu31fh" /> },
    { label: 'Flik 3', content: <img src="https://rb.gy/2bovfl" /> },
  ];

  return (
    <div>
      <h1>Tabs</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default ImageTabs;